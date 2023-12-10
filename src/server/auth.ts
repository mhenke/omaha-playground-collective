import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type Profile,
} from "next-auth";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";
f;

// import SlackProvider from "next-auth/providers/slack";

import { env } from "~/env.mjs";
import { db } from "~/server/db";

type UserRole = "USER" | "ADMIN";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
import type { Provider } from "next-auth/providers";

export const authOptions: NextAuthOptions = {
  // debug: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      console.log("JWT Callback: ", token, user);
      if (user) token.role = user.role;
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
      role: token.role,
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      profile(profile: GithubProfile) {
        console.log("Profile GitHub: ", profile);

        let userRole: UserRole = "USER";
        if (profile?.email == "henke.mike@gmail") {
          userRole = "ADMIN";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),

    InstagramProvider({
      profile(profile: Profile) {
        console.log("Profile Instagram: ", profile);

        const userRole: UserRole = "USER";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: env.INSTAGRAM_CLIENT_ID,
      clientSecret: env.INSTAGRAM_CLIENT_SECRET,
    }),

    //  SlackProvider({
    //    clientId: env.SLACK_CLIENT_ID,
    //    clientSecret: env.SLACK_CLIENT_SECRET,
    //  }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ] as Provider[],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);

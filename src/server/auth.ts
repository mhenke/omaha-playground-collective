import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type Profile,
  type User,
} from "next-auth";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";
// import SlackProvider from "next-auth/providers/slack";

import { env } from "~/env.mjs";
import { db } from "~/server/db";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */

type UserRole = "admin" | "user" | null;
declare module "next-auth" {
  interface Session extends DefaultSession {
    role: UserRole;
    user: {
      id: string;
      // ...other properties
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
import type { Provider } from "next-auth/providers";
let userRole: UserRole = null;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // secret: process.env.NEXTAUTH_SECRET,
  // debug: true,
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      role: userRole,
      user: {
        ...session.user,
        id: token.id,
      },
    }),
    jwt: ({ token, user }) => ({
      ...token,
      user,
      role: userRole,
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      profile: (profile: GithubProfile) => {
        console.log("Profile GitHub: ", profile);

        userRole = profile?.email === "henke.mike@gmail.com" ? "admin" : "user";

        // Modify this part based on your User type and the properties you want to include
        const user: User & { role: UserRole } = {
          id: profile.id.toString(),
          name: profile.name ?? "",
          email: profile.email ?? "",
          image: profile.avatar_url ?? "",
          // Add other properties as needed
        };

        return user;
      },
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),

    InstagramProvider({
      profile(profile: Profile) {
        console.log("Profile Instagram: ", profile);

        userRole = "Instagram User";
        if (profile?.name == "henkemike") {
          userRole = "user";
        }

        return {
          ...profile,
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

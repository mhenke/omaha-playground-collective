import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type Profile,
} from "next-auth";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";
// import SlackProvider from "next-auth/providers/slack";

import { env } from "~/env.mjs";
import { db } from "~/server/db";

// Module augmentation for `next-auth` types
type UserRole = "ADMIN" | "USER" | null;

declare module "next-auth" {
  interface Session {
    role: UserRole;
    USER: {
      id: string;
      // ...other properties
    } & DefaultSession["USER"];
  }
}

// Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
import type { Provider } from "next-auth/providers";

// Session callback function
const sessionCallback = ({ session, token }) => {
  console.log("Session Callback - Token: ", token);

  return {
    ...session,
    role: token.role,
    USER: {
      ...session.USER,
      id: token.id,
    },
  };
};

// JWT callback function
const jwtCallback = ({ token, user }) => {
  console.log("JWT Callback - Token: ", token);

  if (user) {
    token.role = user?.email === "henke.mike@gmail.com" ? "ADMIN" : "USER";
  }
  return {
    ...token,
    user,
    role: token.role,
  };
};

// Profile callback function for GitHub provider
const githubProfileCallback = (profile: GithubProfile) => {
  console.log("Profile GitHub: ", profile);
  const userRole: UserRole =
    profile?.email === "henke.mike@gmail.com" ? "ADMIN" : "USER";
  return {
    id: profile.id.toString(),
    name: profile.name,
    email: profile.email,
    image: profile.avatar_url,
    role: userRole,
  };
};

// Profile callback function for Instagram provider
const instagramProfileCallback = (profile: Profile) => {
  console.log("Profile Instagram: ", profile);

  const userRole: UserRole = profile?.name === "henkemike" ? "USER" : "USER";
  return {
    ...profile,
    role: userRole,
  };
};

// Auth options configuration
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // secret: process.env.NEXTAUTH_SECRET,
  // debug: true,
  callbacks: {
    session: sessionCallback,
    jwt: jwtCallback,
  },
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      profile: githubProfileCallback,
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),

    InstagramProvider({
      profile: instagramProfileCallback,
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
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the `refresh_token_expires_in` field to the Account model.
     * Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ] as Provider[],
};

// Wrapper for `getServerSession`
export const getServerAuthSession = () => getServerSession(authOptions);

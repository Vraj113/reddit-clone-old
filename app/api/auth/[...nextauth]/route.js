import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prisma";
import jwt from "jsonwebtoken"; // Import jsonwebtoken

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  adapter: PrismaAdapter(prisma),

  // Enable JWT
  session: {
    strategy: "jwt", // Important to specify the strategy as "jwt" to use JWT for session management
  },

  callbacks: {
    async session({ session, token, user }) {
      // Add token data to the session
      if (token) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
      }
      return session;
    },

    // async jwt({ token, user, account, profile, isNewUser }) {
    //   console.log(user);
    //   let newUser = await prisma.user.findFirst({
    //     where: {
    //       id: user.id,
    //     },
    //   });

    //   if (account) {
    //     token.accessToken = account.access_token; // Store access token
    //     token.id = user?.id; // Store user ID in token
    //     token.username = newUser.username;
    //   }
    //   return token;
    // },
  },

  jwt: {
    async encode({ secret, token }) {
      // Encode JWT using jsonwebtoken
      return jwt.sign(token, secret, {
        algorithm: "HS256",
      });
    },
    async decode({ secret, token }) {
      // Decode JWT using jsonwebtoken
      return jwt.verify(token, secret, {
        algorithms: ["HS256"],
      });
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

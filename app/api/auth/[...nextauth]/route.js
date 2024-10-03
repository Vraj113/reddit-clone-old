import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prisma";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  adapter: PrismaAdapter(prisma),
  callbacks: {
    // async signIn({ user }) {
    //   console.log(user);
    //   const existingUser = await prisma.user.findUnique({
    //     where: { id: user.id },
    //   });

    //   if (!existingUser) {
    //     //code to add

    //     // If user doesn't exist, create a new user
    //     if (!existingUser) {
    //       // Assuming you want to create a username from the user's name
    //       const username = user.name.split(" ").join("").toLowerCase(); // Create a simple username

    //       await prisma.user.create({
    //         data: {
    //           id: user.id, // Ensure the user ID is passed from Google
    //           name: user.name,
    //           email: user.email,
    //           image: user.image,
    //           username: username, // Add the username field
    //         },
    //       });
    //     }
    //   }

    //   return true; // Allow sign-in
    // },

    async session({ session, user }) {
      // Add user.id to the session object
      session.user.id = user.id;
      return session;
    },
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import connectDB from '@/db/connectDB';
import User from '@/models/User';

const providers = [];

if (process.env.NEXTAUTH_URL === "https://buy-me-sting.vercel.app") {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  );
}

export const authoptions = NextAuth({
  providers,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "github") {
        await connectDB();
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
        return true;
      }
      return false;
    },

    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  }
});

export { authoptions as GET, authoptions as POST }

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { db } from "@/db"
import { users, accounts } from "@/db/schema"
import { eq } from "drizzle-orm"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email || !account) return false;

      // Check if user already exists in our Postgres DB
      const existingUser = await db.select().from(users).where(eq(users.email, user.email)).limit(1);

      if (existingUser.length === 0) {
        // Create new user profile
        const newUser = await db.insert(users).values({
          username: user.name || user.email.split('@')[0],
          email: user.email,
        }).returning({ id: users.id });

        // Link the Google account
        await db.insert(accounts).values({
          user_id: newUser[0].id,
          provider: account.provider,
          provider_id: account.providerAccountId,
        });
      }
      return true;
    },
  },
})
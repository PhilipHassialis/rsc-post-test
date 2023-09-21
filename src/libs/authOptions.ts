import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username === "jsmith" &&
          credentials?.password === "password"
        ) {
          const user = { id: 1, name: "J Smith", email: "jsmith@smith.org" };
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
};

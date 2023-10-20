import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers"
import dotenv from "dotenv";

dotenv.config();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.GOOGLE_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter email" },
        password: { label: "Password", type: "password", placeholder: "Enter password" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ] as Provider[],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30*24*60*60, //30 days
  },
  jwt: {
    encryption: true
  },
}

export default NextAuth(authOptions)
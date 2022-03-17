import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
import GitlabProvider from "next-auth/providers/gitlab"
import OsuProvider from "next-auth/providers/osu"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        GitlabProvider({
            clientId: process.env.GITLAB_CLIENT_ID,
            clientSecret: process.env.GITLAB_CLIENT_SECRET,
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),

        OsuProvider({
            clientId: process.env.OSU_CLIENT_ID,
            clientSecret: process.env.OSU_CLIENT_SECRET,
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    database: process.env.DATABASE_URL,
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session({ session, user, id }) {
            session.user = user
            session.id = id
            return session
        },
    },
})

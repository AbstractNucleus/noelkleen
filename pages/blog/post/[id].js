import prisma from "../../../lib/prisma"

export default function Post({ post }) {
    if (post) {
        return (
            <>
                <textarea
                    className="h-14 w-full resize-none bg-zinc-100 p-3 text-xl"
                    defaultValue={post.title}
                />
                <div className="h-screen">
                    <textarea
                        className="h-1/2 w-full resize-none bg-zinc-100 p-3 hover:resize-y"
                        defaultValue={post.content}
                    />
                </div>
                <div className="w-full">
                    <p className="float-left text-zinc-400">{post.createdAt}</p>
                    <p className="float-right text-zinc-400">
                        {post.author.name}
                    </p>
                </div>
            </>
        )
    }
    return <>This post does not exist</>
}

export async function getStaticPaths() {
    const posts = await prisma.post.findMany()
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    var post = await prisma.post.findMany({ where: { id: params.id } })
    const author_obj = await prisma.user.findMany({
        where: { id: post[0].authorId },
    })
    const author = { author: author_obj[0] }
    post = Object.assign(post[0], author)
    post.createdAt = post.createdAt.toDateString()
    post.updatedAt = post.updatedAt.toDateString()
    return { props: { post } }
}

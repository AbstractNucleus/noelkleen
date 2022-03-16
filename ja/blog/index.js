import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany();
  const posts_with_author = [];

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let author_obj = await prisma.user.findMany({
      where: { id: post.authorId },
    });
    let author = { author: author_obj[0] };
    let new_post = Object.assign(post, author);
    post.createdAt = post.createdAt.toDateString();
    post.updatedAt = post.updatedAt.toDateString();
    posts_with_author.push(new_post);
  }

  return {
    props: {
      initialPosts: posts_with_author,
    },
  };
}

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Blog({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <>
      <h1 className="text-3xl text-[#BEF264]">Blog</h1>
      <div className="flex-col">
        {posts.map((post) => (
          <Link
            href="/blog/post/[id]"
            as={"/blog/post/" + post.id}
            key={post.id}
            passHref
          >
            <div className="px-10 pb-10 pt-3 hover:bg-zinc-100">
              <h1 className="text-xl">{post.title}</h1>
              <p>{post.content}</p>
              <p className="float-left text-zinc-400">{post.createdAt}</p>
              <p className="float-right text-zinc-400">{post.author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

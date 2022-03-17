import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default function Post({ post }) {
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
        <p className="float-right text-zinc-400">{post.author.name}</p>
      </div>

    </>
  );
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let post = await prisma.post.findMany({ where: { id: params.id } });
  let author_obj = await prisma.user.findMany({
    where: { id: post[0].authorId },
  });
  let author = { author: author_obj[0] };
  post = Object.assign(post[0], author);
  post.createdAt = post.createdAt.toDateString();
  post.updatedAt = post.updatedAt.toDateString();
  return { props: { post } };
}

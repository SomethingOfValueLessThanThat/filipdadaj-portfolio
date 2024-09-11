import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params);

  return (
    <>
      <p className="text-neutral-500 dark:text-neutral-400">
        {props.frontMatter.date}
      </p>
      <h1 className="font-bold text-2xl text-pretty mb-2">
        {props.frontMatter.title}
      </h1>
      <article
        className="
      lg:prose-xl
      "
      >
        <MDXRemote source={props.content} />
      </article>
    </>
  );
}

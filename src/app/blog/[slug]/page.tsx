import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSyntaxHighlighter } from "@/components/layout/theme-syntax-highlighter";

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

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <ThemeSyntaxHighlighter language={match[1]}>
        {String(children).replace(/\n$/, "")}
      </ThemeSyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  Button,
  Link,
};

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params);
  return (
    <>
      <p className="text-neutral-500 dark:text-neutral-400">
        {props.frontMatter.date}
      </p>
      <h1 className="font-bold text-2xl text-pretty mt-2">
        {props.frontMatter.title}
      </h1>
      <article
        className="
      [&>h2]:font-bold [&>h2]:text-lg [&>h2]:text-pretty [&>h2]:mt-8
      [&>p]:leading-relaxed [&>p]:text-neutral-500 [&>p]:dark:text-neutral-400 [&>p]:mt-2
      [&>ol]:mt-2 [&>ol]:space-y-1
      [&>ul]:mt-2 [&>ul]:space-y-1
      "
      >
        <MDXRemote source={props.content} components={components} />
      </article>
    </>
  );
}

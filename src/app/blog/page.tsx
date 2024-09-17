// Nextjs
import Link from "next/link";

// Blog
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Icons
import { ChevronRight } from "lucide-react";

export default function BlogIndex() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        intro: data.intro,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h2 className="font-bold text-xl text-pretty">
        Exploring topics in software design
      </h2>
      <p className="text-pretty mt-2">
        Here, you&#39;ll find my in-depth reflections on programming, product
        design, and other related subjects, organized chronologically.
      </p>

      <ul className="mt-10 space-y-6">
        {posts.map((post) => (
          <>
            <li key={post.slug} className="grid sm:flex gap-2 sm:gap-12">
              <p className="text-xs sm:mt-5">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="w-full space-y-1 sm:p-4 rounded-lg sm:hover:bg-neutral-50 sm:dark:hover:bg-neutral-900"
              >
                <h4 className="text-base font-bold">{post.title}</h4>
                <h5 className="text-xs text-neutral-500 dark:text-neutral-400 text-pretty">
                  {post.intro}
                </h5>
                <p className="flex items-center text-blue-500 text-xs">
                  Read more <ChevronRight size={14} />
                </p>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

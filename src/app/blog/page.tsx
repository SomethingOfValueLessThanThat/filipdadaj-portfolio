import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h3 className="font-bold text-xl text-pretty">
        Software I use, gadgets I love, and other things I can recommend.
      </h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

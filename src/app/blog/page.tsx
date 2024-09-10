import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="w-full max-w-7xl mx-auto pt-24 px-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-4xl mb-16 tracking-tighter text-center">
          MY BLOG
        </h1>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                href={`/blog/${post.slug}`}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.metadata.headerImage || "/images/wagan.jpg"}
                    alt={post.metadata.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-semibold tracking-tight mb-2">
                    {post.metadata.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.metadata.summary}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}

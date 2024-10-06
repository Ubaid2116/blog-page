import BlogContent from "@/components/blog-content";
import Hero from "@/components/hero";
import { client } from "@/lib/create-client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);
  console.log(posts)
  return (
    <main>
      <Hero />
      < BlogContent posts={posts} />
    </main>
  );
}

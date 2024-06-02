import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./components/lib/interface";
import { client, urlFor } from "./components/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const currentYear = new Date().getFullYear();

async function getData() {
  const query = `
   *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
      "currentSlug": slug.current,
      titleImage,
      _createdAt,
  }`;

  const data = await client.fetch(query, {}, {next: {revalidate: 30}});
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] =  await getData();
  return (
    <div className="mx-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-200">
      
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-12">
      {data.map((post, idx) => (
        <Card className="w-[400px] mx-auto flex flex-col lg:justify-between border-red-600 rounded-lg shadow-2xl" key={idx}>
        
        <Image
        src={urlFor(post.titleImage).url()}
        alt='image'
        width={400}
        height={400}
        className="rounded-lg object-cover object-center hover:scale-95 cursor-pointer transition-transform duration-400 ease-in-out"/>

  
        <CardContent className="mt-5">
          <p className="text-base font-medium leading-6 text-red-500 px-2">
            {new Date(post._createdAt).toISOString().split("T")[0]}
          </p>
          <h3 className="text-xl line-clamp-2 font-extrabold">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-700 font-bold dark:text-gray-300">{post.smallDescription}</p>
          <Button className="mt-[16px] font-medium bg-red-600  py-[14px] px-8 text-white rounded-[4px]">
          <Link href={`/blog/${post.currentSlug}`}>Read more</Link>
          </Button>
        </CardContent>
        </Card>
      ))}
    </div>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer mt-2">
        <div className="flex items-center justify-center">
        <Image
        className="h-10 w-10 rounded-full filter hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
        width={10}
        height={10}
        src="https://www.svgrepo.com/show/272043/bridges-road.svg" alt="page"/>
        </div>
        </footer>
        </Link>

      <section className="flex justify-center items-center max-w-7xl rounded-lg text-black-700 pt-10">
      <div className="font-bold">&copy; {currentYear} Structural Eng LLC. ALL RIGHTS RESERVED</div>
      </section>
    </div>
  );
}

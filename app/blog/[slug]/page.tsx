import Link from "next/link";
import { fullBlog } from "@/app/components/lib/interface";
import { client, urlFor } from "@/app/components/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";


export const revalidate = 60;

const currentYear = new Date().getFullYear();

async function getData(slug: string){
    const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
        "currentSlug": slug.current,
        title,
        content, 
        titleImage
    }[0]
    `;
const data = await client.fetch(query, {}, {next: {revalidate: 30}});
return data;

}

export default async function BlogArticle({params}: {params: {slug:string}}) {
   
    const data: fullBlog  = await getData(params.slug)
    return(
        <div> 
        <div className="flex flex-col justify-center items-center mt-2 max-w-7xl mx-auto px-2">
            <h1 className="mt-2" id='hero'>
            <span className="mt-2 border-red-700 mb-1 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image 
            src={urlFor(data.titleImage).url()}
            width={500}
            height={500}
            alt="titleImage"
            priority
            className="rounded-lg mt-6 border object-center border-red-700 
            hover:scale-95 transition-transform duration-500 ease-in-out"/>
            <div className="mt-16 mb-6 prose prose-blue prose-lg dark:prose-invert prose-headings:underline 
            prose-li:marker:text-primary ">
            <PortableText value={data.content}/>
            </div>
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

        <section className="flex justify-center items-center max-w-7xl rounded-lg text-black-700 mt-8">
        <div className="font-bold">&copy; {currentYear} Structural Eng LLC. ALL RIGHTS RESERVED</div>
        </section>
        </div>
    )
}

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
const data = await client.fetch(query)
return data;

}

export default async function BlogArticle({params}: {params: {slug:string}}) {
    const data: fullBlog  = await getData(params.slug)
    return(
        <div> 
        <div className="mt-2 max-w-7xl mx-auto">
            <h1 className="mt-2 ">
            <span className="mt-2 border-red-700 mb-1 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image 
            src={urlFor(data.titleImage).url()}
            width={500}
            height={500}
            alt="titleImage"
            priority
            className="rounded-lg mt-6 border object-center"/>
            <div className="mt-16 mb-6 prose prose-blue prose-lg dark:prose-invert prose-headings:underline 
            prose-li:marker:text-primary">
            <PortableText value={data.content}/>
            </div>
        </div>
        <section className="flex justify-center items-center max-w-7xl rounded-lg text-black-700">
        <div className="font-bold">&copy; {currentYear} Structural Eng ALL RIGHTS RESERVED</div>
        </section>
        </div>
    )
}
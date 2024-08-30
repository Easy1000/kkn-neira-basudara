'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';

export default function NewsDetail() {
  const [article, setArticle] = useState(null);
  const [articleBody, setArticleBody] = useState([]); 
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      async function fetchArticle() {
        try {
          const response = await fetch(`/api/article/${id}`);
          const data = await response.json();
          setArticle(data.article);
          setArticleBody(data.articleBody);
        } catch (error) {
          console.error("Failed to fetch article:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchArticle();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div>
      <Navbar />
      <div>
        <div className='px-8 flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h1 className='font-reikna text-6xl text-c-green lg:text-white lg:pr-12 flex justify-center'>Neira&apos;s News</h1>
            <p className='capitalize text-c-green flex justify-center -translate-y-2 font-libre text-sm'>{article.category}</p>
          </div>
          <Image src={article.thumbnail} alt={article.thumbnailAlt} width={450} height={300} className='mx-auto w-full h-44'/>
          <h2 className='font-manjari text-2xl text-center px-2 leading-tight font-bold mt-2'>{article.judul}</h2>
          <p className='font-libre text-xs text-[#C0C0C0] text-center'>{article.deskripsi}</p>
            <div className='flex flex-col text-sm text-[#F3F3F3]'>
              <p className='flex justify-center font-libre'>Oleh {article.author}</p>
              <p className='flex justify-center font-libre pb-4'>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <hr className='border-[#4C7C7F] border-1'/>

        </div>

      </div>
      <ArticleBody articleBody={articleBody}/>
    
      <Footer />
    </div>

  );
};

export function ArticleBody({ articleBody }){
  return (
    <div className="article-content p-4 pt-12">
      {articleBody.map((content) => {
        if (content.paragraph) {
          return (
            <p key={content.id} className="mb-4 text-justify font-libre">
              {content.paragraph}
            </p>
          );
        } else if (content.accessories) {
          return (
            <div key={content.id} className="mb-8">
              
              <Image 
                src={content.accessories}
                title={content.caption}
                alt={content.caption}
                className="mb-2 w-full h-44 object-cover"
                width={400} height={300}
              
              />
              <p className="text-left text-[10px] text-[#f3f3f3] italic font-libre">
                {content.caption}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};


function Breadcrumbs(){
  return(
    <div>

    </div>
  )
}
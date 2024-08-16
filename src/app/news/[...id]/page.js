'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
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
        <div className='px-8 pt-24 flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h1 className='font-reikna text-6xl text-c-green lg:text-white lg:pr-12 flex justify-center'>Neira&apos;s News</h1>
            <p className='capitalize text-c-green flex justify-center -translate-y-2 font-libre-franklin text-sm'>{article.category}</p>
          </div>
          <Image src={article.thumbnail} alt={article.thumbnailAlt} width={400} height={300} className='mx-auto'/>
          <h2 className='font-manjari text-2xl text-center px-12 leading-tight font-bold mt-4'>{article.judul}</h2>
          <p className='font-libre-franklin text-xs text-[#C0C0C0] text-center'>{article.deskripsi}</p>
            <div className='flex flex-col text-sm text-[#F3F3F3]'>
              <p className='flex justify-center font-libre-franklin'>Oleh {article.author}</p>
              <p className='flex justify-center font-libre-franklin'>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <hr className='border-[#4C7C7F] border-1'/>

        </div>

      </div>
      <ArticleBody articleBody={articleBody}/>
      {/* {article.paragraph && article.paragraph.length > 0 && (
        <div>
          {article.paragraph.map((para, index) => (
            <p key={index}>{para.paragraph}</p>
          ))}
        </div>
      )} */}
{/* 
      {article.accessories && article.accessories.length > 0 && (
        <div>
          {article.accessories.map((accessory, index) => (
            <div key={index}>
              <iframe
                src={accessory.accessories}
                width="100%"
                height="480"
                allow="autoplay"
                title={accessory.caption}
              ></iframe>
              <p>{accessory.caption}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export function ArticleBody({ articleBody }){
  return (
    <div className="article-content p-4">
      {articleBody.map((content) => {
        if (content.paragraph) {
          return (
            <p key={content.id} className="mb-4 text-justify font-libre-franklin">
              {content.paragraph}
            </p>
          );
        } else if (content.accessories) {
          return (
            <div key={content.id} className="mb-8">
              {/* iframe placeholder */}
              <iframe
                src={content.accessories}
                title={content.caption}
                className="mb-2 w-full h-64 rounded"
                allowFullScreen
              ></iframe>
              <p className="text-center text-sm text-gray-600 font-libre-franklin">
                {content.caption}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};
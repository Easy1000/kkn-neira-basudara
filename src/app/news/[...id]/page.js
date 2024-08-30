'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='px-8 flex flex-col gap-4 pt-28 lg:pt-36 max-w-5xl mx-auto'>
          {/* Breadcrumbs  */}
          <div className='flex items-center justify-center gap-6 text-[#D9D9D9]'>
            <Link href='/'><p className='hover:pointer'>Home</p> </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" fill="none" viewBox="0 0 6 13" className='lg:scale-150'>
              <path stroke="#629A9D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".579" d="m.422 12 5.21-5.5L.422 1" />
            </svg>
            <Link href='/news'><p className='hover:pointer'>News</p> </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" fill="none" viewBox="0 0 6 13" className='lg:scale-150' >
              <path stroke="#629A9D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".579" d="m.422 12 5.21-5.5L.422 1" />
            </svg>
            <Link href='/'><p className='hover:pointer capitalize'>{article.category}</p> </Link>
          </div>

          {/* Article Header */}
          <div className='flex flex-col'>
            <h1 className='font-reikna text-6xl text-c-green lg:text-white  flex justify-center'>Neira&apos;s News</h1>
            <p className='capitalize text-c-green flex justify-center -translate-y-2 font-libre text-sm'>{article.category}</p>
          </div>
          <Image src={article.thumbnail} alt={article.thumbnailAlt} width={450} height={300} className='mx-auto w-full max-h-96 object-cover' />
          <h2 className='font-manjari text-2xl text-center px-2 leading-tight font-bold mt-2 max-w-xl mx-auto'>{article.judul}</h2>
          <p className='font-libre text-xs text-[#C0C0C0] text-center max-w-md lg:max-w-lg mx-auto lg:text-sm'>{article.deskripsi}</p>
          <div className='flex flex-col text-sm text-[#F3F3F3] lg:text-base'>
            <p className='flex justify-center font-libre'>Oleh {article.author}</p>
            <p className='flex justify-center font-libre pb-4'>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>


        </div>

      </div>
      <ArticleBody articleBody={articleBody} />

    
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:pointer lg:py-20 py-8'>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 42 42" className='mx-auto'>
          <circle cx="21.424" cy="20.576" r="20.576" fill="url(#a)" transform="rotate(90 21.424 20.576)" />
          <path stroke="#1F3233" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.177" d="m31.172 24.926-9.53-9.53-9.53 9.53" />
          <defs>
            <linearGradient id="a" x1=".847" x2="42" y1="20.576" y2="20.576" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4C7C7F" />
          <stop offset="1" stop-color="#89E0E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

        <Footer />
        </div>

      );
};

export function ArticleBody({ articleBody }) {
  return (
    <div className=" p-4 pt-12 w-full mx-auto ">
      <hr className='border-[#4C7C7F] border-1 lg:max-w-6xl max-w-lg lg:mb-12 mx-auto ' />
      {articleBody.map((content) => {
        if (content.paragraph) {
          return (
            <p key={content.id} className="mb-4 font-libre max-w-xl mx-auto leading-loose">
              {content.paragraph}
            </p>
          );
        } else if (content.accessories) {
          return (
            <div key={content.id} className="my-8 max-w-3xl mx-auto">
              <Image
                src={content.accessories}
                title={content.caption}
                alt={content.caption}
                className="mb-2 w-full h-44 object-cover lg:h-[500px]"
                width={400} height={300}

              />
              <p className="text-left text-[10px] text-[#f3f3f3] italic font-libre lg:text-sm">
                {content.caption}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};


'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const NewsDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      async function fetchArticle() {
        try {
          const response = await fetch(`/api/article/${id}`);
          const data = await response.json();
          setArticle(data.article);
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
      <h1>{article.judul}</h1>
      <p>{article.deskripsi}</p>
      <img src={article.thumbnail} alt={article.thumbnailAlt} />

      {article.paragraph && article.paragraph.length > 0 && (
        <div>
          {article.paragraph.map((para, index) => (
            <p key={index}>{para.paragraph}</p>
          ))}
        </div>
      )}

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
      )}
    </div>
  );
};

export default NewsDetail;

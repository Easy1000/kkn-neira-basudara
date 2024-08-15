'use client'
import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/article');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article =>
    article.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%', fontSize: '16px' }}
      />

      {filteredArticles.length > 0 ? (
        filteredArticles.map(article => (
          <div key={article.id}>
            <h2>{article.judul}</h2>
            {/* Render other article details as needed */}
          </div>
        ))
      ) : (
        <p>No articles found matching &quot;{searchTerm}&quot;.</p>
      )}
    </div>
  );
}

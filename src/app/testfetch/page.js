// src/app/testfetch/page.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import VerticalNewsThumbnail from '../components/LandingPage/NewsHero/VerticalNewsThumbnail';

// Fetch data directly in the server component
export default async function TestFetch() {
  // Fetching articles from the API
  const res = await fetch('http://localhost:3000/api/article', {
    cache: 'no-store', // Ensure that the fetch is not cached
  });

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await res.json();
  const articles = data.articles;

  console.log(articles);

  return (
    <div>
      <Navbar />
      <div>
        {articles.map((article) => (
          <VerticalNewsThumbnail key={article.id} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

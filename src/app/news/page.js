'use client'
import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import VerticalNewsThumbnail from '../components/LandingPage/NewsHero/VerticalNewsThumbnail'
// import './newspage.styles.css'

const newsData = 
  [
      {
          "id": 1,
          "title":"Benteng Belgica Lorem Ipsum Lorem Lorem Ditemukan",
          "category":"nature",
          "date":"17 Agustus 2023",
          "subTitle":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          "imgPath":"/images/landing-page/news/news-thumbnail-1.png"
      },
      {
          "id": 2,
          "title":"Destinasi Wisata Lorem Ipsum Lorem Lorem Ditemukan",
          "category":"travel",
          "date":"17 Agustus 2023",
          "subTitle":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          "imgPath":"/images/landing-page/news/news-thumbnail-2.png"
      },
      {
          "id": 3,
          "title":"Upacara Adat Lorem Ipsum Lorem Lorem Ditemukan",
          "category":"culture",
          "date":"17 Agustus 2023",
          "subTitle":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          "imgPath":"/images/landing-page/news/news-thumbnail-3.png"
      }, 
      {
        "id": 4,
        "title":"Makanan Khas Lorem Ipsum Lorem Lorem Ditemukan",
        "category":"food",
        "date":"17 Agustus 2023",
        "subTitle":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        "imgPath":"/images/landing-page/news/news-thumbnail-3.png"
    },
    
    
  ]

// container for categories
const All = () => {
  
  return (
    <div className='flex flex-col gap-4 '>
      {
        newsData.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  )

 
};

const Travel = () => {
  const travelNewsData = newsData.filter(entry => entry.category === "travel");
  
  return (
    <div className='flex flex-col gap-4 '>
      {
        travelNewsData.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  );
};
const Food = () => {
  const foodNewsData = newsData.filter(entry => entry.category === "food");
  
  return (
    <div className='flex flex-col gap-4 '>
      {
        foodNewsData.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  );
};
const Culture = () => {
  const cultureNewsData = newsData.filter(entry => entry.category === "culture");
  
  return (
    <div className='flex flex-col gap-4 '>
      {
        cultureNewsData.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  );
};
const Nature = () => {
  const natureNewsData = newsData.filter(entry => entry.category === "nature");
  
  return (
    <div className='flex flex-col gap-4 '>
      {
        natureNewsData.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  );
};


const News = ({tabs}) => {
  const [category, setCategory] = useState(0)
  return (
    <div>
      {/* <Navbar /> */}

      <div className=''>
        <h1>Neira&apos;s News</h1>
        <p>Tellus tristique tellus vel et facilisis amet et id duis!</p>

        {/* searchbar */}
        <div>
          <input type="text" placeholder="Search news..." />
        </div>

        {/* tabs and news */}
        <Tabs 
          config={[
            {header:"All", component:<All />},
            {header:"Travel", component:<Travel />},
            {header:"Food", component:<Food />},
            {header:"Culture", component:<Culture />},
            {header:"Nature", component:<Nature />},

          ]}
        />

      </div>

      {/* <Footer /> */}

    </div>
  )
}

export default News


const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = useState(0);
  return(
    <div className='mx-5 my-auto max-w-2xl w-[95%]'>
      <div className='flex flex-wrap border-1 border-c-green border-b-2'>
        {
          config.map((entry, index) => (
            <div key={index}
              className={`relative py-5 h-20 leading-10 z-20 cursor-pointer ${activeTab === index ? `*:text-c-yellow border-2 box-shadow-[0px_1px_0px_#000] border-c-green` : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" fill="none" viewBox="0 0 28 29">
                <path stroke="#fff" stroke-miterlimit="22.926" stroke-width="1.346" d="M13.306 25.264 4.054 16.54c-.515-.486-.515-3.595 0-4.08l9.252-8.724c.515-.485.876-.485 1.39 0l9.252 8.723c.515.486.515 3.596 0 4.08l-9.252 8.725c-.515.485-.875.485-1.39 0Z" clip-rule="evenodd"/>
                <path stroke="#fff" stroke-miterlimit="22.926" stroke-width="1.346" d="m13.516 22.002-6.448-6.08c-.359-.338-.359-2.506 0-2.844l6.448-6.08c.359-.338.61-.338.97 0l6.447 6.08c.36.338.36 2.506 0 2.844l-6.448 6.08c-.359.339-.61.339-.969 0Z" clip-rule="evenodd"/>
                <path stroke="#fff" stroke-miterlimit="22.926" stroke-width="1.346" d="m13.725 18.74-3.645-3.436c-.203-.191-.203-1.417 0-1.608l3.645-3.436c.202-.192.345-.192.547 0l3.645 3.436c.203.191.203 1.417 0 1.608l-3.645 3.436c-.203.191-.345.191-.547 0Z" clip-rule="evenodd"/>
              </svg>
              <h3>
                {entry.header}
              </h3>
            </div>
          ))
        }
      </div>

      <div>
        {config[activeTab].component}
      </div>
    </div>
  )
}
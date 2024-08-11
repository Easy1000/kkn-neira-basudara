'use client'
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VerticalNewsThumbnail from '../components/LandingPage/NewsHero/VerticalNewsThumbnail';
// import newsData from '../components/LandingPage/NewsHero/newsdata.json';


// container for categories
const All = ({filteredNews}) => {
  return (
    <div className='flex flex-col gap-4 '>
      {
        filteredNews.map((entry, index) => (
          <VerticalNewsThumbnail 
            key={index}
            {...entry}
          />
        ))
      }
    </div>
  )
};

const Travel = ({filteredNews}) => {
  const travelNewsData = filteredNews.filter(entry => entry.category === "travel");
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

const Food = ({filteredNews}) => {
  const foodNewsData = filteredNews.filter(entry => entry.category === "food");
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

const Culture = ({filteredNews}) => {
  const cultureNewsData = filteredNews.filter(entry => entry.category === "culture");
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

const Nature = ({filteredNews}) => {
  const natureNewsData = filteredNews.filter(entry => entry.category === "nature");
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



const News = ({articles}) => {
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


  const filteredNews = articles.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className=''>
      <Navbar />
      {/* gradient background */}
      <div className='relative w-full overflow-x-clip'>
        <div className='absolute -z-20 lg:hidden -left-72 right-0 mx-auto w-96 -top-72 scale-[60%] md:scale-[200%]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="760" height="1801" fill="none" viewBox="0 0 760 1801">
          <g filter="url(#a)">
            <path fill="url(#b)" fill-opacity=".5" d="M364.314 1537.02c48.67 116.48 117.677 199.76 164.878 187.44 47.2-12.32 85.924-106.72 129.296-150.28 28.257-28.37 44.183-187.58-8.131-306.1-52.315-118.53-86.575-216.6-142.389-360.88-55.814-144.277-70.321-262.41-90.707-393.598C396.875 382.415 283.86 95.896 240.039 81.919c-43.82-13.977-75.976-2.948-94.158 28.823-18.183 31.772-86.737 270.155-66.855 404.669 19.882 134.513 178.508 473.268 180.347 545.829 1.839 72.56 44.104 330.17 104.941 475.78Z"/>
          </g>
          <defs>
            <linearGradient id="b" x1="207.154" x2="1045.24" y1="1573.74" y2="767.141" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAB874" stop-opacity=".51"/>
              <stop offset=".592" stop-color="#1F3233"/>
              <stop offset=".75" stop-color="#629A9D" stop-opacity=".4"/>
              <stop offset="1" stop-color="#223637"/>
            </linearGradient>
            <filter id="a" width="759.263" height="1799.71" x=".444" y=".963" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur result="effect1_foregroundBlur_485_353" stdDeviation="37.5"/>
            </filter>
          </defs>
          </svg>

        </div>

      </div>


      <div className='flex items-center flex-col gap-2 mx-4 pt-36 pb-40'>
        
        <div className='flex flex-col items-center gap-4 mb-11'>
          <div className='flex w-auto'>
            <h1 className='font-reikna text-7xl text-c-green lg:text-white lg:pr-12'>Neira's News</h1>
            <div className=' mt-8 hidden lg:flex ' >
              <input 
                className='w-[700px] backdrop-blur-lg border-2 border-c-green pl-4 focus:outline-none rounded-full bg-white/10 lg:-translate-y-4' 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
              {/* <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-1 top-1 w-4 h-4' width="13" height="13" fill="none" viewBox="0 0 13 13">
                <path fill="#5E9599" d="M8.994 7.915h-.568l-.202-.194A4.677 4.677 0 0 0 9.29 3.879c-.338-2-2.007-3.597-4.022-3.842a4.68 4.68 0 0 0-5.23 5.23C.282 7.282 1.879 8.951 3.879 9.29A4.676 4.676 0 0 0 7.72 8.224l.194.202v.568l3.058 3.058a.76.76 0 0 0 1.071 0 .76.76 0 0 0 0-1.072l-3.05-3.065Zm-4.317 0A3.233 3.233 0 0 1 1.44 4.677 3.233 3.233 0 0 1 4.677 1.44a3.233 3.233 0 0 1 3.238 3.237 3.233 3.233 0 0 1-3.238 3.238Z"/>
              </svg> */}

            </div>
          </div>
          <p className='font-libre-franklin text-sm -mt-8 lg:hidden'>Tellus tristique tellus vel et facilisis amet et id duis!</p>
          <div className='relative mt-8 lg:hidden' >
            <input 
              className='w-72 bg-transparent border-b-[2px] border-c-green pb-1 pl-2 focus:outline-none ' 
              type="text" placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
                />
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-1 top-1 w-4 h-4' width="13" height="13" fill="none" viewBox="0 0 13 13">
              <path fill="#5E9599" d="M8.994 7.915h-.568l-.202-.194A4.677 4.677 0 0 0 9.29 3.879c-.338-2-2.007-3.597-4.022-3.842a4.68 4.68 0 0 0-5.23 5.23C.282 7.282 1.879 8.951 3.879 9.29A4.676 4.676 0 0 0 7.72 8.224l.194.202v.568l3.058 3.058a.76.76 0 0 0 1.071 0 .76.76 0 0 0 0-1.072l-3.05-3.065Zm-4.317 0A3.233 3.233 0 0 1 1.44 4.677 3.233 3.233 0 0 1 4.677 1.44a3.233 3.233 0 0 1 3.238 3.237 3.233 3.233 0 0 1-3.238 3.238Z"/>
            </svg>

            
          </div>
        </div>

        
        <Tabs 
          config={[
            {header:"All", component:<All filteredNews={filteredNews}/> },
            {header:"Travel", component:<Travel filteredNews={filteredNews}/>},
            {header:"Food", component:<Food filteredNews={filteredNews}/>},
            {header:"Culture", component:<Culture filteredNews={filteredNews}/>},
            {header:"Nature", component:<Nature filteredNews={filteredNews}/>},

          ]}
        />

      </div>

      <Footer />

    </div>
  )
}

export default News


const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = useState(0);
  return(
    <div className='mx-5 my-auto xl:max-w-5xl lg:max-w-4xl lg:w-full w-[95%] lg:flex'>
      {/* tabs & outside padding */}
      <div className=' flex flex-wrap lg:flex-col lg:justify-start border-1 border-c-green justify-center gap-2'>
        {
          config.map((entry, index) => (
            <div key={index} className=''>
              {(entry.header === 'Travel') ?
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden w-7 h-7 mx-auto lg:mr-4" width="21" height="22" fill="none" viewBox="0 0 21 22">
                  <path fill="#fff" fill-rule="evenodd" d="M10.158 0c-2.54 0-3.95.733-3.95.733v2.934L4.217 5.823c-.335.363-.134.97.338 1.007a74.07 74.07 0 0 0 5.603.198c1.245 0 2.343-.026 3.273-.064h-.01a3.94 3.94 0 0 1 .06 1.671 3.82 3.82 0 0 1-.63 1.526 3.46 3.46 0 0 1-1.19 1.065c-.467.25-.982.381-1.503.381-.522 0-1.036-.13-1.504-.381a3.46 3.46 0 0 1-1.19-1.065 3.82 3.82 0 0 1-.63-1.526 3.962 3.962 0 0 1 .06-1.67 69.27 69.27 0 0 1-1.149-.056 5.285 5.285 0 0 0 .021 2.162c.156.71.456 1.373.88 1.94a4.593 4.593 0 0 0 1.565 1.34 4.23 4.23 0 0 0 1.947.478c.674 0 1.339-.163 1.946-.478a4.593 4.593 0 0 0 1.566-1.34c.424-.567.724-1.23.88-1.94.155-.71.163-1.449.02-2.162a58.92 58.92 0 0 0 1.19-.08c.472-.036.674-.643.34-1.006l-1.993-2.156V.733S12.697 0 10.157 0ZM7.337 4.173 5.93 5.696c1.09.059 2.518.11 4.228.11s3.138-.051 4.227-.11L12.98 4.173V1.6l-.17-.049c-.588-.161-1.483-.33-2.651-.33-1.168 0-2.063.169-2.651.33-.06.017-.117.033-.17.05v2.57Z" clip-rule="evenodd"/>
                  <path fill="#fff" fill-rule="evenodd" d="m10.32 13.47 3.69 1.19 3.165-2.332a.528.528 0 0 1 .581-.035c.09.052.167.13.22.225a.65.65 0 0 1 .08.315v3.056h-1.128v-1.9l-2.257 1.663v5.126c0 .47.163.898.431 1.222h-9.89a1.92 1.92 0 0 0 .43-1.222v-5.173l-2.257-1.63v1.914H2.257v-3.056c0-.11.028-.219.08-.314a.587.587 0 0 1 .218-.225.529.529 0 0 1 .58.03l3.213 2.321 3.646-1.175a.524.524 0 0 1 .302-.007l.005.002.018.005Zm.4 1.405 2.822.91v4.993h-2.821v-5.903Zm-3.949.91 2.821-.91v5.903H6.771v-4.994Z" clip-rule="evenodd"/>
                  <path fill="#fff" fill-rule="evenodd" d="M1.693 18.333a.543.543 0 0 0-.4.18.638.638 0 0 0-.164.431v1.834H2.82c.15 0 .294-.065.4-.18a.638.638 0 0 0 .165-.431v-1.223a.638.638 0 0 0-.166-.432.543.543 0 0 0-.399-.179H1.693ZM0 18.944c0-.486.178-.952.496-1.296a1.63 1.63 0 0 1 1.197-.537H2.82c.45 0 .88.193 1.197.537.318.344.496.81.496 1.296v1.223c0 .486-.178.952-.496 1.296A1.63 1.63 0 0 1 2.821 22H0v-3.056Zm18.621-.61c.15 0 .293.064.399.178.106.115.165.27.165.432v1.834h-1.692a.543.543 0 0 1-.4-.18.638.638 0 0 1-.165-.431v-1.223c0-.162.06-.317.165-.432a.543.543 0 0 1 .4-.179h1.128Zm1.693.61a1.91 1.91 0 0 0-.496-1.296 1.63 1.63 0 0 0-1.197-.537h-1.128c-.45 0-.88.193-1.197.537a1.91 1.91 0 0 0-.496 1.296v1.223c0 .486.178.952.495 1.296a1.63 1.63 0 0 0 1.197.537h2.822v-3.056Z" clip-rule="evenodd"/>
                </svg>
                :
                (entry.header === 'Food') ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden w-7 h-7 mx-auto lg:mr-4" width="18" height="22" fill="none" viewBox="0 0 18 22">
                  <path fill="#fff" d="M2.336 0C1.5 0 .738.595.541 1.505.32 2.522 0 4.266 0 5.893c0 .829.188 1.645.549 2.378.36.734.883 1.362 1.521 1.832.344.252.501.56.501.81a.837.837 0 0 1-.004.08 402.01 402.01 0 0 0-.395 3.727c-.17 1.672-.335 3.476-.335 4.137 0 .834.31 1.633.86 2.223.552.589 1.3.92 2.079.92.779 0 1.526-.331 2.078-.92.55-.59.86-1.39.86-2.223 0-.66-.166-2.465-.335-4.137-.17-1.7-.352-3.344-.395-3.729a.84.84 0 0 1-.004-.078c0-.25.157-.558.5-.81A5.012 5.012 0 0 0 9.002 8.27c.36-.733.55-1.55.549-2.378 0-1.627-.32-3.372-.54-4.388C8.812.595 8.05 0 7.214 0c-.437 0-.86.161-1.197.457A1.931 1.931 0 0 0 4.776 0c-.47 0-.9.17-1.243.457A1.807 1.807 0 0 0 2.336 0Zm4.46 2.02a.46.46 0 0 1 .123-.317.405.405 0 0 1 .296-.132c.19 0 .33.13.364.29.213.982.503 2.587.503 4.032 0 .574-.13 1.139-.38 1.647a3.47 3.47 0 0 1-1.054 1.268c-.58.427-1.138 1.157-1.138 2.106 0 .087.005.175.015.264.043.382.223 2.019.394 3.71.172 1.718.326 3.415.326 3.97 0 .416-.155.816-.43 1.11-.276.295-.65.46-1.04.46s-.763-.165-1.039-.46a1.629 1.629 0 0 1-.43-1.11c0-.555.154-2.252.326-3.97.17-1.691.352-3.328.394-3.71.01-.09.015-.178.015-.264 0-.949-.558-1.68-1.137-2.106A3.47 3.47 0 0 1 1.85 7.54a3.734 3.734 0 0 1-.38-1.647c0-1.446.289-3.05.502-4.032a.387.387 0 0 1 .134-.214.344.344 0 0 1 .23-.076c.111 0 .218.048.296.132a.464.464 0 0 1 .123.316v4.267c0 .208.078.408.215.555a.71.71 0 0 0 .52.23.711.711 0 0 0 .52-.23.814.814 0 0 0 .214-.555V2.16a.61.61 0 0 1 .162-.417.534.534 0 0 1 .39-.173c.146 0 .286.063.39.173a.61.61 0 0 1 .16.417v4.125c0 .208.078.408.216.555.138.148.324.23.52.23a.711.711 0 0 0 .519-.23.814.814 0 0 0 .215-.555V2.019Zm5.326 3.873c0-1.078.377-2.118 1.057-2.914a3.951 3.951 0 0 1 2.617-1.39v8.625c0 .22.04.714.093 1.303.055.61.13 1.381.209 2.194v.002c.208 2.13.433 4.465.433 5.144 0 .417-.155.817-.43 1.111-.276.295-.65.46-1.04.46s-.763-.165-1.039-.46a1.628 1.628 0 0 1-.43-1.11c0-.562.156-2.448.329-4.357.126-1.374.257-2.747.393-4.12l.01-.125a.836.836 0 0 0-.201-.582.737.737 0 0 0-.243-.182.694.694 0 0 0-.29-.063h-1.1a.356.356 0 0 1-.26-.115.408.408 0 0 1-.108-.278V5.893ZM16.163 0c-1.461 0-2.863.62-3.896 1.726-1.033 1.105-1.614 2.604-1.614 4.167v3.143c0 .52.194 1.02.538 1.389.345.368.812.575 1.299.575h.286c-.11 1.116-.215 2.232-.317 3.349-.169 1.862-.337 3.85-.337 4.508 0 .834.31 1.633.861 2.223.551.589 1.299.92 2.078.92.78 0 1.527-.331 2.078-.92.551-.59.861-1.39.861-2.223 0-.774-.233-3.169-.43-5.21l-.01-.096c-.072-.728-.14-1.456-.208-2.185a20.466 20.466 0 0 1-.087-1.152V.786A.814.814 0 0 0 17.05.23a.711.711 0 0 0-.52-.23h-.367Z"/>
                </svg>
              
                :
                (entry.header === 'Culture') ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden w-7 h-7 mx-auto lg:mr-4" width="28" height="29" fill="none" viewBox="0 0 28 29">
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="M13.306 25.264 4.054 16.54c-.515-.486-.515-3.595 0-4.08l9.252-8.724c.515-.485.876-.485 1.39 0l9.252 8.723c.515.486.515 3.596 0 4.08l-9.252 8.725c-.515.485-.875.485-1.39 0Z" clip-rule="evenodd"/>
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="m13.516 22.002-6.448-6.08c-.359-.338-.359-2.506 0-2.844l6.448-6.08c.359-.338.61-.338.97 0l6.447 6.08c.36.338.36 2.506 0 2.844l-6.448 6.08c-.359.339-.61.339-.969 0Z" clip-rule="evenodd"/>
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="m13.725 18.74-3.645-3.436c-.203-.191-.203-1.417 0-1.608l3.645-3.436c.202-.192.345-.192.547 0l3.645 3.436c.203.191.203 1.417 0 1.608l-3.645 3.436c-.203.191-.345.191-.547 0Z" clip-rule="evenodd"/>
                </svg>
                :
                (entry.header === 'Nature') ?
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden w-7 h-7 mx-auto lg:mr-4" width="20" height="23" fill="none" viewBox="0 0 20 23">
                  <path fill="#fff" d="M8.481 18.04H1.773c-.392 0-.684-.173-.877-.52-.193-.347-.175-.682.054-1.005l4.422-6.49h-.814a.944.944 0 0 1-.885-.524c-.191-.35-.168-.685.068-1.008L9.183.72c.104-.136.23-.24.377-.31a1.03 1.03 0 0 1 .443-.105 1.025 1.025 0 0 1 .813.416l5.443 7.772c.236.323.26.659.068 1.008s-.484.523-.877.523h-.8l4.4 6.491c.23.323.247.658.054 1.005-.193.347-.485.52-.877.52h-6.695v3.906a.9.9 0 0 1-.268.66.899.899 0 0 1-.662.269H9.458a.952.952 0 0 1-.695-.278.942.942 0 0 1-.282-.7V18.04Zm-5.56-1.57h5.444-2.594 8.458-2.574H17.1 2.922Zm0 0H17.1l-5.444-8.017h2.574L10 2.431 5.771 8.453h2.594L2.922 16.47Z"/>
                </svg>

                : 
                //all 
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden w-7 h-7 mx-auto lg:mr-4 " width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" styles="mask-type:alpha">
                    <path fill="#D9D9D9" d="M0 0h24v24H0z"/>
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#fff" d="M4.308 20.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 0 1-.525-1.283V5.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h15.384c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v13.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H4.308Zm0-1.5h15.384a.294.294 0 0 0 .212-.096.294.294 0 0 0 .096-.212V5.308a.294.294 0 0 0-.096-.212.294.294 0 0 0-.212-.096H4.308a.294.294 0 0 0-.212.096.294.294 0 0 0-.096.212v13.384c0 .077.032.148.096.212a.294.294 0 0 0 .212.096Zm2.077-2.385h11.23v-1.5H6.385v1.5Zm0-3.865h3.692V7.385H6.385v5.365Zm5.884 0h5.346v-1.5H12.27v1.5Zm0-3.866h5.346v-1.5H12.27v1.5Z"/>
                  </g>
                </svg>

              
              }

              
              <div key={index}
              // inner tabs
                className={`lg:flex lg:top-14 transition-transform duration-50 ease-in-out relative py-5 lg:py-4 lg:items-center lg:h-full px-2 lg:px-12 h-20 mt-2 leading-10 z-20 cursor-pointer mx-auto translate-y-[2px] border-[1px] lg:border-2  ${activeTab === index ? `*:text-c-yellow  rounded-t-lg border-c-green border-b-[#0F1112]  border-b-[3px] lg:border-b-c-green lg:border-r-black bg-gradient-to-b from-[#0F1112] to-[#0F1112]/50 lg:rounded-l-xl lg:rounded-r-none lg:translate-x-[3px] bg-[#0F1112]` : 'border-c-white h-4 pt-4 lg:h-auto  rounded-xl backdrop-blur-sm bg-white/15 lg:-translate-x-6'}`}
                onClick={() => setActiveTab(index)}
              >
                {(entry.header === 'Travel') ?
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block w-7 h-7 mx-auto" width="21" height="22" fill="none" viewBox="0 0 21 22">
                  <path fill="#fff" fill-rule="evenodd" d="M10.158 0c-2.54 0-3.95.733-3.95.733v2.934L4.217 5.823c-.335.363-.134.97.338 1.007a74.07 74.07 0 0 0 5.603.198c1.245 0 2.343-.026 3.273-.064h-.01a3.94 3.94 0 0 1 .06 1.671 3.82 3.82 0 0 1-.63 1.526 3.46 3.46 0 0 1-1.19 1.065c-.467.25-.982.381-1.503.381-.522 0-1.036-.13-1.504-.381a3.46 3.46 0 0 1-1.19-1.065 3.82 3.82 0 0 1-.63-1.526 3.962 3.962 0 0 1 .06-1.67 69.27 69.27 0 0 1-1.149-.056 5.285 5.285 0 0 0 .021 2.162c.156.71.456 1.373.88 1.94a4.593 4.593 0 0 0 1.565 1.34 4.23 4.23 0 0 0 1.947.478c.674 0 1.339-.163 1.946-.478a4.593 4.593 0 0 0 1.566-1.34c.424-.567.724-1.23.88-1.94.155-.71.163-1.449.02-2.162a58.92 58.92 0 0 0 1.19-.08c.472-.036.674-.643.34-1.006l-1.993-2.156V.733S12.697 0 10.157 0ZM7.337 4.173 5.93 5.696c1.09.059 2.518.11 4.228.11s3.138-.051 4.227-.11L12.98 4.173V1.6l-.17-.049c-.588-.161-1.483-.33-2.651-.33-1.168 0-2.063.169-2.651.33-.06.017-.117.033-.17.05v2.57Z" clip-rule="evenodd"/>
                  <path fill="#fff" fill-rule="evenodd" d="m10.32 13.47 3.69 1.19 3.165-2.332a.528.528 0 0 1 .581-.035c.09.052.167.13.22.225a.65.65 0 0 1 .08.315v3.056h-1.128v-1.9l-2.257 1.663v5.126c0 .47.163.898.431 1.222h-9.89a1.92 1.92 0 0 0 .43-1.222v-5.173l-2.257-1.63v1.914H2.257v-3.056c0-.11.028-.219.08-.314a.587.587 0 0 1 .218-.225.529.529 0 0 1 .58.03l3.213 2.321 3.646-1.175a.524.524 0 0 1 .302-.007l.005.002.018.005Zm.4 1.405 2.822.91v4.993h-2.821v-5.903Zm-3.949.91 2.821-.91v5.903H6.771v-4.994Z" clip-rule="evenodd"/>
                  <path fill="#fff" fill-rule="evenodd" d="M1.693 18.333a.543.543 0 0 0-.4.18.638.638 0 0 0-.164.431v1.834H2.82c.15 0 .294-.065.4-.18a.638.638 0 0 0 .165-.431v-1.223a.638.638 0 0 0-.166-.432.543.543 0 0 0-.399-.179H1.693ZM0 18.944c0-.486.178-.952.496-1.296a1.63 1.63 0 0 1 1.197-.537H2.82c.45 0 .88.193 1.197.537.318.344.496.81.496 1.296v1.223c0 .486-.178.952-.496 1.296A1.63 1.63 0 0 1 2.821 22H0v-3.056Zm18.621-.61c.15 0 .293.064.399.178.106.115.165.27.165.432v1.834h-1.692a.543.543 0 0 1-.4-.18.638.638 0 0 1-.165-.431v-1.223c0-.162.06-.317.165-.432a.543.543 0 0 1 .4-.179h1.128Zm1.693.61a1.91 1.91 0 0 0-.496-1.296 1.63 1.63 0 0 0-1.197-.537h-1.128c-.45 0-.88.193-1.197.537a1.91 1.91 0 0 0-.496 1.296v1.223c0 .486.178.952.495 1.296a1.63 1.63 0 0 0 1.197.537h2.822v-3.056Z" clip-rule="evenodd"/>
                </svg>
                :
                (entry.header === 'Food') ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block w-7 h-7 mx-auto" width="18" height="22" fill="none" viewBox="0 0 18 22">
                  <path fill="#fff" d="M2.336 0C1.5 0 .738.595.541 1.505.32 2.522 0 4.266 0 5.893c0 .829.188 1.645.549 2.378.36.734.883 1.362 1.521 1.832.344.252.501.56.501.81a.837.837 0 0 1-.004.08 402.01 402.01 0 0 0-.395 3.727c-.17 1.672-.335 3.476-.335 4.137 0 .834.31 1.633.86 2.223.552.589 1.3.92 2.079.92.779 0 1.526-.331 2.078-.92.55-.59.86-1.39.86-2.223 0-.66-.166-2.465-.335-4.137-.17-1.7-.352-3.344-.395-3.729a.84.84 0 0 1-.004-.078c0-.25.157-.558.5-.81A5.012 5.012 0 0 0 9.002 8.27c.36-.733.55-1.55.549-2.378 0-1.627-.32-3.372-.54-4.388C8.812.595 8.05 0 7.214 0c-.437 0-.86.161-1.197.457A1.931 1.931 0 0 0 4.776 0c-.47 0-.9.17-1.243.457A1.807 1.807 0 0 0 2.336 0Zm4.46 2.02a.46.46 0 0 1 .123-.317.405.405 0 0 1 .296-.132c.19 0 .33.13.364.29.213.982.503 2.587.503 4.032 0 .574-.13 1.139-.38 1.647a3.47 3.47 0 0 1-1.054 1.268c-.58.427-1.138 1.157-1.138 2.106 0 .087.005.175.015.264.043.382.223 2.019.394 3.71.172 1.718.326 3.415.326 3.97 0 .416-.155.816-.43 1.11-.276.295-.65.46-1.04.46s-.763-.165-1.039-.46a1.629 1.629 0 0 1-.43-1.11c0-.555.154-2.252.326-3.97.17-1.691.352-3.328.394-3.71.01-.09.015-.178.015-.264 0-.949-.558-1.68-1.137-2.106A3.47 3.47 0 0 1 1.85 7.54a3.734 3.734 0 0 1-.38-1.647c0-1.446.289-3.05.502-4.032a.387.387 0 0 1 .134-.214.344.344 0 0 1 .23-.076c.111 0 .218.048.296.132a.464.464 0 0 1 .123.316v4.267c0 .208.078.408.215.555a.71.71 0 0 0 .52.23.711.711 0 0 0 .52-.23.814.814 0 0 0 .214-.555V2.16a.61.61 0 0 1 .162-.417.534.534 0 0 1 .39-.173c.146 0 .286.063.39.173a.61.61 0 0 1 .16.417v4.125c0 .208.078.408.216.555.138.148.324.23.52.23a.711.711 0 0 0 .519-.23.814.814 0 0 0 .215-.555V2.019Zm5.326 3.873c0-1.078.377-2.118 1.057-2.914a3.951 3.951 0 0 1 2.617-1.39v8.625c0 .22.04.714.093 1.303.055.61.13 1.381.209 2.194v.002c.208 2.13.433 4.465.433 5.144 0 .417-.155.817-.43 1.111-.276.295-.65.46-1.04.46s-.763-.165-1.039-.46a1.628 1.628 0 0 1-.43-1.11c0-.562.156-2.448.329-4.357.126-1.374.257-2.747.393-4.12l.01-.125a.836.836 0 0 0-.201-.582.737.737 0 0 0-.243-.182.694.694 0 0 0-.29-.063h-1.1a.356.356 0 0 1-.26-.115.408.408 0 0 1-.108-.278V5.893ZM16.163 0c-1.461 0-2.863.62-3.896 1.726-1.033 1.105-1.614 2.604-1.614 4.167v3.143c0 .52.194 1.02.538 1.389.345.368.812.575 1.299.575h.286c-.11 1.116-.215 2.232-.317 3.349-.169 1.862-.337 3.85-.337 4.508 0 .834.31 1.633.861 2.223.551.589 1.299.92 2.078.92.78 0 1.527-.331 2.078-.92.551-.59.861-1.39.861-2.223 0-.774-.233-3.169-.43-5.21l-.01-.096c-.072-.728-.14-1.456-.208-2.185a20.466 20.466 0 0 1-.087-1.152V.786A.814.814 0 0 0 17.05.23a.711.711 0 0 0-.52-.23h-.367Z"/>
                </svg>
              
                :
                (entry.header === 'Culture') ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block w-7 h-7 mx-auto" width="28" height="29" fill="none" viewBox="0 0 28 29">
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="M13.306 25.264 4.054 16.54c-.515-.486-.515-3.595 0-4.08l9.252-8.724c.515-.485.876-.485 1.39 0l9.252 8.723c.515.486.515 3.596 0 4.08l-9.252 8.725c-.515.485-.875.485-1.39 0Z" clip-rule="evenodd"/>
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="m13.516 22.002-6.448-6.08c-.359-.338-.359-2.506 0-2.844l6.448-6.08c.359-.338.61-.338.97 0l6.447 6.08c.36.338.36 2.506 0 2.844l-6.448 6.08c-.359.339-.61.339-.969 0Z" clip-rule="evenodd"/>
                  <path stroke="#fff" stroke-miterlimit="22.926" strokeWidth="1.346" d="m13.725 18.74-3.645-3.436c-.203-.191-.203-1.417 0-1.608l3.645-3.436c.202-.192.345-.192.547 0l3.645 3.436c.203.191.203 1.417 0 1.608l-3.645 3.436c-.203.191-.345.191-.547 0Z" clip-rule="evenodd"/>
                </svg>
                :
                (entry.header === 'Nature') ?
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block w-7 h-7 mx-auto" width="20" height="23" fill="none" viewBox="0 0 20 23">
                  <path fill="#fff" d="M8.481 18.04H1.773c-.392 0-.684-.173-.877-.52-.193-.347-.175-.682.054-1.005l4.422-6.49h-.814a.944.944 0 0 1-.885-.524c-.191-.35-.168-.685.068-1.008L9.183.72c.104-.136.23-.24.377-.31a1.03 1.03 0 0 1 .443-.105 1.025 1.025 0 0 1 .813.416l5.443 7.772c.236.323.26.659.068 1.008s-.484.523-.877.523h-.8l4.4 6.491c.23.323.247.658.054 1.005-.193.347-.485.52-.877.52h-6.695v3.906a.9.9 0 0 1-.268.66.899.899 0 0 1-.662.269H9.458a.952.952 0 0 1-.695-.278.942.942 0 0 1-.282-.7V18.04Zm-5.56-1.57h5.444-2.594 8.458-2.574H17.1 2.922Zm0 0H17.1l-5.444-8.017h2.574L10 2.431 5.771 8.453h2.594L2.922 16.47Z"/>
                </svg>

                : 
                //all 
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block w-7 h-7 mx-auto  " width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" styles="mask-type:alpha">
                    <path fill="#D9D9D9" d="M0 0h24v24H0z"/>
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#fff" d="M4.308 20.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 0 1-.525-1.283V5.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h15.384c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v13.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H4.308Zm0-1.5h15.384a.294.294 0 0 0 .212-.096.294.294 0 0 0 .096-.212V5.308a.294.294 0 0 0-.096-.212.294.294 0 0 0-.212-.096H4.308a.294.294 0 0 0-.212.096.294.294 0 0 0-.096.212v13.384c0 .077.032.148.096.212a.294.294 0 0 0 .212.096Zm2.077-2.385h11.23v-1.5H6.385v1.5Zm0-3.865h3.692V7.385H6.385v5.365Zm5.884 0h5.346v-1.5H12.27v1.5Zm0-3.866h5.346v-1.5H12.27v1.5Z"/>
                  </g>
                </svg>

              
              }

                
                <h3 className='text-center lg:flex font-reikna text-2xl -translate-y-3 lg:translate-y-1'>
                  {entry.header}
                </h3>
              </div>
              
            </div>
          ))
        }
      </div>
      
        {/* mapping news based on active tab */}
      <div className='border-2 border-c-green rounded-xl lg:rounded-3xl px-4 lg:px-12 bg-[#0F1112]/50'>
        <div className='bg-transparent w-full h-8 lg:w-60'></div>
        <hr className='mx-auto max-w-sm lg:max-w-[2000px] border-c-green border-[0,5px] mb-6'/>
        {config[activeTab].component}
        

      </div>
    </div>
  )
}

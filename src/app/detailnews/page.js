import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import newsData from '../components/LandingPage/NewsHero/newsdata.json'
import Image from 'next/image'

const DetailNews = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col text-center px-8 pt-28'>
          {/* bread crumbs here */} 
          <div>
            <h1>Neira&apos;s News</h1>
            <p>Food</p>
          </div>

          {/* <Image src=/> */}
          <div className='bg-slate-400 h-20 w-20 mx-auto'>

          </div>

          <h2>Lorem Ipsum Dolor Sit Amet Use Established Gestures Like This.</h2>

          <h3>Tellus tristique tellus vel et facilisis amet et id duis. Erat vitae nec libero. Lorem ipsum dolor sit amet consectetur.  In maecenas magna egestas sed dolor faucibus sit eu habitant? </h3>

          <p>oleh Author  </p>
          <p>4 Juni 2024  </p>

          <hr className=''/>

          {/* MAIN CONTENT // ARTICLE */}
          {/* use loop and conditional to display article */}
          <div>
            <p className='text-left'>p1</p>
            <p className='text-left'>p2</p>
            <p className='text-left'>p3</p>
            <p className='text-left'>p4</p>
            <p className='text-left'>p5</p>

          </div>

          {/* READ MORE section */}
          {/*  */}
          <div className='text-left'>
            <h2>Read More</h2>
            <hr />
            <div className='flex'>
              <p>Benteng Belgica Lorem Ipsum Lorem Lorem Ditemukan Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              <div className='bg-slate-400 h-20 w-20 mx-auto'></div>
            </div>
            <hr />
            <div className='flex'>
              <p>Benteng Belgica Lorem Ipsum Lorem Lorem Ditemukan Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              <div className='bg-slate-400 h-20 w-20 mx-auto'></div>
            </div>
            <hr />
            <div className='flex'>
              <p>Benteng Belgica Lorem Ipsum Lorem Lorem Ditemukan Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              <div className='bg-slate-400 h-20 w-20 mx-auto'></div>
            </div>
            <hr />
            <div className='flex'>
              <p>Benteng Belgica Lorem Ipsum Lorem Lorem Ditemukan Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              <div className='bg-slate-400 h-20 w-20 mx-auto'></div>
            </div>
            <hr />
           



          </div>

        </div>

        <Footer />
    </div>
  )
}

export default DetailNews

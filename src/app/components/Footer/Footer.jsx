import React from 'react'
import Image from 'next/image'
import Logo from '/public/images/landing-page/LOGO.png'
import TransisiFooter from '/public/images/landing-page/footer/TransisiFooter.png'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <div className='w-full h-auto relative'>
        <footer className='z-20 text-black bg-c-yellow lg:pb-20 pb-12'>
          <Image src={TransisiFooter} alt='' className='w-full h-auto bg-[#0F1112] -z-30 object-cover ' />
          
          <div className='flex w-[60%] max-w-sm lg:max-w-full 2xl:max-w-[80%] mx-auto lg:px-12 lg:w-full h-auto justify-around lg:gap-32 lg:flex-row flex-col items-center gap-14 '>
            <div className='lg:w-1/3 flex flex-col items-center gap-4'>
              
              <div className='flex items-center lg:gap-4 gap-4'>
                <Image src={Logo} alt='logo neira basudara' className='w-28 xl:w-40 h-auto'/>
                <h2 className='font-reikna lg:text-6xl text-5xl leading-6 lg:leading-10' >Neira <br/> Basudara</h2>
              </div>
              <div className='flex flex-col lg:gap-2 lg:mt-4 items-center font-manjari lg:items-start'>
                <p className='text-center lg:text-left'>KKN-PPM UGM 2024 Periode II Banda Neira</p>
                <p>neirabasudara.kknugm@gmail.com</p>
                <p>+62 87123456789</p>

              </div>
            </div>

            <div className='w-1/3 flex-col h-72 gap-4 hidden lg:flex'>
              <p className='text-2xl font-manjari'>Connect with us!</p>
              <input width="340" height="135" type="text" className='h-64 rounded-lg' />
              <Button
              text = 'SEND'
              isAction={true}
              isPrimary={true}
              />
            </div>

            <div className='lg:w-1/3 w-full flex flex-col gap-4 lg:gap-8'>
              <div className='flex justify-between ' >
                
                <a href="https://www.instagram.com/neirabasudara/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="47" fill="none" viewBox="0 0 49 47">
                    <path fill="#0F1112" d="M24.504 4.232c6.547 0 7.322.027 9.897.138 2.393.1 3.685.486 4.546.807 1.14.423 1.962.937 2.814 1.754.862.826 1.388 1.606 1.828 2.698.336.827.738 2.075.843 4.36.115 2.48.143 3.223.143 9.493 0 6.279-.028 7.022-.143 9.491-.105 2.295-.508 3.535-.843 4.36-.44 1.093-.976 1.883-1.828 2.7-.861.826-1.675 1.33-2.814 1.753-.861.321-2.163.707-4.546.808-2.585.11-3.36.137-9.897.137-6.548 0-7.323-.027-9.898-.137-2.393-.101-3.685-.487-4.546-.808-1.14-.422-1.962-.936-2.814-1.753-.862-.827-1.388-1.607-1.828-2.7-.335-.825-.737-2.074-.843-4.36-.115-2.478-.143-3.222-.143-9.491 0-6.28.028-7.023.143-9.492.106-2.295.508-3.534.843-4.36.44-1.093.976-1.882 1.828-2.7.861-.826 1.675-1.33 2.814-1.753.861-.32 2.163-.706 4.546-.807 2.575-.11 3.35-.138 9.898-.138Zm0-4.232c-6.653 0-7.486.028-10.099.138-2.603.11-4.393.514-5.944 1.092-1.617.606-2.986 1.405-4.345 2.717-1.369 1.304-2.202 2.616-2.833 4.159-.603 1.496-1.025 3.203-1.14 5.7C.03 16.322 0 17.12 0 23.5c0 6.38.029 7.178.144 9.685.114 2.496.536 4.213 1.139 5.7.631 1.552 1.464 2.864 2.833 4.168 1.359 1.303 2.728 2.111 4.336 2.708 1.56.578 3.34.982 5.944 1.092 2.613.11 3.446.138 10.098.138 6.652 0 7.485-.028 10.098-.138 2.604-.11 4.394-.514 5.944-1.092 1.608-.597 2.977-1.405 4.336-2.708 1.36-1.304 2.202-2.616 2.824-4.159.603-1.496 1.024-3.203 1.139-5.7.115-2.506.143-3.305.143-9.685 0-6.38-.028-7.178-.143-9.684-.115-2.497-.536-4.214-1.14-5.701-.602-1.56-1.435-2.873-2.804-4.177-1.359-1.303-2.728-2.111-4.336-2.708-1.56-.578-3.34-.982-5.944-1.092C31.99.027 31.156 0 24.504 0Z"/>
                    <path fill="#0F1112" d="M24.504 11.429c-6.95 0-12.587 5.406-12.587 12.071s5.638 12.071 12.587 12.071S37.09 30.165 37.09 23.5s-5.638-12.071-12.587-12.071Zm0 19.901c-4.509 0-8.165-3.506-8.165-7.83s3.657-7.83 8.165-7.83c4.508 0 8.164 3.506 8.164 7.83s-3.656 7.83-8.164 7.83Zm16.022-20.379c0 1.561-1.32 2.819-2.938 2.819-1.627 0-2.939-1.267-2.939-2.819 0-1.56 1.321-2.818 2.939-2.818 1.617 0 2.938 1.267 2.938 2.819Z"/>
                  </svg>

                </a>
                
                <a href="https://www.instagram.com/@neira.basudara/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="none" viewBox="0 0 50 47">
                    <path fill="#0F1112" d="M35.114 0h-8.26v32.014c0 3.815-3.176 6.948-7.129 6.948-3.953 0-7.13-3.133-7.13-6.948 0-3.746 3.106-6.811 6.918-6.947v-8.038c-8.4.136-15.177 6.744-15.177 14.985 0 8.31 6.918 14.986 15.46 14.986 8.541 0 15.46-6.743 15.46-14.986V15.598a19.664 19.664 0 0 0 10.94 3.543v-8.038C39.986 10.899 35.115 5.994 35.115 0Z"/>
                  </svg>
                </a>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="none" viewBox="0 0 50 47">
                  <g clipPath="url(#a)">
                    <path fill="#0F1112" d="M49.254 14.1s-.478-3.24-1.952-4.663c-1.867-1.873-3.953-1.882-4.91-1.992-6.854-.478-17.144-.478-17.144-.478h-.019s-10.29 0-17.143.478c-.957.11-3.043.119-4.91 1.992C1.702 10.86 1.233 14.1 1.233 14.1s-.498 3.81-.498 7.61v3.562c0 3.8.489 7.61.489 7.61s.478 3.24 1.943 4.663c1.866 1.872 4.316 1.808 5.408 2.01 3.924.358 16.664.468 16.664.468s10.3-.018 17.152-.486c.958-.11 3.044-.12 4.91-1.992 1.475-1.423 1.953-4.663 1.953-4.663s.489-3.8.489-7.61V21.71c0-3.8-.489-7.61-.489-7.61ZM20.176 29.595v-13.21l13.237 6.628-13.237 6.582Z"/>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.735 0h49.007v47H.735z"/>
                    </clipPath>
                  </defs>
                </svg>

              </div>

              <div className='flex font-manjari w-full justify-between'>
                <div className='flex-col flex justify-around gap-8 lg:gap-8'>
                  <a href="">PODCAST</a>
                  <a href="">NEWS</a>
                  <a href="">TEAM</a>
                </div>
                <div className='flex-col flex lg:gap-8 gap-4'>
                  <a href="">GALLERY</a>
                  <a href="">ABOUT US</a>
                </div>

              </div>
                
              
            </div>

            <div className='  flex-col lg:h-72 gap-4 lg:hidden flex w-auto lg:w-full'>
              <p className='text-2xl font-manjari'>Connect with us!</p>
              <input width="740" height="135" type="text" className='w-80 h-48 rounded-lg' />
              <Button
              text = 'SEND'
              isAction={true}
              isPrimary={true}
              />
            </div>

          </div>
        </footer>
    </div>
  )
}

export default Footer
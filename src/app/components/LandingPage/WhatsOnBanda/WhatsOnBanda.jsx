import Card from "../../Card/Card";
import FotoPodcast from "/public/images/landing-page/whats-on-banda/foto-podcast.png";

const WhatsOnBanda = () => {
    return (
      <div className="h-auto lg:w-1/2 mx-auto">
        <div className="flex flex-col lg:gap-6 gap-4">
          <div className="flex flex-row items-center gap-4 mx-auto"> 
          
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg>  
  
            <h2 className="text-c-yellow font-reikna xl:text-5xl text-4xl">What&apos;s On Banda</h2>
  
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg> 
  
          </div>
          
          <div className="flex justify-center w-auto mx-10 lg:mx-0">
            <Card 
              imagePath={FotoPodcast}
              title="Podcast KKN-PPN Banda Neira #1"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              // custom styling for card
              className='max-w-xl'
            />
          </div>
          
        </div>
      </div>
    );
  }

  export default WhatsOnBanda;
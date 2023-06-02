import './App.css';
import 'swiper/css';
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../public/assets/white-straight-arrow.png'
import { useEffect, useState } from 'react';

const data = [
  {id: 1, url: "deep-domain",  text: "IT Staffing"},
  {id: 2, url: "employees",  text: "Diversity & inclusion"},
  {id: 3, url: "finest-talent",  text: "RPO"},
  {id: 4, url: "IndiHire-Icons-Copy-18",  text: "Executive Search"},
  {id: 5, url: "IndiHire-Icons-Copy-19",  text: "IT & Digital perm recruitment"},
  {id: 6, url: "IndiHire-Icons-Copy-20",  text: "Permanent Hiring"},
  {id: 7, url: "market-research",  text: "AcquiHire"},
  {id: 8, url: "sales-hiring-01",  text: "Sales Hiring"},
  {id: 9, url: "work-at-indihire",  text: "AI enabled campus & lateral platform"},
]

export default function App() {
  const [current, setCurrent] = useState(0);
  const [screen, setScreen] = useState({});
  
  const length = data.length;
  
  useEffect(() => {
    const count = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(count);
  }, [current])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  
  const handleSize = (e) => {
    const { offsetWidth, offsetHeight } = e.target;
    setScreen({height: offsetHeight, width: offsetWidth})
  }

  return (
    <>
    <div className="main-container">
    <div className='rightContainerImages' style={{ width: screen.width, height: screen.height, position: "relative", display: "flex" }}>
    <img className="" src="https://indihire.com/wp-content/uploads/2022/06/third-row-right.jpg" onLoad={handleSize} />
      <div className='itemContainer'>
      {data.map((item, index) => (
        <>
          {index === current && (
            <>
              <div key={item.id} className='imageSide'>
                <img src={`${window.location.origin}/assets/${item.url}.png`} className='imageContainer' />
                <span className='imageText'>{item.text}</span>
              </div>
              <div className='slides'>
                <img src={arrow} onClick={prevSlide} className='prev'/>
                <img src={arrow} onClick={nextSlide} className='next'/>
              </div>
            </>
          )}
        </>
      ))}
      </div>
    </div>
    <div className="leftContainerImages">
      <div className='itemText'>
        <img src="https://indihire.com/wp-content/uploads/2022/06/third-row-left.jpg" />
          <span className='textDone'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias accusantium iure quis labore eligendi quas id, perspiciatis eaque atque eos. At non odit repudiandae voluptates nulla beatae porro amet enim soluta! Similique provident, dolorem est nemo dignissimos voluptate. Quisquam nisi numquam dolore rerum laboriosam architecto fugit atque quas nostrum.</span>
      </div>
    </div>
    </div>
    </>
  )
}


     {/* <div className="container">
      <div className='left'></div>
      <div className='right'>
        <div className='rightContainer'>
        <Swiper effect={"fade"} modules={[EffectFade, Autoplay, Navigation]} slidesPerView={1} className='mySwiper' autoplay={{ delay: 5000, disableOnInteraction: false }} navigation = {{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}>
              {data?.map((item, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                  <div>
                     <img src={`${window.location.origin}/assets/${item.url}.png`} className='tech-image' alt=""/>
                     <p>{item.text}</p>
                  </div>
                  </SwiperSlide>
                  ))}
          </Swiper>
        <div>
        </div>
        <div className='arrowIcon'>
          <img src={arrow} className='firstIcon swiper-button-next'/>
          <img src={arrow}  className='secondIcon swiper-button-prev'/>
        </div>
        </div>
      </div>
    </div> */}
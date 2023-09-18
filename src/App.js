import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Navigation, Mousewheel, Pagination } from 'swiper/modules';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BlockHeader from './components/BlockHeader';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {

  const items = [
    {
      id: 1,
      quote: 'The agency completed our site better than we could have imagined! They exceeded all our expectations with a creative and professional approach. Highly recommend their services to anyone looking for quality web design!',
      name: 'Ethan Montgomery, Brighton',
    },
    {
      id: 2,
      quote: 'Working with the web design agency was amazing! They created a modern and elegant website for us that fully reflects our brand identity. The results exceeded our expectations!',
      name: 'Caleb Mitchell, Sheffield',
    },
    {
      id: 3,
      quote: 'Thanks to the web design agency, we got a unique website that perfectly reflects our company. The team was responsive, professional and always ready to come up with creative ideas. I recommend them to everyone!',
      name: 'Olivia Turner, Ashford',
    },
    {
      id: 4,
      quote: 'I am very pleased with the results of the work. They took into account all my wishes and created an amazingly attractive and functional website. In addition, the team was very prompt and ready to solve any issues.',
      name: 'Sophia Lawson, Lancaster',
    }
  ];      

  return (
    <div className='bg-white'>
      <div className='bg-fon bg-no-repeat bg-cover'>
        <Header />
        <div className='m:w-[343px] sm:w-[568px] lg:w-[900px] xl:w-[1256px] m-auto'>
          <Hero/>
        </div>
      </div>
      <div className='pb-16 lg:pb-28 xl:pb-20'>
        <BlockHeader title={'Services'} text={'A full range of professional web design services tailored to your needs and business goals. From creating a unique design to optimization, we will help you stand out in the online world.'}/>
        <Services/>
      </div>
      <div>
        <BlockHeader title={'Company portfolio'} text={'Inspiration in every project: Explore our diverse portfolio and discover a world of creative possibilities'}/>
        <div className='flex pb-6 xl:pb-[72px] h-[480px] sm:h-[680px] lg:h-[600px] xl:h-[816px] bg-projects bg-no-repeat bg-cover'>
          <button className='p-4 sm:px-8 lg:py-8 text-xl sm:text-2xl lg:text-[27px] xl:text-[32px] font-bold text-white bg-black m-auto mb-0 rounded-full shadow-button'>All projects</button>
        </div>
      </div>
      <div className='bg-fon bg-no-repeat bg-cover pt-16 lg:pt-28 xl:pt-20'>
        <div className='pb-16'>
          <BlockHeader title={'About company'} text={'We are a leading web design company specializing in creating high quality and innovative websites.'}/>
          <div className='flex justify-center flex-wrap gap-4 sm:gap-0 sm:gap-x-8 lg:gap-x-24 sm:pb-14 mob:w-[343px] sm:w-[568px] lg:w-[900px] xl:w-[1256px] m-auto pb-8'>
            <div>
              <img className='m-auto pb-4 sm:w-[90px] sm:h-[108px] lg:w-[130px] lg:h-[150px]' src='./img/trophy.png' alt='' />
              
              <p>Innovative web solutions</p>
            </div>
            <div>
              <img className='m-auto pb-4 sm:w-[90px] sm:h-[108px] lg:w-[130px] lg:h-[150px]' src='./img/medal.png' alt='' />
              <p>Master of Creativity</p>
            </div>
            <div>
              <img className='m-auto pb-4 sm:w-[90px] sm:h-[108px] lg:w-[130px] lg:h-[150px]' src='./img/certification.png' alt='' />
              <p className='text-center'>For the exceptional <br/>
              user experience"</p>
            </div>
          </div>
          <div className='sm:pb-14 mob:w-[343px] sm:w-[568px] lg:w-[900px] xl:w-[1256px] m-auto'>
            <p className='lg:w-[820px] m-auto lg:ml-0'>Our goal is to help your business attract attention, keep visitors. We combine creativity, a deep understanding of user experience, and cutting-edge technology to express your individuality and leave a strong impression.</p>
          </div>
        </div> 
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel]}
          className="mySwiper"
        >
          {
            items.map(obj => (
              <SwiperSlide key={obj.id}>
                <div className='bg-purple py-8 px-4 sm:px-9 lg:px-16'>
                  <svg className='block m-auto' width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_iiii_232_802)">
                      <path d="M3.48099 0.69997C0.879986 0.69997 0.229736 2.62664 0.229736 3.58997V14.7888C0.229736 16.8118 1.55432 17.3175 2.21661 17.3175H7.02364C7.64877 17.3175 8.1387 17.8586 7.86381 18.42C7.10175 19.9765 5.11994 21.4525 3.58451 22.3641C3.04833 22.6824 2.84022 23.3726 3.15136 23.913L5.55862 28.094C5.81988 28.5477 6.37125 28.752 6.85678 28.556C16.6614 24.5983 18.463 15.3926 18.1116 11.1763V3.58997C18.1116 0.98897 16.3054 0.579553 15.4022 0.69997H3.48099Z" fill="white"/>
                      <path d="M26.0994 0.69997C23.4984 0.69997 22.8481 2.62664 22.8481 3.58997V14.7888C22.8481 16.8118 24.1727 17.3175 24.835 17.3175H29.642C30.2672 17.3175 30.7571 17.8586 30.4822 18.42C29.7202 19.9765 27.7383 21.4525 26.2029 22.3641C25.6667 22.6824 25.4586 23.3726 25.7698 23.913L28.177 28.094C28.4383 28.5477 28.9897 28.752 29.4752 28.556C39.2798 24.5983 41.0814 15.3926 40.73 11.1763V3.58997C40.73 0.98897 38.9238 0.579553 38.0206 0.69997H26.0994Z" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_iiii_232_802" x="0.229736" y="-2.9311" width="44.153" height="31.8085" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="0.7225"/>
                      <feGaussianBlur stdDeviation="0.7225"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.231373 0 0 0 0 0.337255 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_232_802"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="1.445" dy="-1.445"/>
                      <feGaussianBlur stdDeviation="1.08375"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.231373 0 0 0 0 0.337255 0 0 0 0.09 0"/>
                      <feBlend mode="normal" in2="effect1_innerShadow_232_802" result="effect2_innerShadow_232_802"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="3.6125" dy="-2.89"/>
                      <feGaussianBlur stdDeviation="1.445"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.231373 0 0 0 0 0.337255 0 0 0 0.05 0"/>
                      <feBlend mode="normal" in2="effect2_innerShadow_232_802" result="effect3_innerShadow_232_802"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="7.225" dy="-5.0575"/>
                      <feGaussianBlur stdDeviation="1.80625"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.231373 0 0 0 0 0.337255 0 0 0 0.01 0"/>
                      <feBlend mode="normal" in2="effect3_innerShadow_232_802" result="effect4_innerShadow_232_802"/>
                      </filter>
                    </defs>
                  </svg>
                  <h2 className='py-8 lg:px-16 text-white uppercase font-semibold'>{obj.quote}</h2>
                  <p className='pb-4 text-white font-normal leading-6'>{obj.name}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <Footer/>   
    </div>
  );
}

export default App;

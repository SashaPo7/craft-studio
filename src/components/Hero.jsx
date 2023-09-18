function Hero() {
  return(
    <div className="py-16 lg:py-36 lg:pb-12 xl:py-36 lg:flex items-center">
      <div className="lg:mr-2 xl:mr-6">
        <h1 className="text-4xl lg:text-5xl xl:text-[50px] font-semibold pb-4 sm:pb-8"><span className="text-blue">Design</span> beyond <br/> expectations!</h1>
        <p className="pb-6">Welcome to the world of web design, where every pixel counts and every thread of code
        is art. We are ready to bring your wildest ideas
        to life and create a web presence that will surprise you. Bring your website to life with us and leave an unforgettable mark on the online world.</p>
        <button className="bg-blue text-white px-6 py-4 rounded-full mb-3.5">Order design</button>
        <div className="flex gap-4 content-start items-center sm:mb-4">
          <p className="text-sm text-[#4D576C] lg:text-sm font-normal">Trusted by +500 clients</p>
          <img src="./img/avatars.png" alt="company's clients" />
        </div>
      </div>
      <img className=" hidden sm:block m-auto w-[424px] lg:w-[500px] xl:w-[588px] h-[387px] lg:h-[456px] xl:h-[535px]" src="./img/macbook.png" alt="MacBook"/>
    </div>
  );
}

export default Hero;
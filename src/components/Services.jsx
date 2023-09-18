function Services () {

  const serviceItems = [
    {
      id: 1,
      img: './img/search.svg',
      headline: 'Website development',
      discription: 'Creation of custom and mobile sites, including design, layout and programming.'
    },
    {
      id: 2,
      img: './img/cloud.svg',
      headline: 'UI/UX design',
      discription: 'Creating an attractive and user-friendly interface for websites and applications, taking into account the needs of users.'
    },
    {
      id: 3,
      img: './img/chat.svg',
      headline: 'Technical support and service',
      discription: 'Providing technical support, updates and maintenance of websites after their launch.'
    },
    {
      id: 4,
      img: './img/folder.svg',
      headline: 'Responsive and mobile design',
      discription: 'Creating websites that display well on different devices and screens such as smartphones and tablets.'
    },
  ]

  return(
    <div className="flex flex-wrap gap-y-9 sm:gap-8 m-auto xl:[&>*:nth-child(3)]:ml-auto xl:[&>*:nth-child(3)]:mr-0 sm:w-[568px] lg:w-[900px] xl:w-[1256px]">
      {
        serviceItems.map(obj => (
          <div key={obj.id} className="p-4 lg:py-8 m:w-[343px] sm:w-[268px] lg:w-[415px] m-auto lg:m-0">
            <img className="m-auto pb-4 lg:w-[175px] lg:h-[112px] xl:w-[205px] xl:h-[131px]" src={obj.img} alt=''/>
            <h2 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold pb-2">{obj.headline}</h2>
            <p className="lg:leading-7">{obj.discription}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Services;
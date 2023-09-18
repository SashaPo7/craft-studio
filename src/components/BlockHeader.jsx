function BlockHeader ({title, text}) {
  return(
    <div className="relative">
      <h2 className="absolute t-0 r-0 uppercase px-8 py-4 lg:pl-20 2xl:pl-44 bg-[#F0F0F0] rounded-r-full">{title}</h2>
      <div className="pt-20 pb-9 sm:pb-14 mob:w-[343px] sm:w-[568px] lg:w-[900px] xl:w-[1256px] m-auto">
        <p className="lg:w-[800px]">{text}</p>
      </div>
    </div>
  )
}

export default BlockHeader;
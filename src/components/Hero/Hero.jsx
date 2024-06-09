import HeroVid from '../../assets/video/hero.mp4'

const Hero = () => {
  return (
    <div className=' h-full'>
        <div className='relative h-[584px] bg-black/40'>
            <video
                autoPlay loop muted 
                className="absolute right-0 top-0 h-[584px] w-full object-cover z-[-1] ">
                <source src={HeroVid}></source>
            </video>

            {/* Text Hero */}
            <div className='h-full flex justify-center items-center pt-10'>  
                <div className='container grid grid-col-1 gap-4'>
                    <div className='text-white text-center'>
                        <h1 className='font-bold pb-2 text-5xl lg:text-7xl '
                            data-aos="fade-up"
                            data-aos-delay="300">
                                Jelajahi Pesona <span className='block pt-2 pb-5 text-primary'>Nusantara</span></h1>
                        <p  className='text-sm lg:text-lg'
                            data-aos="fade-up">
                            Temukan cerita perjalanan inspiratif dan panduan <span className='block pb-5'>wisata yang membawa Anda mengenal lebih dekat keindahan Nusantara.</span>
                        </p>

                        <a href="/artikel"
                            className='bg-primary h-14 p-2 px-8 font-semibold rounded-md'>
                            Jelajah</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

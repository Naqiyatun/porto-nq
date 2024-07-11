import Image from "next/image";

type Props = {
  slides: string[],
  video: string, 
  style: string,
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
}

const Carousel = ({slides, video, style, currentIndex, setCurrentIndex}: Props) => {

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    (slides.length > 1) ? (
      <div className='relative w-full h-full'>
        <div className={"relative " + style}>
          <Image src={slides[currentIndex]} fill sizes='100vw' className='object-contain' alt='detail' />
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-[15px] w-[30px] h-[30px] grid place-items-center rounded-full shadow-sm bg-primary text-white hover:bg-primary-80 cursor-pointer' onClick={prevSlide}>
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-[15px] w-[30px] h-[30px] grid place-items-center rounded-full shadow-sm bg-primary text-white hover:bg-primary-80 cursor-pointer' onClick={nextSlide}>
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className='mt-4 flex justify-center items-center gap-2 h-10'>
          {slides.map((slide, index) => (
            <div
              key={slide}
              onClick={() => goToSlide(index)}
              className={`
                transition-all w-3 h-3 bg-primary-80 rounded-full cursor-pointer
                ${currentIndex === index ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    ) : (
      video ? (
        <div className='relative w-full h-full'>
          <video controls>
            <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className={"relative " + style}>
          <Image src={slides[currentIndex]} fill sizes='100vw' className='object-contain' alt='detail' />
        </div>
      )
    )
);
}

export default Carousel
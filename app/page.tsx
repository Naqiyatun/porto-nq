'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import Modal from './components/Modal'
import Carousel from './components/Carousel'
import { nav, skillsPart1, skillsPart2, skillsPart3, skillsPart4, liveProjects, historyProjects } from './constants'

export default function Home() {
  const [filterProjects, setFilterProjects] = useState('Live')
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [slides, setSlides] = useState<string[]>([]);
  const [style, setStyle] = useState<string>('');
  const [titleOfModal, setTitleOfModal] = useState<string>('');
  const [video, setVideo] = useState<string>('');

  const scrollToSection = (element: any) => {
		const elementId: any = document.getElementById(element);
    elementId.scrollIntoView({behavior: "smooth", inline: "nearest"})
  };

  const closeModal = () => {
    setShowModal(!showModal)
    setSlides([])
    setStyle('')
    setTitleOfModal('')
    setVideo('')
    setCurrentIndex(0)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const nav = document.getElementsByTagName('header');
      nav[0].classList.toggle('sticky__nav', window.scrollY > 0);
    })
  })

  return (
    <>
      <header>
        <div className='my__container flex justify-between items-center gap-10 h-16'>
          <Link href='/'>
            <Image src='/logo.svg' width={49} height={40} alt='logo' />
          </Link>
          
          <div className='inline'>
            <ul className='flex items-center gap-7 sm:gap-14'>
              {nav.map((dt) => (
                <li key={dt} onClick={() => scrollToSection(dt)} className='sm:text-base text-sm font-medium cursor-pointer text-secondary'>{dt}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section id='Overview' className='my__container py-20 flex md:flex-row flex-col justify-between items-center lg:gap-[100px] gap-12'>
        <div className='grid gap-4 relative'>
          <p className='sm:text-lg text-base font-medium text-secondary'>Hello, I'm</p>
          <h1 className='sm:text-["40px"] text-3xl font-medium text-secondary'>Naqiyatun Muallifah</h1>
          <p className='ml-3 text-secondary'>
            <span className='sm:text-lg text-base font-medium relative before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:-left-3 before:bg-gradient-to-r before:from-primary-60 before:to-basic before:-z-[1]'>Frontend web developer</span>
            <span className='sm:text-base text-sm'>, with knowledge in web development and design, enabling me to transform design concepts into functional and responsive web applications.</span>
          </p>
          <div className="grid grid-cols-[repeat(2,_minmax(0,_max-content))] justify-center gap-10">
            <div className="text-center font-medium">
              <h3 className="mb-1 sm:text-lg text-base text-secondary">+2</h3>
              <p className="sm:text-sm text-xs text-primary">Years of <br/> work</p>
            </div>
            <div className="text-center font-medium">
              <h3 className="mb-1 sm:text-lg text-base text-secondary">+25</h3>
              <p className="sm:text-sm text-xs text-primary">Completed <br/> projects</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <a download href="/pdf/CV Naqiyatun Muallifah.pdf" className="inline-flex items-center gap-x-2 py-3 px-5 mr-4 rounded-md sm:text-base text-sm text-[#fff] bg-primary shadow-lg shadow-primary-60 hover:bg-primary-80 transition duration-300">
              Download CV <i className="ri-download-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/naqiyatun-muallifah-05995213a/" target="_blank" rel="noreferrer" className="social__link">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/Naqiyatun?tab=repositories" target="_blank" rel="noreferrer" className="social__link">
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
        <div className='relative w-full max-w-[361px] aspect-square lg:mr-10'>
          <Image src='/hero.png' alt='hero' fill sizes='100vw' className='object-cover' />
        </div>
      </section>

      <section id='Skills' className='my__container py-20 bg-gradient-to-b from-primary to-basic rounded-[60px_60px_0_0]'>
        <h1 className='sm:text-["40px"] text-3xl font-medium text-secondary text-center mb-10 relative before:content-[url("/underline-vector.svg")] before:absolute before:block before:-bottom-6 before:left-1/2 before:-translate-x-2/4'>My Skills</h1>
        <div className="skills__content">
          <div className="skills__group">
            {skillsPart1.map((dt) => (
              <div className="skills__data" key={dt.name}>
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{dt.name}</h3>
                  <span className="skills__level">{dt.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {skillsPart2.map((dt) => (
              <div className="skills__data" key={dt.name}>
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{dt.name}</h3>
                  <span className="skills__level">{dt.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {skillsPart3.map((dt) => (
              <div className="skills__data" key={dt.name}>
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{dt.name}</h3>
                  <span className="skills__level">{dt.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {skillsPart4.map((dt) => (
              <div className="skills__data" key={dt.name}>
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{dt.name}</h3>
                  <span className="skills__level">{dt.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='Projects' className='my__container py-20'>
        <h1 className='sm:text-["40px"] text-3xl font-medium text-secondary text-center mb-10'>Projects</h1>
        <ul className="mb-14 sm:mx-auto bg-primary-60 p-[.375rem] rounded-xl flex justify-between gap-2 sm:w-[332px]">
          <button className={"filters__button " + (filterProjects === 'Live' ? 'filter__active' : 'filter__inactive')} onClick={() => setFilterProjects('Live')}>Live</button>
          <button className={"filters__button " + (filterProjects === 'History' ? 'filter__active' : 'filter__inactive')} onClick={() => setFilterProjects('History')}>History</button>
        </ul>
        {(filterProjects === 'Live') && (
          <div className="mx-auto grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {liveProjects.map((dt) => (
              dt.link ? (
                <a href={dt.link} target="_blank" rel="noreferrer" className="relative w-full h-full rounded-2xl px-4 pt-8 pb-6 shadow-sm shadow-primary-60 hover:shadow-primary-80 transition duration-300" key={dt.name}>
                  <div className="absolute w-[40px] h-[40px] -top-6 left-1/2 -translate-x-1/2 rounded-full grid place-items-center bg-primary-80 text-lg sm:text-xl text-[#fff] shadow-sm shadow-primary-60">
                    <i className="ri-link"></i>
                  </div>
                  <h3 className="text-base md:text-lg text-secondary font-medium">{dt.name}</h3>
                </a>
              ) : (
                <div onClick={() => {setShowModal(!showModal); setSlides(dt.images); setStyle(dt.style ? dt.style : ''); setTitleOfModal(dt.name)}} className="relative w-full h-full rounded-2xl px-4 pt-8 pb-6 shadow-sm shadow-primary-60 hover:shadow-primary-80 transition duration-300 cursor-pointer" key={dt.name}>
                  <div className="absolute w-[40px] h-[40px] -top-6 left-1/2 -translate-x-1/2 rounded-full grid place-items-center bg-primary-80 text-lg sm:text-xl text-[#fff] shadow-sm shadow-primary-60">
                      <i className="ri-image-line"></i>
                    </div>
                  <h3 className="text-base md:text-lg text-secondary font-medium">{dt.name}</h3>
                </div>
              )
            ))}
          </div>
        )}
        {(filterProjects === 'History') && (
          <div className="mx-auto grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {historyProjects.map((dt) => (
              <article className="relative w-full aspect-[6/4] rounded-2xl overflow-hidden" key={dt.name}>
                <Image src={dt.cover} alt="preview" fill sizes='100vw' className='object-cover' />
                <div className="absolute w-full h-4/5 bottom-0 left-0 bg-gradient-to-t from-secondary to-transparent px-5 py-6 grid items-end text-[#fff]">
                  <div className='flex justify-between items-end gap-4'>
                    <div>
                    <span className="text-xs md:text-sm">{dt.category}</span>
                      <h3 className="text-base md:text-lg font-medium">{dt.name}</h3>
                    </div>
                    {dt.link ? (
                      <a href={dt.link} target="_blank" rel="noreferrer" className="py-1 px-2 text-lg sm:text-xl bg-primary-80 transition duration-300 hover:shadow-sm hover:shadow-primary-60 rounded-md">
                        <i className="ri-link"></i>
                      </a>
                    ) : (
                      dt.video ? (
                        <div onClick={() => {setShowModal(!showModal); setVideo(dt.video ? dt.video : ''); setTitleOfModal(dt.name)}} className="py-1 px-2 text-lg sm:text-xl bg-primary-80 transition duration-300 hover:shadow-sm hover:shadow-primary-60 rounded-md cursor-pointer">
                          <i className="ri-movie-line"></i>
                        </div>
                      ) : (
                        (dt.images.length > 0) && (
                          <div onClick={() => {setShowModal(!showModal); setSlides(dt.images); setStyle(dt.style ? dt.style : ''); setTitleOfModal(dt.name)}} className="py-1 px-2 text-lg sm:text-xl bg-primary-80 transition duration-300 hover:shadow-sm hover:shadow-primary-60 rounded-md cursor-pointer">
                            <i className="ri-image-line"></i>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className='my__container h-20 grid place-items-center'>
        <span className='sm:text-base text-sm text-primary-60'>© Nq. All rigths reserved</span>
      </footer>

      <Modal title={titleOfModal} showModal={showModal} closeModal={closeModal}>
        <Carousel slides={slides} video={video} style={style} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </Modal>
    </>
  )
}

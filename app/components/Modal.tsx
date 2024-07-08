import React from 'react'

type Props = {
  title: string,
  showModal: boolean,
  closeModal: () => void
  children: React.ReactNode,
}

const Modal = ({ title, showModal, closeModal, children }: Props) => {

  return (
    <div className={"fixed top-0 left-0 w-full h-full backdrop-blur-md transition-all duration-[0.3s] z-[5] " + ((showModal === true) ? "visible opacity-100" : " invisible opacity-0")}>
      <div className={"fixed max-h-[97%] w-full max-w-[97%] p-8 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-2xl shadow-sm transition-all duration-[0.3s] overflow-auto " + ((showModal === true) ? "translate-y-0" : " translate-y-[10%]")}>
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-medium">{title}</h1>
          <button onClick={closeModal} className="w-[30px] h-[30px] grid place-items-center bg-tertiary rounded-full"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="py-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
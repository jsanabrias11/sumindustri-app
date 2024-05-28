import React from 'react';
import { LessThan, MenuFooter } from "../../components"

export const ModalMain = ({children, fnModal}) => {
  return (
    <div className='bg-white absolute top-0 left-0 w-full h-full'>
      <header className="flex items-center text-white px-6 p-4 bg-dark">
            <button onClick={() => fnModal(false)}>
                <LessThan stroke='#ffff'/>
            </button>
            
            <h1 className="ml-4 font-semibold">Calculo</h1>            
        </header>
      {children}
    </div>
  )
}

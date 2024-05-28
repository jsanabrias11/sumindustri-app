import React from 'react';
import { Layout, UserIcon, MenuFooter } from '../../components';


export const Home = () => {
  return (
    <>
      <main className='font-playfair  container-center'>
        <header className='px-8 py-4'>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='text-2xl font-medium  italic'>Hello!</h2>
              <span className='text-4xl font-medium'>Cara e' Empanada</span>
            </div>

            <div>
              <UserIcon className='w-12 h-12'/>
            </div>
          </div>
        </header>
        <Layout>
          <p>Que desea realizar lloricaga?</p>
        </Layout>
        <MenuFooter />
      </main>
    </>
  )
}

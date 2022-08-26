import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Search() {
  return (
    <div>
      <Header />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6 '>
            <p className='text-xs'>2 day stay</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays In Dehradun</h1>
            <div className='hidden lg:inline-flex mb-5 text-gray-800 space-x-3 whitespace-nowrap'>
                <p className='button'>Cancelation Flexibility</p>
                <p className='button'>Types of Places</p>
                <p className='button'>Prices</p>
                <p className='button'>Rooms and lists</p>
                <p className='button'>More Filters</p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import format from 'date-fns/format'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'


function Search({searchResults}) {
  const router=useRouter();

  const {location,startDate,endDate,numberOfGuests}= router.query;
//   console.log(new Date(startDate));
  const formattedStartDate=format(new Date(startDate),"dd MMMM yy");
  
  const formattedEndDate =format(new Date(endDate),"dd MMMM yy");
  const range= `${formattedStartDate} - ${formattedEndDate}`;
 
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6 '>
            <p className='text-xs'>300+ stays  {range}  for {numberOfGuests} guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays In {location}</h1>
            <div className='hidden lg:inline-flex mb-5 text-gray-800 space-x-3 whitespace-nowrap'>
                <p className='button'>Cancelation Flexibility</p>
                <p className='button'>Types of Places</p>
                <p className='button'>Prices</p>
                <p className='button'>Rooms and lists</p>
                <p className='button'>More Filters</p>
            </div>
            <div className='flex flex-col'>
            {searchResults.map(({img,title,description,star,price,total})=>(
                 <InfoCard 
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                 />
            ))}
            </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-width-[600px]'>
          <Map searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps(){
  const searchResults=await fetch("https://links.papareact.com/isz").then(
    res=>res.json()
  )
  
  return {
    props:{
        searchResults
    }
  }
}

import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import XlCard from '../components/XlCard'
import Footer from '../components/Footer'



export default  function Home({exploreData,largeCard}:any){
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
     <Header />
      {/* banner */}
      <Banner />
     <main className='max-w-7xl mx-auto px-8 sm:px-16'>
       <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          {/* server data */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img,location,distance}:any)=>(
            <SmallCard 
            key={location}
            img={img}
            location={location}
            distance={distance}
            />
          ))}
          </div>
       </section>
       <section >
         <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          {/* server data */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {largeCard?.map(({img,title}:any) => (
            <LargeCard 
             key={img}
             img={img}
             title={title}
            />
      ))}
           
          </div>
       </section>
       <section>
        <XlCard 
         img="https://links.papareact.com/4cj"
         title="The Greatest outdoor"
         description='Wishlist curated by airbnb'
         buttontext='Get Inspired'
        />
       </section>
     </main>
     <Footer/>
    </div>
  );
}




export async function getStaticProps() {
  const exploreData= await fetch('https://links.papareact.com/pyp').then(
    (res)=>res.json()
    );
  const largeCard=await fetch('https://links.papareact.com/zp1').then(
    (res)=>res.json()
  );
  return{
    props:{
      exploreData,
      largeCard
    }
  }
  }
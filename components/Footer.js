import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is notareal site</p>
        <p>Itsapretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Airbnb</p>
     </div>
    <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold">HOST</h5>
      <p>React</p>
      <p>Airbnb Presents</p>
      <p>Zero to Full Stack Hero</p>
      <p>Hundreds of Students</p>
     <p>Join Now</p>
</div>
<div className="space-y-4 text-xs text-gray-800">
  <h5 className="font-bold">SUPPORT</h5>
  <p>Help Centre</p>
  <p>Trust&Safety</p>
  <p>Say Hi YouTube</p>
  <p>Easter Eggs</p>
  <p>For the Win</p>
 </div>
</div>
  )
}

export default Footer

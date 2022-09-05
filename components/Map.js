import { useState } from 'react'
import ReactMapGl,{Marker,Popup} from'react-map-gl'
import getCenter from 'geolib/es/getCenter';
import {LocationMarkerIcon} from '@heroicons/react/solid'

// import 'mapbox-gl/dist/mapbox-gl.css';




function Map({searchResults}) {
    const [selectedLocation,setSelectedLocation]=useState({});
    
   //transformation of object
   const coordinates=searchResults.map(result=>({
     latitude:result.lat,
     longitude:result.long
   }))
   const center = getCenter(coordinates);
   const [viewPort,setViewPort]=useState({
    width:'100vw',
    height:'100vh',
    longitude:center.longitude,
    latitude:center.latitude,
    zoom: 11,
    });
   return (
    <ReactMapGl
    initialViewState={viewPort}
    mapStyle="mapbox://styles/sumit-sati/cl7odz1t1001v14qut2rc4t4u"
    mapboxAccessToken={process.env.mapbox_key}
    onViewportChange={(nextViewport)=>setViewPort(nextViewport)}
    >
    {searchResults.map(result=>(
            <div key={result.long}>
             <Marker 
             longitude={result.long}
             latitude={result.lat}
             offsetLeft={-20}
             offsetTop={-10}
             >
                <p
                aria-label='push-pin'
                className='animate-bounce cursor-pointer text-2xl'> 
                <LocationMarkerIcon className="h-6 w-6 text-red-500"  onClick={()=>setSelectedLocation(result)}/>
                </p>
                </Marker>
                {/* Popup shows on click of marker */}
                {selectedLocation.long===result.long ?(
                 <Popup 
                 onClose={()=>setSelectedLocation({})}
                 closeOnClick={true}
                 latitude={result.lat}
                 longitude={result.long}
                 >{result.title}
                 </Popup>
                ):(
                  false
                )
                }
            </div>
        ))}
    </ReactMapGl>
    
  )
}

export default Map

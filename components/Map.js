import { useState } from 'react'
import ReactMapGl,{Marker,Popup} from'react-map-gl'
import getCenter from 'geolib/es/getCenter';


function Map({searchResults}) {
    const [selectedLocation,setSelectedLocation]=useState({});
   //transformation of object
   const coordinates=searchResults.map(result=>({
     latitude:result.lat,
     longitude:result.long
   }))
   const center = getCenter(coordinates);
   const [viewPort,setViewPort]=useState({
    width:'100%',
    height:'100%',
    latitude:center.latitude,
    longitude:center.longitude,
    zoom:11
    });
   return (
    <ReactMapGl
    mapStyle="mapbox://styles/sumit-sati/cl7k8prn9006614qgsilc495z"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewPort}
    onViewPortChange={(nextViewPort)=>setViewPort(nextViewPort)}
    >
        {searchResults.map(result=>(
            <div key={result.long}>
             <Marker
             longitude={result.long}
             latitude={result.lat}
             offsetLeft={-20}
             offsetTop={10}
             >
                <p onClick={()=>setSelectedLocation(result)}><img height='100%' width='100%' src='../mark.jpeg'/></p></Marker>
            </div>
        ))}
    </ReactMapGl>
    
  )
}

export default Map

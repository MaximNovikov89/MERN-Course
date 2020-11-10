// import React, { useRef, useEffect } from 'react';

// import './Map.css';

// const Map = props => {
//     const mapRef = useRef();
//     const { center, zoom } = props;

//     useEffect(() => {
//         const map = new Window.google.maps.map(mapRef.current,
//             {
//                 center: center,
//                 zppm: zoom
//             });

//         new Window.google.maps.marker(
//             {
//                 position: center,
//                 map: map
//             });
//     }, [center, zoom]);



//     return (
//         <div ref={mapRef} className={`map${props.className}`} style={props.style}>

//         </div >
//     )
// }

// export default Map;

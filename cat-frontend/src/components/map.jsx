import React, { useRef, useEffect, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { Style, Icon } from 'ol/style';

const MapView = ({ coordinates }) => {
  let address = coordinates
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    const initialView = new View({
      center: fromLonLat([coordinates[0], coordinates[1]]),
      zoom: 18,
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46], // Adjusts the positioning of the icon
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Example custom icon (a red pin)
        scale: 0.1 // Scales the icon size
      })
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([coordinates[0], coordinates[1]])),
    });

    marker.setStyle(iconStyle);

    const newMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [marker]
          })
        })
      ],
      view: initialView,
    });

    setMap(newMap);
    setView(initialView);

    return () => newMap.setTarget(undefined);
  }, [coordinates]);

  const resetView = () => {
    view.setCenter(fromLonLat([coordinates[0], coordinates[1]]));
    view.setZoom(18);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      alert('Address copied to clipboard!');
    }, (err) => {
      alert('Failed to copy address: ', err);
    });
  };

  return (
    <div className='my-5'>
      <h1 className='text-teal-800 md:text-center text-md font-semibold my-3'>View Location on Map:</h1>
      <div ref={mapRef} style={{ width: '100%', height: '300px' }}></div>
      <button className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={resetView}>Reset View</button>
      <button className="ml-2 mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={copyAddress}>Copy Address</button>
    </div>
  );
};

export default MapView;


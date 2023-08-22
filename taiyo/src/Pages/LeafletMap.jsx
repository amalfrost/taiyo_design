import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import axios from 'axios';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


export default function LeaftLetMap() {

  const [countriesData, setCountriesData] = useState([]);

  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });
  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        setCountriesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className=''>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '96vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map(country => (
         <Marker
         key={country.countryInfo.iso2}
         position={[country?.countryInfo?.lat, country?.countryInfo?.long]}
         icon={defaultIcon} // Use the default marker icon
       >
          <Popup  >
            <div>
              <h2>{country.country}</h2>
              <p>Total Active Cases: {country.active}</p>
              <p>Total Recovered Cases: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

// export default LeaftLetMap;

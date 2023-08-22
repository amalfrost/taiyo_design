import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import{ Charts as Chartsjs } from 'chart.js/auto'
import {AiOutlineArrowDown} from "react-icons/ai"
import Home from './Home';
import LeaftLetMap from './LeafletMap';
// import LeaftLetMap from 'taiyo/src/Pages/LeaftLetMap';
// import Lea

function Charts() {
  const [chartData, setChartData] = useState(null);
  const [showChart, setShowChart] = useState(true)
  const [showGraph, setShowGraph] = useState(true)

  

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries')
      .then((res) => {
        if (res.data.length > 0) {
          const data = {
            labels: res.data.map((item) => item.country),
            datasets: [
              {
                label: 'Cases',
                data: res.data.map((item) => item.cases),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
              },
              {
                label: 'Deaths',
                data: res.data.map((item) => item.deaths),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                // fill: true,
              },
            ],
          };

          setChartData(data);
        } else {
          console.log('No data found');
        }
      })
      .catch((err) => console.log('Error: ' + err));
  }, []);

  return (
    <div>
      <div className='flex'>
      <h1 className='w-full bg-purple-900 text-white text-2xl  ' >Covid Chart  </h1>
      <AiOutlineArrowDown className={` cursor-pointer bg-purple-900 relative right-8 top-1 text-2xl
       ${showChart && "rotate-180"} text-white `}
      onClick={()=>setShowChart(!showChart)}
      />
      </div>
      {
        showChart &&
        <div className={`duration-300 transform w-full md:w-1/2 lg:w-2/3 xl:w-3/4`}>
        {chartData && (
          <div className=''>
            <Line data={chartData} />
          </div>
        )}
      </div>
    }
    <div className='flex mt-5'>
      <h1 className='w-full bg-purple-900 text-white text-2xl  ' >Covid Chart  </h1>
      <AiOutlineArrowDown className={` cursor-pointer bg-purple-900 relative right-8 top-1 text-2xl
       ${showGraph && "rotate-180"} text-white `}
      onClick={()=>setShowGraph(!showGraph)}
      />
      </div>
      {
        showGraph && 
    // <Home/>
      <LeaftLetMap/>
      }

      
      </div>
  );
}

export default Charts;

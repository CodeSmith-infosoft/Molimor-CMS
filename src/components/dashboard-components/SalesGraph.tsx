// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const SalesGraph = () => {
//   const chartData = {
//     series: [
//       {
//         name: "Sales",
//         data: [120, 200, 150, 300, 280, 400, 350],
//       }
//     ],
//     options: {
//       chart: {
//         type: 'area',
//         height: 350,
//         zoom: {
//           enabled: false
//         }
//       },
//        colors: ['#E31E24'],
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'smooth'
//       },
//       title: {
//         text: 'Monthly Sales Report',
//         align: 'left'
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
//       },
//       yaxis: {
//         opposite: false
//       },
//       legend: {
//         horizontalAlign: 'left'
//       }
//     }
//   };

//   return (
//     <section className='sales-graph'>
//       <h3>Sales Graph</h3>
//       <ReactApexChart
//         options={chartData.options}
//         series={chartData.series}
//         type="area"
//         height={350}
//       />
//     </section>
//   );
// };

// export default SalesGraph;

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesGraph = () => {
    const [range, setRange] = useState<'week' | 'month' | 'year'>('week');

    // Demo data
    const chartDataMap = {
        week: [200, 210, 320, 250, 270, 400, 230],
        month: [220, 300, 250, 320, 400, 380, 290, 310, 330, 300, 270, 350],
        year: [150, 200, 180, 300, 280, 400, 390, 410, 420, 440, 470, 500]
    };

    const chartData = {
        series: [
            {
                name: "Sales",
                data: chartDataMap[range]
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 265,
                toolbar: { show: false }
            },
            colors: ['#FF0000'],
            stroke: {
                curve: 'straight',
                width: 2
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#fff5f5'],
                    opacityFrom: 0.5,
                    opacityTo: 0.05,
                    stops: [0, 90, 100]
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                y: {
                    formatter: val => `$${val.toFixed(2)}`
                }
            },
            xaxis: {
                categories: range === 'week'
                    ? ['10', '11', '12', '13', '14', '15', '16']
                    : range === 'month'
                        ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                tickAmount: 6
            },
            yaxis: {
                min: 0,
                max: 500,
                tickAmount: 5
            },
            grid: {
                borderColor: '#ccc',
                strokeDashArray: 4,
            }
        }
    };

    return (
        <section className='sales-graph'>
            <div className="sales-graph-title d-flex justify-content-between items-center mb-4">
                <h3 className="text-lg font-semibold">Sales Graph</h3>
                <div className="btn flex space-x-2 bg-[#fff5f5] p-1 rounded-lg">
                    {['week', 'month', 'year'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setRange(type as 'week' | 'month' | 'year')}
                            className={`px-3 py-1 rounded-md font-medium transition-all duration-200 ${range === type
                                    ? 'bg-white text-red-600 border border-red-500'
                                    : 'text-black border-0'
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>


            </div>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={265}
            />
        </section>
    );
};

export default SalesGraph;

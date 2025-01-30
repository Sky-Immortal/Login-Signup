import React, { useState, useEffect } from 'react';
import './Statistics.css';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import Papa from 'papaparse';
import statisticsData from './statistics_data.csv';

Chart.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

const Statistics = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [selectedFilter, setSelectedFilter] = useState('1w');

  useEffect(() => {
    Papa.parse(statisticsData, {
      download: true,
      header: true,
      complete: (result) => {
        const parsedData = result.data;
        const currentDateString = '12/30';
        const currentIndex = parsedData.findIndex(item => item.Date === currentDateString);
        let startIndex;

        if (selectedFilter === '1W') {
          startIndex = Math.max(currentIndex - 6, 0);
        } else if (selectedFilter === '1M') {
          startIndex = Math.max(currentIndex - 29, 0);
        } else if (selectedFilter === '6M') {
          startIndex = Math.max(currentIndex - 179, 0);
        } else if (selectedFilter === '1Y') {
          startIndex = Math.max(currentIndex - 364, 0);
        }

        const chartData = parsedData.slice(startIndex, currentIndex + 1);
        setData({
          labels: chartData.map(item => item.Date),
          datasets: [
            {
              label: 'Income',
              data: chartData.map(item => parseInt(item.Income, 10)),
              fill: false,
              backgroundColor: 'blue',
              borderColor: 'blue',
              tension: 0.4,
              pointRadius: selectedFilter === '6m' || selectedFilter === '1y' ? 0 : 3, // Remove circles for '6m' and '1y'
              pointHoverBackgroundColor: '#848484',
              pointHoverBorderColor: '#848484', // Change circle color on hover
            },
          ],
        });
      },
    });
  }, [selectedFilter]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10000,
          callback: function(value) {
            return '$' + value / 1000 + 'k';
          },
        },
        grid: {
          borderDash: [5, 5],
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 7,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="statistics-container outer-container margin-space">
      <div className="stat-box-title">
        <div className="title-container">Statistics</div>
        <div className="filter-container">
          <ul className="filter-list">
            {['1D', '1W', '1M', '6M', '1Y'].map(filter => (
              <li
                key={filter}
                className={`filter-item ${selectedFilter === filter ? 'selected' : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="stat-box-content">
        <Line data={data} options={options} />
        <div className="keys-container">
          <div className="key">
            <span className="key-color" style={{ backgroundColor: 'blue', width: '10px', height: '10px' }}></span>
            <span className="key-label">Income</span>
          </div>
          <div className="key">
            <span className="key-color" style={{ backgroundColor: '#848484', width: '10px', height: '10px' }}></span>
            <span className="key-label">Current State</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
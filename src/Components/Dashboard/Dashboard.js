import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(Response => Response.json())
            .then(data => setChart(data));
    }, [])
    return (
        <div>
            <div className="chart-flex">
                <div className="chart-one">
                    <h3 id='chart-title'>MONTH WISE SELL</h3>
                    <LineChart width={450} height={300} data={chart}>
                        <Line type="monotone" dataKey={'sell'} />
                        <XAxis dataKey={'month'}></XAxis>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div className="chart-two">
                    <h3 id='chart-title'>BarChart WISE SELL</h3>
                    <BarChart width={450} height={300} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={'sell'} fill="#8884d8" />
                        <Bar dataKey={'month'} fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';
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
                    <LineChart width={500} height={300} data={chart}>
                        <Line type="monotone" dataKey={'sell'} />
                        <XAxis dataKey={'month'}></XAxis>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
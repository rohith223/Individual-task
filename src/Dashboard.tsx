import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './dashboard.css'; // Import your custom dashboard styles here
import image from './logo2.png';

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="dashboard-container">
            <div className="side-nav">
                <ul className="side-nav-items">
                <li><img src={image} ></img></li>
                    <li>Dashboard</li>
                    <li>Time sheet</li>
                    <li>Leave</li>
                    <li>Work From Home</li>
                    <li>Survey</li>
                    <li>Service Desk</li>
                    <li>Forms</li>
                    <li>Travel</li>
                    <li>Expenses</li>
                    <li><Link to="/profile">Profile</Link></li> 
                </ul>
                <button className="dashboard-logout-button" onClick={() => navigate("/")}>
    <i className="fas fa-sign-out-alt"></i> Rohith
</button>



            </div>
        </div>
        
        </>
    );
}

export default Dashboard;

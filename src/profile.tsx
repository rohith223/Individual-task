import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import image from './logo2.png';
import logo from './emp.png'

interface UserData {
    id: number;
    Name: string;
    email: string;
    mobile: string;
    address: string;
    job: string;
    blood: string;
    hobby: string;
    // Add more properties as needed
}

const Profile = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);

useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
        setUserEmail(storedUserEmail);

        
        fetch(`http://localhost:8086/users?email=${storedUserEmail}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (data.length > 0) {
                    setUserData(data[0]); 
                }
            })
            .catch(err => console.error(err)); 
    }
}, []);


    return (
        <div className="dashboard-container">
            <div className="side-nav">
            <ul className="side-nav-items">
                <li><img src={image} height={'40px'}></img></li>
                    <li>Dashboard</li>
                    <li>Time sheet</li>
                    <li>Leave</li>
                    <li>Work From Home</li>
                    <li>Survey</li>
                    <li>Service Desk</li>
                    <li>Forms</li>
                    <li>Travel</li>
                    <li>Expenses</li>
                    <li>Profile</li> 
                </ul>
                <button className="dashboard-logout-button" onClick={() => navigate("/")}>
    <i className="fas fa-sign-out-alt"></i> Rohith
</button>

            </div>
            <div className="main-content">
            <img src={logo} height={'70px'} width={'70px'} />
                <h2>User Profile</h2>
               
                {userData && (
                    <div>
                        <div className="img">
                      
                        </div>
                        <p>ID: {userData.id}</p>
                        <p>Name: {userData.Name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Mobile: {userData.mobile}</p>
                        <p>Address: {userData.address}</p>
                        <p>Designation: {userData.job}</p>
                        <p>Blood Group: {userData.blood}</p>
                        <p>Hobby: {userData.hobby}</p>
                        
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Profile;

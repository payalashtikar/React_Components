import React, { useState } from 'react';
import './side.css';
import MenuIcon from '@mui/icons-material/Menu';
function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <div className='icon'>
                <MenuIcon onClick={toggleSidebar} />
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>ACADEMICS</a></li>
                    <li><a href='#'>EXPERIENC</a></li>
                    <li><a href='#'>SKILLS</a></li>
                    <li><a href='#'>DOWNLOAD</a> CV</li>
                    <li><a href='#'>CONTACT</a> ME</li>
                </ul>
            </div>
            <div className="content">
                <p>Main Content</p>
            </div>
        </div>
    );
}

export default Sidebar;

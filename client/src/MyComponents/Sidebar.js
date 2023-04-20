import React from "react";
import "./Sidebar.css";
import {Profile} from "./Profile";
import { Avatar } from "./Avatar";

import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

import DownloadIcon from '@mui/icons-material/Download';

export const Sidebar = () => {
    return (
        <div className="sidebar">

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="header">
                <div className="header__start">
                    {/* <Avatar
                    image = "https://pps.whatsapp.net/v/t61.24694-24/299796844_5745883945504494_7764010312982360902_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTzCNAxqD2KHSCzV8A6CU4xdnQ4AdG9U0NJOZIGItcnqg&oe=63C0DF25"
                    /> */}
                </div>

                <div className="header__end">
                    <div><GroupsIcon/></div>
                    <div><DonutLargeOutlinedIcon/></div>
                    <div><ChatIcon/></div>
                    <div><MoreVertOutlinedIcon/></div>
                </div>

            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="search__section">
                <div className="search">
                    <div><SearchIcon/></div>
                    <input type = "text" placeholder = "Search or start a new chat"/>
                </div>
                <div><FilterListIcon/></div>

            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="archived">
                <div><DownloadIcon/></div>
                <p>Archived</p>
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="profiles">
                <Profile
                // image = "https://pps.whatsapp.net/v/t61.24694-24/315365962_3235877679960253_3642309188871164869_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSEWIL_9DaHlcvGYxvxmoqX1lF9tpGko7UPZ3RyTK2K3A&oe=63C0C2F1" 
                sender_name = "Papa" 
                sender_message = "Hello, how are you" 
                sender_time = "8:30 pm"
                />

                <Profile
                // image = "https://pps.whatsapp.net/v/t61.24694-24/287027053_525070865959380_3642528140383201162_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTRz7erKoXdQiT6dIy9kYMcWzuC7xWGXpvKVGp3OLd7vw&oe=63C0C798" 
                sender_name = "Mummy" 
                sender_message = "See this picture" 
                sender_time = "4:30 pm"
                />
                
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

        </div>
    )
}
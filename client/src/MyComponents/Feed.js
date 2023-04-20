import React, { useState } from "react";
import "./Feed.css";

import { Avatar } from "./Avatar";

import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachmentIcon from '@mui/icons-material/Attachment';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

export const Feed = () => {

    const [inputText, setInputText] = useState("");

    const sendMessage = () => {
        console.log("You typed...", inputText);

    }


    return (
        <div className="feed">

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="feed__header">
                <div className="feed__avatar">
                    {/* <Avatar
                    image = "https://pps.whatsapp.net/v/t61.24694-24/315365962_3235877679960253_3642309188871164869_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSEWIL_9DaHlcvGYxvxmoqX1lF9tpGko7UPZ3RyTK2K3A&oe=63C0C2F1"
                    /> */}
                </div>

                <div className="feed__profile">
                    <p className="feed__profile__name">Papa</p>
                    <p className="feed_profile__status">Online</p>
                </div>

                <div className="feed_icons">
                    <div><SearchIcon/></div>
                    <div><MoreVertOutlinedIcon/></div>
                </div>

            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="chat">
                <p className="chat__message chat__receiver">
                {/* <p className={`chat__message ${true && 'chat__receiver'}`}> */}
                    <span className="chat__name">Rishika : </span>
                Hi guys</p>
                
            
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="feed__bottom">
                <div><TagFacesIcon/></div>
                <div><AttachmentIcon/></div>
                <form>
                    <input type= "text" placeholder="Type a message"
                    onChange={(event) => {
                        setInputText(event.target.value);
                    }}/>
                    <button onClick={sendMessage}>Submit</button>
                </form>
                <div><KeyboardVoiceIcon/></div>

            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

        </div>
    )
}
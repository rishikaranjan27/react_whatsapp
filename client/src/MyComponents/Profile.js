import React from "react";
import "./Profile.css";
import { Avatar } from "./Avatar";

export const Profile = ({image, sender_name, sender_message, sender_time}) => {
    return (
        <div className="profile">

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="sender__profile">
                <Avatar
                image = {image}
                />
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="sender__desc">
                <p className="sender__name">{sender_name}</p>
                <p className="sender__message">{sender_message}</p>
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="sender_time">
                <p>{sender_time}</p>
            </div>

{/* ------------------------------------------------------------------------------------------------------------ */}

        </div>
    )
}
import React from "react";
import "./Avatar.css";

export const Avatar = ({image}) => {
    return (
        <div className="avatar">
            <img src = {image} />
        </div>
    )
}
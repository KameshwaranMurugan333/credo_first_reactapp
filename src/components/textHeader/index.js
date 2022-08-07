import React from "react";

export const TextHeader = (props) => {
    return <div>
        <p><b>{props.title}</b></p>
        <p>{props.subTitle}</p>
    </div>
}
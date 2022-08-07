import React from "react";

export const Input = (props) => {
    return <div>
        <input id={props.id} value={props.value} onChange={(e) => props.onChange(e.target.value)} type={props.type} />
    </div>
}
import React from "react";

export const withHOC = (Component) => (props) => {
    return <>
        <p>I am from HOC</p>
        <Component {...props} />
    </>
}
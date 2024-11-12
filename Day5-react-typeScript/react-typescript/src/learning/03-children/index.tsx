import React from "react";

type ComponetProps ={
    name:string;
    id:number;
    children: React.ReactNode
}
const Component3 = (props:ComponetProps) : JSX.Element => {
    const {name,id,children} = props
    return (
        <div>
            <h1>{name}</h1>
            {/* <h1>This is children</h1> */}
            {children}
            <h1>{id}</h1>
        </div>
    );
};

export default Component3;
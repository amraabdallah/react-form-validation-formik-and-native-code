import { useState } from "react";
import Login from "./Login";
import Register from "./Register";



export default function Auth(){
    const [toggle, setToggle] = useState(true);

    const buttonStyle = {
        position: "absolute",
        top: "16%",
        left: "48%",
    }

    return (
        <>
        { toggle ? <Login/> : <Register/> }
        <button style={buttonStyle} className="btn btn-primary" onClick={() => setToggle(!toggle)}>Switch</button>
        </>
    );
}
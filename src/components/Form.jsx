import React, { useState } from "react";
import Input from "./Input";

function Form(props){

    const [isMousedOver, setMouseOver] = useState(false);
    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }

    return (
        <form className="form">
        <Input 
            type="text"
            placeholder="Username"
        />
        <Input 
            type="password"
            placeholder="Password"
        />
        {!props.isRegistered && <Input 
            type="password"
            placeholder="Confirm Password"
        /> }
        
        <button 
        style={{backgroundColor: isMousedOver ? "#2e7473" : "white"}} 
        type="submit"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >{props.isRegistered ? "Login" : "Register"}</button>
      </form>
      );
}

export default Form;
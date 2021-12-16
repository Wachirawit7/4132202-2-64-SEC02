import React, {useState} from "react";

const dom = (
    <>
      <h1>Hello React !!!</h1>,
      <p>My name is Name</p>;
    </>
  );

function Car() {
    const [color, setColor]= useState("red");

const id = "630112418054";
return (
    <>
    {dom}
    <p>ID : {id}</p>
    <p>My color is {color}</p>
    <button
        onClick={()=> {
        setColor("blue");
        }}
    >
            CHANGE
            </button>
    </>
    );
}

export default Car

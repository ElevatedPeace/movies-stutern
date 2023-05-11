import React from 'react'
import {useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "yellow", color: "black", margin: "5px" }}
      >
        Go back
      </button>
    </div>
  )
}

export default Button

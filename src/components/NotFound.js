import React from "react";
import Button from "./Button";
import "./styles/NotFound.css"

const NotFound = () => {
  return (
    <div style={{color: "black" }}>
      <Button />
      <div className="notfound" style={{textAlign:"center", marginTop:"20px"}}>
      <h2>404</h2> 
      <b>File not found</b>
      <p>The site configured at this address does not contain
      the requested file. </p>
      <p>If this is your site, make sure that the filename case
      matches the URL. For root URLs (like http://example.com/) you must provide
      an index.html file.</p> 
      <p><a href="github.com">Read the full documentation</a></p> for more information about
      using <b>GitHub Pages.</b> 
      <div>GitHub Status — @githubstatus</div>
      </div>
    </div>
  );
};

export default NotFound;

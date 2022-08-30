import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

interface Props {
    link: string
}

function PhotoViewer({link}: Props) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="photo">               
             <img src={link} alt="image loading"/>
        </div>
    );
}
export default PhotoViewer;


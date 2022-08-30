import React from "react";  // import React (to provide access to TSX)
import './ImageSelector.css';

interface Props {
    setImgID: React.Dispatch<React.SetStateAction<number>>
}

function getImgIDs(): number[] {
    const imgIDs = [];

    for (let i = 1; i <= 10; i++) {
        
        imgIDs.push(i);
    }

    return imgIDs;
}

function ImageSelector({setImgID}: Props){
    const imgIDs = getImgIDs();
    
    return (
    <div className="image-bank">
        {imgIDs.map((img : number) =>
            <img onClick={() => setImgID(img)} key={img} className="thumbnail" src= {`https://picsum.photos/id/${img}/400/300.jpg`} alt="image loading"/>
            )}
    </div>
    )
} 

export default ImageSelector;




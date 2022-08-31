import React from "react";  // import React (to provide access to TSX)
import './ImageSelector.css';

interface Props {
    imgID: number
    setImgID: React.Dispatch<React.SetStateAction<number>>
}

function getImgIDs(): number[] {
    const imgIDs = [];
    for (let i = 1; i <= 20; i++) {
        imgIDs.push(i);
    }
    return imgIDs;
}

function scrollUp() {
    window.scrollTo(0, 0);
}

function ImageSelector({imgID, setImgID}: Props){
    const imgIDs = getImgIDs();
    return (<>
        {imgIDs.map((img : number) =>
            <img onClick={() => setImgID(img)}
                key={img}
                className={`thumbnail ${imgID === img ? 'selected' : ''}`}
                src={`https://picsum.photos/id/${img}/400/300.jpg`}
                alt="image loading"/>
            )}
    </>)
} 

export default ImageSelector;
import React from "react";  // import React (to provide access to TSX)

function getImgUrls(): any {
    const imgUrls = [];

    for (let i = 1; i <= 10; i++) {
        const imageNumberString = i.toString();
        imgUrls.push(`https://picsum.photos/id/${imageNumberString}/200/300.jpg`)
    }

    return imgUrls;
}

function ImageSelector(){
    const imgUrls = getImgUrls();
    
    return (
    <div className="bankimage">
        {imgUrls.map((img : string) =>
            <img src={img} alt="image loading"/>)}
    </div>
    )
} 

export default ImageSelector;




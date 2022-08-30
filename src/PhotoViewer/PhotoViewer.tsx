interface Props {
    link: string
}

function PhotoViewer({link}: Props) {    // declare and export new function called 'PhotoViewer'
    return ( <img src={link} alt="image loading"/> );
}
export default PhotoViewer;
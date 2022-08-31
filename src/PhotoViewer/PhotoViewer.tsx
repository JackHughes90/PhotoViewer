interface Props {
    link: string
}

function PhotoViewer({link}: Props) {
    return ( <img src={link} alt="image loading"/> );
}
export default PhotoViewer;
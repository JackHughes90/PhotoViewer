import { useState } from 'react';
import './App.css';
import PhotoViewer from './PhotoViewer/PhotoViewer';
import ImageSelector from './PhotoViewer/ImageSelector';

function App() {
  const [imgID, setImgID] = useState(1);
  
  return (
      <>
          <h1>React Photo Viewer</h1>
          <div className='photoViewer'>
            <PhotoViewer link={`https://picsum.photos/id/${imgID}/800/400.jpg`} />
          </div>
          <h2>Select a photo:</h2>
          <div className='imageSelector'>
            <ImageSelector imgID={imgID} setImgID={setImgID}/>
          </div>
      </>
  );
}

export default App

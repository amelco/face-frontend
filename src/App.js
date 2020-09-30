import React from 'react';
import Upload from './Upload.js'
import Album from './Album.js'

function App() {
  return (
    <div>
      <h1>Face Cropper</h1>
      <div>
        <Upload/>
      </div>
      <div>
        <Album/>
      </div>
    </div>
  );
}

export default App;

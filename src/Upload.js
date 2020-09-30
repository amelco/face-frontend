import React, { useRef } from 'react'
import S3 from 'react-aws-s3';


function Upload() {
  const inputFile = useRef();

  const handleClick = event => {
    event.preventDefault();

    const file = inputFile.current.files[0];
    console.log(file);

    const config = {
      bucketName: process.env.REACT_APP_BUCKET,
      region: 'us-east-1',
      accessKeyId: process.env.REACT_APP_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET,
      s3Url: 'https://face-detection-nuvens.s3.amazonaws.com/'
    }

    const ReactS3Client = new S3(config);

    ReactS3Client
      .uploadFile(file, file.name).then(data => {
        console.log(data);

      })
      .catch(err => console.error(err));
    };
    
  return (
    <>
      <form className='upload' onSubmit={handleClick}>
        <label>
          Carregar arquivo:
          <input type='file' ref={inputFile} />
        </label>
        <br/>
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default Upload;

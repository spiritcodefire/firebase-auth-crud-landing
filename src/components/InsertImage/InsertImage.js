import React, { useState } from 'react'
import { storage } from '../../utils/firebaseConfig'

const InsertImage = () => {

    const [image, setImage] = useState(null) ;
    const [url, setUrl] = useState("") ;
    const [progress, setProgress] = useState(0) ;

    const handleChange = e => {
        if (e.target.files[0]) {
           // console.log(e.target.files[0]);
            setImage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        console.log('handleUpload Open');
        const uploadTask = storage.ref(`images/${image.name}`).put(image) ;
        uploadTask.on(
            "state_changed",
            snapshot => {
               const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                ) ;
                setProgress(progress)
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                   console.log(url)
                    setUrl(url)
                })
            }
        )
    } ;
    
   // console.log("image:", image);

    return (
        <div>
            <progress value={progress} max="100" />
            <br />
            <input type="file"  onChange={handleChange} />
            <button onClick={handleUpload} className='btn btn-primary'>Upload</button>
            <br />
            {url && 
                <div>
                    {url}
                    <img src={url} alt="fb-temouna" />
                </div>
            }
            
        </div>
    )
}

export default InsertImage

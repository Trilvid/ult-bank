/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { MdUpload, MdAccountCircle} from 'react-icons/md'
import axios from "axios";
import { Image, CloudinaryContext } from "cloudinary-react";
import Dropzone  from "react-dropzone";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  
const Profile = () => {

  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "qvpwrd05");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/ult-bank/image/upload",
        formData
      );
      setUploadedFile(res.data);
      setImageUrl(res.data.secure_url);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="space">
        <h3>update my profile</h3>
    </div>

    <div className='part'>
      <div className='picx'>
        <span>
      <Dropzone onDrop={onDrop}>
        {/* name for this file is imageUrl */}
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} id="pic"/>
          </div>
        )}
      </Dropzone>
      {imageUrl && (
        <div>
          <CloudinaryContext cloudName="ult-bank" className='dropMine'>
          {/* { userData ? userData.photo : <MdAccountCircle style={{color: "#cccccc"}}/>} */}
            <Image publicId={imageUrl} />
          </CloudinaryContext>
        </div>
      )}
        </span>
        <label htmlFor="pic" className='icxx'><MdUpload /></label>

      </div>

      <div className="profile">
        <form action="#">
          <span>
            <label htmlFor="name">firstname:</label>
            <input type="text" name="firstname" id="name" />
          </span>

          <span>
            <label htmlFor="last">lastname:</label>
            <input type="text" name="lastname" id="last" />
          </span>

          <span>
            <label htmlFor="usernom">username:</label>
            <input type="text" name="username" id="usernom" />
          </span>

        </form>
          <span>
            <button><span>proceed</span></button>
          </span>

      </div>
    </div>
    </>
  )
}


export default Profile
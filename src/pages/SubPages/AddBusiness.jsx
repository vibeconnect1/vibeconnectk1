
import React, { useRef, useState } from 'react'


const AddBusiness = () => {
  const [logo, setLogo]= useState()
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <section>
      <div>
      <div>
        <input
          type='file'
          className='pointer-events-none absolute opacity-0'
          
        />
        <div className='flex items-center justify-between'>
          <button
             onClick={() => handleUploadButtonClick()}
          >
            Upload logo
          </button>

          {/* <div className='h-10 w-10'>{logo && <img src={logo} alt='image' />}</div> */}
        </div>
      </div>
      </div>
    </section>
  )
}

export default AddBusiness

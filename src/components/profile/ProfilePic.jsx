import React, {useState} from 'react'

export default function ProfilePic() {
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if(file){
        setImage(file)
        const reader = new FileReader()
        reader.onloadend = () => {
            setImageUrl(reader.result)
            }
            reader.readAsDataURL(file)
            }
    
    }
  
  const handleUpload = () => {
    if (setImage){
    const formData = new FormData()
    formData.append('image', image)
    const uploadUrl = ''
    fetch(uploadUrl, {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            })
        .catch(error => {
            console.error(error)
        })
      }
  }
  
    return (
    <div>
        <input type='file' accept='image/*' onChange={handleFileChange} />
        {imageUrl && <img src={imageUrl} alt='profile' />}
        <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

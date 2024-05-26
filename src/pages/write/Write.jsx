import React, {useState} from 'react'
import { useDropzone } from 'react-dropzone'
import './write.css'

export default function Write() {
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState({})

    const{ getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setImage(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }))
            setErrors((prevErrors) => ({...prevErrors, image:null}))
            }
    })

    const handleTextChange = (event) => {
        setText(event.target.value)
        setErrors((prevErrors) => ({...prevErrors, text:null}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let valid = true
        let newErrors = {}

        if(!text){
            valid = false
            newErrors.text = 'Please enter some text'
        }

        if(!image){
            valid = false
            newErrors.image = 'Please upload an image'
        }

        if(!valid){
            setErrors(newErrors)
            return
        }

        console.log('Text:', text)
        console.log('Image:', image)
    }
  
    return (
     <div className=''>
        <img className='writeImg' src='https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhardgross-1287145.jpg&fm=jpg' alt=''/>
        <h2>Submit your post 😁</h2>
        <form onSubmit={handleSubmit} className='writeForm'>
            <div>
                <label style={{display:'block'}}>Text: </label>
                <textarea cols={80} rows={8} value={text} onChange={handleTextChange} />
                {errors.text && <p style={{color: 'red'}}>{errors.text}</p>}
               
            </div>
            <div {...getRootProps()} style={{border:'1px dashed black', padding:'20px', cursor:'pointer'}}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select one</p>
                {image && <img src={image.preview} alt="Preview" style={{maxWidth:'100%', maxHeight:'200px'}}/>}
                {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
            </div>
            <button className='writeSubmit'>Submit</button>
        </form>
     </div>
  )
}

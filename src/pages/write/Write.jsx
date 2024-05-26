import React, { useState } from 'react';
import './write.css';
import { useDropzone } from 'react-dropzone';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImage(Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      }));
      setErrors(prevErrors => ({ ...prevErrors, image: null }));
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {};

    if (!title) {
      valid = false;
      newErrors.title = 'Please enter a title';
    }

    if (!content) {
      valid = false;
      newErrors.content = 'Please enter some content';
    }

    if (!image) {
      valid = false;
      newErrors.image = 'Please upload an image';
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const post = { title, content, image: image.preview, id: Date.now() };
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    existingPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(existingPosts));

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp'
        alt='Nature'
      />
      <h2>Submit your post 😁</h2>
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            {...getInputProps()}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
        </div>
        <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select one</p>
          {image && <img src={image.preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
          {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
}

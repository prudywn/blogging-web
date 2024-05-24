import'./write.css'

export default function Write() {
  return (

    <div className='write'>
        <img className='writeImg' src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp" alt="Nature" />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}} />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
                    </div>
         <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>

         </div>
         <button className="writeSubmit">
            Publish
         </button>
        </form>
    </div>
  )
}

import React from 'react'
import  {useState, useEffect }from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';
const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] =useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async(e) =>{
        e.preventDefault();
        await axios.put (URI+id, {
            title,
            content
        })
        navigate('/');
    }

    
    useEffect(()=>{
      getBlogsById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    const getBlogsById = async()=>{
      const res = await axios.get(URI+id)
      
     setTitle(res.data[0].title)
     setContent(res.data[0].content)
    }


    
  return (
    <> 
        <form onSubmit = {update}>
        <div className="mb-3">
         
          <input 
          type="text"
          value={title}
           className="form-control"
           onChange={(e)=>setTitle(e.target.value) }
           placeholder="Title" />
          
        </div>

        <div className="mb-3">
          
          <input type="text"
          value={content}
           className="form-control"
           onChange={(e)=>setContent(e.target.value) }
           placeholder="Content" />
          
        </div>
                <button className='btn btn-primary' type= "submit">Update</button>
        </form>


    </>
  )
}

export default CompEditBlog
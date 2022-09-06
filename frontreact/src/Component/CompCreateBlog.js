import  {useState }from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] =useState('');
    const navigate = useNavigate();

    const store = async(e) =>{
        e.preventDefault();
        await axios.post (URI, {
            title,
            content
        })
        navigate('/');
    }
  return (
    <> 
        <form onSubmit = {store}>
        <div className="mb-3">
         
          <input 
          type="text"
           className="form-control"
           onChange={(e)=>setTitle(e.target.value) }
           placeholder="Title" />
          
        </div>

        <div className="mb-3">
          
          <input type="text"
           className="form-control"
           onChange={(e)=>setContent(e.target.value) }
           placeholder="Content" />
          
        </div>
                <button className='btn btn-primary' type= "submit">Store</button>
        </form>


    </>
  )
}

export default CompCreateBlog
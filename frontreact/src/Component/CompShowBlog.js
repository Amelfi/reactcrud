
import axios from "axios";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";

const URL ='http://localhost:8000/blogs/'

const CompShowBlog = ()=>{
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        getshowBlogs();
    },[])    
        const getshowBlogs = async()=>{
            const res = await axios.get(URL)
            setBlogs(res.data)
        }
        const deleteBlogs =async (id)=>{
            await axios.delete(`${URL}${id}`)
            getshowBlogs();
        }

        return(  
                   
           <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header"> <span>Informacion</span></div>
                                <div className="card-body">
                                    <table className="table table-striped table-inverse table-responsive">
                                        <thead className="thead-inverse">
                                            <tr>
                                                <th>Title</th>
                                                <th>content</th>
                                                <th>Options</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {blogs.map(blog => (
                                                    
                                                <tr key={blog.id}>
                                                    <td>{blog.title}</td>
                                                    <td>{blog.content}</td>
                                                    <td>
                                                        <Link to={`/edit/${blog.id}`} className="btn btn-success">
                                                        <i className="fa-solid fa-pen"></i>
                                                        </Link>
                                                       
                                                        <button className="btn btn-danger" onClick={()=> deleteBlogs(blog.id)}>
                                                        <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                    ))}
                                            </tbody>
                                    </table>
                                    <Link to={'/create'} className='btn btn-primary'>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </Link>
                                </div>

                            
                        
                        </div>
                    </div>
                
                </div>

            </div>
        )
}
export default CompShowBlog
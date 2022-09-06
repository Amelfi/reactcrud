import BlogsModel from "../models/BlogModel.js";
// Mostrar todos los blogs
export const getAllBlogs = async(req, res) =>{
   try {
    const blogs = await BlogsModel.findAll();
    res.json(blogs)
   } catch (error) {
    res.json({message : error.message})
   }
}
//Mostrar blog por id
export const getBlog = async (req, res)=>{
    try {
        const blog = await BlogsModel.findAll(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(blog)
        
    } catch (error) {
        res.json({message : error.message})
    }
}

// Crear blogs

export const createBlog = async(req, res) =>{
    try {
        await BlogsModel.create(req.body)
        res.json({
            message: "Blog creado exitosamente"
        })
    } catch (error) {
        res.json({message : error.message})
    }
}

// Actualizar un blog por id
export const updateBlog = async(req, res)=>{
    try {
        await BlogsModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            message: "Blog actualizado exitosamente"
        })
    } catch (error) {
        res.json({message : error.message})
    }
  
}

// Eliminar un blog por id

export const deleteBlog = async(req, res)=>{
    try {
        await BlogsModel.destroy({ 
            where:{id:req.params.id}
        })
        res.json({
            message: "Blog eliminado exitosamente"
        })
    } catch (error) {
        res.json({message : error.message})   
    }
}
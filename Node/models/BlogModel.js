import db from "../database/db.js";
import {DataTypes } from "sequelize";


const BlogsModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})
   export default BlogsModel; 
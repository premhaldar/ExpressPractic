export const createTask=(req,res) =>{ 
    return res.json({message:`Task created successfully`});
}
export const readTask=(req,res) =>{
    return res.json({message:`Task read successfully`});
}
export const updateTask=(req,res) =>{
    return res.json({message:`Task update successfully`});
}
export const deleteTask=(req,res) =>{
    return res.json({message:`Task delete successfully`});
}
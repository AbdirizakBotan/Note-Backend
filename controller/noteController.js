const noteSchema = require ("../model/noteModel")
//Create  note
const createNote = async (req,res)=>{
    try{
      const newNote = noteSchema (req.body)
      const saveNote = await newNote.save()

      if(saveNote){
        res.send(saveNote)
      }
    }
    catch(error){
        console.log(error)
    }
}
//read note

const readNote = async (req ,res) =>{
  try{
    const getNote = await noteSchema.find()
    if(getNote){
      res.send(getNote)
    }
  }
  catch(error){
    console.log(error)
  }
}
//delete note

const deleteNote = async (req,res) =>{
  try{
  const deleteData = await noteSchema.deleteOne(
    {_id: req.params.id},
    {$set: req.body}
  )
  if(deleteData){
    res.send("Deleted Note")
  }
  }
  catch(error){
    console.log(error)
  }
}

//update Note

const updateNote = async (req,res)=>{
  try{
  const updateData = await noteSchema.updateOne(
    {_id: req.params.id},
    {$set: req.body}
  )
  if(updateData){
    res.send(updateData)
  }
  }
  catch(error){
    console.log(error)
  }
}
//get single Data

const SingleData = async (req,res)=>{
  try{
    const singleOne = await noteSchema.findOne({
      _id: req.params.id
    })
    res.send(singleOne)
  }catch(error){
    console.log(error)
  }
  
}

module.exports = {createNote,readNote,deleteNote,updateNote,SingleData}
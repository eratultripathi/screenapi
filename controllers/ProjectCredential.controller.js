
import ProjectCredential from "../models/ProjectCredential.js";

export  const postProjectCredential = async (req, res) => {
    const  credential = await req.body
   
    const credentials = await new ProjectCredential(credential)
    try {
      const dataToSave = await credentials.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getProjectCredential= async (req, res) => {
    try {
      const projectcredential = await ProjectCredential.find();
      res.status(200).json(projectcredential);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const deteteProjectCredential =async (req,res)=>{
    try {
      console.log('param', req.params)
      await ProjectCredential.deleteOne({ _id: req.params.id });
      res.send(`Successfully delete project with id ${req.params.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  export const patchProjectCredential= async(req,res)=>{
    try {
      await ProjectCredential.findOneAndUpdate({ _id: req.params.id }, req.body)
          .lean()
          .exec();
      const task = await ProjectCredential.findOne({ _id: req.params.id });
      res.status(200).send(task);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
  }
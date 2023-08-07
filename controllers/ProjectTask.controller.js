
import ProjectTask from "../models/ProjectTask.js";

export  const postProjectTask  = async (req, res) => {
    const  task = await req.body
   
    const projecttasks = await new ProjectTask(task)
    try {
      const dataToSave = await projecttasks.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getProjectTask= async (req, res) => {
    try {
      const projecttasks = await ProjectTask.find();
      res.status(200).json(projecttasks);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const deteteProjectTask =async (req,res)=>{
    try {
      console.log('param', req.params)
      await ProjectTask.deleteOne({ _id: req.params.id });
      res.send(`Successfully delete project with id ${req.params.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  export const patchProjectTask= async(req,res)=>{
    try {
      await ProjectTask.findOneAndUpdate({ _id: req.params.id }, req.body)
          .lean()
          .exec();
      const task = await ProjectTask.findOne({ _id: req.params.id });
      res.status(200).send(task);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
  }
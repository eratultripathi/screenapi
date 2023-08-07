import mongoose from "mongoose";

const projectCredentialSchema = mongoose.Schema({
  
    project: { type: String, require: true },
    addEngineer: { type: String, require: true },
    projectDescription:{ type: String, require: true },
});

const ProjectCredential = mongoose.model("ProjectCredential", projectCredentialSchema);
export default ProjectCredential;
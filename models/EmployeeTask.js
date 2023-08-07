import mongoose from "mongoose";


const employeeprojectSchema = mongoose.Schema({
    title: { type: String, require: false },
    starttime: { type: String, require: true },
    endtime: { type: String, require: true },
    timediff: { type: String, require: true },
    userId: { type: String, require: true },
});


const EmployeeTask = mongoose.model("employeeprojectTask",  employeeprojectSchema);
export default EmployeeTask;
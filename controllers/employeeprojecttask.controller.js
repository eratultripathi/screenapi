

import  EmployeeTask from "../models/EmployeeTask.js"


export const getEmployeeProjectTask  = async (req, res) => {
    try {
        const EmployeeProjectTask = await EmployeeTask.find();
        res.status(200).json({
            EmployeeProjectTask
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error getting events",
            error: error.message
        });
    }
        
    }







import Calendar from "../models/Calendar.js";

export  const postCalendar = async (req, res) => {
    const  calendarEvent = await req.body
   
    const calendars = await new Calendar(calendarEvent)
    try {
      const dataToSave = await calendars.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})

  }
    
  }


  export const getCalendar = async (req, res) => {
    try {
      const eventcalendar = await Calendar.find();
      res.status(200).json(eventcalendar);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

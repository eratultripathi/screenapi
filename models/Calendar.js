import mongoose from "mongoose";

const CalendarSchema = mongoose.Schema({

allDay:{type:Boolean},
end: { type: String},
id:{ type: String},
start:{ type: String},
title:{ type: String}
   
},
{ timestamps: true }
);

const Calendar = mongoose.model("Calendar", CalendarSchema);
export default Calendar;

import mongoose from 'mongoose';


const screenSchema= new mongoose.Schema({
    usersId: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },   
},
{timestamps: true}
);

const Screen= mongoose.model("Screen", screenSchema);
export default Screen;


import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
//Auth
import authRoutes from "./routes/authRoutes.js";
import clientProfileRoutes from "./routes/clientprofile.js";
import employeeProfileRoutes from "./routes/employeeprofile.js";
import projecteRoutes from "./routes/project.js";
import credentialRoutes from "./routes/ProjectCredential.js";
import taskRoutes from "./routes/ProjectTask.js";
import screenRoutes from "./routes/screenshot.js";
import employeeprojecttaskRoutes from "./routes/employeeprojecttask.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());





// register the routes
app.use("/api/auth", authRoutes);

app.use("/api/engineer",employeeProfileRoutes);

// app.get("/api/screenshort", async (req, res) => {
//   const tasks = await  User.find()
//   res.send(tasks)
// })

app.use("/api/client",clientProfileRoutes);

app.use("/api/project",projecteRoutes);
app.use("/api/project",taskRoutes)
app.use("/api/project",credentialRoutes)
app.use("/api/project",employeeprojecttaskRoutes)
app.use("/api",screenRoutes)



/* Database */
mongoose.set( 'strictQuery', false);
const PORT = process.env.PORT || 9000;
// mongoose.set('strictQuery', true
// )
mongoose
  .connect( "mongodb+srv://atul:ermechcoder@cluster0.fq4j3um.mongodb.net/trackercrm?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

 
  })
  .catch((error) => console.log(`${error} did not connect`));

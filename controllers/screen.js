import screenshot from 'screenshot-desktop'
import base64js from 'base64-js'
import Screen from "../models/screens.js";



export const getScreens = async (req, res) => {
    try {
        const screens = await Screen.find();
        res.status(200).json({
            screens
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error getting events",
            error: error.message
        });
    }
        
    }

    export const createScreen = async (req, res) => {
       
        try {
            // const event = await Screen.create(req.body);
            const shouldStart = req.body.shouldStart;
            const userId = req.body.userId
            if (shouldStart) {
                  async function captureAndSaveImage() {

                    screenshot.listDisplays().then((displays) => {
                      // displays: [{ id, name }, { id, name }]
                      screenshot({ screen: displays[displays.length - 1].id })
                        .then((img) => {
                          // img: Buffer of screenshot of the last display
                          
                            // Convert the PNG image buffer to base64
                            const base64Image = base64js.fromByteArray(img);
                            // console.log(base64Image)
            
                            const baseImage = "data:image/png;base64," + `${base64Image}`
                            // console.log(baseImage)
                            Screen.insertMany([
                              {
                                usersId: `${userId}`,
                                type: 'image/png',
                                image: `${baseImage}`,
                       
                              },
                  
                            ], { unique: true }).then(function () {
                              console.log(`Data inserted  `) // Success
                            }).catch(function (error) {
                              console.log(error)	 // Failure
                            });
                        });
                    }).catch((err) => {
                      console.log(err);
                    })
            
                  }
                  captureAndSaveImage()
              } else {
                res.status(400).json({
                    "message":"Please start the screenshot"
                })
              }

        
            res.status(201).json({
                "message":"Data have saved successfully.."
            });
            
        } catch (error) {   
            res.status(500).json({
                message: "Error creating event",
                error: error.message
            });
        }
   }

 

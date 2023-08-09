
import User from "../../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export  const  postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    console.log("user register request came");
    // check if user exists
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    // console.log(userExists);

    if (userExists) {
      return res.status(409).send("E-mail already in use.");
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
   "12345678",
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
        _id: user._id,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};



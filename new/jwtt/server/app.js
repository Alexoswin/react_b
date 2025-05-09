const express = require('express');
const cors = require('cors');
const app = express();

const Login = require('./login.js')


app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
   const check = await Login.findOne({ email, password });


    try{
        if (check) {
            res.status(200).json({ message: "Login successful" , token : await check.generateAuthToken(), userId : check._id.toString()
 });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
  });
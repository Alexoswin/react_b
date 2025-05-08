const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    try{
        if (username === "admin" && password === "admin") {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
}




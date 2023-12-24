const express = require("express");
const cors = require("cors");
const fetchData = require("./db");

const app = express();
const port = 5001;

// Enable CORS for all routes
app.use(cors({
    origin: ["https://65887d8ecaaaa76126ca8ffe--gregarious-llama-c7eab3.netlify.app/soldier"],
    methods: ["POST", "GET"],
    credentials: true
}));

// Define a route to fetch data
app.get("/api/data", async(req, res) => {
    try {
        const data = await fetchData(process.env.uri);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
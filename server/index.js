const express = require("express");
const cors = require("cors");
const fetchData = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());

// Define a route to fetch data
app.get("/api/data", async(req, res) => {
    try {
        const data = await fetchData();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
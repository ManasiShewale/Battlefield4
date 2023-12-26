const express = require("express");
const cors = require("cors");
const fetchData = require("./db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
res.header("Access-Control-Allow-Origin");
app.use(cors({
    origin: ["https://battlefield4-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials:true,
    optionsSuccessStatus: 204
}));

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

const express = require("express");
const cors = require("cors");
const fetchData = require("./db");

const app = express();
const PORT = 5000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
app.use(cors({
    origin: ["https://battlefield4-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
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
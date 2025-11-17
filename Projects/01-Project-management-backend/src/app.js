import express from "express"
import cors from "cors"

const app = express();

// basic configurations
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// cors configurations
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://loacalhost:5173",
    credentials: true,
    methods:["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
}))

// import the routes

import healthCheckRouter from "./routes/healthCheck.js"

app.use("/api/v1/healthcheck", healthCheckRouter)

app.get("/", (req,res) => {
    res.send("<h1> Hello World, Welcome to Basecampy </h1>")
});


export default app
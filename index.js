import mongoose from "mongoose";
import app from "./app.js";
import http from "http";

let hostname = '127.0.0.1';
let port = 3000;

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/gitsetup")
        console.log("mongo connected");

        const onListening = () => {
            console.log("listening on port 5000");
        }

        // app.listen(5000, onListening)

        const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Node is now running with Mongodb using mongoose\n')
        })

        server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
        })
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
})()


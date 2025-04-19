

import {createServer} from 'http'
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();
const PORT = process.env.PORT || 8000

const httpServer = createServer();

const io = new Server(httpServer, {
    // options
  });

  io.on("connection", (socket) => {
    // ...
  });

  httpServer.listen(3000,()=>{
    console.log('server is running');
    
  });







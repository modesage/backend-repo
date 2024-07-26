import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 3000;

connectDB()
.then(() => {
    
    app.use(errorHandler);

    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed: ", err);

})
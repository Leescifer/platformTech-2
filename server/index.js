import dotenv from 'dotenv';
import app from './app.js';
import mongoDB from '../server/src/config/db.js'

console.log("Starting server initialization...");

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = () => {
    console.log("Server is starting...");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }).on('error', (error) => {
        console.error("Error starting server:", error);
        process.exit(1);
    });
}

const init = async () => {
    console.log('Initializing server...');
    try {
        startServer()
        mongoDB();
    } catch (error) {
        console.error("Initialization failed:", error);
        process.exit(1);
    }
}

init().catch(error => {
    console.error("Failed to start server:", error);
    process.exit(1);
});


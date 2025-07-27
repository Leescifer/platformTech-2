import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_DB_URI;

        if (!mongoURI) {
            throw new Error("MongoDB URI is not defiined in the enviroment variables.")
        }

        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected: ${conn.connection.host}`);

        mongoose.connection.on("error", (err) => {
            console.error('Mongoose connection error:', err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log('Mongoose disconnected');
        });

    } catch (error) {

        if (error instanceof Error) {
            console.error(`Error connecting to MongoDB: ${error.message}`);
        } else {
            console.error('An unexpected error occurred while connecting to MongoDB:', error);
        }

        process.exit(1);

    }
}

export default connectDB;
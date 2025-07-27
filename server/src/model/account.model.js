import mongoose from 'mongoose';

const user = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            isEmail: true,
            unique: true,
        },
        password: {
            type: String,
            required: false,
            minLength: 8,
        },
        name: {
            type: String,
            required: true,
        },
        lastActiveAt: {
            type: Date,
            required: false,
            default: null,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", user);

export default User;

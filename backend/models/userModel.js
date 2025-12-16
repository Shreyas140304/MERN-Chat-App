const mongooese = require('mongoose');

const userSchema = mongooese.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }, 
        password: { type: String, required: true },
        pic: {
            type: String,
            required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    {
        timestamps: true,
    }
);
const User = mongooese.model("User", userSchema);
module.exports = User;
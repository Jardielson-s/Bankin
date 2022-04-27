import { mongoose } from '../database/database'
import { IUser } from '../interfaces/Users/IUser'


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        allowNull: false,
        required: true
    },
    email: {
        type: String,
        allowNull: false,
        required: true,
        unique: true
    },
    password: {
        type: String,
        allowNull: false,
        required: true,
    },
    job: {
        type: String,
        allowNull: false,
        required: true,
    },
    age: {
        type: Number,
        allowNull: false,
    },
    bio: {
        type: String,
    },
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
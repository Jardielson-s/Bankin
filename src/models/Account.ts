import { mongoose } from '../database/database'


const AccountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    num: {
        type: String,
        required: true,
    },
    balance: {
        type: String,
        required: true,
        default: 0.0
    }
})

const AccountModel = mongoose.model('Account', AccountSchema)


export default AccountModel
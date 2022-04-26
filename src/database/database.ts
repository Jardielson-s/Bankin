import mongoose from "mongoose"


const URL = `${process.env.URL}`


mongoose.connect(URL).then(() => console.log('connect with mongobd')).catch(err => console.log(err))



export { mongoose }
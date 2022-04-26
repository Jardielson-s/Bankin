import { app } from "./app/app"

const port: number = 4000
app.listen(process.env.PORT || port, () => {
    console.log(`running in PORT: ${process.env.PORT || port}`)
})
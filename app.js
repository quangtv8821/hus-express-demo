import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { sequelize } from './src/models/index.js' // importing connection
// importing routes
import accountRoute from './src/routes/account.route.js'
import studentRoute from './src/routes/student.route.js'
import subjectRoute from './src/routes/subject.model.js'
import lessonRoute from './src/routes/lesson.route.js'
import teacherRoute from './src/routes/teacher.route.js'
import documentRoute from './src/routes/document.route.js'

const app = express()
const port = process.env.PORT || 3001
const corsOptions = {
    origin: '*', // allow cors origin for all client
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use cors
app.use(cors(corsOptions))

// router
app.use('/account', accountRoute)
app.use('/student', studentRoute)
app.use('/subject', subjectRoute)
app.use('/lesson', lessonRoute)
app.use('/teacher', teacherRoute)
app.use('/document', documentRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
import express from 'express'

const port = process.env.PORT || 3001

express().get('/', (req, res) => {
    res.send('Hello World!')
})

express().listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
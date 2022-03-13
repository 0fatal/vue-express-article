const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/article', (req, res) => {
    const tableData = [
        {
            id: '1',
            title: 'article1',
            publishTime: new Date().toLocaleDateString(),
        },
        {
            id: '2',
            title: 'article2',
            publishTime: new Date().toLocaleDateString(),
        },
        {
            id: '3',
            title: 'article3',
            publishTime: new Date().toLocaleDateString(),
        },
    ]

    res.send({
        data: tableData,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

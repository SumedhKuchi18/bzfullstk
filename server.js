const express = require('express')
const path = require('path')
const app = express()
const port = process.eventNames.PORT || 3000

app.use(express.static(__dirname + '/dist/ngprojectms'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/ngproject/index.html')))
app.listen(port, () => console.log(`Example app listening on port`))

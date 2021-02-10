const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to Contact Keeper API' })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on ${port}`))
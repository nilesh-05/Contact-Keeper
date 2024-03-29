const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})
		console.log('Mongo DB connected')
	} catch (err) {
		console.error(err.message)
		process.exit(1)
	}

	// mongoose.connect(db, {
	// 	useNewUrlParser: true,
	// 	useCreateIndex: true,
	// 	useFindAndModify: false
	// }).then(() => console.log('Mongo DB connected'))
	// 	.catch(err => {
	// 		console.err(err.message)
	// 		process.exit(1)
	// 	})
}

module.exports = connectDB
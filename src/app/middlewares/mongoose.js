import mongoose from 'mongoose';

const dbConnect = (handler) => async (req, res) => {
	try {
		// Check if a connection to the database already exists
		if (mongoose.connections[0].readyState) {
			return handler(req, res);
		}

		// Establish a new database connection
		await mongoose.connect('mongodb://127.0.0.1:27017/greekLifeDB', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		// Call the route handler once the connection is established
		return handler(req, res);
	} catch (error) {
		console.error("Error connecting to database:", error);
		return res.status(500).json({ error: "Database connection failed" });
	}
};

export default dbConnect;

const mongoose = require('mongoose')


const greekLifeSchema = new mongoose.Schema({
	title: String,
	img: String,
	main: {
		days: {
			Number
		},
		dayContent:{
			String
		}
	},
	review: String,
	

});

mongoose.models = {}

export default mongoose.model("Holiday", greekLifeSchema)




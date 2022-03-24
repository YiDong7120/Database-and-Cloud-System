const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:p4ssw0rd@sandbox.epk5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
	if (err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');
	console.time('insert');

	let result = await client.db('Week03').collection('companies').deleteMany({
		name: 'Zenfolio'
	})
	// let result = await client.db('Week03').collection('companies').updateOne(
	// 	{ name: 'utem' },
	// 	{ $set: { address: 'Zenfolio Inc.' } },
	// 	{ upsert: true }
	// )
	// let result = await client.db('Week03').collection('companies').insertMany([
	// 	{
	// 		name: 'Zenfolio',
	// 		address: {
	// 			street: '123 Main St',
	// 			city: 'New York',
	// 			state: 'NY',
	// 			zip: '10001'
	// 		}
	// 	},
	// 	{
	// 		name: 'Google',
	// 		address: {
	// 			street: '1600 Amphitheatre Pkwy',
	// 			city: 'Mountain View',
	// 			state: 'CA',
	// 			zip: '94043'
	// 		}
	// 	}
	// ])
	// client.db('Week03').collection('companies').insertOne({
	// 	name: 'Zenfolio',
	// 	address: {
	// 		street: '123 Main St',
	// 		city: 'New York',
	// 		state: 'NY',
	// 		zip: '10001'
	// 	},
	// 	employees: [
	// 		{
	// 			name: 'John',
	// 			age: 25,
	// 			position: 'CEO'
	// 		},
	// 	]
	// }).then(result => {
	// 	console.timeEnd('insert');
	// 	console.log(result);
	// })

	console.timeEnd('insert');
	console.log(result);
	console.log('completed')
});

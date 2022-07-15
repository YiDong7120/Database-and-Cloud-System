const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2ozfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
	if(err) {
		console.log(err.message)
		return
	}
console.log('Connected to MongoDB');
	
client.db('sample_analytics').collection('customers').find({name: 'Shirley Rodriguez'}).toArray().then(result => {
	console.log(result);
	})
client.db('sample_analytics').collection('customers').aggregate([
    {
      $lookup: {
        from: "accounts",
        localField: "accounts",
        foreignField: "account_id",
        as: 'accounts'
    },
    {
      $unwind: {
        path: "$accounts",
    },
    {
        $match: {
            "accounts.products": { $in: ['InvestmentFund']}
    },
    {
        
    }
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
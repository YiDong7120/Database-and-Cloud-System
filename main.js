const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2ozfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
exports.connect = async () => { 
try {
await client.connect(); 
return true;
} catch (err) {
console.log(err); 
return false;
} 
};
exports.close = async () => { 
await client.close();
};
exports.parta = async () => {
// TODO: Implement Part B Aggregation 
};
exports.partab = async () => {
// TODO: Implement Part A and B Aggregation 
};
exports.partabc = async () => {
// TODO: Implement Part A, B and C Aggregation 
}
client.db('sample_analytics').collection('customers').find({name: 'Shirley Rodriguez'}).toArray().then(result => {
	console.log(result);
	})
client.db('sample_analytics').collection('customers').aggregate([
    {$match: {
        name: 'Shirley Rodriguez'
    }},
    {
      $lookup: {
        from: "accounts",
        localField: "accounts",
        foreignField: "account_id",
        as: 'accounts'
    },
      $unwind: {
        path: "$accounts",
    },
        $match: {
            "accounts.products": { $in: ['InvestmentFund']}
    },
      $group: {
        _id: { _id: "$_id",
        username: "$username",
        name: "$name",
        address: "$address",
        birthdate: "$birthdate",
        email: "$email",
      },
      accounts: {
        $push: "$accounts"
      }
    }
    }])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
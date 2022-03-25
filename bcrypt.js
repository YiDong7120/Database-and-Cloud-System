const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2ozfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")
const randomName = faker.name.findName(); 
const randomEmail = faker.internet.email(); 
const randomCard = faker.helpers.createCard(); 
const avatarUrl = faker.image.avatar();
const natureImageUrl = faker.image.nature();
const randomAddress = faker.address.city();
const randomPhone = faker.phone.phoneNumber();
const password = "mypass123"
const saltRounds = 10

client.connect(async err => {
	if(err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');

console.time('insert')
const hash = await bcrypt.hash(password, saltRounds);
let result = await client.db('myFirstDatabase').collection('user').insertOne(
    {
        name: randomName,
        email: randomEmail,
		phone: randomPhone,
		address: randomAddress,
        card: randomCard,
		profil:avatarUrl,
		background:natureImageUrl,
		pass: hash,
    }
)

console.timeEnd('insert')
console.log('Inserted 1 document', result);
});

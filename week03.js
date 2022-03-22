require("sslkeylog").hookAll();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2ozfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
// 	if(err) {
// 		console.log(err.message)
// 		return
// 	}
// 	console.log('Connected to MongoDB');

//     client.db('myFirstDatabase').collection('customers').insertOne({
//         name: 'John',
//         age: 30,
//         location: 'New York',
//         isActive: true,
//         tags: ['tag1', 'tag2'],
//     }).then(result => {
//         console.log(result);
//     });
    
//         client.db('myFirstDatabase').collection('customers').insertOne({
//             name: 'Johns Friend',
//             friend: result.insertedId,
//             age: 30,
//             location: 'New York',
//             isActive: true,
//             tags: ['tag1', 'tag2'],
//         }).then(result => {
//             console.log(result);
//         });


    client.connect(async err => {
        if(err) {
            console.log(err.message)
            return
        }
        console.log('Connected to MongoDB');

    // console.time('insert')
    // let result1 = await client.db('myFirstDatabase').collection('customers').insertMany([
    //     {
    //         name: 'Ali',
    //         age: 30,
    //         location: 'New York',
    //         isActive: true,
    //         tags: ['tag1', 'tag2'],
    //     },
    //     {
    //         name: 'John',
    //         age: 40,
    //         location: 'Melaka',
    //         isActive: true,
    //         tags: ['tag1', 'tag2'],
    //     }
    // ])
    // console.timeEnd('insert')

    // let result2 = await client.db('myFirstDatabase').collection('customers').insertOne({
    //     name: 'Alis Friend',
    //     friend: result1.insertedId,
    //     age: 30,
    //     location: 'New York',
    //     isActive: true,
    //     tags: ['tag1', 'tag2'],
    // })
    // console.log('Inserted 1 document', result);

    
    // await client.db('myFirstDatabase').collection('customers').updateOne({
    //     _id: ObjectId("6239c0dc5c99a790e3a692ac") // name: 'John'
    // },{
    //     $set: {
    //         name: "John Doe",
    //         age: 35
    //     }
    // },{ upsert: true }).then(res => {
    //     console.log(res)
    // })

    client.db('myFirstDatabase').collection('customers').deleteOne({
        name: 'John',
        age: 30
    }).then(result => {
        console.log(result.deletedCount);
    })
});
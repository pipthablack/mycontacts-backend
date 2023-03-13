
const mongoose = require('mongoose');

const connectDb = async() => {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING,{
        UseNewUrlParser: true,
       useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDb;
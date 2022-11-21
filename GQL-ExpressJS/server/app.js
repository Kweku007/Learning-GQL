const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

// MongoDB
mongoose.connect('mongodb+srv://kweks007:kweks007@cluster0.j7jdmhg.mongodb.net');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

// GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Localhost
app.listen(4000, () => {
    console.log('now listening for request on port 4000')
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const authRouter = require('./authRouter');
const PORT = process.env.PORT || 80;

const app = express();

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://raviollll9874:ATBKVuVjzVGZQTFX@gamedb.0edk99n.mongodb.net/?retryWrites=true&w=majority'
        );
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();

import mongoose from 'mongoose';

export default async (connection, dbName) => {
  try {
    mongoose.set('strictQuery', false);

    mongoose.connect(connection, {
        dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
  }
};
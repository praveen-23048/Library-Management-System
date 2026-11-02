require('dotenv').config();

const app = require('./app');
const connectDatabase = require('./config/db');

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(port, () => {
      console.log(`SmartLib backend running on port ${port}`);
    });
  } catch (error) {
    console.error(
      'MongoDB connection failed. The SmartLib backend was not started. Check MONGODB_URI and ensure MongoDB is available.',
      error.name,
    );
    process.exitCode = 1;
  }
};

startServer();

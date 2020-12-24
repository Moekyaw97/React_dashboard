// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db: 'mongodb+srv://admin:admin@cluster0.fdbt3.mongodb.net/dashboard?retryWrites=true&w=majority'
  
};

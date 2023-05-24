export default () => ({
  port: process.env.PORT || 3000,
  database: process.env.MONGO_DB_CONNECT_URL,
});

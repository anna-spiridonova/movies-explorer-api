const urlPattern = /(https?:\/\/)(w{3}\.)?\w+[-._~:/?#[\]@!$&'()*+,;=]*#?/;
const mongoAdress = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const devSecret = 'dev-secret';

module.exports = {
  urlPattern,
  mongoAdress,
  devSecret,
};

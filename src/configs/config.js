module.exports = {
  development: {
    baseURL: 'https://developers.zomato.com/api',
    apiVersion: '/v2.1',
  },
  production: {
    baseURL: 'https://localhost:5000/api',
    apiVersion: '/v1',
  },
  test: {
    baseURL: 'https://google.com/api',
    apiVersion: '/v2',
  },
};

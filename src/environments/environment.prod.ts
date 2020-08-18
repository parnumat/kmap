export const environment = {
  production: false,
  apiUrl: 'http://192.168.55.53:1189/api/',
  // apiUrl: 'http://localhost:5000/api/',
  whitelist: ['192.168.55.53:1189', '192.168.55.76'],
  blacklisted: ['192.168.55.53:1189/api','192.168.55.76/ToppWebApi/api/auth']
};

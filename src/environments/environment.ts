// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   apiUrl: 'http://localhost:5000/',
//   //apiUrl: 'http://localhost:5000/api/test',
//   // apiUrl: 'http://localhost:5000/api/',
//   whitelist: ['localhost:5000', '192.168.55.76', 'localhost:5001'],
//   blacklisted: ['localhost:5000/users/login']
// };

export const environment = {
  production: false,
  apiUrl: 'http://192.168.55.53:1189/api/',
  // apiUrl: 'http://localhost:5000/api/',
  whitelist: ['192.168.55.53:1189', '192.168.55.76'],
  blacklisted: ['192.168.55.53:1189/api','192.168.55.76/ToppWebApi/api/auth']
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

const { REACT_APP_REACT_ENV } = process.env;

/* defines api urls */

const localhost = "http://localhost:3000"; 

const rootURL = {
  development: localhost,
  production: "",
}[REACT_APP_REACT_ENV];

const encryption = {
    development: {
        algorithm: 'aes-256-ctr',
        secretKey: '123456789',
        iv:crypto.randomBytes(16),
    },
    production: {
        algorithm: 'aes-256-ctr', /* should be from env */
        secretKey: '123456789', /* should be from env */
        iv:crypto.randomBytes(16), /* should be from env */
    } 
}[REACT_APP_REACT_ENV];

const helperURLs = {};

const common = {
    ...helperURLs,
    ...encryption,
    homePageProduct : rootURL + '/v1/api/homePageProducts'
};

const config = {
  development: {
    ...common,
  },
  staging: {
    ...common,
  },
  production: {
    ...common,
  },
}[REACT_APP_REACT_ENV];

// freeze object
const fObj = Object.freeze(config);

export default fObj;

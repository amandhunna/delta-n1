import crypto from 'crypto';
const { REACT_APP_REACT_ENV } = process.env;
const reactENV = REACT_APP_REACT_ENV.trim();

/* defines api urls */

const localhost = "http://localhost:3000"; 

const rootURL = {
  development: localhost,
  production: "",
}[reactENV];

const encryption = {
  development  : {
        algorithm: 'aes-256-ctr',
        secretKey: '123456789',
        iv:crypto.randomBytes(16),
    },
    production: {
        algorithm: 'aes-256-ctr', /* should be from env */
        secretKey: '123456789', /* should be from env */
        iv:crypto.randomBytes(16), /* should be from env */
    } 
}[reactENV];

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
}[reactENV];

// freeze object
const fObj = Object.freeze(config);

export default fObj;

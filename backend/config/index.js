const config = require('./config.json');
const environment = process.env.NODE_ENV || 'DEV';

for (const item in config[environment]) {
    process.env[item] = config[environment][item];
}

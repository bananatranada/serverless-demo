'use strict';

const config;

if (env.process.NODE_ENV === 'test') {

} else if (env.process.NODE_ENV === 'staging') {

} else {

}

module.exports = config;
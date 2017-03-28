
const buildConfig = (env) => require('./webpack/' + env + '.js');

module.exports = buildConfig;

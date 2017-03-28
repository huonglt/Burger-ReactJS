
const buildConfig = (env) => require('./config/' + env + '.js');

module.exports = buildConfig;

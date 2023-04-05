const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'olsenlila8',
                mongodb_password: 'H4C2zZ6WXfKPrtZm',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            },
        };
    }

    return {
        env: {
            mongodb_username: 'olsenlila8',
            mongodb_password: 'H4C2zZ6WXfKPrtZm',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        },
    };
};
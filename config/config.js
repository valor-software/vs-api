'use strict';

module.exports = function (app) {
  const _config = {
    adminEmail: 'oleksii.aleksandrov@valor-software.com',
    allowedOrigins: ['http://localhost:4200','https://vs-work.github.io']
  };
  app.set('config', _config);
};

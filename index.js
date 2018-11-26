'use strict';
const {HttpRequestModule} = require('./modules/HttpRequestModule'),
      {MemchachedModule} = require('./modules/MemcachedModule'),
      {ReserveDetailService} = require('./services/reservedetail.service');

exports.HttpRequestModule = HttpRequestModule;
exports.MemchachedModule = MemchachedModule;
exports.ReserveDetailService = ReserveDetailService;


var HttpRequestModule = require('../modules/HttpRequestModule'),
    axios = require("axios") ,
    qs = require('qs') ;
    require("dotenv").config();

module.exports = class ReserveDetailModule extends HttpRequestModule {

    constructor(reserveId = '') {
      super();
      this.reserveId = reserveId;
      this.memcachedKey = `RESERVE_DETAIL[${this.reserveId}]`
    }

  async getReserveDetail() {
   let resp = null;
   try {
    resp = await this.getDataMemcached(this.memcachedKey);
    if (resp == null) {
      resp = await this.createHttp(process.env.URL_RESERVE_DETAIL, {
       reserveId : this.reserveId
      }).post();
      return resp.data.code == 100 ? resp.data.data : null;
    }
    return JSON.stringify(resp);
  } catch (e) {
    throw e;
   }
 }
}

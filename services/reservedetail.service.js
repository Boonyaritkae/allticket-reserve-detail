var {HttpRequestModule} = require('../modules/HttpRequestModule');


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
        performId: this.performId
      }).post();
      return resp.data.code == 100 ? resp.data.data : null;
    }
    return JSON.stringify(resp);
  } catch (e) {
    throw e;
   }
 }
}

'use strict';

const Controller = require('egg').Controller;
const mockdata = require('../../../mock');


class StockListController extends Controller {
  async sticklist () {
    const { ctx } = this;
    ctx.body = mockdata.stockList;
  }  
}

module.exports = StockListController;
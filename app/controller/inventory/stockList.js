'use strict';

const Controller = require('egg').Controller;

class StockListController extends Controller {
  async sticklist () {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = StockListController;
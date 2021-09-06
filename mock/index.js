'use strict';

const Mock = require('mockjs');
const obj = {
  product_sku: 'product_sku' + Date.now(),
  FNSKU: 'FNSKU' + Date.now(),
  SELLER_SKU: 'SELLER_SKU' + Date.now(),
  'product_title_en|10': 'Z031',
  pd_pic_url: 'http://erp-huanan.oss-cn-shenzhen.aliyuncs.com/wms/crisol/jpg/2021/05/24/crisol20210524163634_nt01g.jpg'
};

const stockList =  Mock.mock({
  code: 200,
  error: 0,
  message: 'OK',
  data: {
    'list|10': [obj],
  }
});

module.exports = {
  stockList
};

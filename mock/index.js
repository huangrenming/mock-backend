'use strict';

const Mock = require('mockjs');
const apiPath = {
  stockList: '/v1/stock-detail/stock-list', // 获取仓库SKU列表，获取最初始的一级列表
  nextList: '/v1/stock-detail/next-list', // 通过product_sku或者是fnsku 获取下一级列表数据
  shopList: '/v1/stock-detail/shop-list', // 获取店铺站点列表-最多100个
  searchSku: '/v1/stock-detail/search-sku', // SKU新的搜索接口
  stockClick: '/v1/stock-detail/stock-click', // 埋点
};
const obj = {
  product_sku: 'product_sku' + Date.now(),
  FNSKU: 'FNSKU' + Date.now(),
  SELLER_SKU: 'SELLER_SKU' + Date.now(),
  'product_title_en|10': 'Z031',
  pd_pic_url: 'http://erp-huanan.oss-cn-shenzhen.aliyuncs.com/wms/crisol/jpg/2021/05/24/crisol20210524163634_nt01g.jpg'
};
const listData = {
  code: 200,
  error: 0,
  message: 'OK',
  data: {
    'list|10': [obj],
  },
};

Mock.mock(new RegExp(apiPath.stockList), 'get', listData);

/**
 * @ Author: izdbrave
 * @ Create Time: 2019-07-31 16:29:07
 * @ Modified by: izdbrave
 * @ Modified time: 2020-03-27 14:05:12
 * @ Description:百度地图瓦片下载
 */
require('colors');
const readlineSync = require('readline-sync');
const getTileList = require('./libs/getTileList');
const downloadTiles = require('./libs/downloadTiles');
console.log(
    `
***********************************************
                百度地图瓦片下载器
               Powered By 旅行者1号
***********************************************
`.trim().bold
);
//获取瓦片列表
let tileList = getTileList();
//下载瓦片
downloadTiles(tileList).then(() => {
    readlineSync.keyIn();
    process.exit();
});

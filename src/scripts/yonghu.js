const yonghuM = require('./views/yonghuM.html')
const position = require("./controllers/yonghu")


$('.yonghu_container').html(yonghuM)
// console.log(yonghuM)
position.listPos(); 
// position.addPos();
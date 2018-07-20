const yonghu_mod =require("../models/yonghu")
const yonghuMb =require("../views/yonghumb.html")
const yonghuIndex =require("../../../yonghu.html")
const yonghuM = require("../views/yonghuM.html")

const listPos = async () => {
    const result1 = await yonghu_mod.yonghu_mod('',1,10);
    let a = result1.list.list
    let html = template.render(yonghuMb, {
        aa: a,
    });
    $('.yonghuM').html(html);
    addPos();
    deletePos();
    updatePos();
    searchPos();
    //分页
    

}

const addPos = () => {
    $("#gai_add").on("click", async () => {
        console.log(13331)

        let id = $("#id").val();
        let username = $("#username").val();
        let phone = $("#phone").val();
        let regTime = $("#regTime").val();
        let logNum = parseInt($("#logNum").val());
        let priceAll = parseInt($("#priceAll").val());
        let email = $("#email").val();
        const result2 = await yonghu_mod.add_mod(id, username, phone, regTime, logNum, priceAll, email)
        location.reload(true)
    })
    
} 

const deletePos = () => {
    $(".pos-remove").on('click', async function () {
        let id = $(this).attr('posid')
        console.log(id)
        if (window.confirm('真的要删除吗')) {
          await yonghu_mod.dele_mod(id)
        }
        location.reload(true)
    })
    
}

const updatePos = () => {
        $("#addd").on("click", async () => {
            let id = $("#idd").val();
            let username = $("#usernamee").val();
            let phone = $("#phonee").val();
            let regTime = $("#regTimee").val();
            let logNum = parseInt($("#logNumm").val());
            let priceAll = parseInt($("#priceAlll").val());
            let email = $("#emaill").val();
            const result2 = await yonghu_mod.update_mod(id, username, phone, regTime, logNum, priceAll, email)
            location.reload(true)
        })
} 

const searchPos = () => {
$('#possearch').on("click", async () => {
    let username = $('#input').val();
    const result3 = await yonghu_mod.search_mod(username,1,20);
    let b = result3.list.list
    console.log(b)
    let html = template.render(yonghuMb, {
        aa: b,
    });
    $('.yonghuM').html(html);
})
}


module.exports = {
    listPos,
}
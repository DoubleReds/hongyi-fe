const yonghu_mod = (username, page, pageSize) => {
    return $.ajax({
            url: "/api/back/userall",
            type: "POST",
            data: JSON.stringify({
                username,
                page,
                pageSize
            }),
            headers: {
                'Content-Type': "application/json"
            },
             success: (result) => {
                return result;
            },
            catch: (err) => {
                console.log("ajax请求失败")
            }
        })
    }

const add_mod = (id, username, phone, regTime, logNum, priceAll,email) => {
    return $.ajax({
        url: "api/register",
        type: "POST",
        data: JSON.stringify({
            id,
            username,
            phone,
            regTime,
            logNum,
            priceAll,
            email
        }),
        headers: {
            'Content-Type': "application/json"
        },
        success: (result) => {
            return result;
        },
        catch: (err) => {
            console.log("ajax请求失败")
        }
    });
}

 const dele_mod = (id) => {
    return $.ajax({
        url: 'api/back/deleteuser/'+id,
        type: "GET",
        data: {},
        headers: {
            'Content-Type': "application/json"
        },
        success: (result) => {
            return result;
        },
        catch: (err) => {
            console.log("ajax请求失败")
        }
    });
}
 
const update_mod = (id, username, phone, regTime, logNum, priceAll,email) => {
    return $.ajax({
        url: 'api/back/updateuser',
        type: "POST",
        data: JSON.stringify({
            id,
            username,
            phone,
            regTime,
            logNum,
            priceAll,
            email,
            // headerurl,
        }),
        headers: {
            'Content-Type': "application/json"
        },
        success: (result) => {
            return result;
        },
        catch: (err) => {
            console.log("ajax请求失败")
        }
    });
}

const search_mod = (username, page, pageSize) => {
    return $.ajax({
        url: 'api/back/userall',
        type: "POST",
        data: JSON.stringify({
          
            username,
            page,
            pageSize
        }),
        headers: {
            'Content-Type': "application/json"
        },
        success: (result) => {
            return result;
        },
        catch: (err) => {
            console.log("ajax请求失败")
        }
    });
}
module.exports = {
   yonghu_mod,
    add_mod,
    dele_mod,
    update_mod,
    search_mod
 }
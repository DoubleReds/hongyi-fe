/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div class=\"yonghuM\"></div>"

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const yonghuM = __webpack_require__(0)
const position = __webpack_require__(3)


$('.yonghu_container').html(yonghuM)
// console.log(yonghuM)
position.listPos(); 
// position.addPos();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const yonghu_mod =__webpack_require__(4)
const yonghuMb =__webpack_require__(5)
const yonghuIndex =__webpack_require__(6)
const yonghuM = __webpack_require__(0)

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "    <div class=\"wrapper\">          <header class=\"main-header\">        <!-- Logo -->        <a href=\"index2.html\" class=\"logo\">          <!-- mini logo for sidebar mini 50x50 pixels -->          <span class=\"logo-mini\"><b>弘毅</b></span>          <!-- logo for regular state and mobile devices -->          <span class=\"logo-lg\"><b>弘毅后台管理</b></span>        </a>        <!-- Header Navbar: style can be found in header.less -->        <nav class=\"navbar navbar-static-top\">          <!-- Sidebar toggle button-->          <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">            <span class=\"sr-only\">切换导航</span>          </a>              <div class=\"navbar-custom-menu\">            <ul class=\"nav navbar-nav\">                            <li class=\"dropdown user user-menu\">                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                  <span class=\"hidden-xs\">用户管理页</span>                </a>                <ul class=\"dropdown-menu\">                  <!-- User image -->                  <li class=\"user-header\">                        <p>                      Alexander Pierce - Web Developer                      <small>Member since Nov. 2012</small>                    </p>                  </li>                  <!-- Menu Body -->                  <li class=\"user-body\">                    <div class=\"row\">                      <div class=\"col-xs-4 text-center\">                        <a href=\"#\">花朵</a>                      </div>                      <div class=\"col-xs-4 text-center\">                        <a href=\"#\">销量</a>                      </div>                      <div class=\"col-xs-4 text-center\">                        <a href=\"#\">好友</a>                      </div>                    </div>                    <!-- /.row -->                  </li>                  <!-- Menu Footer-->                  <li class=\"user-footer\">                    <div class=\"pull-left\">                      <a href=\"#\" class=\"btn btn-default btn-flat\">设置</a>                    </div>                    <div class=\"pull-right\">                      <a href=\"#\" class=\"btn btn-default btn-flat\">退出</a>                    </div>                  </li>                </ul>              </li>              <!-- Control Sidebar Toggle Button -->              <li>                <a href=\"#\" data-toggle=\"control-sidebar\"></a>              </li>            </ul>          </div>        </nav>      </header>      <!-- Left side column. contains the logo and sidebar -->      <aside class=\"main-sidebar\">        <!-- sidebar: style can be found in sidebar.less -->        <section class=\"sidebar\">          <!-- Sidebar user panel -->                   <!-- search form -->          <!-- <form action=\"#\" method=\"get\" class=\"sidebar-form\">            <div class=\"input-group\">              <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">                  <span class=\"input-group-btn\">                    <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>                    </button>                  </span>            </div>          </form> -->          <!-- /.search form -->          <!-- sidebar menu: : style can be found in sidebar.less -->          <ul class=\"sidebar-menu\">            <li class=\"header\">主导航</li>            <li class=\"active treeview\">              <a href=\"index.html\">                <span>首页</span>                <!-- <span class=\"pull-right-container\">                                  </span> -->              </a>                         </li>            <li class=\"active treeview\">              <a href=\"#\">                <span>管理信息</span>                <span class=\"pull-right-container\">                  <i class=\"fa fa-angle-left pull-right\"></i>                </span>              </a>              <ul class=\"treeview-menu\">                <li ><a href=\"yonghu.html\">用户管理</a></li>                <li><a href=\"dingdan.html\">订单管理</a></li>                <li><a href=\"kecheng.html\">课程管理</a></li>              </ul>            </li>                                          </ul>        </section>        <!-- /.sidebar -->      </aside>          <!-- Content Wrapper. Contains page content -->      <div class=\"content-wrapper\">        <!-- 搜索 -->          <div class=\"box-tools\">              <div class=\"input-group input-group-sm\" style=\"width: 200px; height:20px;float:right\">                <input type=\"text\" value=\"\" id=\"input\" name=\"pos_search\" class=\"form-control pull-right\" placeholder=\"搜索\">                        <div class=\"input-group-btn\">                  <button type=\"button\" id=\"possearch\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>                </div>              </div>            </div>              <div class=\"box-body\">                  <h3 class=\"box-title\">                <button id=\"addbtn\" class=\"btn btn-block btn-success\" style=\"width:60px\" data-toggle=\"modal\" data-target=\"#myModal\" type=\"button\"><span class=\"fa fa-plus\"></span> 添加</button>                   </h3>             <!-- 模态框增加-->            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">            <div class=\"modal-dialog\" role=\"document\">              <div class=\"modal-content\">                <div class=\"modal-header\">                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>                  <h4 class=\"modal-title\" id=\"myModalLabel\">数据</h4>                </div>                <div class=\"modal-body\">                                    <form class=\"form-horizontal\" id=\"possave\" action=\"/api/position\" method=\"post\" enctype=\"multipart/form-data\">                    <div class=\"box-body\">                                            <div class=\"form-group\">                        <label for=\"companyName\" class=\"col-sm-2 control-label\">ID</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"id\" id=\"id\" placeholder=\"请输入ID\">                        </div>                      </div>                      <div class=\"form-group\">                        <label for=\"positionName\" class=\"col-sm-2 control-label\">用户名</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"请输入用户名\">                        </div>                      </div>                      <div class=\"form-group\">                        <label for=\"city\" class=\"col-sm-2 control-label\">手机号</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"请输入手机号\">                        </div>                      </div>                      <div class=\"form-group\">                        <label for=\"salary\" class=\"col-sm-2 control-label\">注册时间</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"regTime\" id=\"regTime\" placeholder=\"不用输入\">                        </div>                      </div>                      <div class=\"form-group\">                        <label for=\"type\" class=\"col-sm-2 control-label\">累计登录次数</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"logNum\" id=\"logNum\" placeholder=\"请输入累计登录次数\">                        </div>                      </div>                      <div class=\"form-group\">                        <label for=\"experience\" class=\"col-sm-2 control-label\">累计消费</label>                                        <div class=\"col-sm-10\">                          <input type=\"text\" class=\"form-control\" name=\"priceAll\" id=\"priceAll\" placeholder=\"请输入累计消费\">                        </div>                      </div>                                          <div class=\"form-group\">                          <label for=\"experience\" class=\"col-sm-2 control-label\">邮箱</label>                                            <div class=\"col-sm-10\">                            <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"请输入邮箱\">                          </div>                        </div>                    </div>                                    </form>                </div>                <div class=\"modal-footer\">                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>                  <button type=\"button\" class=\"btn btn-primary\" id=\"gai_add\" data-dismiss=\"modal\">保存</button>                </div>              </div>            </div>            </div>            <!-- 表格主内容 -->                  <table id=\"example2\" class=\"table table-bordered table-hover\">                    <thead>                    <tr>                      <th>ID</th>                      <th>用户名</th>                      <th>手机号</th>                      <th>注册时间</th>                      <th>累计登陆次数</th>                      <th>累计消费</th>                      <th>邮箱</th>                      <th>                                              </th>                    </tr>                    </thead>                    <tbody>                      {{each aa}}                    <tr>                      <td>{{$value.id}}</td>                      <td>{{$value.username}}</td>                      <td>{{$value.phone}}</td>                      <td>{{$value.regTime}}</td>                      <td>{{$value.logNum}}</td>                      <td>{{$value.priceAll}}</td>                      <td>{{$value.email}}</td>                      <td>                          <!-- <div class=\"box-body\"> -->                            <h3 class=\"box-title\">                                <button id=\"gai_add\" class=\"btn btn-block btn-success pos-edit btn-sm btn-primary \" style=\"width:60px\" posid=\"{{$value.id}}\" data-toggle=\"modal\" data-target=\"#Modal\" type=\"button\"> 修改</button>                            </h3>                            <!-- 修改模态框 -->                <div class=\"modal fade\" id=\"Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">                    <div class=\"modal-dialog\" role=\"document\">                      <div class=\"modal-content\">                        <div class=\"modal-header\">                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>                          <h4 class=\"modal-title\" id=\"myModalLabel\">修改数据</h4>                        </div>                        <div class=\"modal-body\">                                                    <form class=\"form-horizontal\" id=\"possave\" action=\"/api/position\" method=\"post\" enctype=\"multipart/form-data\">                            <div class=\"box-body\">                                                            <div class=\"form-group\">                                <label for=\"companyName\" class=\"col-sm-2 control-label\">ID</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"idd\" id=\"idd\" placeholder=\"请输入ID\">                                </div>                              </div>                              <div class=\"form-group\">                                <label for=\"positionName\" class=\"col-sm-2 control-label\">用户名</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"usernamee\" id=\"usernamee\" placeholder=\"请输入用户名\">                                </div>                              </div>                              <div class=\"form-group\">                                <label for=\"city\" class=\"col-sm-2 control-label\">手机号</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"phonee\" id=\"phonee\" placeholder=\"请输入手机号\">                                </div>                              </div>                              <div class=\"form-group\">                                <label for=\"salary\" class=\"col-sm-2 control-label\">注册时间</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"regTimee\" id=\"regTimee\" placeholder=\"不用输入\">                                </div>                              </div>                              <div class=\"form-group\">                                <label for=\"type\" class=\"col-sm-2 control-label\">累计登录次数</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"logNumm\" id=\"logNumm\" placeholder=\"请输入累计登录次数\">                                </div>                              </div>                              <div class=\"form-group\">                                <label for=\"experience\" class=\"col-sm-2 control-label\">累计消费</label>                                                        <div class=\"col-sm-10\">                                  <input type=\"text\" class=\"form-control\" name=\"priceAlll\" id=\"priceAlll\" placeholder=\"请输入累计消费\">                                </div>                              </div>                                                          <div class=\"form-group\">                                  <label for=\"experience\" class=\"col-sm-2 control-label\">邮箱</label>                                                            <div class=\"col-sm-10\">                                    <input type=\"text\" class=\"form-control\" name=\"emaill\" id=\"emaill\" placeholder=\"请输入邮箱\">                                  </div>                                </div>                            </div>                                                    </form>                        </div>                        <div class=\"modal-footer\">                          <button type=\"button\" class=\"btn btn-defaultt\" data-dismiss=\"modal\">取消</button>                          <button type=\"button\" class=\"btn btn-primaryt\" id=\"addd\" data-dismiss=\"modal\">保存</button>                        </div>                      </div>                    </div>                  <!-- </div> -->                          <table id=\"example2\" class=\"table table-bordered table-hover hold-transition skin-purple-light sidebar-mini\">                            <thead>                            <tr>                              <th>ID</th>                              <th>用户名</th>                              <th>手机号</th>                              <th>注册时间</th>                              <th>累计登陆次数</th>                              <th>累计消费</th>                              <th>邮箱</th>                              <th>                                                              </th>                            </tr>                            </thead>                            <tbody>                              {{each aa}}                            <tr>                              <td>{{$value.id}}</td>                              <td>{{$value.username}}</td>                              <td>{{$value.phone}}</td>                              <td>{{$value.regTime}}</td>                              <td>{{$value.logNum}}</td>                              <td>{{$value.priceAll}}</td>                              <td>{{$value.email}}</td>                                              <td>                                  <button class=\"btn btn-sm btn-primary pos-edit\" posid=\"{{$value.id}}\"><span class=\"fa fa-edit\"></span> 修改</button>                                                                                                                                                                    <button class=\"btn btn-sm btn-danger pos-remove\" posid=\"{{$value.id}}\"><span class=\"fa fa-remove\"></span> 删除</button>                              </td>                            </tr>                            {{/each}}                            </tbody>                          </table>                                                </div>                      <button class=\"btn btn-sm btn-danger pos-remove\" posid=\"{{$value.id}}\"><span class=\"fa fa-remove\"></span> 删除</button>                    </td>                      </tr>                      {{/each}}                      </tbody>                    </table>              <!-- 结尾 -->                            </div>          <!-- 侧边 -->      <aside class=\"control-sidebar control-sidebar-dark\">        <!-- Create the tabs -->        <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">          <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>          <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>        </ul>        <!-- Tab panes -->        <div class=\"tab-content\">          <!-- Home tab content -->          <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">            <h3 class=\"control-sidebar-heading\">近期活动</h3>            <ul class=\"control-sidebar-menu\">              <li>                <a href=\"javascript:void(0)\">                  <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>                      <div class=\"menu-info\">                    <h4 class=\"control-sidebar-subheading\">Langdon 的生日</h4>                        <p>Will be 23 on April 24th</p>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <i class=\"menu-icon fa fa-user bg-yellow\"></i>                      <div class=\"menu-info\">                    <h4 class=\"control-sidebar-subheading\">Frodo更新了他的个人资料</h4>                        <p>New phone +1(800)555-1234</p>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>                      <div class=\"menu-info\">                    <h4 class=\"control-sidebar-subheading\">Nora加入邮件列表</h4>                        <p>nora@example.com</p>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>                      <div class=\"menu-info\">                    <h4 class=\"control-sidebar-subheading\"> Cron Job 254执行</h4>                        <p>执行时间5秒</p>                  </div>                </a>              </li>            </ul>            <!-- /.control-sidebar-menu -->                <h3 class=\"control-sidebar-heading\"> 任务进度</h3>            <ul class=\"control-sidebar-menu\">              <li>                <a href=\"javascript:void(0)\">                  <h4 class=\"control-sidebar-subheading\">                     自定义模板设计                    <span class=\"label label-danger pull-right\">70%</span>                  </h4>                      <div class=\"progress progress-xxs\">                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <h4 class=\"control-sidebar-subheading\">                    恢复更新                    <span class=\"label label-success pull-right\">95%</span>                  </h4>                      <div class=\"progress progress-xxs\">                    <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <h4 class=\"control-sidebar-subheading\">                     Laravel整合                    <span class=\"label label-warning pull-right\">50%</span>                  </h4>                      <div class=\"progress progress-xxs\">                    <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>                  </div>                </a>              </li>              <li>                <a href=\"javascript:void(0)\">                  <h4 class=\"control-sidebar-subheading\">                   后端框架                    <span class=\"label label-primary pull-right\">68%</span>                  </h4>                      <div class=\"progress progress-xxs\">                    <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>                  </div>                </a>              </li>            </ul>            <!-- /.control-sidebar-menu -->              </div>          <!-- /.tab-pane -->          <!--  统计信息选项卡内容 -->          <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\"> 统计信息选项卡内容</div>          <!-- /.tab-pane -->          <!-- Settings tab content -->          <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">            <form method=\"post\">              <h3 class=\"control-sidebar-heading\">常规设置项</h3>                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  报告面板用法                  <input type=\"checkbox\" class=\"pull-right\" checked>                </label>                    <p>                 常规设置选项的相关信息                </p>              </div>              <!-- /.form-group -->                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  允许邮件重定向                  <input type=\"checkbox\" class=\"pull-right\" checked>                </label>                    <p>                   其他可用设置选项                </p>              </div>              <!-- /.form-group -->                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  在帖子中公开作者姓名                  <input type=\"checkbox\" class=\"pull-right\" checked>                </label>                    <p>                  允许用户在博客帖子中显示他的名字                </p>              </div>              <!-- /.form-group -->                  <h3 class=\"control-sidebar-heading\">聊天设置</h3>                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  显示为在线                  <input type=\"checkbox\" class=\"pull-right\" checked>                </label>              </div>              <!-- /.form-group -->                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  关闭通知                  <input type=\"checkbox\" class=\"pull-right\">                </label>              </div>              <!-- /.form-group -->                  <div class=\"form-group\">                <label class=\"control-sidebar-subheading\">                  删除聊天记录                  <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>                </label>              </div>              <!-- /.form-group -->            </form>          </div>          <!-- /.tab-pane -->        </div>      </aside>            <!-- /.control-sidebar -->      <!-- Add the sidebar\'s background. This div must be placed           immediately after the control sidebar -->      <div class=\"control-sidebar-bg\"></div>    </div>      <!-- /.content-wrapper -->      <footer class=\"main-footer\">        <div class=\"pull-right hidden-xs\">          <b>Version</b> 2.3.7        </div>        <strong>Copyright &copy; 2014-2016 <a href=\"http://almsaeedstudio.com\">Almsaeed Studio</a>.</strong> All rights        reserved.   </footer>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<html><head>  <meta charset=\"utf-8\">  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">  <title>弘毅智学管理系统</title>  <!-- Tell the browser to be responsive to screen width -->  <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">  <!-- Bootstrap 3.3.6 -->  <link rel=\"stylesheet\" href=\"./libs/bootstrap.min.css\">  <!-- Font Awesome -->  <link rel=\"stylesheet\" href=\"./libs/font-awesome.min.css\">  <!-- Ionicons -->  <link rel=\"stylesheet\" href=\"./libs/ionicons.min.css\">  <!-- Theme style -->  <link rel=\"stylesheet\" href=\"./libs/AdminLTE.min.css\">  <!-- AdminLTE Skins. We have chosen the skin-blue for this starter        page. However, you can choose any other skin. Make sure you        apply the skin class to the body tag so the changes take effect.  -->  <link rel=\"stylesheet\" href=\"./libs/skin-blue.min.css\">  <link rel=\"stylesheet\" href=\"./styles/app.css\">  <link rel=\"stylesheet\" href=\"/libs/all-skins.min.css\">  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->  <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->  <!--[if lt IE 9]>  <script src=\"dist/js/html5shiv.min.js\"></script>  <script src=\"dist/js/respond.min.js\"></script>  <![endif]--></head><body class=\"hold-transition skin-purple-light sidebar-mini\">    <div class=\"yonghu_container\"></div>    <!-- jQuery 2.2.3 --><script src=\"./libs/jquery-2.2.3.min.js\"></script><!-- Bootstrap 3.3.6 --><script src=\"./libs/bootstrap.min.js\"></script><!-- AdminLTE App --><script src=\"./libs/app.min.js\"></script><script src=\"./libs/template-web.js\"></script><script src=\"./libs/jquery.form.min.js\"></script><script src=\"./libs/web-storage-cache.min.js\"></script><script src=\"./scripts/yonghu.js\"></script><!-- Optionally, you can add Slimscroll and FastClick plugins.     Both of these plugins are recommended to enhance the     user experience. Slimscroll is required when using the     fixed layout. --></body></html>"

/***/ })
/******/ ]);
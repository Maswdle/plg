
var info_map = new Map();
var hold = false;
var girl = false;
var auto = false;
var _stop = false;
var para = {
    yAlign: 'top',
    xAlign: 'right'

}


//! listen

document.getElementById("ButtonRandom").addEventListener("click", () => { save_info() });
document.getElementById("user_Random").addEventListener("click", () => { obsSleep(0.6).then(() => { refresh() }) });
document.getElementById("oldUserList").addEventListener("click", () => { obsSleep(0.6).then(() => { refresh() }) });
//! 

function $x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}

// !button
// addToolBtn("btn_script", "click", test, para);
addToolBtn("btn_check", "开始", change, para);
addToolBtn("btn_remv", "移除限制", remove_l, para);
addToolBtn("btn_diyage", "改年龄为字符串", change_age_str, para);
addToolBtn("btn_remake", "重开", () => {
    delCookie("user+id");
}, para);
// addToolBtn("btn_sex", "only girl: false", change_g, para);
// addToolBtn("btn_auto_report", "auto_report: false", change_r, para);


// !button end

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}


function work() {
    obsSleep(0)
        .then(() => obsSleep(4))
        //监测存在元素然后点击
        .then(() => obsClick('#ButtonRandom'))
        .then(() => obsSleep(1.5))
        .then(() => save_info())

}

function test() {
    obsTrue(hold)
        .then(() => obsFunc(work))
        .then(() => obsSleep(3))
        .then(() => obsFunc(test))
}



function change() {
    hold = !hold;
    console.log("now hold is " + hold);
    document.getElementsByClassName(" monkeyToolBtn btn_check").item(0).textContent = hold ? "stop" : "begin";
    if (hold) {
        obsFunc(test)
    }
}

function change_g() {
    girl = !girl;
    if (girl) _stop = 0;
    document.getElementsByClassName(" monkeyToolBtn btn_sex").item(0).textContent = girl ? "only girl: true" : "only girl: false";
}

function change_r() {
    auto = !auto;
    document.getElementsByClassName(" monkeyToolBtn btn_auto_report").item(0).textContent = auto ? "auto_report: true" : "auto_report: false";
}

function report() {
    obsSleep(0)
        .then(() => obsClick("#doBlack"))
        .then(() => obsSleep(0.4))
        // .then(() => obsClick("#layui-layer100003 > div.layui-layer-btn.layui-layer-btn- > a.layui-layer-btn0"), -0.1)
        .then(() => obsSleep(0.3))
}
// var dic_userlist = {} //del
function save_info() {
    //
    obsSleep(1)
        .then(() => {
            var keys = Object.keys(dic_userlist)
            var v = Object.values(dic_userlist)
            console.log("in!")
            // try {
            var key_name = document.querySelector("#randomSelInfo > div:nth-child(2) > span").innerHTML;
            var value_sex = document.querySelector("#randomSelInfo > div:nth-child(3) > span").innerHTML;
            if (value_sex == "女") {
                dic_userlist[keys[keys.length - 1]] = v[v.length - 1] + " (" + value_sex + ")"
            }
            info_map.set(key_name, value_sex);
        })

    // info_map.set(key_name, value_sex);

}

function remove_l() {

    randomVipCode = '1';
}

/**
 * 刷新列表
 */
function refresh() {

    var mydiv = document.querySelector("#user_list");
    for (let i = 0; i < mydiv.children.length; i++) {
        var child = mydiv.children[i];
        // console.log(child.querySelector("#nickname").innerHTML);


        for (const [key, value] of Object.entries(dic_userlist)) {
            //document.querySelector("#user_list").children[i].getElementsByClassName("nickname").item(0).innerText
            if (value.indexOf(child.getElementsByClassName("nickname").item(0).innerText) !== -1 && value.indexOf("女") !== -1) {
                document.querySelector("#user_list").children[i].getElementsByClassName("nickname").item(0).style.color = "8b0000";
                document.querySelector("#user_list").children[i].getElementsByClassName("nickname").item(0).innerText += "(女)"
                break;
            }
            else if (value.indexOf(childgetElementsByClassName("nickname").item(0).innerText) !== -1) {
                document.querySelector("#user_list").children[i].getElementsByClassName("nickname").item(0).style.color = "#009000";
                document.querySelector("#user_list").children[i].getElementsByClassName("nickname").item(0).innerText += "(男)"
                break;
            }
        }
        // if (info_map.get(child.nickname.innerHTML) == '女') {

        //     document.querySelector("#user_list").children[i].nickname.style.color = "#009000";

        // }
    }

}

function change_age_str() {
    var str = prompt("输入内容(任意字符)", "");
    if (str != null) {
        userAge = str;
    }
}




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
document.getElementById("user_Random").addEventListener("click", () => { refresh() });
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
// addToolBtn("btn_sex", "only girl: false", change_g, para);
// addToolBtn("btn_auto_report", "auto_report: false", change_r, para);

// !button end
function work() {
    obsSleep(0)
        .then(() => obsSleep(4))
        //监测存在元素然后点击
        .then(() => obsClick('#ButtonRandom'))
        .then(() => obsSleep(1.5))

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

function save_info() {
    //
    obsSleep(1)
        .then(() => {
            console.log("in!")
            // try {
            var key_name = document.querySelector("#randomSelInfo > div:nth-child(2) > span").innerHTML;
            var value_sex = document.querySelector("#randomSelInfo > div:nth-child(3) > span").innerHTML;
            // if (value_sex == "女")
            //     $x("/html/body/div[1]/div[1]/div[1]/div[3]/a[1]/span[3]")[0].style.color = "#ff0000";
            // else
            // $x("/html/body/div[1]/div[1]/div[1]/div[3]/a[1]/span[3]")[0].style.color = '#009000'
            console.log("already saved !")
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
        console.log(child.querySelector("#nickname").innerHTML);
        if (info_map.has(child.nickname.innerHTML)) {
            if (info_map.get(child.nickname.innerHTML) == '女') {
                document.querySelector("#user_list").children[i].nickname.style.color = "#ff0000";
            }
            else {
                document.querySelector("#user_list").children[i].nickname.style.color = "#009000";
            }
        }
    }
}

function change_age_str() {
    var str = prompt("输入内容(任意字符)", "比如这行字,别人看得到哦");
    if (str != null) {
        userAge = str;
    }
}

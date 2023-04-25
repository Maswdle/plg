/*====== 开始：辅助函数 ======*/
/*
此部分来自https://www.cnblogs.com/stumpx/p/13476123.html
感谢作者
*/
/**
 * 休眠
 * @param time    休眠时间，单位秒
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsSleep(time, desc = 'obsSleep') {
    return new Promise(resolve => {
        //sleep
        setTimeout(() => {
            console.log(desc, time, 's')
            resolve(time)
        }, Math.floor(Math.abs(time) * 1000))
    })
}

/**
 * 监测页面地址
 * @param path    页面地址片段
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsIsPage(path, time = 0, desc = 'obsHasPage') {
    return new Promise(resolve => {
        //obs page
        let page = setInterval(() => {
            if (location.href.toLowerCase().indexOf(path.toLowerCase()) > -1) {
                clearInterval(page)
                if (time < 0) {
                    setTimeout(() => {
                        console.log(desc, path)
                        resolve(path)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    setTimeout(() => {
                        console.log(desc, path)
                        resolve(path)
                    }, Math.abs(time) * 1000)
                } else {
                    console.log(desc, path)
                    resolve(path)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测input节点设置内容
 * @param selector    CSS选择器
 * @param text        设置的内容
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsSetValue(selector, text, time = 0, desc = 'obsSetValue') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                clearInterval(timer)
                if (time < 0) {
                    setTimeout(() => {
                        target.value = text
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    target.value = text
                    setTimeout(() => {
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    target.value = text
                    console.log(desc, text)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 文本框是否有值，如果传入text且不为空则比较文本框的值
 * @param selector
 * @param text
 * @param time
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsHasValue(selector, text = '', time = 0, desc = 'obsHasValue') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                clearInterval(timer)
                if (Math.abs(time) > 0) {
                    setTimeout(() => {
                        console.log(desc, text)
                        if (!!text) {
                            if (target.value == text) {
                                resolve(selector)
                            }
                        } else {
                            if (target.value) {
                                resolve(selector)
                            }
                        }
                    }, Math.abs(time) * 1000)
                } else {
                    console.log(desc, text)
                    if (!!text) {
                        if (target.value == text) {
                            resolve(selector)
                        }
                    } else {
                        if (target.value) {
                            resolve(selector)
                        }
                    }
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测到节点后点击
 * @param selector    CSS选择器
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsClick(selector, time = 0, desc = 'obsClick') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                clearInterval(timer)
                if (time < 0) {
                    setTimeout(() => {
                        target.click()
                        console.log(desc, selector)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    target.click()
                    setTimeout(() => {
                        console.log(desc, selector)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    target.click()
                    console.log(desc, selector)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测节点是否存在
 * @param selector    CSS选择器
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsHas(selector, time = 0, desc = 'obsHas') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                clearInterval(timer)
                if (Math.abs(time) > 0) {
                    setTimeout(() => {
                        console.log(desc, selector)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    console.log(desc, selector)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测节点是否存在然后执行函数
 * @param selector
 * @param func
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsHasFunc(selector, func, time = 0, desc = 'obsHasFunc') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                clearInterval(timer)
                if (time < 0) {
                    setTimeout(() => {
                        if (!!func) {
                            func()
                        }
                        console.log(desc, selector)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    if (!!func) {
                        func()
                    }
                    setTimeout(() => {
                        console.log(desc, selector)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    if (!!func) {
                        func()
                    }
                    console.log(desc, selector)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测节点内容
 * @param selector    CSS选择器
 * @param text        节点内容
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsHasText(selector, text, time = 0, desc = 'obsHasText') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target && target.textContent.trim() == text) {
                clearInterval(timer)
                if (time < 0) {
                    setTimeout(() => {
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    setTimeout(() => {
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    console.log(desc, text)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测节点内容点击
 * @param selector    CSS选择器
 * @param text        节点内容
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsHasTextClick(selector, text, time = 0, desc = 'text') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target && target.textContent.trim() == text) {
                clearInterval(timer)
                if (time < 0) {
                    setTimeout(() => {
                        target.click()
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else if (time > 0) {
                    target.click()
                    setTimeout(() => {
                        console.log(desc, text)
                        resolve(selector)
                    }, Math.abs(time) * 1000)
                } else {
                    target.click()
                    console.log(desc, text)
                    resolve(selector)
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 监测节点非内容
 * @param selector    Css选择器
 * @param text        节点内容
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsNotText(selector, text, time = 0, desc = 'not text') {
    return new Promise(resolve => {
        //obs node
        let timer = setInterval(() => {
            let target = document.querySelector(selector)
            if (!!target) {
                if (target.textContent.trim() == text) {
                    return
                } else {
                    clearInterval(timer)
                    if (time < 0) {
                        setTimeout(() => {
                            console.log(desc, text)
                            resolve(selector)
                        }, Math.abs(time) * 1000)
                    } else if (time > 0) {
                        setTimeout(() => {
                            console.log(desc, text)
                            resolve(selector)
                        }, Math.abs(time) * 1000)
                    } else {
                        console.log(desc, text)
                        resolve(selector)
                    }
                }
            } else {
                return
            }
        }, 100)
    })
}

/**
 * 函数返回真继续执行
 * @param func    函数，返回真继续执行
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsTrueFunc(func, time = 0, desc = 'func=>true') {
    return new Promise(resolve => {
        if (!!func) {
            if (time < 0) {
                setTimeout(() => {
                    let ret = func()
                    if (ret) {
                        console.log(desc, ret)
                        resolve('func=>true')
                    }
                }, Math.abs(time) * 1000)
            } else if (time > 0) {
                let ret = func()
                setTimeout(() => {
                    if (ret) {
                        console.log(desc, ret)
                        resolve('func=>true')
                    }
                }, Math.abs(time) * 1000)
            } else {
                let ret = func()
                if (ret) {
                    console.log(desc, ret)
                    resolve('func=>true')
                }
            }
        }
    })
}

/**
 * 执行函数
 * @param func    函数
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsFunc(func, time = 0, desc = 'func') {
    return new Promise(resolve => {
        if (!!func) {
            if (time < 0) {
                setTimeout(() => {
                    func()
                    console.log(desc)
                    resolve('func')
                }, Math.abs(time) * 1000)
            } else if (time > 0) {
                func()
                setTimeout(() => {
                    console.log(desc)
                    resolve('func')
                }, Math.abs(time) * 1000)
            } else {
                func()
                console.log(desc)
                resolve('func')
            }
        }
    })
}

/**
 * 变量为真继续执行
 * @param isTrue    bool变量
 * @param time    延时，负数：延时->执行，正数：执行->延时
 * @param desc
 * @returns {Promise<unknown>}
 */
function obsTrue(isTrue, time = 0, desc = 'true') {
    return new Promise(resolve => {
        if (!!isTrue) {
            if (time < 0) {
                setTimeout(() => {
                    console.log(desc, isTrue);
                    resolve(isTrue)
                }, Math.abs(time) * 1000)
            } else if (time > 0) {
                setTimeout(() => {
                    console.log(desc, isTrue);
                    resolve(isTrue)
                }, Math.abs(time) * 1000)
            } else {
                console.log(desc, isTrue);
                resolve(isTrue)
            }
        }
    })
}

/**
 * 随机字符串
 * @param e  长度
 * @returns {string}
 */
function randStr(e = 12) {
    e = e || 32;
    // let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    let t = "abcdefghijkmnprstwxyz",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

/**
 * 随机数字
 * @param e  长度
 * @returns {string}
 */
function randNum(e = 12) {
    e = e || 32;
    // let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    let t = "123456789",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

/**
 * 获取当前URL地址参数
 * @param name  参数名称
 * @returns {string|null}
 */
function getUrlParam(name) {
    let reg = new RegExp("(.|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.href.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 加载style样式
 * @param style  style标签内容
 */
function addStyleEle(style = '') {
    let css = document.createElement('style')
    css.innerHTML = style
    document.body.append(css)
}

/**
 * 加载css文件
 * @param url  css文件地址
 */
function loadCssFile(url) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

/**
 * 加载js代码
 * @param code
 */
function addScriptEle(code) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    try {
        // firefox、safari、chrome和Opera
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        // IE早期的浏览器 ,需要使用script的text属性来指定javascript代码。
        script.text = code;
    }
    document.getElementsByTagName("head")[0].appendChild(script);
}

/**
 * 加载js文件
 * @param url  js文件路径
 * @param callback  加载成功后执行的回调函数
 */
function loadJsFile(url, callback) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof (callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}

/**
 * 向页面中添加div
 * @param className   类名
 * @param innerHtml   内容
 * @param clickFunc   点击事件函数
 * @returns {HTMLDivElement}
 */
function addDivEle(className = '', innerHtml = '', clickFunc = false, parentSelector = '') {
    // console.log('addDivEle.className', className)
    let div = document.createElement('div')
    div.className = className
    div.innerHTML = innerHtml
    if (typeof clickFunc == 'function') {
        div.onclick = clickFunc
    }
    // console.log('addDivEle.parentSelector', parentSelector)
    if (parentSelector.length > 0) {
        document.querySelector(parentSelector).append(div)
    } else {
        document.body.append(div)
    }
    return div
}

/**
 * 添加工具按钮
 * @param className   按钮类名
 * @param innerHtml   按钮内容
 * @param clickFunc   按钮点击事件
 * @param param       {}
 */
function addToolBtn(className = '', innerHtml = '', clickFunc = false, param = {}) {
    let defaultParam = {
        yAlign: 'bottom',
        xAlign: 'left',
        boxSelector: '.monkeyToolBtnBox',
        btnSelector: '.monkeyToolBtn',
        //自定义盒子样式
        boxCss: '',
        //自定义按钮样式
        btnCss: '',
    }
    param = Object.assign({}, defaultParam, param)

    if (param.boxSelector && document.querySelector(param.boxSelector) == null) {
        addDivEle(param.boxSelector.replaceAll('\\.', ' '))
        // return;
        addStyleEle(`
      ${param.boxSelector} {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        ${param.yAlign == 'top' ? 'top:0;bottom:auto;' : 'top:auto;bottom:0;'}
        ${param.xAlign == 'left' ? 'left:0;right:auto;' : 'left:auto;right:0;align-items: flex-end;'}
        line-height: 1;
        cursor: pointer;
        z-index: 999999;
        font-size: 15px;
        ${param.boxCss}
      }
      ${param.btnSelector} {
        border: 2px solid red;
        color: red;
        padding: 5px 10px;
        background: white;
        font-size: 15px;
        ${param.btnCss}
      }
    `)
    }
    addStyleEle(`
    ${param.btnSelector}.${className} {
      cursor: pointer;
      ${param.btnCss}
    }
    `)
    addDivEle(`${param.btnSelector.replaceAll('\\.', ' ')} ${className}`, innerHtml, clickFunc, param.boxSelector)
}

/**
 * 移除iframe页面元素，用于wifi劫持和去除iframe广告
 */
function removeIframe() {
    let filter = new Object();
    filter.ad = function () {
        let tar = document.getElementsByTagName('iframe');
        let len = tar.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                tar[0].remove()
            }
        }
    }
    filter.timer = function () {
        let clean = setInterval(function () {
            if (document.getElementsByTagName('iframe').length == 0) {
                clearInterval(clean)
                console.log('清除')
            } else {
                filter.ad()
            }
        }, 300)
    }
    filter.timer()
}

/**
 * 时间格式化
 * @param fmt  格式，yyyy-MM-dd hh:mm:ss.S
 * @returns {*}   时间字符串，2006-07-02 08:09:04.423
 * @constructor
 */
Date.prototype.format = function (fmt) { //author: meizz
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 替换全部匹配到的内容
 * @param FindText  需要查找的字符串
 * @param RepText   将要替换的字符串
 * @returns {string}
 */
String.prototype.replaceAll = function (FindText, RepText) {
    let regExp = new RegExp(FindText, "g");
    return this.replace(regExp, RepText);
}

/**
 * 随机获取一个元素
 * @returns {*}
 */
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)]
}


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

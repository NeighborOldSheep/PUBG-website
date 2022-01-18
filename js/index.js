/* 
    参数:
        close: 关闭的按钮/能关闭的地方
        id: 关闭的窗口
        className: 需要操作的class名称
        bubbling: 阻止冒泡事件
*/
function close(close, id, className, bubbling) {
    //关闭弹窗
    close.onclick = () => id.classList.remove(className);
    //阻止冒泡事件
    bubbling.onclick = ev => ev.stopPropagation();
}

  //登录
(function(){
    //获取元素
    var loginBox = document.getElementById("loginBox"),
        login = document.querySelector("#nav .login"),
        wrap = document.querySelector("#loginBox .wrap"),
        closeBtn = document.querySelector('#loginBox .close');

    //打开登陆弹窗
    login.onclick = () => loginBox.classList.add('show');
    //关闭登录弹窗
    /* loginBox.onclick = closeBtn.onclick = () => loginBox.classList.remove("show"); */
    close(loginBox, loginBox, 'show', wrap);
    close(closeBtn, loginBox, 'show', wrap);

    //阻止冒泡事件发生
    /* wrap.onclick = ev => ev.stopPropagation(); */
})();
    

(function () {    //适龄弹窗
    //获取元素
    var tip = document.querySelector('#banner .tip'),
        yearBox = document.getElementById("yearBox"),
        closeBtn = document.querySelector('#yearBox .close'),
        wrap = document.querySelector('#yearBox .wrap');

    tip.onclick = () => {
        //点击显示适龄弹窗
        yearBox.classList.add('show');
    };

    //关闭适龄弹窗
    /* yearBox.onclick = closeBtn.onclick = () => yearBox.classList.remove('show'); */
    close(yearBox,yearBox,'show',wrap);
    close(closeBtn,yearBox,'show',wrap);

    //阻止冒泡事件发生
    /* wrap.onclick = ev = () => ev.stopPropagation; */

})();


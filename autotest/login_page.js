"use strict";
//function isUserName() {
//    var value = document.getElementById("username_input").value;
//    var rule = /^[a-zA-Z0-9_]{3,16}$/; /*定义验证表达式*/
//    var result = rule.test(value);
//    if (result === true){
//        document.getElementById("check_username").innerHTML = '您输入的用户名是合法的'
//    }
//    else{
//        document.getElementById("check_username").innerHTML = '用户名只包含字母、数字和下划线，并且长度在3到16个字符之间'
//    }
//    return result;     /*进行验证*/
//}


//function isUserName(frameType) {
//    var value;
//    if (frameType === 1){
//        value = document.getElementById("username_input").value;
//    }
//    else if(frameType === 2){
//        value = document.getElementById("password_input").value;
//    }
//
//    var rule = /^[a-zA-Z0-9_]{3,16}$/; /*定义验证表达式*/
//    var result = rule.test(value);
//
//    if (result === true && frameType === 1){
//        document.getElementById("check_username").innerHTML = '您输入的用户名是合法的';
//        }
//    else if (result === true && frameType === 2){
//        document.getElementById("check_password").innerHTML = '您输入的用户名是合法的';
//        }
//    else if(result === false && frameType === 1){
//        document.getElementById("check_username").innerHTML = '用户名只包含字母、数字和下划线，并且长度在3到16个字符之间';
//        }
//    else{
//        document.getElementById("check_password").innerHTML = '用户名只包含字母、数字和下划线，并且长度在3到16个字符之间';
//        }
//
//    return result;     /*进行验证*/
//}

function isUserName() {
    var username_input;
    var password_input;

    username_input = document.getElementById("username_input").value;
    password_input = document.getElementById("password_input").value;

    var rule = /^[a-zA-Z0-9_]{3,16}$/; /*定义验证表达式*/
    var username_result = rule.test(username_input);
    var password_result = rule.test(password_input);

    if (username_result === true){
        document.getElementById("check_username").innerHTML = '您输入的用户名是合法的';
        }
    else if (username_result === false){
        document.getElementById("check_username").innerHTML = '用户名只包含字母、数字和下划线，并且长度在3到16个字符之间';
        }
    else{
        alert("用户名合法判断有误，请检查")
        }

    if (password_result === true){
        document.getElementById("check_password").innerHTML = '您输入的用户名是合法的';
        }
    else if(result === false){
        document.getElementById("check_username").innerHTML = '用户名只包含字母、数字和下划线，并且长度在3到16个字符之间';
        }
    else{
        alert("密码合法判断有误，请检查")
        }

    return result;     /*进行验证*/
}



      //document.getElementById("do_login").addEventListener("click", function(event) {
      //event.preventDefault(); // 阻止默认行为，如刷新页面
      // 其他代码...
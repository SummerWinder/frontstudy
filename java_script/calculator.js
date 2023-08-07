/* 2022-10-13 15:30 author by zjc02 */
//方法一：
// 从html文件id为first的标签中获取数字，并返回
function get_first_num()
    {
    var num1=document.getElementById("first").value
    return num1;
    }

// 从html文件id为second的标签中获取数字，并返回
function get_second_num()
    {
    var num2=document.getElementById("second").value
    return num2;
    }

// 这是两个数字相加的方法
function add()
    {
        var a = document.getElementById("first").value;
        var b = get_second_num();
        var re =Number(a)+Number(b);
        send_result("计算结果是：" + re);
    }

// 这是两个数字相减的方法
function subtract()
    {
        var a = get_first_num();
        var b = get_second_num();
        var re =Number(a)-Number(b);
        send_result("计算结果是：" + re);
    }

// 这是两个数字相乘的方法
function multiply()
    {
        var a = get_first_num();
        var b = get_second_num();
        var re =Number(a)*Number(b);
        send_result("计算结果是：" + re);
    }

// 这是两个数字相除的方法
function divide()
    {
        var a = get_first_num();
        var b = get_second_num();
        var re =Number(a)/Number(b);
        send_result("计算结果是：" + re);
    }

//这里的函数中加了一个变量，将最终结果写入到html文件中id为result的标签
function send_result(lastResult)
    {
    var num=document.getElementById("result")
    num.innerHTML = lastResult;
    }


//方法二(暂不可用，待调试)：
var last_result;
var type;
//加法
function add() {
    var add_re = true
    sendResult(add_re);
}

//减法
function subtract() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a - b;
    sendResult(re);
}

//乘法
function ride() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a * b;
    sendResult(re);
}

//除法
function divide() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a / b;
    sendResult(re);
}

//给p标签传值
function sendResult(type) {
        var a = getFirstNumber();
        var b = getTwiceNumber();
        var num = document.getElementById("result")
    if (type == true){
        var result =Number(a) +Number(b);}
    num.innerHTML = result;
}

//获取第一位数字
function getFirstNumber() {
    var firstNumber = document.getElementById("first").value;
    return firstNumber;
}

//获取第二位数字
function getTwiceNumber() {
    var twiceNumber = document.getElementById("second").value;
    return twiceNumber;
}
/* 2022-10-13 15:30 author by zjc02 */
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


function get_first_num()
    {
    var num1=document.getElementById("first").value
    return num1;
    }

function get_second_num()
    {
    var num2=document.getElementById("second").value
    return num2;
    }

function add()
    {
        var a = get_first_num();
        var b = get_second_num();
        var re =Number(a)+Number(b);
//        var re =get_first_num() + get_second_num();直接写变量没有存储起来，所以从输入框获取的数字就无法进行计算了
        send_result("计算结果是：" + re);
    }

function subtraction()
    {
        var a = get_first_num();
        var b = get_second_num();
        var re =Number(a)-Number(b);
        send_result("计算结果是：" + re);
    }

//这里的函数中加了一个变量，将最终结果写入到html文件中
function send_result(lastResult)
    {
    var num=document.getElementById("result")
    num.innerHTML = lastResult;
    }


function myFunction()
    {
        document.getElementById("demo1").innerHTML = person.lastName + " 的年纪已经 " + person["age"] + " 岁了 ";
        age = person["age"] + 1
        document.getElementById("demo2").innerHTML = age + " 岁了 ";
    }

function myFunction1(name,job)
{
	alert("Welcome " + name + ", the " + job);
}

function sum(num1,num2)
{
	alert(num1 * num2);
}


function toCompare(num1,num2)
{
	if (num1>num2)
	{
	return;
	}
	alert(num1 * num2);
}
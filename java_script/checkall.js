//方法一：有个小问题，没有判断是否已经全选，手动点击一个一个选中后，在点击按钮会出现无法取消操作，需要点击两次。
//var checkAll = false;
//function allCheck(){
//    checkAll = !checkAll;
//    let inputs = document.getElementsByName('checkbox')
//    for(var i =0;i<inputs.length;i++){inputs[i].checked = checkAll}
//}

//方法一修正
//var checkAll = false;
//function allCheck(){
//    checkAll = !checkAll;
//    let inputs = document.getElementsByName('checkbox')
//    for(var i =0;i<inputs.length;i++){
//        for (var j = 0; j < inputs.length; j++) {//判断是否已经全选
//            if (inputs[j].checked == true) {
//                checkAll = false;
//            }else{
//                checkAll = true;
//                continue;
//            }
//        }
//        inputs[i].checked = checkAll;
//    }
//}

//方法二：
//function check_boxed(objName){
//	var objNameList=document.getElementsByName(objName);
//	if(null!=objNameList){
//		for(var i=0;i<objNameList.length;i++){
//			objNameList[i].checked="checked";
//		}
//	}
//}
//function uncheck_boxed(objName){
//	var objNameList=document.getElementsByName(objName);
//	if(null!=objNameList){
//		for(var i=0;i<objNameList.length;i++){
//			objNameList[i].checked="";
//		}
//	}
//}

//方法三：
function allCheck(){
    var checkFlag = false;    //默认执行的操作是取消全选
    var inputs = document.getElementsByName('checkbox');
    for(var i = 0; i < inputs.length; i++) {
        if(!inputs[i].checked) {    //如果存在未勾选的状态则要做的是全选
            checkFlag = true;
            break;    //可加可不加，加了可能能减少遍历的时间，不加也不会对结果有影响
        }
    }
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].checked = checkFlag;
    }
}


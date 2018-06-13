function $(id){
	return document.getElementById(id);
}
let arr=[false,false,false];
window.onload=function(){
	$("numId").onblur=function(){
		var str=$("numId").value;
		if(str==""){
			$("spanId1").innerHTML="请输入电话号码";
			arr[0]=false;
		}else if(checkRegExp("phoneNumer",str)==false){
			$("spanId1").innerHTML="电话号码格式错误";
			arr[0]=false;
		}else{
			$("spanId1").innerHTML="√";
			$("spanId1").style.color="green";
			arr[0]=true;
		}
	}

	$("usernameId").onblur=function(){
		var str=$("usernameId").value;
		var type="username";
		if(str==""){
			$("spanId2").innerHTML="请输入用户名";
			arr[1]=false;
		}else{
			$("spanId2").innerHTML="√";
			$("spanId2").style.color="green";
			arr[1]=true;
		}
		// else if(checkRegExp(type,str)==false){
		// 	$("spanId2").innerHTML="用户名格式错误";
		// }
	}

	$("passId").onblur=function(){
		var str=$("passId").value;
		if(str==""){
			$("spanId3").innerHTML="请输入密码";
			arr[2]=false;
		}else if(checkRegExp("password",str)==false){
			$("spanId3").innerHTML="密码格式格式";
			arr[2]=false;
		}else{
			$("spanId3").innerHTML="√";
			$("spanId3").style.color="green";
			arr[2]=true;
		}
	}

	$("sureId").onblur=function(){
		var str=$("sureId").value;
		if(str==""){
			$("spanId4").innerHTML="请输入密码";
		}else if(str!=$("passId").value){
			$("spanId4").innerHTML="密码输入不一致";
		}else{
			$("spanId4").innerHTML="√";
			$("spanId4").style.color="green";
		}
	}
	// $("sub").onclick=function(){
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open("post","reg.php",true);
	// 	xhr.onreadystatechange = function(){
	// 		if(xhr.readyState==4 && xhr.status==200){
	// 			if(xhr.responseText=="the userphone exists"){
	// 				alert("该电话号码已被注册！");
	// 			}else if(xhr.responseText=="reg succes"){
	// 				alert("注册成功！");
	// 			}else if(xhr.responseText=="reg fail"){
	// 				alert("网页错误！");
	// 			}
	// 		}
	// 	}
	// 	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");		
	// 	let sendstr = "userphone="+$("numId").value+"&username="+$("usernameId").value+"&userpass="+$("passId").value;
	// 	xhr.send(sendstr);
	// }
}
function check(event){
	let evt=event || window.event;
	if(arr!=[true,true,true]){
		if(evt.preventDefault()){
			evt.preventDefault();	
		}else{
			evt.returnValue = false;
		}
	}
}
	
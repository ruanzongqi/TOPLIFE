function $(id){
		return document.getElementById(id);
	}
window.onload=function(){
	$("btn").onclick=function(){
		let xhr=new XMLHttpRequest();
		xhr.open("post","loginCheck.php",true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					saveCookie("username",$("username").value,7);
					location.href="index.html";
				}else{
					alert("用户名或者密码不对，请重新输入！")
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let sendstr = "username="+$("username").value+"&userpass="+$("userpass").value;
		xhr.send(sendstr);
	}
}
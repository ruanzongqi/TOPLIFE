function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	$("next").onclick = function(){
		var str=$("userphone").value;
		if(str==""){
			alert("请输入电话号码");
		}else if(checkRegExp("phoneNumer",str)==false){
			$("userphone").value="";
			alert("电话号码格式错误");
		}else{
			var xhr = new XMLHttpRequest();
			xhr.open("get","register.php?userphone="+$("userphone").value,true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="0"){
						alert("存在");
					}else{
						location.href="reg.html";
					}
				}
			}		
			xhr.send();
		}
	}
}

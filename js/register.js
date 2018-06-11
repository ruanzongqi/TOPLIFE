function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	$("check").onclick = function(){
		var xhr = new XMLHttpRequest();
		
		xhr.open("get","register.php?userphone="+$("userphone").value,true);//设置
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="0"){
					alert("存在");
				}else{
					alert("可以用");
				}
			}
		}		
		xhr.send();
	}
}

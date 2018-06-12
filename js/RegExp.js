//功能：正则验证
//参数：验证类型（用户名，email，手机号码，身份证号码，密码）
		//username
		//phoneNumer
		//password
//返回值：true :验证通过   false :验证失败
function checkRegExp(type,str){
	var reg=null;
	switch(type){
		case "username":reg=/^[A-Za-z]\w{5,14}$/;break;
		case "phoneNumer":reg=/^1[345789]\d{9}$/;break;
		case "password":reg=/^[A-Za-z]\w{5,15}$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(str)){
			return true;
		}
	}
	return false;
}

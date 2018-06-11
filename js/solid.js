let imgs = ["solid_1.jpg","solid_2.jpg"];
let hrefs = ["http://www.baidu.com","http://www.1000phone.com"];
let ord = 0;
let myTimer =null; 
//轮播图
function solid(){
	initUI();
	$("#banner img").click(function(){
		let index = $("#banner img").index(this);
		window.location.href = hrefs[index];
	});	
	changeImg();
	$("#banner").mouseover(function(){
		clearInterval(myTimer);
	});
	$("#banner").mouseout(function(){
		changeImg();
	});
	$("#btns li").click(function(){
		clearInterval(myTimer);
		$("#banner img").eq(ord).stop(true,true);
		let index = $("#banner li").index(this);
		showImg(ord,index);//showImg(2,4);		
	});
	function initUI(){
		$("#btns li:first").css({"background-color":"#666666","width":"50px","borderRadius":"10px"});	
		$("#banner img").slice(1).css({"left":$(window).width()});
	}
	function changeImg(){
		myTimer = setInterval(function(){
			let outOrd = ord;
			ord=ord+1;
			showImg(outOrd,ord);
		},3500);
	}
	function showImg(outOrd,transOrd){
		ord=transOrd;
		if(ord>imgs.length-1 || ord<0){
			ord=0;
		}
		fadeInOut(outOrd,ord);
		$("#btns li").css({"backgroundColor":"#666666","width":"11px","borderRadius":"100%"});
		$("#btns li").eq(ord).css({"backgroundColor":"#666666","width":"50px","borderRadius":"10px"});	
	}
	function fadeInOut(outOrd,inOrd){
		if(outOrd==inOrd){
			return;
		}
		$("#banner img").eq(outOrd).css({
			"left":"0px"
		});
		
		$("#banner img").eq(inOrd).css({
			"left":$(window).width()
		});
		$("#banner img").eq(outOrd).animate({
			"left":-1*$(window).width()
		},500);
		$("#banner img").eq(inOrd).animate({
			"left":"0px"
		},500);
	}
}
//放大效果
function scale(){
	$(".the_con").hover(
		function(){
			$(".the_con img").animate({
				width: "1220px",
	  			height: "310px",
	  			left: "-10px",
	  			top: "-5px",
	  			opacity:0.95
			},500);
		},
		function(){
			$(".the_con img").animate({
				width: "1190px",
	  			height: "300px",
	  			left: 0,
	  			top: 0,
	  			opacity:1
			},300);
		}
	);
	$(".con_1").hover(
		function(){
			$(".con_1 img").animate({
				width: "1220px",
	  			height: "280px",
	  			left: "-10px",
	  			top: "-5px",
	  			opacity:0.95
			},500);
		},
		function(){
			$(".con_1 img").animate({
				width: "1190px",
	  			height: "270px",
	  			left: 0,
	  			top: 0,
	  			opacity:1
			},300);
		}
	);
	$(".sto_left").mouseenter(function(){
		$(".sto_left img").animate({
			width: "580px",
  			height: "190px",
  			left: "-10px",
  			top: "-5px"
		},500);
		$(".sto_left .ss").animate({
			opacity: 0.6
		},500);
		$(".sto_left .ss p").css("color","#c4a66a");
		$(".sto_left .ss span").css("background","#c4a66a");
		$(".sto_left .ss span").animate({
			width: "150px"
		},500);
	});

	$(".sto_left").mouseleave(function(){
		$(".sto_left img").animate({
			width: "560px",
  			height: "180px",
  			left: 0,
  			top: 0
		},500);
		$(".sto_left .ss").animate({
			opacity: 0.4
		},500);
		$(".sto_left .ss p").css("color","#ffffff");
		$(".sto_left .ss span").css("background","#ffffff");
		$(".sto_left .ss span").animate({
			width: "75px"
		},500);
	});
	$(".sto_right").mouseenter(function(){
		$(".sto_right img").animate({
			width: "580px",
  			height: "190px",
  			left: "-10px",
  			top: "-5px"
		},500);
		$(".sto_right .ss").animate({
			opacity: 0.6
		},500);
		$(".sto_right .ss p").css("color","#c4a66a");
		$(".sto_right .ss span").css("background","#c4a66a");
		$(".sto_right .ss span").animate({
			width: "150px"
		},500);
	});

	$(".sto_right").mouseleave(function(){
		$(".sto_right img").animate({
			width: "560px",
  			height: "180px",
  			left: 0,
  			top: 0
		},500);
		$(".sto_right .ss").animate({
			opacity: 0.4
		},500);
		$(".sto_right .ss p").css("color","#ffffff");
		$(".sto_right .ss span").css("background","#ffffff");
		$(".sto_right .ss span").animate({
			width: "75px"
		},500);
	});
}

// picking
function picking(){
	$(".pick_left_top").hover(
		function(){
			$(".pick_left_top .pp").css("color","#c4a66a");
			$(".pick_left_top .pppp").css("background","#c4a66a");
			$(".imgs_1").animate({
	  			left: "-10px",
			},300);
			$(".pick_left_top .pppp").animate({
	  			width: "100px",
			},300);
		},
		function(){
			$(".pick_left_top .pp").css("color","black");
			$(".pick_left_top .pppp").css("background","black");
			$(".imgs_1").animate({
	  			left: "0px",
			},300);
			$(".pick_left_top .pppp").animate({
	  			width: "50px",
			},300);
		}
	);
	$(".pick_left_bom").hover(
		function(){
			$(".pick_left_bom .pp").css("color","#c4a66a");
			$(".pick_left_bom .pppp").css("background","#c4a66a");
			$(".imgs_2").animate({
	  			left: "-10px",
			},300);
			$(".pick_left_bom .pppp").animate({
	  			width: "100px",
			},300);
		},
		function(){
			$(".pick_left_bom .pp").css("color","#ffffff");
			$(".pick_left_bom .pppp").css("background","#ffffff");
			$(".imgs_2").animate({
	  			left: "0px",
			},300);
			$(".pick_left_bom .pppp").animate({
	  			width: "50px",
			},300);
		}
	);
	$(".pick_right_top").hover(
		function(){
			$(".pick_right_top .pp").css("color","#c4a66a");
			$(".pick_right_top .pppp").css("background","#c4a66a");
			$(".imgs_3").animate({
	  			left: "-10px",
			},300);
			$(".pick_right_top .pppp").animate({
	  			width: "100px",
			},300);
		},
		function(){
			$(".pick_right_top .pp").css("color","#ffffff");
			$(".pick_right_top .pppp").css("background","#ffffff");
			$(".imgs_3").animate({
	  			left: "0px",
			},300);
			$(".pick_right_top .pppp").animate({
	  			width: "50px",
			},300);
		}
	);
	$(".pick_right_bom").hover(
		function(){
			$(".pick_right_bom .pp").css("color","#c4a66a");
			$(".pick_right_bom .pppp").css("background","#c4a66a");
			$(".imgs_4").animate({
	  			left: "-10px",
			},300);
			$(".pick_right_bom .pppp").animate({
	  			width: "100px",
			},300);
		},
		function(){
			$(".pick_right_bom .pp").css("color","#ffffff");
			$(".pick_right_bom .pppp").css("background","#ffffff");
			$(".imgs_4").animate({
	  			left: "0px",
			},300);
			$(".pick_right_bom .pppp").animate({
	  			width: "50px",
			},300);
		}
	);

}

// going
function going(){
	$(".go img").each(function(i){
		$(this).hover(
			function(){
				$(this).animate({
					opacity:0.9
				});
			},
			function(){
				$(this).animate({
					opacity:1
				});
			}
		);
	});
	$(".on_1").hover(
		function(){
			$(".on_1 p").css("color","#c4a66a");
			$(".on_1 p").css("border-bottom","3px solid #c4a66a");
			$(".on_1 p").animate({
				left:"320px"
			},500);
			$(".on_1 p span").animate({
				left:"-30px"
			},500);
		},
		function(){
			$(".on_1 p").css("color","#ffffff");
			$(".on_1 p").css("border-bottom","3px solid #ffffff");
			$(".on_1 p").animate({
				left:"300px"
			},500);
			$(".on_1 p span").animate({
				left:"0"
			},500);
		}
	);
	$(".on_2").hover(
		function(){
			$(".on_2 p").css("color","#c4a66a");
			$(".on_2 p").css("border-bottom","3px solid #c4a66a");
			$(".on_2 p").animate({
				left:"320px"
			},500);
			$(".on_2 p span").animate({
				left:"-30px"
			},500);
		},
		function(){
			$(".on_2 p").css("color","#ffffff");
			$(".on_2 p").css("border-bottom","3px solid #ffffff");
			$(".on_2 p").animate({
				left:"300px"
			},500);
			$(".on_2 p span").animate({
				left:"0"
			},500);
		}
	);
	$(".on_left").hover(
		function(){
			$(".on_left span").css("color","#c4a66a");
			$(".on_left p").css("background","#c4a66a");
			$(".on_left p").animate({
				width:"80px",
				marginLeft:"38px"
			},500);
		},
		function(){
			$(".on_left span").css("color","black");
			$(".on_left p").css("background","#c4a66a");
			$(".on_left p").animate({
				width:"0px",
				marginLeft:"25px"
			},500);
		}
	);
	$(".on_right").hover(
		function(){
			$(".on_right span").css("color","#c4a66a");
			$(".on_right p").css("background","#c4a66a");
			$(".on_right p").animate({
				width:"80px",
				// marginLeft:"38px"
			},500);
		},
		function(){
			$(".on_right span").css("color","black");
			$(".on_right p").css("background","#c4a66a");
			$(".on_right p").animate({
				width:"0px",
				// marginLeft:"25px"
			},500);
		}
	);
}

window.onload = function(){	
	solid();
	picking();
	scale();
	going();
}
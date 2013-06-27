$(function(){
	//刻度
	var r = 200,
		jd = 360/$("#time li").length,//每一个div对应的角度;
		hd = jd*Math.PI/180;//每一个div对应的弧度;
	$("#time li").each(function(index){
		$(this).css({"left":Math.sin((hd*index))*r-10,"top":Math.cos((hd*index))*r-10});
	});
	
//初始化指针
	var time = new Date(),
		second = time.getSeconds(),
		minute = time.getMinutes(),
		hour = time.getHours(),
		minuteDeg = minute*6 + second*6/60;	
	$("#second").css({ "-webkit-transform": "rotate("+second*6+"deg)", "-moz-transform": "rotate("+second*6+"deg)" });	
	$("#minute").css({ "-webkit-transform": "rotate("+minute*6+"deg)", "-moz-transform": "rotate("+minute*6+"deg)" });	
	if(hour>12){hour = hour -12;}
	hourDeg = hour * 30 + minute*30/60;
	$("#hour").css({ "-webkit-transform": "rotate("+hour*30+"deg)", "-moz-transform": "rotate("+hour*30+"deg)" });
	//指针周期
	setInterval(function(){
		var time = new Date(),
		second = time.getSeconds(),
		minute = time.getMinutes(),
		hour = time.getHours(),
		minuteDeg = minute*6 + second*6/60;	
		if(hour>12){hour = hour -12;}
	    hourDeg = hour * 30 + minute*30/60;
	$("#second").css({ "-webkit-transform": "rotate("+second*6+"deg)", "-moz-transform": "rotate("+second*6+"deg)" });
	$("#minute").css({ "-webkit-transform": "rotate("+minuteDeg+"deg)", "-moz-transform": "rotate("+minuteDeg+"deg)" });
	$("#hour").css({ "-webkit-transform": "rotate("+hourDeg+"deg)", "-moz-transform": "rotate("+hourDeg+"deg)" });
	},1000)
})
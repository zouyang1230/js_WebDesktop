// JavaScript Document	2016   zouyang

window.onload=function(){
	var aBottomContainer_box2 = document.getElementById("bottomContainer_box2");
	var aLi1 = aBottomContainer_box2.getElementsByTagName("li");

	
	for(var i = 0;i<aLi1.length;i++)
	{
		qinxianMove(aLi1[i]);
	}
	
	//bottomContainer_box4翻转 
	var oBottomContainer_box4 = document.getElementById("bottomContainer_box4");
	
/* 	oBottomContainer_box4.onmouseover = function(evt)
	{
		var e = evt || event;
		var iX = e.clientX - posLeft(this) ;  //鼠标在oBottomContainer_box4里的坐标
		//document.title = iX;
		this.style.transition = "0.5s";
		if (iX > this.offsetWidth/2)   //鼠标在右侧
		{
			this.style.transform = "rotateY(30deg)";
			this.style.background = "#c5c0c0";
		}
		else
		{
			this.style.transform = "rotateY(-30deg)";
			this.style.background = "#c5c0c0";
		}
	}
	oBottomContainer_box4.onmouseout = function(evt)
	{
		this.style.transform = "rotateY(0deg)";
		this.style.background = "#282828";
	} */
	
	
	oBottomContainer_box4.onmouseover = function()
	{
		this.style.borderColor = "#fff";
		this.style.borderWidth = "6px";
		this.style.paddingTop = "5px";


	}
	oBottomContainer_box4.onmouseout = function()
	{
		this.style.borderColor = "black";
		this.style.borderWidth = "1px";
		this.style.paddingTop = "10px";
	}
	

	
	
}

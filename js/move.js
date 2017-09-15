// JavaScript Document	2016   zouyang


function startMove(obj,json,fn){ 			//快速 iCur除以3  完美运动框架   完美的同时运动框架+链式运动-运用json
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var bStop = true;
		
		for(var attr in json){
			
			var iCur = 0;
			if( attr == 'opacity'){
				iCur = Math.round(getStyle(obj,attr)*100);
			}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (json[attr] - iCur)/3;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  	//搞定小数点像素问题
			
			if(iCur != json[attr]){
				bStop = false;
			}
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+ (iCur+iSpeed) +')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
			
		}
		
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
		
	},30);
} 


function startMove2(obj,json,fn){ 			// iCur/7    完美运动框架   完美的同时运动框架+链式运动-运用json
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var bStop = true;
		
		for(var attr in json){
			
			var iCur = 0;
			if( attr == 'opacity'){
				iCur = Math.round(getStyle(obj,attr)*100);
			}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (json[attr] - iCur)/7;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  	//搞定小数点像素问题
			
			if(iCur != json[attr]){
				bStop = false;
			}
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+ (iCur+iSpeed) +')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
			
		}
		
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
		
	},30);
} 

//  tween    开始  
function getNow()
	{
		return new Date().getTime();
	}
function startMove3(obj,json,time,fx,callBack){ 			//  tween   动画效果  time时间  fx形式我用的elasticOut弹性曲线做琴弦效果  回调琴弦效果没用
	var iNowTime = getNow();
	var iCur = {};
	for (var attr in json)
	{
		if(attr == "opacity")
		{
			iCur[attr] = Math.round(getStyle(obj , attr)*100 );
		}
		else
		{
			iCur[attr] = parseInt(getStyle(obj,attr));
		}
	}
	clearInterval(obj.oTimer);
	obj.oTimer = setInterval( function(){
		var iTime = time-Math.max(0,iNowTime - getNow() + time);
		for (var attr in json)
		{
			var iVal = Tween[fx](iTime, iCur[attr], json[attr] - iCur[attr], time)
			if(attr == "opacity")
			{
				obj.style.opacity = iVal/100;
				obj.style.filter = "alpha(opacity="+ iVal +")";
			}
			else
			{
				obj.style[attr] = iVal + "px";
			}
		}
		if(iTime == time )
		{
			clearInterval(obj.oTimer);
			if(callBack)
			{
				callBack.call(obj);
			}
		}
	},14);
} 

//文字琴弦运动
function  qinxianMove( obj )			
	{             
		var iObjHeight=obj.offsetHeight;
		var sHtml = obj.innerHTML;
		obj.innerHTML = "";
/* 		obj.style.height = "30px";
		obj.style.lineHeight = "30px";
		obj.style.position = "relative";
		obj.style.paddingTop = "6px"; */
		obj.style.visibility = "visible";
		for(var j=0;j<sHtml.length;j++)
		{
			obj.innerHTML+="<span>" + sHtml[j] + "</span>";   //给每一个字符加一个span包裹起来，好定位
		}
		
		var aSpan=obj.children;
		for(var j=0;j<aSpan.length;j++)
		{
			aSpan[j].style.left=aSpan[j].offsetLeft+"px";
			aSpan[j].style.top=aSpan[j].offsetTop+"px";
			aSpan[j].startTop=aSpan[j].offsetTop;
		}
		for(var j=0;j<aSpan.length;j++)
		{
			aSpan[j].style.position="absolute";  
			(function(aSpan,nub2){ 
				var iStart=0;
				var iSpanHeight=aSpan[0].offsetHeight;
				aSpan[nub2].onmouseover=function(ev)
				{
					iStart=ev.clientY;
				};
				aSpan[nub2].onmousemove=function(ev)
				{
					var iDis=ev.clientY-iStart;
					var iNub=iDis>0?1:-1;
					if(this.startTop+iDis>=0 && this.startTop+iDis< (iObjHeight-iSpanHeight))
					{
						for(var j=0;j<aSpan.length;j++)
						{
							if(Math.abs(iDis)>Math.abs(nub2-j))
							{
							aSpan[j].style.top=aSpan[j].startTop+(Math.abs(iDis)-Math.abs(nub2-j))*iNub+"px";
							}
							else
							{
								aSpan[j].style.top=aSpan[j].startTop+"px";
							}
						}
					}
				};
				aSpan[nub2].onmouseout=function(ev)
				{
					for(var j=0;j<aSpan.length;j++)
					{
						startMove3(aSpan[j],{top:aSpan[j].startTop},500,"elasticOut");
					}
				};	
			})(aSpan,j);
		}
	}
	

function getStyle(obj,attr){           //得到obj的attr样式值  获取到的值是带单位的字符串，再给它parseInt(***) 一下，就可以进行计算了。
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}



function addClass(obj,sClass)     //给obj添加一个class
{
	var aClass=obj.className.split('');
	if(!aClass[0])       			//检查是否有class属性
	{
		obj.className=sClass;
		return
	}
	for(var i=0;i<aClass.length;i++)   //检查class属性值是否含有sClass
	{
		if(aClass[i]==sClass)
		{
			return;
		}
	}
	obj.className+=' '+sClass;        //添加sClass进去
}



function getClass(obj,sClass)			//检查obj是否含有名为sClass的class，有则返回true，无则返回false
{
	var aClass=obj.className.split(" ");
	for(var i=0;i<aClass.length;i++)
	{
		if(aClass[i]==sClass)
		{
			return true;
		}
	}
	return false;
}

 
function removeClass(obj,sClass){        //移除一个class
	
	var aClass = obj.className.split(' ');
	if(!aClass[0])return;
	
	for(var i=0; i<aClass.length; i++){
		if(aClass[i]==sClass){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			return;
		}	
	}		
}


function getByClass(sClass,oParent){ 		//获取oParent下某个class的所有标签的集合数组，兼容IE8及以下（sClass别忘了加引号）/oParent是document不加引号
		var parent = oParent || document;
		var aEles = parent.getElementsByTagName('*');
		var arr = [];
		
		for(var i=0; i<aEles.length; i++){
			
			var aClass = aEles[i].className.split(' ');
			
			for(var j=0; j<aClass.length; j++){
				if(aClass[j] == sClass){
					arr.push(aEles[i]);
				}	
			}
		}
		return arr;
}


function vieH()       //浏览器可视区高
{
	return document.documentElement.clientHeight;
}

function vieW()      //浏览器可视区宽
{
	return document.documentElement.clientWidth;
}


function scrollY()   //获取滚动条隐藏的高度
{
	return document.body.scrollTop || document.documentElement.scrollTop;
}


function bindEvent(obj,events,fn)   //兼容的事件绑定
{
	if(obj.addEventListener){
	   obj.addEventListener(events,fn,false);
	}
	else{
	   obj.attachEvent('on'+events,fn);
	}
}

function posTop(obj)   //获取obj和页面最顶端的距离（也就是和html最顶端的距离）
{
	var iTop=0;
	while(obj)
	{
		iTop+=obj.offsetTop;
		obj=obj.offsetParent;
	}

	return iTop;
}


function posLeft(obj)   //获取obj和页面最左端的距离（也就是和html最左端的距离）
{
	var iLeft = 0;
    while(obj){iLeft += obj.offsetLeft; obj = obj.offsetParent;}
    return iLeft;
}

//拖拽框架
function drag(obj)
{
	obj.onmousedown=function(ev)
	{
		var ev=ev||event;
		var iLeft=ev.clientX-obj.offsetLeft;
		var iTop=ev.clientY-obj.offsetTop;
			
		document.onmousemove=function(ev)
		{
			var ev=ev||event;
			var L=ev.clientX-iLeft;
			var T=ev.clientY-iTop;
			if(T<0)
			{
				T=0;
			}
			if(T>document.documentElement.clientHeight-obj.offsetHeight)
			{
				T=document.documentElement.clientHeight-obj.offsetHeight;
			}
			if(L<0)
			{
				L=0;
			}
			if(L>document.documentElement.clientWidth-obj.offsetWidth)
			{
				L=document.documentElement.clientWidth-obj.offsetWidth;
			}
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			obj.style.left=L+scrollLeft+'px';
			obj.style.top=T+scrollTop+'px';
		}
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		}

		return false;
	}
}

//拖拽框架2---运动回原位
var iTuoDong = false;
function drag2(obj)
{
	obj.onmousedown=function(ev)
	{	
		var ev=ev||event;
		var iLeft=ev.clientX-obj.offsetLeft;
		var iTop=ev.clientY-obj.offsetTop;
		var beforeLeft = parseInt(obj.style.left);
		var beforeTop = parseInt(obj.style.top);
			
		document.onmousemove=function(ev)
		{
			/* for (var k =0;k<aA.length;k++)
			{
				aA[k].onclick = null;
			} */
			iTuoDong = true;
			
			var ev=ev||event;
			var L=ev.clientX-iLeft;
			var T=ev.clientY-iTop;
			if(T<0)
			{
				T=0;
			}
			if(T>document.documentElement.clientHeight-obj.offsetHeight)
			{
				T=document.documentElement.clientHeight-obj.offsetHeight;
			}
			if(L<0)
			{
				L=0;
			}
			if(L>document.documentElement.clientWidth-obj.offsetWidth)
			{
				L=document.documentElement.clientWidth-obj.offsetWidth;
			}
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			obj.style.left=L+scrollLeft+'px';
			obj.style.top=T+scrollTop+'px';
			
		}
		document.onmouseup=function()
		{	
			document.onmousemove=null;
			document.onmouseup=null;
			startMove2(obj,{left:beforeLeft,top:beforeTop})
		}

		return false;
	}
}


//阻止默认行为
function preDef(evt) {
    var e = evt || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue= false;
    }
}
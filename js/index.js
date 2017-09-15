// JavaScript Document	2016   zouyang

window.onload=function(){
	
	var oMain_content = document.getElementById('main_content');
	var aUl = oMain_content.getElementsByTagName('ul');
	var aBtns = getByClass('btn',document);		
	var aBtn_span2 = getByClass('btn_span2',document);
	var iNow = 0;
	//aBtn_span2[0].style.backgroundColor = '#a0e311';

	for (var i=0; i<aBtns.length; i++)
	{	
		aBtns[i].index = i;
		aBtns[i].onclick = function()
		{	
			for(var y=0; y<aBtn_span2.length; y++)
			{
				removeClass(aBtn_span2[y],'active')
			}
			addClass(aBtn_span2[this.index],'active') 
			if(this.index != iNow){
			startMove(aUl[iNow],{ opacity:0,top:400 });
			aUl[this.index].style.top=0;
			aUl[this.index].style.left='-1000px';
			startMove(aUl[this.index],{ left:0,opacity:100})
			iNow = this.index;

			}
		}
	}
//开始制作滚动鼠标时切换事件
	var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向下滚动时
				for(var y=0; y<aBtn_span2.length; y++)
				{
					removeClass(aBtn_span2[y],'active')
				}
                startMove(aUl[iNow],{ opacity:0,top:400 },
					function()
					{
						if(iNow==0){iNow=3}else{iNow-=1};
						addClass(aBtn_span2[iNow],'active') 
						aUl[iNow].style.top=0;
						aUl[iNow].style.left='-1000px';
						startMove(aUl[iNow],{ left:0,opacity:100})
					}
				);
            }
            if (e.wheelDelta < 0) { //当滑轮向上滚动时
				for(var y=0; y<aBtn_span2.length; y++)
				{
					removeClass(aBtn_span2[y],'active')
				}
                startMove(aUl[iNow],{ opacity:0,top:400 },
					function()
					{
						if(iNow==3){iNow=0}else{iNow+=1};
						addClass(aBtn_span2[iNow],'active') 
						aUl[iNow].style.top=0;
						aUl[iNow].style.left='-1000px';
						startMove(aUl[iNow],{ left:0,opacity:100})
					}
				);
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向下滚动时
				for(var y=0; y<aBtn_span2.length; y++)
				{
					removeClass(aBtn_span2[y],'active')
				}
                startMove(aUl[iNow],{ opacity:0,top:400 },
					function()
					{
						if(iNow==3){iNow=0}else{iNow+=1};
						addClass(aBtn_span2[iNow],'active') 
						aUl[iNow].style.top=0;
						aUl[iNow].style.left='-1000px';
						startMove(aUl[iNow],{ left:0,opacity:100})
					}
				);
            }
            if (e.detail< 0) { //当滑轮向上滚动时
				for(var y=0; y<aBtn_span2.length; y++)
				{
					removeClass(aBtn_span2[y],'active')
				}
                startMove(aUl[iNow],{ opacity:0,top:400 },
					function()
					{
						if(iNow==0){iNow=3}else{iNow-=1};
						addClass(aBtn_span2[iNow],'active') 
						aUl[iNow].style.top=0;
						aUl[iNow].style.left='-1000px';
						startMove(aUl[iNow],{ left:0,opacity:100})
					}
				);
            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;  
	

//内容图标的hover效果
	var aA = getByClass('main_content_a',document); 
	for (var i=0;i<aA.length; i++)
	{	aA[i].index = i
		aA[i].onmouseover = function()
		{
			this.children[this.children.length-1].style.color='#a0e311';
			this.children[this.children.length-1].style.opacity = 1;
			this.children[this.children.length-1].style.filter = 'alpha(opacity:100)';
		}
		aA[i].onmouseout = function()
		{
			this.children[this.children.length-1].style.color='white';
			this.children[this.children.length-1].style.opacity = 0.6;
			this.children[this.children.length-1].style.filter = 'alpha(opacity:60)';
		}
		//给图标加点击，连接框架 
		var aSrc = [
			'http://www.baidu.com/',
			'http://lol.qq.com/main.shtml',
			'iframeTest.html',
			'https://www.taobao.com/',
			'http://www.qq.com/',
			'http://email.163.com/',
			'intro.html',		
			//第二页
			'iframeTest.html',
			'iframeTest.html',
			'http://email.163.com/',
			//第三页
			'http://email.163.com/',
			'iframeTest.html',
			'iframeTest.html',
			'iframeTest.html',
			'iframeTest.html',
			//第四页
			'iframeTest.html',
			'http://email.163.com/',
			//左侧导航按钮
			'http://v.qq.com/',
			'http://qqapp.qq.com/app/353.html',
			'http://www.qq.com/',
			'http://email.163.com/',
			'https://mail.qq.com/',
			'http://t.qq.com/',
		];
		
			
			aA[i].onclick = function()
			{	if(!iTuoDong ){
				oP.innerHTML = this.children[1].title;
				oIframe.src = aSrc[this.index];
				oFrameweb.style.zIndex = 650;
				oFrameweb.style.display = 'block';
				startMove(oFrameweb,{height:400,opacity:100})
				}
				iTuoDong = false;
			}
		
		
	}
	
//左侧菜单bottom的hover效果
	var	oDiv3 = document.getElementById('div3');
	var 	oDiv3_img = oDiv3.getElementsByTagName("img")[0];
		oDiv3_img.onmouseover = function()
		{
			this.src = 'images/left55.png';
		}
		oDiv3_img.onmouseout = function()
		{
			this.src = 'images/left5.png';
		}

	
//顶部菜单 左右箭头效果
/* 	var oBg = document.getElementById('bg');
	var aBgimgs = [
		'images/1.jpg','images/2.jpg','images/3.jpg'
	]
	var oTop_menu_3 = document.getElementById('top_menu_3');
	var oTop_menu_3_btn1 = oTop_menu_3.children[0];
	var oTop_menu_3_btn2 = oTop_menu_3.children[1];
	
	oTop_menu_3_btn1.onclick = function()
	{
		
	}
	
	oBg.children[0].src */
	
//left menu move效果	  晚上
	var oMenu=document.getElementById('web_menu'); 
	var aImg=oMenu.getElementsByTagName('img');
	var oLeft_menu = document.getElementById('left_menu'); 
	var leftMenuT = Math.round(document.documentElement.clientHeight/2-oLeft_menu.offsetHeight/2 ||	document.body.clientHeight/2-oLeft_menu.offsetHeight/2);
	//左侧菜单靠边居中显示
	oLeft_menu.style.left = 0;
	oLeft_menu.style.top = leftMenuT + "px";
	
	oMenu.onmouseover=function()
	{
		oMenu.onmousemove = function(ev){
			
			var ev = ev || window.event;
			
			for(var i=0;i<aImg.length;i++){
				var y = posTop(aImg[i])
				
				var b = ev.clientY-y;	//距离图片中心点的 Y轴距离
				
				var c = Math.abs(b);   
				//alert(c);
				var scale = 0.8 - c/300;  		//最大0.8倍    在距离300像素
				
				if(scale < 0.5){		
					scale = 0.5;		
				}
				
				aImg[i].style.width = scale * 68 + 'px';	   	//最小0.5*68=34px
				aImg[i].style.height = scale * 68 + 'px';
			}
			
		};
	}
	oMenu.onmouseout=function()
	{
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].style.width =34 + 'px';	   	 
			aImg[i].style.height = 34 + 'px';
		}
		oMenu.onmousemove = null;
	}

	
//我的简介开始
	var oZouyangbox = document.getElementById('zouyangbox');
	var oSpan_zouyangbox = getByClass('close',document)[0];
	var oZouyangbox_img = document.getElementById('zouyangbox_img');
	var oBox1 = document.getElementById('box1');
	var oBox2 = document.getElementById('box2');
	var oBox3 = document.getElementById('box3');
	var oBox4 = document.getElementById('box4');
	var oZhezhao = document.getElementById('zhezhao');
	var boxR = Math.round(document.documentElement.clientWidth/2-oZouyangbox.offsetWidth/2 ||	document.body.clientWidth/2-oZouyangbox.offsetWidth/2);
	var boxT = Math.round(document.documentElement.clientHeight/2-oZouyangbox.offsetHeight/2 ||	document.body.clientHeight/2-oZouyangbox.offsetHeight/2);

	oZouyangbox.onclick =function()
	{	oZhezhao.style.display = 'block';
		startMove2(oZouyangbox,{right:boxR,top:boxT},function(){
			startMove2(oBox1,{height:187,opacity:100},function(){
				startMove2(oBox2,{width:301,opacity:100},function(){
					startMove2(oBox3, {height:187,opacity:100},function(){
						startMove2(oBox4,{width:301,opacity:100},function(){
							oSpan_zouyangbox.style.display = 'block';
						})
					})
				})
			})
		})
	}
	oSpan_zouyangbox.onclick =function(evt)
	{	var e = evt || window.event;
		window.event ? e.cancelBubble = true :e.stopPropagation();  	//冒泡
		oSpan_zouyangbox.style.display = 'none';
		startMove(oBox4,{width:0,opacity:0},function(){
			startMove(oBox3,{height:0,opacity:0},function(){
				startMove(oBox2,{width:0,opacity:0},function(){
					startMove(oBox1,{height:0,opacity:0},function(){
						oZhezhao.style.display = 'none';
						startMove(oZouyangbox,{right:63,top:33})
					})
				})
			})
		})
	}
	
	
	//框架点击按钮加事件
	var oFrameweb = document.getElementById('frameweb');		//框架
	var oMax = document.getElementById('max');
	var oClose = document.getElementById('close');
	var dft_Left = posLeft(oFrameweb)		//把 框架距离 页面最左边的距离 记录下来。因为我css居中用的百分比和margin来算的，运动回去不好固定。
	var dft_Top = posTop(oFrameweb)		//把 框架距离 页面最顶部的距离 记录下来。

	var cdd = true;
	oMax.onclick =function(evt){
		var e = evt || window.event;
		var nowH = document.documentElement.clientHeight || document.body.clientHeight;
		var nowW = document.documentElement.clientWidth || document.body.clientWidth;
		//alert(dft_Top);
		if(cdd)
		{	
			startMove(oFrameweb,{left:0,top:0,marginLeft:0,width:nowW,height:nowH});  
			cdd = false;
			oMax.style.backgroundImage =  'url(images/max2.png)' ; 		 
			oMax.onmouseover = function()
			{
				oMax.style.backgroundImage =  'url(images/max2_hover.png)' ; 	
			}
			oMax.onmouseout = function()
			{
				oMax.style.backgroundImage =  'url(images/max2.png)' ; 	
			}
			
		}
		else
		{
			startMove(oFrameweb,{left:dft_Left,top:dft_Top,width:800,height:400});  
			cdd = true;
			oMax.onmouseover = function()
			{
				oMax.style.backgroundImage =  'url(images/max_hover.png)' ; 	
			}
			oMax.onmouseout = function()
			{
				oMax.style.backgroundImage =  'url(images/max.png)' ; 	
			}
/* 			oMax.style.backgroundImage =   'url(images/max.png)' ; 		
			oMax.style.backgroundPosition = 'center center';
			oMax.style.backgroundRepeat = 'no-repeat';
			oMax.style.backgroundAttachment =  'scroll'; */
		}
	}
	
		oClose.onclick =function(evt)
		{	
			//startMove(oFrameweb,{height:0,opacity:0})
			if(!cdd)
			{
				startMove(oFrameweb,{left:dft_Left,top:dft_Top,width:800,height:400},function(){
					startMove(oFrameweb,{height:0,opacity:0},function(){
						oFrameweb.style.zIndex = -100;
						oMax.style.backgroundImage =  'url(images/max.png)' ; 	
						oIframe.src='#';
						oFrameweb.style.display = 'none';
					})
				}); 
			}
			else
			{
				startMove(oFrameweb,{height:0,opacity:0},function(){
					oFrameweb.style.zIndex = -100;
					oIframe.src='#';
					oFrameweb.style.display = 'none';
				})
			}
		}
	
	//给图标加点击，连接框架   我在127行编辑
	var oFrameweb_bottom = document.getElementById('frameweb_bottom');
	var oIframe = oFrameweb_bottom.children[0];
	var oFrameweb_top = document.getElementById('frameweb_top');
	var oP = oFrameweb_top.children[0];
	
	
	//左侧菜单框架打开
	for(var i = 0; i<aImg.length; i++)
	{	aImg[i].index = i;
		aImg[i].onclick = function()
		{
			oP.innerHTML = this.alt;
			oIframe.src = aSrc[this.index+17];
			oFrameweb.style.zIndex = 650;
			oFrameweb.style.display = 'block';
			startMove(oFrameweb,{height:400,opacity:100})
		}
	}
	
	//0319琴弦效果
	var oList = document.getElementById("list");
	var aLi = oList.getElementsByTagName("li");
	var oList3 = document.getElementById("list3");
	var aLi3 = oList3.getElementsByTagName("li");
	var oList4 = document.getElementById("list4");
	var aLi4 = oList4.getElementsByTagName("li");
	
	var iLiHeight=aLi[0].offsetHeight;
	for(var i=0;i<aLi.length;i++)
	{
		var sHtml = aLi[i].innerHTML;
		aLi[i].innerHTML = "";
		for(var j=0;j<sHtml.length;j++)
		{
			aLi[i].innerHTML+="<span>" + sHtml[j] + "</span>";   
		}
		
		var aSpan=aLi[i].children;
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
					if(this.startTop+iDis>=0 && this.startTop+iDis< (iLiHeight-iSpanHeight))
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
	
	//图标/个人信息box3 box4琴弦运动
	var icons = getByClass('qinxian',document);
	for(var i=0;i<icons.length;i++)
	{	
		  qinxianMove( icons[i] )	;
	}
	for(var i=0;i<aLi3.length;i++)
	{	
		  qinxianMove( aLi3[i] )	;
	}
	for(var i=0;i<aLi4.length;i++)
	{	
		  qinxianMove( aLi4[i] )	;
	}
	
	//时钟
	var oShizhong = document.getElementById("shizhong");
	var oTimebox = document.getElementById("timebox");
	var oDaybox = document.getElementById("daybox");
	var oDatebox = document.getElementById("datebox");
	 fnTime();
	 setInterval(fnTime , 1000);
	
	function fnTime()
	{
		var myTime = new Date();
		// number
		var iYear = myTime.getFullYear();
		var iMonth = myTime.getMonth()+1;
		var iDate = myTime.getDate();
		var iWeek = myTime.getDay();
		var iHours = myTime.getHours();
		var iMin = myTime.getMinutes();
		var iSec = myTime.getSeconds();
		var str1 = '';	
		var str2 = '';	
		var str3 = '';	

		if( iWeek === 0 ) iWeek = '星期日';
		if( iWeek === 1 ) iWeek = '星期一';
		if( iWeek === 2 ) iWeek = '星期二';
		if( iWeek === 3 ) iWeek = '星期三';
		if( iWeek === 4 ) iWeek = '星期四';
		if( iWeek === 5 ) iWeek = '星期五';
		if( iWeek === 6 ) iWeek = '星期六';	
		function toTwo ( n ) 
		{
			return n < 10 ?  '0' + n : '' + n;
		}
		str1 = toTwo(iHours)+' : '+ toTwo(iMin)+' : '+ toTwo(iSec);
		str2 = iWeek;
		str3 = iYear+ '/' +iMonth+'/'+iDate;
		oTimebox.innerHTML = str1;
		oDaybox.innerHTML = str2;
		oDatebox.innerHTML = str3;
	}
	
	//时钟拖拽
	drag(oShizhong)
	//图标拖拽      已搞定拖拽跟click的冲突
	aLi0 = aUl[0].getElementsByTagName("li");
	aLi1 = aUl[1].getElementsByTagName("li");
	aLi2 = aUl[2].getElementsByTagName("li");
	aLi3 = aUl[3].getElementsByTagName("li");
	for (var i = 0; i<aLi0.length; i++)   //给ul1的所有li加拖拽
	{
		 drag2(aLi0[i]);
	}
	for (var i = 0; i<aLi1.length; i++)   
	{
		 drag2(aLi1[i]);
	}
	for (var i = 0; i<aLi2.length; i++)  
	{
		 drag2(aLi2[i]);
	}
	for (var i = 0; i<aLi3.length; i++)  
	{
		 drag2(aLi3[i]);
	}
	
	//制作右键菜单
	var oWindowmenu = document.getElementById("windowmenu");
	var aWindowmenuLi = oWindowmenu.getElementsByTagName("li");
	bindEvent(document,'contextmenu',function(evt){
		var e = evt || event;
		preDef(e);
		oWindowmenu.style.display = "block";
		var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		//alert(viewWidth - oWindowmenu.offsetLeft )
		oWindowmenu.style.left = e.clientX +scrollLeft+ "px";
		oWindowmenu.style.top = e.clientY +scrollLeft+ "px";
		if(viewWidth - oWindowmenu.offsetLeft < oWindowmenu.offsetWidth )
		{
			oWindowmenu.style.left = viewWidth - oWindowmenu.offsetWidth-viewWidth+e.clientX+scrollLeft + "px";
		}
		else
		{
			oWindowmenu.style.left = e.clientX +scrollLeft+ "px";
		};
		if(viewHeight - oWindowmenu.offsetTop < oWindowmenu.offsetHeight )
		{
			oWindowmenu.style.top = viewHeight - oWindowmenu.offsetHeight-viewHeight+e.clientY +scrollTop + "px";
		}
		else
		{
			oWindowmenu.style.top = e.clientY +scrollTop+ "px";
		};

		
	}) 
	
	bindEvent(document,'click',function(evt){
		oWindowmenu.style.display = "none";
	}) 
	for (var i = 0; i<aWindowmenuLi.length;i++)
	{
		aWindowmenuLi[i].onmouseover = function()
		{
			this.style.backgroundColor = "#9cd7cf";
		}
		aWindowmenuLi[i].onmouseout = function()
		{
			this.style.backgroundColor = "#f1f1f1";
		}
	}
}

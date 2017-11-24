//------Below this only IE 7 libs
(function(n){function K(p,q){function s(a){if(s[a]!==v)return s[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=s("json-stringify")&&s("json-parse");else{var e;if("json-stringify"==a){c=q.stringify;var b="function"==typeof c&&r;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new A)&&'""'==c(new B)&&c(t)===v&&c(v)===v&&c()===v&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([v])&&"null"==c(null)&&"[null,null,null]"==c([v,t,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new D(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new D(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new D(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new D(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=q.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var l=5==e.a.length&&1===e.a[0];if(l){try{l=!c('"\t"')}catch(d){}if(l)try{l=
1!==c("01")}catch(h){}if(l)try{l=1!==c("1.")}catch(m){}}}}catch(X){l=!1}c=l}}return s[a]=!!c}p||(p=n.Object());q||(q=n.Object());var A=p.Number||n.Number,B=p.String||n.String,G=p.Object||n.Object,D=p.Date||n.Date,J=p.SyntaxError||n.SyntaxError,N=p.TypeError||n.TypeError,R=p.Math||n.Math,H=p.JSON||n.JSON;"object"==typeof H&&H&&(q.stringify=H.stringify,q.parse=H.parse);var G=G.prototype,t=G.toString,u,C,v,r=new D(-0xc782b5b800cec);try{r=-109252==r.getUTCFullYear()&&0===r.getUTCMonth()&&1===r.getUTCDate()&&
10==r.getUTCHours()&&37==r.getUTCMinutes()&&6==r.getUTCSeconds()&&708==r.getUTCMilliseconds()}catch(Y){}if(!s("json")){var E=s("bug-string-char-index");if(!r)var w=R.floor,S=[0,31,59,90,120,151,181,212,243,273,304,334],F=function(a,c){return S[c]+365*(a-1970)+w((a-1969+(c=+(1<c)))/4)-w((a-1901+c)/100)+w((a-1601+c)/400)};(u=G.hasOwnProperty)||(u=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=t?u=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
c;return a}:(e=c.constructor,u=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return u.call(this,a)});var T={"boolean":1,number:1,string:1,undefined:1};C=function(a,c){var e=0,b,f,l;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(l in f)u.call(f,l)&&e++;b=f=null;e?C=2==e?function(a,c){var e={},b="[object Function]"==t.call(a),f;for(f in a)b&&"prototype"==f||u.call(e,f)||!(e[f]=1)||!u.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==
t.call(a),b,f;for(b in a)e&&"prototype"==b||!u.call(a,b)||(f="constructor"===b)||c(b);(f||u.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),C=function(a,c){var e="[object Function]"==t.call(a),b,g;if(g=!e)if(g="function"!=typeof a.constructor)g=typeof a.hasOwnProperty,g="object"==g?!!a.hasOwnProperty:!T[g];g=g?a.hasOwnProperty:u;for(b in a)e&&"prototype"==b||!g.call(a,b)||c(b);for(e=f.length;b=f[--e];g.call(a,
b)&&c(b));});return C(a,c)};if(!s("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x=function(a,c){return("000000"+(c||0)).slice(-a)},O=function(a){for(var c='"',b=0,g=a.length,f=!E||10<g,l=f&&(E?a.split(""):a);b<g;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+x(2,d.toString(16));break}c+=f?l[b]:a.charAt(b)}}return c+'"'},L=function(a,c,b,g,f,l,d){var h,m,k,n,p,q,r,s,y;try{h=
c[a]}catch(z){}if("object"==typeof h&&h)if(m=t.call(h),"[object Date]"!=m||u.call(h,"toJSON"))"function"==typeof h.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||u.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&h<1/0){if(F){n=w(h/864E5);for(m=w(n/365.2425)+1970-1;F(m+1,0)<=n;m++);for(k=w((n-F(m,0))/30.42);F(m,k+1)<=n;k++);n=1+n-F(m,k);p=(h%864E5+864E5)%864E5;q=w(p/36E5)%24;r=w(p/6E4)%60;s=w(p/1E3)%60;p%=1E3}else m=h.getUTCFullYear(),k=h.getUTCMonth(),n=h.getUTCDate(),
q=h.getUTCHours(),r=h.getUTCMinutes(),s=h.getUTCSeconds(),p=h.getUTCMilliseconds();h=(0>=m||1E4<=m?(0>m?"-":"+")+x(6,0>m?-m:m):x(4,m))+"-"+x(2,k+1)+"-"+x(2,n)+"T"+x(2,q)+":"+x(2,r)+":"+x(2,s)+"."+x(3,p)+"Z"}else h=null;b&&(h=b.call(c,a,h));if(null===h)return"null";m=t.call(h);if("[object Boolean]"==m)return""+h;if("[object Number]"==m)return h>-1/0&&h<1/0?""+h:"null";if("[object String]"==m)return O(""+h);if("object"==typeof h){for(a=d.length;a--;)if(d[a]===h)throw N();d.push(h);y=[];c=l;l+=f;if("[object Array]"==
m){k=0;for(a=h.length;k<a;k++)m=L(k,h,b,g,f,l,d),y.push(m===v?"null":m);a=y.length?f?"[\n"+l+y.join(",\n"+l)+"\n"+c+"]":"["+y.join(",")+"]":"[]"}else C(g||h,function(a){var c=L(a,h,b,g,f,l,d);c!==v&&y.push(O(a)+":"+(f?" ":"")+c)}),a=y.length?f?"{\n"+l+y.join(",\n"+l)+"\n"+c+"}":"{"+y.join(",")+"}":"{}";d.pop();return a}};q.stringify=function(a,c,b){var g,f,l,d;if("function"==typeof c||"object"==typeof c&&c)if("[object Function]"==(d=t.call(c)))f=c;else if("[object Array]"==d){l={};for(var h=0,m=c.length,
k;h<m;k=c[h++],(d=t.call(k),"[object String]"==d||"[object Number]"==d)&&(l[k]=1));}if(b)if("[object Number]"==(d=t.call(b))){if(0<(b-=b%1))for(g="",10<b&&(b=10);g.length<b;g+=" ");}else"[object String]"==d&&(g=10>=b.length?b:b.slice(0,10));return L("",(k={},k[""]=a,k),f,l,g,"",[])}}if(!s("json-parse")){var V=B.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,I,k=function(){b=I=null;throw J();},z=function(){for(var a=I,c=a.length,e,g,f,l,d;b<c;)switch(d=a.charCodeAt(b),
d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=E?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)k();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:g=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||k();e+=V("0x"+a.slice(g,b));break;default:k()}else{if(34==d)break;d=a.charCodeAt(b);for(g=b;32<=
d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(g,b)}if(34==a.charCodeAt(b))return b++,e;k();default:g=b;45==d&&(l=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&k();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&k();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&k();b=f}return+a.slice(g,b)}l&&
k();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;k()}return"$"},M=function(a){var c,b;"$"==a&&k();if("string"==typeof a){if("@"==(E?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&k()):k());","==a&&k();c.push(M(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&k()):k());","!=a&&"string"==typeof a&&"@"==(E?a.charAt(0):
a[0])&&":"==z()||k();c[a.slice(1)]=M(z())}return c}k()}return a},Q=function(a,b,e){e=P(a,b,e);e===v?delete a[b]:a[b]=e},P=function(a,b,e){var g=a[b],f;if("object"==typeof g&&g)if("[object Array]"==t.call(g))for(f=g.length;f--;)Q(g,f,e);else C(g,function(a){Q(g,a,e)});return e.call(a,b,g)};q.parse=function(a,c){var e,g;b=0;I=""+a;e=M(z());"$"!=z()&&k();b=I=null;return c&&"[object Function]"==t.call(c)?P((g={},g[""]=e,g),"",c):e}}}q.runInContext=K;return q}var J=typeof define==="function"&&define.amd,
A="object"==typeof global&&global;!A||A.global!==A&&A.window!==A||(n=A);if("object"!=typeof exports||!exports||exports.nodeType||J){var N=n.JSON,B=K(n,n.JSON3={noConflict:function(){n.JSON=N;return B}});n.JSON={parse:B.parse,stringify:B.stringify}}else K(n,exports);J&&define(function(){return B})})(this);

//------------Above this only IE 7 libs-----
tblColorAlpha=1;
Array.prototype.isArray=true;Date.prototype.isDate=true;String.prototype.isString=true;
if(typeof NodeList != "undefined")NodeList.prototype.isNodeList=true;
String.prototype.splice=function(i,d,r){return this.slice(0,i)+(r||'')+this.slice(i+Math.abs(d));};
Array.prototype.distinct=function(f,skip,skipField){
	var g=this,lx=g.length,i=-1,r=[],k={},s=skip||0,v=0,f2=skipField||0;
	if(f){while(++i<lx){v=g[i][f];if(s)if(skip.indexOf(f2?g[i][f2]:v)>=0)continue;k[v]=1;}}
	else {while(++i<lx){v=g[i];if(s)if(skip.indexOf(v)>=0)continue;k[v]=1;}}
	for(x in k)r.push(x);return r;
};
function GMsgBox(tit,msg,opt,w,h,th,z,idp,op,cls,closeImg){//Opt [{val:,evt:,handler:}]
	var g=this;g.con=randomStr(4)+idp||'';g.cls=cls||0;g.f=1;g.con=ce('div',g.con,gt('body')[0]);g.con.className='gmsgCon'+(g.cls||'');g.tit=tit;g.msg=msg;g.opt=((!opt)?[]:opt);g.z=z||998;g.idp=idp||"a";g.bop=isIOSAndroid?0.95:0.8;g.w=w||350;g.h=h||200;g.th=th||25;g.op=op||0.9;g.closeImg=closeImg||0;
	g.box();g.kph=function(e){g.kp(e);};g.ub=function(e){g.unbox();};aeh(document,"keydown",g.kph);
	for(var i=0,lx=g.opt.length;i<lx;i++)if(g.opt[i].evt){if(g.opt[i].evt!='close')aeh(gi('g2btn'+g.idp+i),g.opt[i].evt,g.opt[i].handler);else g.f=g.opt[i].handler;}aeh(g.g1mbb,"click",((g.f===1)?g.ub:g.f));GMsgBox.prototype.gmbHolder.push(g.idp);
};
GMsgBox.prototype.gmbHolder=[];
GMsgBox.prototype.box=function(){
	var d=document.documentElement,g=this,t1=ce('div'),t2=ce('div'),c=g.con,i=0,t3=ce('div');
	t1.id='g1mbb'+g.idp;g.g1mbb=t1;t1.style.backgroundColor="#FFF";t1.style.width=Math.min(d.clientWidth,d.scrollWidth)+"px";t1.style.height=(Math.max(d.scrollHeight,d.clientHeight))+"px";t1.style.position="absolute";t1.style.zIndex=g.z;t1.style.opacity=g.bop;t1.style.filter="alpha(opacity="+g.bop*100+")";t1.style.top=0;t1.style.left=0;ac(c,t1);t1=ce('div');
	t1.id="g2mbb"+g.idp;t1.className='g2mbb'+(g.cls||'');g.g2mbb=t1;t1.style.width=g.w+"px";t1.style.height=g.h+"px";t1.style.position="absolute";t1.style.left=(d.clientWidth/2-g.w/2)+"px";t1.style.zIndex=g.z;
	if(!g.cls){t1.style.border="1px solid #CCC";t1.style.backgroundColor="#FFF";t1.style.borderRadius='2px';t1.style.mozBoxShadow="2px 2px 23px #AAA";t1.style.webkitBoxShadow="2px 2px 23px #AAA";t1.style.boxShadow="2px 2px 23px #AAA";}t1.style.opacity=g.op;ac(c,t1);g.pos();
	if(g.tit){
		g.g2mtit=t2;t2.id='g2mtit'+g.idp;t2.className='g2mtit'+(g.cls||'');t2.innerHTML=g.tit;if(!g.cls)t2.style.height=(g.th-10)+"px";t2.style.width=(g.w-(g.cls?0:30))+"px";if(!g.cls){t2.style.padding="15px 15px 0px 15px";t2.style.textAlign="left";t2.style.fontSize="14px";t2.style.fontWeight="bold";t2.style.color="#666";t2.style.color='#444';}ac(t1,t2);
		if(g.closeImg){t2=ce('img','g2close'+g.idp,t2);t2.src=g.closeImg;t2.className='g2close'+(g.cls||'');aeh(t2,'click',function(){g.unbox()});}
		t2=ce('div');
	}
	if(g.msg.isArray)ac(t1,g.msg[0]);else {t2.id="g2msg"+g.idp;t2.className='g2msg'+(g.cls||'');if(!g.cls){t2.style.padding="15px 15px 10px 15px";t2.style.fontSize="12px";t2.style.textAlign="left";t2.style.lineHeight="1.75em";t2.style.color="#222";}ac(t1,t2);t2.innerHTML=g.msg;}
	if(g.opt.length){
		t2=ce('div');t2.id='g2tba'+g.idp;t2.className='g2tba'+(g.cls||'');if(!g.cls){t2.style.textAlign="center";t2.style.margin="0 auto";t2.style.padding="0 15px 15px 15px";t2.style.position="absolute";t2.style.bottom="0";}t2.style.width=(g.w-30)+"px";ac(t1,t2);
		for(i=0,m=g.opt;i<m.length;i++){if(m[i].evt=='close')continue;t3=ce('button');t3.id='g2btn'+g.idp+i;t3.className='g2btn'+(g.cls||'');t3.innerHTML=m[i].val;ac(t2,t3);}
	}g.boxed=1;
};
GMsgBox.prototype.unbox=function(e){
	var g=this;
	setTimeout(function(){
		if(!g.boxed)return;reh(document,"keydown",g.kph);
		for(var i=0,lx=g.opt.length;i<lx;i++)if(g.opt[i].evt)if(g.opt[i].evt!=='close')reh(gi('g2btn'+g.idp+i),g.opt[i].evt,g.opt[i].handler);
		reh(g.g1mbb,"click",((g.f===1)?g.ub:g.f));del(g.g1mbb);del(g.g2mbb);del(g.con);g.boxed=0;var t=GMsgBox.prototype.gmbHolder.indexOf(g.idp);if(t>=0)GMsgBox.prototype.gmbHolder.splice(t,1);if(e){prevDefault(e);stopProp(e);}
	},50);
};
GMsgBox.prototype.kp=function(e){var k=fkey(e),g=this;if(g.idp!=GMsgBox.prototype.gmbHolder[GMsgBox.prototype.gmbHolder.length-1])return;if(k==27){if(!g.f||g.f===1)g.unbox();else {g.f.apply(window,[e]);g.f=0;}}g.pos();};
GMsgBox.prototype.pos=function(){var g=this,s=(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop;s=s||0;g.g2mbb.style.top=(s+(window.innerHeight||document.documentElement.offsetHeight)/2-g.h/2)+"px";};
function sXHR(){try {return new window.XMLHttpRequest();} catch(e){return false;};}
function aXHR(){try {return new window.ActiveXObject( "Microsoft.XMLHTTP" );} catch(e){return false;};}
function cXHR(){var xhr=window.ActiveXObject?function(){return !this.isLocal && sXHR() || aXHR();} : sXHR;return xhr();}
function sXHRh(r){r.setRequestHeader("Content-type","application/x-www-form-urlencoded");return r;}
function gi(id){return document.getElementById(id);}
function gc(id){
	try{return document.getElementsByClassName(id);} catch(IE){
		var ret=[],t=gt('*');
		for(var i=0,lx=t.length;i<lx;i++)	if(t[i].className.search(id)>=0) ret.push(t[i]);
		return ret;
	}
}
function gis(id){id=id.replace(/[\\$$]+/g,'\\\\$$$$');for(var i=0,t=gt('*'),ret=[],lx=t.length;i<lx;i++) if(t[i].id.search(eval('/'+id+'/g'))>=0) ret.push(t[i]);return ret;}
function gcs(id){id=id.replace(/[\\$$]+/g,'\\\\$$$$');for(var i=0,t=gt('*'),ret=[],lx=t.length;i<lx;i++) if(t[i].className.search(eval('/'+id+'/g'))>=0) ret.push(t[i]);return ret;}
function gt(id){return document.getElementsByTagName(id);}
function ce(type,id,parent){var e=document.createElement(type);if(id)e.id=id;if(parent)ac(parent,e);return e;}
function addCl(id,cl,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className+=' '+cl"));}
function delCl(id,cl,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className="+g+"(id).className.replace(eval('/(?:^|\s)'+cl+'(?!\S)/'),'')"));}
function repCl(id,cl1,cl2,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className="+g+"(id).className.replace(eval('/(?:^|\s)'+cl1+'(?!\S)/'),'+cl2+')"));}
Array.prototype.remove=function(f,t){var g=this,r=g.slice((t||f)+1||g.length);g.length=f<0?g.length + f : f;return g.push.apply(g,r);};//by j resig
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(o,f){var g=this;f=f||0;if(f<0)f=Math.max(0,g.length+f);for(var i=f,j=g.length;i<j;i++)if(g[i]===o)return i;return -1;};}
gEvtsMap={'mousedown':'touchstart','mousemove':'touchmove','mouseup':'touchend','click':'touchstart'};
if('ontouchstart' in window)isIOSAndroid=1;else isIOSAndroid=0;
function aeh(o, evt, handler){
	if(evt=='mousewheel')evt=(/Firefox/i.test(navigator.userAgent))?'DOMMouseScroll':evt;
	var origEvt=evt;
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;
	if(origEvt=='click'&&isIOSAndroid){
		function clickObj(handler){
			this.hStart=function(e){
				self.pMove=0;self.pStart=mpos(e);self.pStart.touches=e.targetTouches?e.targetTouches.length:0;
				self.eStart=e;
			};
			this.hEnd=function(e){
				if(!self.pMove){callHandler();return;}
				var p1=self.pStart,p2=self.pMove;if(!p1.x&&!p1.y)return;if(e.targetTouches&&e.targetTouches.length>1||p1.touches>1)return;
				if(Math.abs(p1.x-p2.x)>10||Math.abs(p1.y-p2.y)>10)return;
				callHandler();
			};
			this.hMove=function(e){
				self.pMove=mpos(e);
			}
			this.handler=handler;
			var self=this,callHandler=function(){
				handler(self.eStart);
				return;
				self.pStart={x:0,y:0};
				self.pMove=0;
			}
			this.pStart={x:0,y:0};this.eStart=0;
		};var h=new clickObj(handler);
		document.addEventListener?o.addEventListener('touchstart',function(e){h.hStart(e);}, false):document.attachEvent?o.attachEvent("ontouchstart",function(e){h.hStart(e);}):false;
		document.addEventListener?o.addEventListener('touchmove',function(e){h.hMove(e);}, false):document.attachEvent?o.attachEvent("ontouchmove",function(e){h.hMove(e);}):false;
		document.addEventListener?o.addEventListener('touchend',function(e){stopProp(e);h.hEnd(e);}, false):document.attachEvent?o.attachEvent("ontouchend",function(e){h.hEnd(e);}):false;
	}else {
		document.addEventListener?o.addEventListener(evt, handler, false):document.attachEvent?o.attachEvent("on" + evt, handler):false;	
	}
}
function reh(o,evt, handler){
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;
	document.removeEventListener?o.removeEventListener(evt,handler,false):o.detachEvent?o.detachEvent("on"+evt, handler):false;
}
function getEvtSrc(e){var o;if(!e&&window.event)o=window.event.srcElement;else if(e.srcElement)o=e.srcElement;else o=e.target;return o;}
function fkey(e){return ((e.keycode)?e.keycode:((window.event)?window.event.keyCode:e.which));}
Date.prototype.d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.prototype.sd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];Date.prototype.m=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.prototype.sm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
Date.prototype.fdow=0;
Date.prototype.format=function(f){f=f||'d M Y';
	var g=this,gr=["d","D","y","Y","j","m","M","i","I","s","A","z","W","Q","F","u","T","h","H","x"],gf={
			"d":function(){return g.lz(g.gD());},
			"j":function(){return g.gD();},
			"D":function(){return g.sd[g.gd()];},
			"F":function(){return g.m[g.gM()];},
			"n":function(){return g.gM()+1;},
			"m":function(){return g.lz(g.gM()+1);},
			"M":function(){return g.sm[g.gM()];},
			"Y":function(){return g.gfy();},
			"y":function(){return g.gfy().toString().substring(2);},
			"I":function(){return g.lz(g.gm());},
			"i":function(){return g.gm();},
			"s":function(){return g.lz(g.getSeconds());},
			"u":function(){return g.getMilliseconds();},
			"h":function(){h=g.gh();return A?(h<=12?h:h-12):h;},
			"H":function(){h=g.gh();var r=A?(h==0?12:h<=12?g.lz(h):g.lz(h-12)):g.lz(h);return r*1==0?12:r;},
			"A":function(){return h>=0?(h<12?"AM":"PM"):"";},
			"x":function(){var t=g.gD().toString();t=t.charAt(t.length-1);return t==1?"st":t==2?"nd":t==3?"rd":"th";},
			"T":function(){return g.getTimezoneOffset();},
			"W":function(){var t=new Date(g.gfy(),0,7-new Date(g.gfy(),0,7).gd()+g.fdow);return Math.ceil((doy(g)-doy(t)-t.gd()+1)/7);},
			"Q":function(){return Math.ceil((g.gM()+1)/3);},
			"z":function(){return doy(d);}
	},r="",x=false,A=false,h=-1,doy=function(y){return Math.round((y-new Date(y.gfy(),0,1))/3600/1000/24+0.5,0);};
	for(var i=0,lx=f.length;i<lx;i++){var c=f.charAt(i);if(c=='$'){x=!x;continue;}if(x==false&&c=="A"){A=true;break;}};x=false;
	for(i=0;i<lx;i++){c=f.charAt(i);if(c=='$'){x=!x;continue;}if(x==false&&gr.indexOf(c)>=0)r=r+gf[c]();else r=r+c;}return r;
};
Date.prototype.lz=function(s){return s.toString().length==1?"0"+s:s;};
Date.prototype.addms=function(v){var g=this;g.setMilliseconds(g.getMilliseconds()+v);return g;};
Date.prototype.adds=function(v){return this.addms(v*1000);};
Date.prototype.addm=function(v){return this.addms(v*60000);};
Date.prototype.addh=function(v){return this.addms(v*3600000);};
Date.prototype.addd=function(v){return this.addms(v*86400000);};
Date.prototype.addw=function(v){return this.addms(v*604800000);};
Date.prototype.mdim=function(y,m){return [31,(this.chklp(y)?29:28),31,30,31,30,31,31,30,31,30,31][m];};
Date.prototype.addM=function(v){var g=this,n=g.gD();g.setDate(1);g.setMonth(g.gM()+v);g.setDate(Math.min(n,g.mdim(g.gfy(),g.gM())));return g;};
Date.prototype.addy=function(v){return this.addM(v*12);};
Date.prototype.chklp=function(y){var y=this.gfy();return (((y% 4===0)&&(y%100!==0))||(y%400===0));};
Date.prototype.gfy=function(){return this.getFullYear();};
Date.prototype.gD=function(){return this.getDate();};
Date.prototype.gd=function(){return this.getDay();};
Date.prototype.gM=function(){return this.getMonth();};
Date.prototype.gh=function(){return this.getHours();};
Date.prototype.gm=function(){return this.getMinutes();};
Date.prototype.fn=function(s){
	var r='',x='',c=0,t=s.search(/(~\s*[0-9]+\s*~)/);if(t>-1)for(var i=t+1,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~'){s=s.substring(i);return r==''?false:[s,r];}}
	t=s.search(/([0-9]+\s*~[a-z]*\s*~)/);if(t>-1)for(i=t,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~')c++;if(c==2){s=s.substring(0,t>0?t-1:0)+' '+s.substring(i);return r==''?false:[s,r];}}
	return false;
};
Date.prototype.shiftTime=function(d,v,t,n){t=t.split('$');
	if(t.length>1)d['add'+t[0]](t[1]*v*(n!==null&&n!==undefined&&n!==false?n:1));
	else {t=t[0];if(t=='wd')d.addd((v==1?[1,1,1,1,1,3,2][d.gd()]:[2,3,1,1,1,1,1][d.gd()])*(n!==null&&n!==undefined&&n!==false?n:1));}
}
Date.prototype.parseDate=function(s){
	if(s.search(/\dT\d/i)>=0&&s.search(/\.\d+Z/i)>=0)s=s.replace(/T|\.\d+Z/gi,' ').trim();
	var g=this,t=0,m=0,m2=0,d=new Date('1 Jan 1901'),tdt=new Date('1 Jan 1901'),time=0,e=0,am=s.match(/am|pm/i);s=s.toLowerCase();
	g.pv=[{r:/\b(today|now)\b/,t:0},{r:/\btomorrow\b/,t:1},{r:/\byesterday\b/,t:-1}];for(var i=0,lx=g.pv.length;i<lx;i++)g.pv[i].r=new RegExp(g.pv[i].r);
	g.td=[{r:/\blate\s(afternoon|afti|noon)\b/,t:14},{r:/\b(afternoon|afti|noon)\b/,t:12},{r:/\blate\s(morning)\b/,t:11},{r:/\b(morning)\b/,t:9},{r:/\blate\sevening\b/,t:19},{r:/\bevening\b/,t:17},{r:/\blate\snight\b/,t:22},{r:/\bnight\b/,t:20}];for(i=0,lx=g.td.length;i<lx;i++)g.td[i].r=new RegExp(g.td[i].r);
	g.pvr=[{r:'day(s)*',t:'d$1'},{r:'hr(s)*|hour(s)*',t:'h$1'},{r:'min(ute)*(s)*',t:'m$1'},{r:'(week|wk)(s)*',t:'d$7'},{r:'(month|mth)(s)*',t:'M$1'},{r:'(weekday|wkday|working\sday)(s)*',t:'wd'},{r:'(year|yr)(s)*',t:'y$1'},{r:'decade(s)*',t:'y$10'},{r:'fortnight(s)*',t:'d$15'},{r:'(quarter|qtr)(s)*',t:'M$3'}];
	g.np=[{r:'(next|nxt)+',v:1,d:1},{r:'(previous|prev)+',v:-1,d:1},{r:'(last)+',v:-1,d:1},{r:'(past)+',v:-1,d:1},{r:'(from)+',v:1,d:0},{r:'(after)+',v:1,d:0},{r:'(before)+',v:-1,d:0},{r:'(later)+',v:1,d:0},{r:'(ago)+',v:-1,d:0},{r:'(this)+',v:0,d:-2}];
	g.tz=[{r:/\bgmt\b/,v:0},{r:/\bist\b/,v:-5.5},{r:/\best\b/,v:5},{r:/\bedt\b/,v:4},{r:/\bpdt\b/,v:7},{r:/\bpst\b/,v:8},{r:/\bsgt\b/,v:-8},{r:/\bcet\b/,v:-1},{r:/\bhkt\b/,v:-8},{r:/\bcst\b/,v:6},{r:/\beat\b/,v:-3},{r:/\bcat\b/,v:-2},{r:/\beet\b/,v:-2},{r:/\bhst\b/,v:10},{r:/\bmst\b/,v:-8},{r:/\btha\b/,v:-7}];for(i=0,lx=g.tz.length;i<lx;i++)g.tz[i].r=new RegExp(g.tz[i].r);
	if(am){am=am[0].toLowerCase();am=am=='am'?1:-1;t=s.match(/[0-9]*\s*[0-9]*\s*[0-9]+\s*(am|pm)+/);
		if(t&&s.search(':')<0){s=s.replace(t[0],'');t=t[0].replace(/[a-z,A-Z]/g,'').trim();t=t.split(' ');if(t[0]>12)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]:0);time=1;}
		else{t=s.match(/[0-9]+:+[0-9]+:*[0-9]*\s*(am|pm)+/);if(t){s=s.replace(t[0],'');t=t[0].replace(/\s*[a-z,A-Z,\s*]\s*/g,'').trim();t=t.split(':');if(t[0]>12)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]%60:0);time=1;}}
		s=s.replace(/(am|pm)/g,'');
	}
	else if(!!~s.search(':')){t=s.match(/[0-9]+:+[0-9]+:*[0-9]*/);if(t){s=s.replace(t[0],'');t=t[0].trim().split(':');if(t[0]>24)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(t[0]%23,t[1]?t[1]%60:0,t[2]?t[2]%60:0);time=1;}}
	s=s.replace(/[\s\\\/.\-:]+/,' ').trim();if(!s.length)return d.getTime()==tdt.getTime()?false:d;s=s.replace('1st','1');s=s.replace('2nd','2');s=s.replace('3rd','3');for(i=4;i<10;i++)s=s.replace(i+'th',i);s=s.replace('0th','0');
	if(!time){var flag=true;for(i=0,lx=g.td.length;i<lx;i++){m=s.match(g.td[i].r);if(m){flag=false;m=m[0];s=s.replace(m,' day');if(d.getTime()==tdt.getTime())d=new Date();d.setHours(g.td[i].t,0,0);time=1;}}if(flag){d.setHours(0,0,0);}}
	for(i=0,lx=g.tz.length;i<lx;i++){m=s.match(g.tz[i].r);if(m){m=m[0];s=s.replace(m,'');if(d.getTime()==tdt.getTime())d=new Date();d.addm(-1*d.getTimezoneOffset()+g.tz[i].v*60);e=1;break;}}
	for(i=0,lx=g.pv.length;i<lx;i++){m=s.match(g.pv[i].r);if(m){if(d.getTime()==tdt.getTime())d=new Date();d.addd(g.pv[i].t);e=1;s=s.replace(m[0],'');break;}}
	
	
	for(var i=0,a=d.m.concat(d.sm),lx=a.length,M=-1;i<lx;i++){m=s.match(eval('/[0-9,\\s]*\\b'+a[i]+'+\\b[0-9,\s]*/i'));if(m){
		if(!!~m[0].search(/[0-9]+/))s=s.replace(eval('/\\b'+a[i]+'+\\b/gi'),(i%12)+1);
		else if(!!~s.search(eval('/(next|nxt|prev(ious)*|last)+\\s+'+a[i]+'\\b/i'))){t=d.getMonth();if(d.getTime()==tdt.getTime())d=new Date();d.setMonth(i%12);e=1;if(i%12<t)d.setFullYear(d.gfy()+1);s=s.replace(m[0],i%12<t?'year':'');}
		else s=s.replace(m[0],'');M=i;
	}}
	m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(!m&&M>=0){m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/);if(m[0]<31&&m[1]<12)m=[m.join(' ')+' '+d.getFullYear()];else m=[1+' '+m.join(' ')];}}
	if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/g);if(d.getTime()==tdt.getTime())d=new Date();
		if(m[1]>12&&m[0]<=12){t=m[1];m[1]=m[0];m[0]=t;}if(m[1]>12&&m[2]<=12){t=m[1];m[1]=m[2];m[2]=t;}
		if(m[1]<=12){if(m[0]>31&&m[2]<31){t=m[2];m[2]=m[0];m[0]=t;}if(m[2]<50)m[2]=2000+m[2]*1;if(m[2]<100)m[2]=1900+m[2]*1;if(m[0]<=31)d.setFullYear(m[2],m[1]-1,m[0]);e=1;M=-1;}
	}
	if(M>=0){t=d.getMonth();if(d.getTime()==tdt.getTime())d=new Date();d.setMonth(M%12);d.setDate(1);if(M%12<t)d.setFullYear(d.gfy()+1);e=1;M=-1;}
	for(i=0,a=d.d.concat(d.sd),lx=a.length;i<lx;i++){m=s.match(eval('/(next|prev(ious)*|nxt|last)*\\s*\\b'+a[i]+'+\\b/i'));if(m){m=m[0];t=d.gd();e=1;if(d.getTime()==tdt.getTime())d=new Date();if(i%7>=t)d.addd(i%7-t);else d.addd(7+i%7-t);m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');}}
	m=s.match(/(next|prev(ious)*|nxt|last)*\s*\b(weekend|wkend)\b/);if(m){m=m[0];m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');t=d.gd();if(t>0&&t<6)d.addd(6-t);e=1;}
	for(i=0,lx=g.pvr.length;i<lx;i++){m=s.match(eval('/\\b'+g.pvr[i].r+'\\b/'));if(m){
		for(var j=0,lx2=g.np.length;j<lx2;j++){if(d.getTime()==tdt.getTime())d=new Date();
			m2=s.match(eval('/'+g.np[j].r+'\\s*[0-9]*\\s*'+g.pvr[i].r+'\\s*/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}
			else{m2=s.match(eval('/[0-9]*\\s*'+g.pvr[i].r+'\\s*'+g.np[j].r+'/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}}
		}
	}}
	if(!time){m=s.match(/at\s+[0-9]+/);if(m){m=parseInt(m[0].replace('at ',''));if(m<12){if(d.getTime()==tdt.getTime())d=new Date();t=d.getHours();d.setHours(t>=m?m+12:m,0,0);e=1;time=1;}}}
	if(!g.time&&time)g.time=1;if(e||time)d.edited=1;d.remStr=s;
	return d.getTime()==tdt.getTime()?false:d;
}
function isNumber(v){if(v===null)return false;var t=v*1;if(t.toString()=='NaN')return false;if(v.toString().search(/[0-9]/i)<0)return false;return true;}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
function writeCk(name,value,days){var expires="";if(days) {var date=new Date();date.addms(days * 86400000);expires="; expires=" + date.toGMTString();}document.cookie=name + "=" + value + expires + "; path=/";}
function readCk(n){var s=n+"=",ck=document.cookie.split(';');for(var i=0;i< ck.length; i++){var c=ck[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(s)==0)return c.substring(s.length,c.length);}return null;}
function eraseCk(n) {writeCk(n,"",-1);}
function randomStr(l){var c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",s="";for(var i=0;i<l;i++) s=s+c.charAt(Math.floor(Math.random()*c.length));return s;}
Array.prototype.hasField=function(v,p){var g=this;for(var i=0,lx=g.length;i<lx;i++)if(g[i][p]==v)return i;return false;};
function jp(s){try{return JSON.parse(s);} catch(err){return false;}}function js(s){try{return JSON.stringify(s);} catch(err){return false;}}
function del(e){if(e)e.parentNode.removeChild(e);}
function empty(e){while(e.firstChild)del(e.firstChild);}
function next(e){do{e=e.nextSibling;}while(e&&e.nodeType!=1)return e;};
function prev(e){do{e=e.previousSibling;}while(e&&e.nodeType!=1)return e;};
function first(e){e=e.firstChild;return e&&e.nodeType!=1?next(e):e;};
function last(e){e=e.lastChild;return e&&e.nodeType!=1?prev(e):e;};
function gparent(e,n){n=n||1;for(var i=0;i<n;i++)if(e)e=e.parentNode;return e;}
function ac(p,c){if(c)p.appendChild(c);}
function ib(p,c,n){if(!c)return;var s=first(p);while(n){s=next(p);if(n--==0)break;}p.insertBefore(c,s);}//insert before number
function ibe(c,e){if(!c||!e)return;gparent(e).insertBefore(c,e);}//insert before element
function prevDefault(e){e.preventDefault?e.preventDefault():e.returnValue=false;}
function stopProp(e){if(e.stopPropagation)e.stopPropagation();else {e=window.event;e.cancelBubble=true;}};
function qsa(s,e){return (e||document).querySelectorAll(s)||[];}
function qs(s){return document.querySelector(s)||[];}
function fchild(e,t,c){var r=first(e),i=0;c=c||1;while(r){if(r.nodeName==t)i++;if(i>=c)break;r=next(r);}return i>0?r:0;}
function fchilds(e,t,c){var r=first(e),ret=[],i=0;c=c?c:1;while(r){if(r.nodeName==t){i++;ret.push(r);}if(i>=c)break;r=next(r);}return ret;}
function strtags(s){return s.replace(/<\/?[^>]+>/gi,'');}
function objsort(p,d,fun){
   var k=function(x){return fun?fun(x[p]):x[p];};
   return function (a,b){return (k(a)<k(b)?-1:(k(a)>k(b)?1:0))*[1,-1][+!!d];};
}
function leven(a,b,cs){
    var l1=a.length,l2=b.length,i=0,j=0,d=[];
    if(Math.min(l1,l2)===0){return Math.max(l1,l2);}if(cs==0){a=a.toLowerCase();b=b.toLowerCase();};
    for(i=0;i<=l1;i++){d[i]=[];d[i][0]=i;}for(j=0;j<=l2;j++)d[0][j]=j;
    for(i=1;i<=l1;i++){for(j=1;j<=l2;j++){d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a.charAt(i-1)=== b.charAt(j-1)?0:1));}}return d[l1][l2];
}
function mpos(e){ 
	var d=document,de=d.documentElement;if(!e)e=window.event;
	if(e.targetTouches&&e.targetTouches[0])return{"x":e.targetTouches[0].pageX,"y":e.targetTouches[0].pageY};
	else if(e.pageX!==undefined)return {"x":e.pageX,"y":e.pageY};
	else if(e.clientX!==undefined)return {"x":e.clientX+d.body.scrollLeft+de.scrollLeft,"y":e.clientY+d.body.scrollTop+de.scrollTop};
	return false;
};
function getPos(e){
	var vo=e.getBoundingClientRect(),w=window,d=document;
	var left=vo.left+((w.pageXOffset!==undefined)?w.pageXOffset:(d.documentElement||d.body.parentNode||d.body).scrollLeft);
	var top=vo.top+((w.pageYOffset!==undefined)?w.pageYOffset:(d.documentElement||d.body.parentNode||d.body).scrollTop);
	return {left:left,top:top,w:e.clientWidth,h:e.clientHeight}
}
function epos(e){var y=0,x=0;while(e&&e.tagName!="BODY"){y+=e.offsetTop||0;x+=e.offsetLeft||0;e=e.offsetParent;}return {"x":x,"y":y};};
requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
Array.prototype.sum=function(f,opt,skip,skipField){var g=this,lx=g.length,i=lx,v=0,r=0,s=skip||0,sf=skipField||0;if(!lx)return 0;
	if(f&&!opt)while(--i>=0){v=g[i][f];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+v;}
	else if(!f&&!opt)while(--i>=0){v=g[i];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+v;}
	else if(f&&opt=='abs')while(--i>=0){v=g[i][f];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+(v<0?-v:v);}
	else if(!f&&opt=='abs')while(--i>=0){v=g[i];if(s)if(s.indexOf(sf?g[i][sg]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+(v<0?-v:v);}
	else if(f&&opt=='wtd'){f=f.split('$');var f1=f[0],f2=f[1],den=0,num=0,v=0;
		while(--i>=0){v=g[i][f1];
			if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;if(!isNumber(g[i][f2]*1))continue;num+=v*g[i][f2]*1;den+=g[i][f2];
		}r=den?num/den:0;
	}
	return r;
};
Array.prototype.count=function(f,skip,skipField){if(!skip)return this.length;var g=this,lx=g.length,i=lx,s=skip||0,sf=skipField||0;
	if(f)while(--i>=0)if(s.indexOf(sf?g[i][sf]:g[i][f])>=0)lx--;
	if(!f)while(--i>=0)if(s.indexOf(sf?g[i][sf]:g[i])>=0)lx--;
	return lx;
};
function clamp(v,a,b){return Math.max(a,Math.min(v,b));}
function floor(v,fd){fd=Math.pow(10,fd||0);return ((v*fd)<<0)/fd;}
function ceil(v,fd){return floor(v+Math.pow(10,-fd||0),fd);}
function round(v,fd){if(!fd)return Math.round(v);fd=Math.pow(10,fd);return Math.round(v*fd)/fd;}
function isRtClk(e){if(!e)e=window.event;return e.which?e.which==3:e.button?e.button==2:false;}
function getPX(s){return s?s.substring(0,s.length-2)*1:false;}
Array.prototype.objminmax=function(p){if(!this.length)return [0,0];for(var i=0,a=this,m1=m2=a[0][p],lx=a.length;i<lx;i++){m1=m1>a[i][p]?a[i][p]:m1;m2=m2<a[i][p]?a[i][p]:m2;}return [m1,m2];};
Array.prototype.minmax=function(f,skip){if(!this.length)return [0,0];var g=this,i=g.length,v=0,s=skip||0,min=max=f?g[0][f]:g[0];
	if(f){while(--i>=0){v=g[i][f];v*=1;if(s)if(skip.indexOf(v)>=0)continue;if(!isNumber(v))continue;min=min>v?v:min;max=max<v?v:max;}}
	else{while(--i>=0){v=g[i];v*=1;if(s)if(skip.indexOf(v)>=0)continue;if(!isNumber(v))continue;min=min>v?v:min;max=max<v?v:max;}}
	return [min,max];
};
Array.prototype.intersection=function(a2,f){var r=[],a1=this,i=a1.length;while(--i>=0)if(a2.indexOf(f?a1[i][f]:a1[i])>-1)r.push(a1[i]);return r;};
function clone(o){return jp(JSON.stringify(o));}
Array.prototype.clone=function(){return clone(this);};
function objKeys(o){var k=[];for(var f in o)k.push(f);return k;}
function hash(dp,f){for(var i=0,lx=dp.length,r={};i<lx;i++){for(var j=0,fa=f.isArray,lx2=fa?f.length:1,s='';j<lx2;j++)s+=(j?'$':'')+(fa?dp[i][f[j]]:dp[i][f]);if(!r[s])r[s]=[];r[s].push(dp[i]);}return r;}
function nodeListToArray(nodeList){for(var i=0,nl=nodeList,r=[];i<nl.length;i++)r.push(nl[i]);return r;}
function crossArrays(a1,a2){for(var i=0,r={},ret=[];i<a1.length;i++)for(var j=0;j<a2.length;j++)r[a1[i]+'$'+a2[j]]=1;for(i in r)ret.push(i);return ret;}
function getStyle(e,styleProp) {
  var camel=function(s){return s.replace(/\-(\w)/g, function(str,l){return l.toUpperCase()});};
  if(e.currentStyle)return el.currentStyle[camel(styleProp)];
  if(document.defaultView && document.defaultView.getComputedStyle)return document.defaultView.getComputedStyle(e,null).getPropertyValue(styleProp);
  return el.style[camel(styleProp)]; 
}
function html_entity_decode(s) {
  var t=ce('textarea');t.value=s;var v=t.value;return v;
}
function decode64(input) {
     var output="",chr1,chr2,chr3="",enc1,enc2,enc3,enc4="",i=0,keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
     input=input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
     do {
		enc1=keyStr.indexOf(input.charAt(i++));
		enc2=keyStr.indexOf(input.charAt(i++));
		enc3=keyStr.indexOf(input.charAt(i++));
		enc4=keyStr.indexOf(input.charAt(i++));
		chr1=(enc1 << 2) | (enc2 >> 4);
		chr2=((enc2 & 15) << 4) | (enc3 >> 2);
		chr3=((enc3 & 3) << 6) | enc4;
		output=output + String.fromCharCode(chr1);
		if (enc3 != 64) {output=output + String.fromCharCode(chr2);}
		if (enc4 != 64) {output=output + String.fromCharCode(chr3);}
		chr1=chr2=chr3=enc1=enc2=enc3=enc4="";
    }while (i < input.length);
    return unescape(output);
}
var formatBytes=function(s){s*=1;if(s===NaN)return '';
	var sx='Bytes';if(s<1024)return s+' '+sx;
	s=s/1024;sx='KB';if(s>100)s=round(s);else s=round(s,1);
	if(s>1024){s=s/1024;sx='MB';if(s>100)s=round(s);else s=round(s,1);}
	if(s>1024){s=s/1024;sx='GB';if(s>100)s=round(s);else s=round(s,1);}
	return s+sx;
};
var formatInterval=function(s){s*=1;if(s===NaN)return '';s=round(s);
	var sx='ms';if(s<1000)return s+sx;
	if(s>1000){s=s/1000;sx='sec';if(s<=60){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>60){s=s/60;sx='min';if(s<=60){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>60){s=s/60;sx='hour';if(s<=24){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>24){s=s/24;sx='day';if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	if(s>30.5){s=s/30.5;sx='month';if(s>10)s=round(s);else round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	if(s>12){s=s/12;sx='year';if(s>10)s=round(s);else round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	return s+' '+sx;
}
var getWindowSize=function(){
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth || e.clientWidth || g.clientWidth,y=w.innerHeight|| e.clientHeight|| g.clientHeight;return{w:x,h:y};
}
function addInputPlaceholder(d,ph){
	d.gplaceholder=ph;aeh(d,'focus',function(e){var s=getEvtSrc(e);if(s.value==s.gplaceholder)s.value='';});if(!d.value||d.value.length<1)d.value=ph;
	aeh(d,'blur',function(e){var s=getEvtSrc(e);if(s.value=='')s.value=s.gplaceholder;});return d;
}




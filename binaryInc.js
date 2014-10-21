var c = document.getElementById("binaryInc");
c.onselectstart = function(){return false;}
var ctx = c.getContext("2d");
ctx.textAlign="right";
var n = 0;
c.addEventListener('click',function(e){
	e.preventDefault();
	(n>254)?n=0:n+=1;
	update();
},false);
function update(){
	ctx.clearRect(0,0,1000,800);
	ctx.font = "48px Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText(""+n,255,50);	
	numDraw(n);
	ctx.fillStyle = "#CCCCCC";
	ctx.font = "16px Arial";
	sizesDraw();
}
function sizesDraw(){
	ctx.fillRect(230,110,20,2);
	ctx.fillText("Бит",225,117);	
	ctx.fillRect(153,130,98,2);
	ctx.fillText("Ниббл (тетрада)",141,137);	
	ctx.fillRect(39,150,212,2);
	ctx.fillText("Байт",36,157);	
}
function numDraw(n){
	var space = 26;
	(chardraw(n,128,255-(7*space+8),95))?n-=128:n=n;
	(chardraw(n,64,255-(6*space+8),95))?n-=64:n=n;
	(chardraw(n,32,255-(5*space+8),95))?n-=32:n=n;
	(chardraw(n,16,255-(4*space+8),95))?n-=16:n=n;
	(chardraw(n,8,255-(3*space),95))?n-=8:n=n;
	(chardraw(n,4,255-(2*space),95))?n-=4:n=n;
	(chardraw(n,2,255-(1*space),95))?n-=2:n=n;
	chardraw(n,1,255,95)
	//messy, but we use it to show colors anyways, mine as well
}
function chardraw(n,a,x,y){
	if((n-a)>=0){
		ctx.fillStyle = "#55EE55";
		ctx.fillText("1",x,y);	
		return true;
	}else{	
		ctx.fillStyle = "#FF5555";
		ctx.fillText("0",x,y);
		return false;
	}		
}
update();

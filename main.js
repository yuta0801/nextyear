(function() {
	(function getResult(){
		var next=new Date().getFullYear()+1,
				timer,
				diff=(new Date(next,0,1,0,0,0).getTime()-new Date().getTime())/1000,
				d,
				h,
				m,
				s;
		document.title = next+'年まで';
		document.getElementsByTagName('h1')[0].innerText = next+'年まで';
		d=Math.floor(diff/60/60/24);
		diff=diff-(60*60*24*d);
		h=Math.floor(diff/60/60);
		diff=diff-(60*60*h);
		m=Math.floor(diff/60);
		diff=diff-(60*m);
		s=Math.floor(diff);
		if(d!=0) timer=d+'日';
		if(h!=0) timer+=padZero(h)+'時間';
		if(m!=0) timer+=padZero(m)+'分';
		timer+=padZero(s)+'秒';
		document.getElementsByTagName('h2')[0].innerText = timer;
		setTimeout(getResult,1000)
	})();
	function padZero(n){return (10>n)?'0'+n:n}
})();

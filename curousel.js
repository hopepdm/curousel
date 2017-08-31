window.onload = function () {
	var list = document.getElementById( 'list' );
	var perv = document.getElementById( 'prev' );
	var next = document.getElementById( 'next' );
	
	var buttons = document.getElementById( 'buttons' ).getElementsByTagName( 'span' );
	
	var index = 1;
	function buttonsShow() {
		for( var i = 0; i < buttons.length; i++) {
			buttons[i].className = '';
		}
		buttons[index-1].className = 'on';
	}
	function animation( offset ) {
		var newLeft = parseInt(list.style.left) + offset;
		
		list.style.left = newLeft + 'px';
		if(newLeft<-3000){
            list.style.left = -600 + 'px';
        }
        if(newLeft>-600){
            list.style.left = -3000 + 'px';
        }
		
	}
	
	prev.onclick = function () {
		index -= 1;
		if(index < 1){
			index = 5;
		}
		buttonsShow();
		animation(600);
	}
	
	next.onclick = function () {
		index += 1;
		if(index > 5){
			index = 1;
		}
		buttonsShow();
		animation(-600);
	}
	
	var timer;
	function play() {
		timer = setInterval( function (){
			next.onclick();
			} , 3000 );
	}
	play();
	var container = document.getElementById( 'container' );
	function stop() {
		clearInterval( timer );
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	
	for(var i = 0; i < buttons.length; i++ ){
		(function(i) {
		    buttons[i].onclick = function(){
			    var clickIndex = parseInt(this.getAttribute('index'));
			    var offset = 600 * (index - clickIndex);
			    animation(offset);
			    index = clickIndex;
			    buttonsShow();
		}
		})(i);
	}
}
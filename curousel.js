/*
*轮播新手教程，参考博主http://www.cnblogs.com/LIUYANZUO/p/5679753.html
*删去了原代码中部分冗余的代码，简化逻辑，同时将代码改为ES6
*采用js原生写就，适合夯实基础，但是，这段代码是毒，极难维护和扩展。
*建议学习此代码了解思路之后看大神写的插件
*/
window.onload = function () {
	let list = document.getElementById( 'list' );
	let perv = document.getElementById( 'prev' );
	let next = document.getElementById( 'next' );
	
	let buttons = document.getElementById( 'buttons' ).getElementsByTagName( 'span' );
	
	let index = 1;
	buttons[0].className = 'on';
	list.style.left = 0;
	
	var buttonsShow = () => {
		for( let i = 0; i < buttons.length; i++) {
			buttons[i].className = '';
		}
		buttons[index-1].className = 'on';
	}

	var animation = ( offset ) => {
		let newLeft = parseInt(list.style.left) + offset;
		
		list.style.left = newLeft + 'px';
		if( newLeft < -2400 ) {
            list.style.left = 0 + 'px';
        }
        if( newLeft > 0 ){
            list.style.left = -2400 + 'px';
        }	
	}
	
	prev.onclick = () => {
		index -= 1;
		if(index < 1){
			index = 5;
		}
		buttonsShow();
		animation(600);
	}
	
	next.onclick = () => {
		index += 1;
		if( index > 5 ){
			index = 1;
		}
		buttonsShow();
		animation( -600 );
	}
	
	let timer;
	var play = () => {
		timer = setInterval( () => {
			next.onclick();
			} , 3000 );
	}
	play();
	let container = document.getElementById( 'container' );
	var stop = () => {
		clearInterval( timer );
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	
	for(let i = 0; i < buttons.length; i++ ){		
		    buttons[i].onclick = () => {
			    let clickIndex = parseInt(buttons[i].getAttribute('index'));
			    let offset = 600 * (index - clickIndex);
			    animation(offset);
			    index = clickIndex;
			    buttonsShow();
		}
	}
}
<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv"> 
				<!-- capture모드 : clickDiv -> clickSpan -> clickP 이러한 이벤트 플로우 -->
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- .self : 클릭한 요소가 자신이 아니면 클릭이 되지 않는다.  -->
					
					<!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
					<span @click="clickSpan">SPAN 영역</span>
					<a href="https://naver.com" @click.prevent.stop="clickA">
						a 영역 
					</a>
					<!-- 기본기능도 막고, 이벤트 전파도 막을수 있다. 연결해서 쓸수도 있다. -->
				</p>
			</div>
		</div>

		<button @click.once="clickDiv">once</button>
		<!-- once 수식어를 사용하면 여러번 클릭이 되지만, 한번만 클릭되고 실행이 안되는걸 볼수 있다. --> 
	</div>
</template>

<script>

export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			// 이벤트가 버블링으로 전파되고 있기 때문에 clickSpan을 클릭했을때 
			// 그 다음에 겹쳐져 있는애, 또 그다음에 겹쳐져있는애 차례대로 클릭이 된다. 
			//e.stopPropagation(); // 이벤트 전파가 중단
			// alert('좋아요');
		};
		const clickA = () => {
			// e.preventDefault(); 
			// 다른문서로 넘어가능 기능자체를 막아버림
			alert('어떤기능을 넣고 싶다.');
		};
		
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA
		};
	},
};
</script>
<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
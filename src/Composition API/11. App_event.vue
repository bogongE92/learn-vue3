<template>
	<div>
		<button @click="printEventInfo('헬로 빵땡구', $event)">
			inline event handler
		</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>

export default {
	setup() {
		const printEventInfo = (message, event) => {
			/* 매게변수로는 메세지와 이벤트 객체를 넘겨준다.  */
			console.log('messsage: ', message);
			
			/* 
				event 객체 안에 있는 target을 출력해 보도록 한다. 
				즉, target은 엘리먼트이다.  
			*/
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		}
		

		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};

		return {
			printEventInfo,
			onKeyupHandler
		};
	},
};
</script>
<style lang="scss" scoped></style>
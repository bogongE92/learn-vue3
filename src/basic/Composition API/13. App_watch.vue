<template>
	<div>
		
	</div>
</template>

<script>
import { ref, watch } from 'vue';


export default {
	setup() {
		// 메세지라는 반응형 데이터 선언
		const message = ref('');
		
		// watch 함수를 써보자 -> 우선 message를 감지할 것이다 -> 그다음 콜백함수를 불러온다. 
		// 메세지 변화가 생겼을 때, 새로운 데이터와 기존 값이 콜백 함수를 넘어온다. 

		/* 
			watch 함수를 사용해서 특정 반응형 데이터가 변경되었을 때 여기에서 또다른 DOM을 조작한다든지 아니면 
			API를 호출해서 또다른 반응형 상태를 변경할 때 사용하는 API라고 보면 된다.  
		*/
		watch(message, (newValue, oldValue) => {
			console.log('newValue :', newValue);
			console.log('oldValue :', oldValue);
		});

		return {
			message
		};
	},
};
</script>
<style lang="scss" scoped></style>
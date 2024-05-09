<template>
	<div>
		<p>{{ message }}</p>
		<P>{{ reverseMessage }}</P>
	</div>
</template>

<script>
import { ref, watch } from 'vue';


export default {
	setup() {
		const message = ref('안녕 빵땡구');
		const reverseMessage = ref('');


		// message의 변경이 일어났을때 watch에서 메세지를 감지하고 있으면 된다. 
		// 콜백함수가 최초의 즉시 실행하기를 원할 때가 있다. 
		// 그럴때는 즉시실행이라고 immediate라는 옵션을 주면 된다. 
		// 3번째 매개변수로 객체를 넣어줄 수 있고, immediate: true를 주면 된다. 
		/* watch(message, (newValue) => {
				console.log('즉시 실행하라 빵땡구')
				// newValue : 변경된 데이터
				// 쪼갠다음, 거꾸로하고, 붙여준다.
				reverseMessage.value = newValue.split('').reverse().join('');
			}, 
			{
				immediate: true,
				// 새로고침을 하면 최초에 한번 즉시 실행이 된다. 
			}
		); */

		// 아니면 바깥쪽에 function으로 선언할 수도 있다. 
		// 최초실행은 watch에 의해 실행되는게 아니기 때문에 newValue의 값을 지워줘야한다. 
		const reverseFunction = (newValue) => {
			console.log('즉시 실행하라 빵땡구')
			reverseMessage.value = newValue.split('').reverse().join('');
		}
		watch(message ,reverseFunction);
		reverseFunction(message.value); // 최초 실행만 해주면 된다. 

		// 위랑 아래랑 같은것
		/* const reverseFunction = () => {
			console.log('즉시 실행하라 빵땡구')
			reverseMessage.value = message.value.split('').reverse().join('');
		} */
		/* watch(message ,reverseFunction);
		reverseFunction(); */ // 최초 실행만 해주면 된다. 
		
		return {
			message,
			reverseMessage,
			reverseFunction
		};
	},
};
</script>
<style lang="scss" scoped></style>
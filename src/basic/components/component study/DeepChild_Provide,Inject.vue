<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
        <div class="card-body">
			<p>staticMessage : {{ staticMessage }}</p>
			<p>message : {{ message }}</p>
			<p>count : {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';


export default {
	setup() {
		// 가져오고 싶은 컴포넌트에 inject 함수로 가져올 수 있습니다. 
		// 가져올 때는 마찬가지로 키(부모 키에서 입력했던 것)를 입력해 주시면 됩니다.

		// inject 함수에서는 값이 안넘어올때를 대비해서 두번째 파라미터로 default값을 설정할 수 있다.
		// 부모 컴포넌트에서 값을 넘기지 않는다면? defalut값이 출력이 된다.
		const staticMessage = inject('static-message', 'default message');

		// 여기서 message 데이터를 변경하고 싶다면? 여기서 message는 상위 컴포넌트에서 받아온 데이터 이다.
		// 여기서는 구조분해 할당을 통해서 받아주면 된다.
		const { message, updateMessage } = inject('message');
		// message.value = message.value + '!'; 
		// 이런식으로 변경하지 말고, provide에서 데이터를 변경할 수 있도록 메서드를 함께 제공해줘야 한다.
		// 여기서 기능을 끄고 싶다면 read only를 사용해 주면 된다.
		updateMessage('🛠️');
		const count = inject('count');

		return {
			staticMessage,
			message,
			count
		};
	},
};
</script>
<style lang="scss" scoped></style>
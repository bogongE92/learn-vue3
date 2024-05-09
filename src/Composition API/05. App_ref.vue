<template>
	<div>
			<!--  <p>{{ message.value }}</p> -->
			<p>{{ message }}</p>
	<button v-on:click="addMessage">add click</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup () {
			/* let message = reactive({
					value : 'Hello Vue!'
			}); */
			let message = ref('Hello Vue!');
			const addMessage = () => {
					/* message = message + '!' // 이렇게 사용하면 그냥 값자체가 변경되는 것 */
					message.value = message.value + '!';
			}
			// 자바스크립트로 접근할 때는 .value로 접근한다. 
			
			console.log(message);
			console.log('message: ', message.value);
			console.log('message typeof: ', typeof message.value);

			return {
					message,
					addMessage
			}
	}
}
</script>

<style lang="scss" scoped></style>
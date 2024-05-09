<template>
	<!-- 
		v-modal은 내부적으로 value라는 props로 이렇게 값을 전달한다. 
		input 이벤트로 이벤트를 전달 받는다. 
	-->
	<!-- <label>
		이름 : 
		<input 
			:value="username" 
			@input="(event) => username = event.target.value" 
			type="text"
		>
	</label> -->
	

	<!--  
		vue3에서는 사용자 정의 컴포넌트에서 
		props로는 modelValue로 값을 넘겨주고,
		이벤트(emit)로는 update:modelValue로를 통해서
		v-model을 구현 할 수 있다.
		** update:modelValue 띄어쓰기 금지.....

		:value="modelValue"  부모 컴포넌트에서 받은 값을 이렇게 넘겨줄 수 있고,
		input data가 변경되었을때는 emit event로 넘겨줄 수 있다. 

		event.target.value는 파라미터로 넘겨야 한다. 
	-->
	<!-- <label>
		{{ label }} 
		<input 
			:value="modelValue" 
			@input="event => ($emit('update:modelValue', event.target.value))" 
			type="text"
		>
	</label> -->

	<!-- computed 사용해보기 -->
	<label>
		{{ label }} 
		<input 
			v-model="value"
			type="text"
		>
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	// props는 간단히 문자열로 선언
	// vue3에서는 modelValue라는 props로 값을 입력받아 
	// update:modelValue로 이벤트를 발생시킬 수 있다.
	// 이러한 props와 이벤트를 구현해서 커스텀 컴포넌트의 v-model을 구현할 수 있다. 
	// 다른곳에서 사용할 수 있도록 label이라는 props도 받아보자.

	props : ['modelValue', 'label'], 
	emits : ['update:modelValue'],
	setup(props, { emit }) {
		// computed 이용하기
		const value = computed({
			get() {
				// 값을 읽어갈 때는 props의 modelValue를 가져가면 된다.
				return props.modelValue;
			},
			set(value) {
				// 값이 변경될 때는? value로 넘어오고
				// {emit}으로 값을 넘겨줄 수 있다.
				emit('update:modelValue',value)
			}
		})

		return {
			value
		};
	},
};
</script>
<style lang="scss" scoped></style>
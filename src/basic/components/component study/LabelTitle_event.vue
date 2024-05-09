<template>
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

	props : ['title', 'label'], 
	emits : ['update:title'],
	setup(props, { emit }) {
		// computed 이용하기
		const value = computed({
			get() {
				// 값을 읽어갈 때는 props의 modelValue를 가져가면 된다.
				return props.title;
			},
			set(value) {
				// 값이 변경될 때는? value로 넘어오고
				// {emit}으로 값을 넘겨줄 수 있다.
				emit('update:title',value)
			}
		})

		return {
			value
		};
	},
};
</script>
<style lang="scss" scoped></style>
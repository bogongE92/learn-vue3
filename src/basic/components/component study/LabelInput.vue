<template>
	<label 
		class="child-class" 
		style="border:1px solid blue"
		id="child-id"
	>
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
	props : ['modelValue', 'label'], 
	emits : ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue',value)
			},
		});

		return {
			value
		};
	},
};
</script>
<style lang="scss" scoped></style>
<template>
	<div>
		{{ $parent }}
		<ul>
			<li v-for="bread in $parent.breads" :key="bread">{{ bread }}</li>
		</ul>
		<!-- 자식 컴포넌트에서 상위 컴포넌트 참조하기 위해서는 $parent 내장객체를 사용할 수 있습니다. -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('Hello~!');
const sayHello = () => {
	alert(msg.value); 
};

// 객체로 정의를 해준 다음에 노출할 데이터를 키값으로 정의해주면 된다.
defineExpose({
	msg,
	sayHello,
});
</script>
<style lang="scss" scoped></style>
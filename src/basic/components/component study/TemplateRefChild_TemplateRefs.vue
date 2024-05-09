<template>
	<div>
		{{ $parent }}
		<ul>
			<li v-for="bread in $parent.breads" :key="bread">{{ bread }}</li>
		</ul>
		<!-- 자식 컴포넌트에서 상위 컴포넌트 참조하기 위해서는 $parent 내장객체를 사용할 수 있습니다. -->
	</div>
</template>

<script>
import { ref } from 'vue';


export default {
	setup() {
		const msg = ref('Hello~!');
		const sayHello = () => {
			alert(msg.value); 
		};
		return {
			msg,
			sayHello
		};
	},
};
</script>
<style lang="scss" scoped></style>
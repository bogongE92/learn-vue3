<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
        <div class="card-body"></div>
	</div>
</template>

<script>
import { inject } from 'vue';


export default {
	setup() {
		// 가져오고 싶은데서 inject 함수로 가져올 수 있습니다. 
		// 가져올 때는 마찬가지로 키를 입력해 주시면 됩니다.
		inject('static')
		return {};
	},
};
</script>
<style lang="scss" scoped></style>
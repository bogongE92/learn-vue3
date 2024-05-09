<template>
	<div>
			<h2 v-if="visible">Hello vue3!</h2>
			<h2 v-else>false 입니다.</h2>
			<button v-on:click="visible = !visible">toggle</button>

			<hr />
			<button v-on:click="type = 'A'">A</button>
			<button v-on:click="type = 'B'">B</button>
			<button v-on:click="type = 'O'">O</button>
			<button v-on:click="type = 'AB'">AB</button>
			
			<h2 v-if="type === 'A'">A형 입니다.</h2>
			<h2 v-else-if="type === 'B'">B형 입니다.</h2>
			<h2 v-else-if="type === 'O'">O형 입니다.</h2>
			<h2 v-else>A, B, 0 형이 아닙니다.</h2>

			<hr />
			<!-- 여러개의 HTML요소를 v-if 디렉티브로 연결 -->
			<template v-if="visible">
					<h1>Title</h1>
					<p>Paragraph 1</p>
					<p>Paragraph 2</p>
			</template>

			<hr />
			<h1 v-show="ok">title 입니다.</h1>
			<button v-on:click="ok = !ok">show toggle</button>

	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
			const visible = ref(false);

			//type 이라는 반응형 데이터를 하나 넣어준다.
			const type = ref('A');
			const ok = ref(true);

			return {
					visible,
					type,
					ok
			}
	}
}
</script>

<style lang="scss" scoped>

</style>
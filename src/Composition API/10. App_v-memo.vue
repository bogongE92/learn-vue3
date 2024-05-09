<template>
	<div>
		<div v-memo="[views, likes]"> 
			<!-- 배열안에 아무것도 안넣으면 v-once처럼 동작한다. --> 
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
			<!-- 변경이 없다가 [views, likes] 이 둘중 하나를 클릭하면 그 때 변경이 일어난다.  -->
		</div>

		<button @click="subscribers++">Subs++</button>
		<button @click="views++">Views++</button>
		<button @click="likes++">Likes++</button>
		
		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';


export default {
	setup() {
		// 반응형 데이터 선언
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		
		return {
			subscribers,
			views,
			likes
		};
	},
};
</script>
<style lang="scss" scoped></style>
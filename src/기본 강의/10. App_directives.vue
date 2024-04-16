<template>
	<div>
		<!-- 
			디렉티브는 v- 접두사가 있는 특수 속성이다.  
			컴포넌트 또는 DOM에게 ~~을 하게 작동하라 라고 지시를 하는 지시문이다. 
		-->

		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<!-- html로 인식하기 위해서 사용 -->
		<p v-html="htmlStr"></p> 
		<p v-text="htmlStr"></p> 

		<!-- 엘리먼트의 컴파일을 생략 -->
		<p v-pre>{{ msg }}</p>

		<!-- 엘리먼트와 컴포넌트를 한번(once)만 렌더링 -->
		<p v-once>{{ msg }} !!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';


export default {
	setup() {

		const msg = ref('디지털 러브');

		// html을 인식해주기 위한 반응형 데이터를 하나 만들어준다.
		const htmlStr = ref('<strong>빵식아 안녕!!!</strong>');
		
		return {
			msg,
			htmlStr
		};
	},
};
</script>
<style lang="scss" scoped></style>
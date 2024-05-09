<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, eius quas! Vero rerum corporis quaerat, porro incidunt nostrum fugiat aliquid esse veniam? Officiis, laborum exercitationem nostrum nesciunt nulla architecto ut?
		</div>
		
		<!-- 
			이렇게 v-bind을 함으로써 동적으로 이러한 스타일 또는 클래스를 변경할 수 있다.  
		-->
		<button @click="fontSize--">-</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';


export default {
	setup() {
		// 인라인 스타일 적용
		// 인라인 스타일을 적용할 때는 CSS의 속성명을 카멜 케이스로 일반적으로 넣는다.
		/* const styleObject = reactive({
			color : 'red',
			fontSize : '13px'
		}); */

		// 아래는 computed로 넣어보자 
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color : 'red',
				fontSize : fontSize.value + 'px'
			}
		});

		return {
			styleObject,
			fontSize
		};
	},
};
</script>
<style lang="scss" scoped></style>
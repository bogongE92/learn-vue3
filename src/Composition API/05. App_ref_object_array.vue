<template>
	<div>

	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup () {
			// ref -> Object(객체)
			const count = ref(0);
			const state = reactive({
					count, // 키와 속성값이 같으면 생략가능
			});
			
			count.value ++;
			count.value ++;
			count.value ++;
			console.log(count.value)
			/* console.log('state.count: ', state.count.value) */
			/* ref로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면, 자동으로 .value가 unraffing되서 사라진다. 그래서 일반 속성을 사용하는 것처럼 사용할 수 있다. */
			console.log('state.count: ', state.count)


			// ref -> Array(배열) 
			//.value가 붙는다. 
			const message = ref('Hello');
			const arr = reactive([message]);
			console.log('arr[0]: ', arr[0].value)



			return {}
	}
}
</script>

<style lang="scss" scoped></style>
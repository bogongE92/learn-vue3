<template>
	<div class="container py-4">
		<!--  
			이러한 DOM 요소에 접근을 하기 위해서는 ref 속성으로 이름을 적어주고, 
			동일한 이름의 반응형 상태를 선언 해주면 된다.

			그리고 이 DOM요소에 대한 참조는 렌더링이 된 이후(Mount가 된 이후)에 접근 할 수 있다. 
			따라서 onMounted 훅에서 접근할 수 있다. 

		-->
		<input ref="input" type="text">
		<!--  
			템플릿에서도 ref 사용이 가능하다?
			{{ input.value }}
			이게 오류나는 이유는 ref는 mount가 완료된 후에 참조값이 할당이 되기 때문이다.
			그 전까지는 값이 null이다. 
			따라서 null 일때 접근을 해서 오류가 생긴다. 
			그럴때는 v-if를 사용하면 된다.

			또한, 컴포넌트 인스턴스의 내장객체인 ref라는 객체가 있는데: $ref
			이러한 객체를 통해서도 접근이 가능하다.
		-->
		<p>{{ input }}</p>
		<p>{{ $refs.input }}</p>
		<p>{{ $refs.input === input }}</p>
		<hr>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr>
		<ul>
			<li v-for="bread in breads" :key="bread" ref="itemRefs">{{ bread }}</li>
		</ul>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';


export default {
	setup() {
		const input = ref(null);
		// 아직 마운트가 되기 전이라 null 값인 것을 확인할 수 있다.
		console.log('setup : ', input.value);

		onMounted(() => {
			// ref 참조값을 가져왔을 때는 아래와 같이 바로 사용이 가능하다.
			input.value.value = 'I`m Harry Hong~'
			console.log('onMounted : ', input.value);
		});


		const breads = ref(['빵땡구', '구땡빵', '나인원제로', '핑꾸탱구']);
		const itemRefs = ([]);

		return {
			input,
			breads,
			itemRefs
		};
	},
};
</script>
<style lang="scss" scoped></style>
<template>
	<div class="container py-4">
		<button class="btn btn-primary me-2" 
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" 
			@click="changeCurrentComp(DynamicBanana)"
		>
			바나나
		</button>
		<hr>
		<!--  
			특수한 컴포넌트 속성인 component 속성을 사용하고, 
			is 속성으로 현재 컴포넌트를 갖고 있는 반응형 데이터를 넣어주면 된다.

			한가지 Tip!
			:is 속성으로 컴포넌트를 넘길 때에는 ref 함수를 정의하는 것보다
			shallowRef 함수로 정의하는 것이 퍼포먼스적에서 더 유리하다.
		-->
		<component :is="currentComp"/>
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// 현재 보여줄 컴포넌트가 어떤건지 보여주는 반응형 데이터 만들기
// 기본값은 DynamicApple로 넣어주기
/* const currentComp = ref(DynamicApple); */
const currentComp = shallowRef(DynamicApple);

// 컴포넌트를 변경할 수 있는 메서드를 하나 정의
// 변경될 컴포넌트를 받아서 currentComp의 value로 넣어준다.
const changeCurrentComp = (comp) => { currentComp.value = comp }

/* shallowRef 정의*/
const obj1 = ref({name : '빵땡구'});
const obj2 = shallowRef({name : '구빵땡'});

</script>
<style lang="scss" scoped></style>
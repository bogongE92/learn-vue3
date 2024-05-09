<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from '@/basic/components/component study/TheNav.vue';
import TheView from '@/basic/components/component study/TheView.vue';

export default {
	/* 
		1. 가져올 컴포넌트들을 import 부터 해주고
		2. 컴포넌트는 components 이런 속성으로 등록할 수 있다.  
			components: {}, {}안에 적어준다.
		3. 사용할 때는 템플릿 안에서 사용할 수 있다. 
	*/
	
	components:{
		TheNav,
		TheView, // 원래는 이렇게 씀 TheView : TheView  -> 키랑 값이 같다면 단축표현이 가능하다. 
	},
	setup() {
		return {};
	},
};
</script>
<style lang="scss" scoped></style>
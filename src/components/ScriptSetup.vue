<template>
	<div class="container py-4">
		{{ msg }}
		<br>
		{{ breadMsg }}
		<input v-model="breadMsg" type="text">
		<button @click="sayBread">click</button>
		<!--  
			PostItem를 여러개 사용할 경우, 각각의 컴포넌트 인스턴스가 생성인 된다.
			각각의 컴포넌트 인스턴스가 생성될 때는 셋업 함수가 호출이 된다.

			예를들어서 한번만 실행시키고 싶은 로직이 있다고 가정을 해보자.
			한번만 실행하고 싶은 로직은 만약에 <script setup> 이 안에서 사용하게 되면
			스크립트 셋업은 셋업 함수 안으로 컴파일이 된다. 
			그래서 이 인스턴스가 생성되는 갯수만큼 호출이 된다.
			따라서 한번만 실행하고 싶은 로직이 있을 떄는 일반 스크립트 블럭과 함께 사용할 수 있다.

			일반 스크립트 setup은 한번만 호출이 되고, 
			스크립트 셋업블럭은 인스턴스 갯수만큼 호출된다.
		-->
		<PostItem 
			type="news" 
			title="제목" 
			contents="내용" 
			:is-like="true"
		></PostItem>
		<PostItem 
			type="news" 
			title="제목" 
			contents="내용" 
			:is-like="true"
		></PostItem>
		<PostItem 
			type="news" 
			title="제목" 
			contents="내용" 
			:is-like="true"
		></PostItem>
		<hr>
		<TemplateRefChild ref="child"></TemplateRefChild>
		<template v-if="child">{{ child.msg }}</template>
		<hr>
		<MyButton class="parent-class"></MyButton>
	</div>
	
</template>

<!-- 
	스크립트 태그 안에 setup속성이 이렇게 설정된걸 볼수 있다. 
	사용법은 <script setup>이렇게 선언만 해주면 된다.
	이렇게 setup 속성을 설정하면 이 내부 안에 코드는 
	export default {} 안에 setup 함수 안에 컴파일이 된다.

	스크립트 셋업 속성이 설정된 태그에 탑레벨로 정의를 할 경우에는 
	템플릿 안에서 바로 접근해서 사용할 수 있다. 

	만약 일반 스크립트 태그를 사용했다면, 
	이러한 변수를 셋업 함수에서 선언하고 리턴해야지 템플릿 안에서 사용할 수 있다.

	이러한 셋업 속성을 사용함으로써 상용구를 그만큼 줄인것이다.
	이렇게 사용하는것이 변수뿐만 아니라 함수도 가능하다.
	또한 반응형 데이터를 사용하는 것도 가능하다.

	원래 컴포넌트를 사용할때는 컴포넌트를 등록하고 사용해야하지만, 
	이제는 import만 선언하고 바로 사용할 수 있다.
-->
<!--  
	일반 스크립트 태그를 사용해서 개발할 때랑, 스크립트 setup을 사용해서 개발할 때는 조금 방법이 다르다.
	props, emits 등 사용하는 방법이 다르다.

	스크립트 셋업 안에서는 defineProps와 defineEmits라는 함수를 통해서 사용할 수 있다. 
	이러한 함수는 스크립트 셋업 함수 내에서만 사용할 수 있는 컴파일러 매크로이다.
	따라서 따로 import를 하지 않고 바로 사용할 수 있다.
-->
<!--  
	setup 함수에서는 컴포넌트는 기본적으로 Template Refs나 $parent와 같이 컴포넌트간 통신이 닫혀 있습니다.
	그 반대도 마찬가지이다.
	이러한 expose메세지는 셋업함수에서 context 객체에 메서드로 들어가 있다.
-->
<!--  
	non-prop 속성이나 slot 속성같은 경우에는 
	useSlot이나 useAttrs 이러한 메소드로 접근할 수 있다.
-->
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefChild from './setup/TemplateRefChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello Nine One Zero!';
const breadMsg  = ref('');
const sayBread = () => {
	alert('Hello Bread!');
};

const child = ref(null);

defineExpose({
	msg,
});
const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log('response: ', response)
</script>

<style lang="scss" scoped></style>
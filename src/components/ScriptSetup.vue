<template>
	<div>{{ msg }}</div>
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
-->
<script setup>
	const msg = 'Hello Nine One Zero!'
</script>

<style lang="scss" scoped></style>
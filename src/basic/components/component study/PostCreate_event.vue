<template>
	<div class="row g-3">
		<div class="col col-3">
			<select v-model="type" class="form-select" aria-label="Default select example">
				<option selected disabled>옵션을 골라주세요</option>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-7">
			<input v-model="title" type="text" class="form-control">
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>

		<!-- 자식 컴포넌트에서 이벤트를 발생시키기 위해서는 컴포넌트 인스턴스의 내장 메소드인 emit을 사용해야 한다. -->
		<!-- 또한 파라미터로 값도 넘길 수 있다. -->
		<!-- 자식 컴포넌트에서 이벤트를 발생시킬 때 방법 -->
		<!-- 1. 이러한 컴포넌트 내장 메서드(emit)를 활용할 수 있다.   -->
		<!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, 'lena')">button</button> -->

		<!-- 2. 셋업 함수의 두번째 파라미터인 context 객체에 emit 메서드를 활용할 수 있다. --> 
		<!-- 클릭했을 때 이벤트 createPost 메서드 발생 -->
		<!-- <button class="btn btn-primary" @click="createPost">button</button> -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	//2. 셋업 함수의 두번째 파라미터인 context 객체에 emit 메서드를 활용할 수 있다.
	// 셋업 함수의 파라미터로는 props, 두번째 파라미터로 context 객체가 있는데 
	// context에는 emit 메소드가 있어서 context.emit 이러한 메소드로 사용할 수 있다. 
	/* setup(props, context) {
		// context.emit 
		const createPost = ()  => {
			// 이 메서드 안에서 이벤트를 발생시키면 된다.
			context.emit('createPost', 1, 2, 3, 'lena');
		}

		return {
			createPost,
		};
	}, */
	/* -------------------------------------------------------------- */

	// 자식 컴포넌트에서 createPost 이러한 이벤트를 발생시키고 싶다면, 
	// emit 옵션을 선언해서 이벤트를 선언할 수 있다. 
	// 문자역 배열 선언
	// emits: ['createPost'],

	// 객체 문법 선언
	// title이 빈값이 때는 경고를 표시하도록 
	// 객체안에는 event 명을 하고 메서드를 집어 넣으면 된다. 
	// 그러면 우리가 넘기는 파라미터가 event명의 파라미터로 넘어온다. 
	/* emits : {
		createPost: (newPost) => {
			if( !newPost.type ){ //newtitle값이 없다면
				return false; // 값이 비어있으면 false를 출력해줘
			}else if(!newPost.title) {
				return false;
			}
			return true;
		},
	}, */
	emits : {
		createPost: (newPost) => {
			if( !newPost.type || !newPost.title ){ //newtitle값이 없다면
				return false; // 값이 비어있으면 false를 출력해줘
			}
			return true;
		},
	},
	// 만약 유효성 체크가 없다?? 그럼 null 로 해주면 된다.
	/* emits : {
		createPost: null
	}, */

	
	// 위 코드를 줄이고 싶다면 구조분해할당으로 context 대신 {emit}을 사용
	setup(props, {emit}) {
		const title = ref('');

		const type = ref('news');

		// context.emit 
		const createPost = ()  => {
			// 이 메서드 안에서 이벤트를 발생시키면 된다.

			// 추가 버튼을 눌렀을때 type도 같이 내보내야 한다. 
			const newPost = {
				type : type.value, // type을 담고
				title : title.value
			}

			/* emit('createPost', title.value);  */
			// 저장했을때 title.value를 내보낸다. 
			// emit(이벤트, 객체) 이런구조이다. 
			emit('createPost', newPost);

			// type과 title 초기화
			type.value = 'news';
			title.value = '';
		}

		return {
			title,
			createPost,
			type
		};
	},
};
</script>
<style lang="scss" scoped></style>
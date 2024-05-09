<template>
	<div>
		<!-- 
			하나의 form을 만들고, 이 form을 변경할 때마다 자동으로 저장하는 그런예제
			글을 작성하고 자동으로 저장하게 하려면 
			watchEffect를 사용하면 된다. 

			lazy : focus가 떨어졌을때 변화를 감지한다. 

			버튼의 기본 type은 submit이기 때문에 버튼을 클릭하면 
			form에 submit이 호춯된다 -> 따라서 submit 이벤트에다가 save()함수 호춣한다.
			submit이 넘어가는걸 방지해줘야 되서 prevent를 사용해야 된다. 

			save()함수 호출은 form에 해줘도 되고, button에 클릭이벤트로 해줘도 된다. 
		-->
		<!-- <form action="" @submit.prevent="save(title, contents)">
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button>저장</button>
		</form> -->

		<form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');
		
		/* 
			콜백함수 안에 선언한 반응형 데이터에 변경이 일어나면 그것을 감지해서  
			콜백함수가 호출이 된다. 
		
		*/
		// save 값을 저장해주는 함수을 만들어보자
		const save = (title, contents) => {
			// 보통은 api호출해서 저장하는 로직이다.
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};
		watchEffect(() => {
			console.log('watchEffect');
			/* console.log(title.value);
			console.log(contents.value); */

			// 만들어 놓은 save함수 호출
			save(title.value, contents.value);
		});
		
		return {
			title,
			contents,
			save
		};
	},
};
</script>
<style lang="scss" scoped></style>
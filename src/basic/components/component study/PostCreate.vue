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
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	emits : {
		createPost: (newPost) => {
			if( !newPost.type || !newPost.title ){
				return false;
			}
			return true;
		},
	},
	setup(props, {emit}) {
		const title = ref('');
		const type = ref('news');

		// context.emit 
		const createPost = ()  => {
			const newPost = {
				type : type.value,
				title : title.value
			}
			emit('createPost', newPost);
			// type과 title 초기화
			type.value = 'news';
			title.value = '';
		}

		return {
			title,
			createPost,
			type,
		};
	},
};
</script>
<style lang="scss" scoped></style>
<template>
	<div>
			<p>author: {{ author }}</p>
	<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup () {
			const book = reactive({
					author: 'Vue Team',
		year: '2020',
		title: 'Vue 3 Guide',
		description: '당신은 지금 바로 이 책을 읽습니다  ;)',
		price: '무료',
			});

			/* const {author, title} = book;  */
			// 이렇게 하면 그냥 반응성을 잃어버린 string일 뿐이다.
			//이걸 막기 위해서 toRef와 toRefs를 사용하자. 

			
			// 구조 분해 할당
			/* const { author, title } = toRefs(book); */
			
			//만약 구조분해 할당 말고 이 객체에서 하나만 가져오고 싶다면?
			const author = toRef(book, 'author');
			const title = toRef(book, 'title');

			return { author, title, book };
	}
}
</script>

<style lang="scss" scoped></style>
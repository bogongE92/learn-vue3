<template>
	<div>
		<input type="text" @keyup.enter="addTodo" />
		<!-- 아래는 컨트롤과 엔터가 같이 눌러야지 실행이 된다.  -->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';


export default {
	setup() {
		const todos = reactive([]);

		// addTodo가 호출이 되었을때 이벤트 객체가 넘어온다.
		// input tag 안의 값을 가져오기 위해서는 
		// event 객체의 target 안에 있는 value속성으로 가져올 수 있다. 
		const addTodo = (event) => {
			// 하지만 내가 원하는건 enter 키를 눌렀을 때 그때 하나의 아이템만 추가를 하는 것을 원한다.
			console.log('event.target.value:', event.target.value);
			console.log('event.key:', event.key)
			// if ( event.key === 'Enter' ) -> 이 표현이 .enter이다 
			todos.push(event.target.value);

			// enter를 한 다음에는 값을 비워주고, focus를 주자
			event.target.value = '';
			event.target.focus();
			
		};
		return {
			todos,
			addTodo

		};
	},
};
</script>
<style lang="scss" scoped></style>
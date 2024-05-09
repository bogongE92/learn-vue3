<template>
	<div>
		<h2>input value</h2>
		<!-- lazy : input 이벤트에서는 동기화가 안되고, focus가 떨어졌을때 동기화가 일어난다. -->
		<!-- <input type="text" v-model.lazy="inputValue" /> -->

        <!-- 숫자 자동 형변환 가능 : value로 바로 다칙연산을 수행해야 할 때 이런 수식어를 사용하면 좋다.  -->
		<!-- <input type="text" v-model.number="inputValue" /> --> 
        
		<!-- 자동으로 앞뒤 공백을 제거 : 앞뒤 공백을 사용자가 입력했다고 하더라도 데이터가 동기화될 때에는 앞뒤 공백이 제거되고 동기화가 된다. -->
		<input type="text" v-model.trim="inputValue" />

		<!-- :value="inputValue"
			@input="event => (inputValue = event.target.value)" -->
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<hr>
		<h2>textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<!-- :value="textareaValue"
			@input="event => (textareaValue = event.target.value)" -->
		<div>{{ textareaValue }}</div>

		<hr>
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input
            type="checkbox"
            id="checkbox"
            v-model="checkboxValue"
        /> -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<!-- :checked="checkboxValue"
            @change="event => (checkboxValue = event.target.checked)" -->

		<hr>
		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>
		<!-- :checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)" -->

		<hr>
		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			<!-- :checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)" -->
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			<!-- :checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)" -->
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>

		<hr>
		<h2>select value</h2>
		<!-- :value="selectValue"
			@change="event => (selectValue = event.target.value)" -->
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		/* const checkboxValue = ref('true'); */ // 기본값도 변경해 줘야함
		const checkboxValue = ref('Yes');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';


export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		
		/* [watch에 첫번째 매개변수로 getter 함수를 넣어줌]으로써 */
		// 이 두 수의 합을 감지 할 수 있다. 
		// getter는 어떠한 값을 반환한다. 
		/* 이 두개 값을 더해서 합을 반환하는 getter 함수를 정의 할 수 있다.  */
		/* watch(() => {
			return x.value + y.value;
		}); */

		/* watch(() =>  x.value + y.value, (sum, oldValue) => {
			// getter 함수에 의해 감지가 되었을때는 이렇게 받을수 있다. 
			// 두개의 값을 합한걸 sum으로 받아본다. 
			console.log('sum: ', sum);
			// sum 이 바꼈기 때문에 감지가 되어서 console.log가 출력이 되는걸 확인 할 수 있다. 
		
			console.log('oldValue: ', oldValue);
		}); */

		/* [매개변수로 Array를 넘겨서 한꺼번에 따로따로 감지하기] */
		// 그러면 결과도 array로 받는다. 
		/* watch([x,y], ([newX, newY]) => {
			console.log(newX, newY);
		}); */


		/* [Object type의 반응형 데이터 감지하기] */
		const obj = reactive({
			count : 0, // 속성은 count 하나만 갖는다고 하자
		});
		console.log(typeof obj.count);
		/* watch(obj, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		}); */
		/* object 타입을 감지할 때에는 newValue랑 oldValue랑 같은 객체를 가리키기 때문에
		같은 값이 출력된다. */
		
		// 우리가 obj안의 속성 하나만 감지하고 싶을때? 
		// 특정 object의 속성을 감지하고 싶으면 getter 함수를 넣어줘야한다. 
		/* watch(() => obj.count, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		}); */


		/* [반응형 객체를 직접 watch() 하면 암시적으로 깊은 감시자가 생성] */
		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// 속성의 속성까지 변경을 해도 딥하게 감지가 된다. 
		/* watch(person, (newValue) => {
			console.log('newValue: ', newValue);
		}); */

		// 만약 getter 함수로 person 객체의 obj만 넘겨보면 
		// obj 안에 있는 count 값이 변경이 되어도 감지 안하고 
		// object 자체가 변경됬을때 감지한다.  
		// getter 함수는 getter 함수로부터 받은 값이 바꼈냐 안바꼈냐 이걸가지고 체크하는 것이다.
		watch(() => person.obj, (newValue) => {
			console.log('newValue: ', newValue);
		});

		return {
			x,
			y,
			obj,
			person
		};
	},
};
</script>
<style lang="scss" scoped></style>
<template>
	<div>
		<!-- 
            HTML 속성에 바인딩을 하기 위해서는 v-bind라는 이러한 디렉티브를 사용해야 하는데, 
            v-bind를 사용해서 클래스나 인라인 스타일을 조작할 수 있다.  

			v-bind는 단축표기법으로 :을 사용할 수 있다. 
			다른 특성과는 공존할 수 없는데, 일반 class 속성과 특수하게 공존할 수 있다. 

			바인딩을 할 때는 객체{}로 바인딩을 할 수 있다.  
			객체 안에는 앞에다가는 클래스 명 : 뒤에는 boolean 값을 적어주면 된다.
        -->
		<div :class="{ active : isActive }">
			HTML 속성에 바인딩을 하기 위해서는 v-bind라는 이러한 디렉티브를 사용해야 하는데, <br>
            v-bind를 사용해서 클래스나 인라인 스타일을 조작할 수 있다.   <br> <br>

			v-bind는 단축표기법으로 :을 사용할 수 있다.  <br>
			다른 특성과는 공존할 수 없는데, 일반 class 속성과 특수하게 공존할 수 있다. <br><br>

			바인딩을 할 때는 객체{}로 바인딩을 할 수 있다.  <br>
			객체 안에는 앞에다가는 클래스 명 : 뒤에는 boolean 값을 적어주면 된다.
		</div>
		<hr>

		<!-- 
			isActive가 true일 때는 이 active가 class에 바인딩이 되는것이고, 
			이 값이 false일 때는 active가 바인딩 되지 않는다. 
			얘는 다른 속성과 다르게 일반 HTML속성과 v-bind 디렉티브가 공존 할 수 있다.  
			그러면 기존 class랑 합쳐진다. 
		-->
		<div 
			class="text" 
			:class="{ active : isActive }"
		>
			isActive가 true일 때는 이 active가 class에 바인딩이 되는것이고, <br>
			이 값이 false일 때는 active가 바인딩 되지 않는다. <br>
			얘는 다른 속성과 다르게 일반 HTML속성과 v-bind 디렉티브가 공존 할 수 있다.  <br>
			그러면 기존 class랑 합쳐진다. 
		</div>
		<hr>

		<!-- 
			만약  class에 여러개의 값을 넣어줘야 할때는 ,(콤마)를 사용하여 사용할 수 있다.
		-->
		<div 
			class="text" 
			:class="{ active : isActive , active2 : on , 'text-danger': hasError}"
		>
			만약  class에 여러개의 값을 넣어줘야 할때는 ,(콤마)를 사용하여 사용할 수 있다.<br>
			text-danger 이렇게 class명에 -가 들어간경우는 ''로 감싸줘야한다. <br>
			hasError 이러한 반응현 데이터가 true일때 'text-danger' 클래스에 바인딩이 된다. 
		</div>
		<hr>

		<div 
			class="text" 
			:class="classObject"
		>
			만약에 바인딩 할 데이터가 많다면 inline으로 사용하지 않고 object로 선언해서 사용할 수 있다.
		</div>
		<hr>

		<div 
			class="text" 
			:class="[ isActive? 'active-class' : 'class', errorClass, classObject]"
		>
			배열에 다른 오브젝트를 던지고 싶을 때 사용 -> 그럴때는 바로 배열로도 사용할 수 있다. 
			이 배열의 삼항 연산자로 자바스크립트 효현식도 넣을 수 있다. 
			isActive가 true이면 active-class가 출력, 
			false면 그냥 class만 출력이 된다. 
		</div>

		
		<button @click="toggle">toggle</button>
		<button @click="hasError = !hasError ">toggleError</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';


export default {
	setup() {
		// 반응형 상태 선언
		const isActive = ref(true);
		const on = ref(true);
		const hasError = ref(false);

		// 만약에 바인딩 할 데이터가 많다면 inline으로 사용하지 않고 object로 선언해서 사용할 수 있다.
		/* const classObject = reactive({
			active : true, 
			active2 : true,
			'text-danger': true
		}); */

		const classObject = computed(() => {
			return{ // 콜백으로 리턴
				active : true && true,
				// active2 : true && true,
				'text-danger': true && true,
				'text-blue': true,
			}
		})  
		

		// 배열에 다른 오브젝트를 던지고 싶을 때 사용 -> 그럴때는 배열로도 사용할 수 있다. 
		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
			on.value = !on.value;
		};

		return {
			isActive,
			toggle,
			on,
			hasError,
			classObject,
			activeClass,
			errorClass
		};
	},
};
</script>
<style lang="scss" scoped>
	div{
		margin: 40px 0;
	}
	.text{
		&.active{
			font-weight: normal;
		}
	}
	.active{
		font-weight: 700;
		color: #999;
		&.active2{
			font-weight: normal;
			color: #666;
		}
	}
	.text-danger{
		color: red;
	}
	.text-blue{
		color: blue;
	}
</style>
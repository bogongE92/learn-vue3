<template>
	<div>
		<h2>반응형 메시지</h2>
        <p>{{ reactiveMessage }}</p>
        <button @click="addReactiveMessage">Add Message</button>
        <h2>일반 메시지</h2>
        <p>{{ normalMessage }}</p>
        <button @click="addNormalMessage">Add Message</button>
	</div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';


export default {
	setup() {
        console.log('setup()');

		// 반응형 메세지
        const reactiveMessage = ref('Hello Reactive Message');

        const addReactiveMessage = () => {
            reactiveMessage.value = reactiveMessage.value + "♡"
        }

        // isRef는 이게 반응형 데이터 인지 검사하는 api이다. 
        // reactive 메세지는 반응형 메세지 이기 때문에 true로 반환한다. 
        //console.log('isRef(reactiveMessage) : ', isRef(reactiveMessage) );

        // 일반 메세지 : 일반 스트링 넣어줌
        let normalMessage = 'Hello Normal Message';

        const addNormalMessage = () => {
            normalMessage = normalMessage + "♥"
        }
        // 일반 메세지는 반응형 메세지와는 다르게 변경이 안되는걸 확인할 수 있다. 
        // 이렇게 반응형 API는 반응형 데이터를 선언하거나 그와 관련된 일을 하는 api라고 보면 된다.

        // normalMessage 메세지는 반응형 메세지가 아니기 때문에 false 로 반환한다. 
        //console.log('isRef(normalMessage) : ', isRef(normalMessage) );
        

        // 라이프사이클 훅 다루기
        onMounted(() => {
            console.log('onMounted');
        });
        onBeforeMount(() => {
            console.log('onBeforeMount');
        })
        // 라이프 사이클에 의해 setup함수가 먼저 호출이 되고, 
        // 그 다음에 onBeforeMount, onMounted 이런 차례로 호출 되는 것을 볼 수 있다. 
        
        
        return{
            reactiveMessage,
            normalMessage,
            addReactiveMessage,
            addNormalMessage
        }
	},
};
</script>
<style lang="scss" scoped></style>
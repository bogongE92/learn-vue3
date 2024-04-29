<template>
	<div class="container py-4">
        <!-- 
            child를 거치지 않고 provide와 inject를 사용해서 props를 넘겨보도록 해보자 
            현재 컴포넌트에서 몇개의 데이터를 선언해서 DeepChild 컴포넌트로 주입을
            시켜보도록 해보자
        -->
        <div class="card">
            <div class="card-header">ProvideInject Component</div>
            <div class="card-body"><Child></Child></div>
        </div>
    </div> 
</template>

<script>
import { provide, ref } from 'vue';
import Child from './Child.vue'
export default {
	components : {
        Child
    },
    setup() {
        const staticMessage = 'static message';
        const message = ref('message');
        const counter = ref(10);

        // provider 역할을 하는 부모 컴포넌트에서는 procide 함수로 값을 내보낼 수 있다.
        provide('static-message', staticMessage);
        provide('message', message);
        provide('counter', counter);


		return {
            staticMessage,
            message,
            counter
        };
	},
};
</script>
<style lang="scss" scoped></style>
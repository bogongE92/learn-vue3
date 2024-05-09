<template>
	<div class="container py-4">
        <!-- 
            child를 거치지 않고 provide와 inject를 사용해서 props를 넘겨보도록 해보자 
            현재 컴포넌트에서 몇개의 데이터를 선언해서 DeepChild 컴포넌트로 주입을
            시켜보도록 해보자

            이러한 데이터는 반응형에서도 잘 적용된다. 
        -->
        <div class="card">
            <div class="card-header">ProvideInject Component</div>
            <div class="card-body">
                <button @click="count++">Click</button>
                <p>appMessage : {{ appMessage }}</p>
                <Child></Child>
            </div>
        </div>
    </div> 
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue'
export default {
	components : {
        Child
    },
    // composition api setup함수에서는 컴포넌트 인스턴스가 생성되기 전이기 때문에 this가 찍히지 않는다.
    // 이럴때 provide랑 inject를 활용할 수 있다. 
    setup() {
        const staticMessage = 'static message';
        const message = ref('message');
        const updateMessage = (appendMessage) => {
            message.value = message.value + appendMessage;
        }
        const count = ref(10);

        // provider 역할을 하는 부모 컴포넌트에서는 procide 함수로 값을 내보낼 수 있다.
        provide('static-message', staticMessage);
        // 여기서 객체 형식으로 함께 제공해주면 된다.
        provide('message', { message: readonly(message), updateMessage });
        provide('count', count);

        // setup 함수에서는 this대신에 inject로 삽입을한다.
        const msg = inject('msg');
        console.log('msg: ',msg);

        // app 레벨에서 뿌려준 메세지를 가져온다. -> inject로 주입한다.
        const appMessage = inject('app-message');

		return {
            count,
            appMessage
        };
	},
    //config.globalProperties 사용
    // 
    mounted() {
        // 컴포넌트 인스턴스는 this이다.
        console.log('this.msg: ',this.msg);
    }
};
</script>
<style lang="scss" scoped></style>
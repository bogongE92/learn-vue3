<template>
	<div class="container py-4">
		<input ref="inputRef" type="text">
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';


export default {
	setup() {
        console.log('setup')
        const inputRef = ref(null)
        /*  
            컴포지션 api에서 라이프사이클 훅을 사용할 때는 셋업함수 내에서 이렇게 
            사용할 수 있다. 

            onMounted에서는 컴포넌트가 DOM추가가 되었기 떄문에 이렇게 DOM에 접근할 수 있다.
            composition API로 input 엘리먼트에 접근하기 위해서는 ref 속성을 이용해서
            이름을 지어주면 된다. 
            그리고 composition API에서 동일한 이름의 반응형 데이터를 선언해주면 된다.
            그러면 반응형 데이터와 엘리먼트가 연결이 된다.
        */
       // 이러한 함수를 가져올 수 있고, 
        onBeforeMount(() => {
            console.log('onBeforeMount')
        }); 
        
        // 이러한 훅을 가져올 수 있다. 
        // input DOM 객체를 잘 가지고 오는 것을 볼수 있다. 
        onMounted(() => {
            console.log('onMounted', inputRef.value)
        }); 
		return {
            inputRef
        };
	},
    /* beforeCreate() {
        console.log('beforeCreate')
        // 초기화 될 때 실행되는 훅(컴포넌트 인스턴스에 접근 가능)
        console.log(this)
    },
    created() {
        console.log('created')
        console.log(this)
    }, */
};
</script>
<style lang="scss" scoped></style>
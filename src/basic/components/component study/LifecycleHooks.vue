<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!">
        <hr>
        <button @click="visible = !visible">Toggle Child</button>
        <LifecycleChild v-if="visible"></LifecycleChild>
        <p id="msg">{{ msg }}</p>
        <!--  
            새로고침을 하게되면 부모컴포넌트가 자식컴포넌트보다 먼저 생성하기를 시작한다. 
            부모 컴포넌트의 setup함수, 부모컴포넌트의 beforeMount함수, 
            그리고나서 자식컴포넌트를 생성을 한다. 
            자식의 setup함수 -> 자식의 beforeMount함수 -> 자식의 mounted 함수 
            그리고 완료는 자식컴포넌트가 완료된 후에 부모 컴포넌트가 완료된다. 

            인스턴스가 시작할때 부모컴포넌트가 초기화 하고, 그 다음 자식 컴포넌트를 생성한다. 
            그 후 자식의 자식을 생성하기 시작한다.
            그리고 완료는 자식컴포넌트가 완료되고, 그 하위 자식컴포넌트까지 다 완료된
            그 다음에 부모 컴포넌트가 완료되는 순위 이다. 

            즉, 다시 말해서 mounted 훅이 호춯되었다는 것은 현재 컴포넌트에서 사용하고 있는
            모든 자식 컴포넌트가 마운트 되었다는 것을 의미한다.
        -->
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
    components : {
        LifecycleChild
    },
	setup() {
        /* Mounting(삽입) */
        // console.log('setup')
        const inputRef = ref(null);
        const msg = ref('');
        const visible = ref(false);

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
        /*  
            beforeMounted에서 접근을 해보면 
            아직 마운트가 완료되지 않았기 때문에 null로 출력되는 걸 확인할 수 있다.
        */
        // onBeforeMount(() => {
        //     console.log('onBeforeMount',inputRef.value)
        // }); 
        
        // 이러한 훅을 가져올 수 있다. 
        /*  
            onMounted는 input DOM 객체를 잘 가지고 오는 것을 볼수 있다.
            inputRef.value -> DOM 객체를 가져오는 것이고,
            inputRef.value.value는 엘리먼트에 있는 value에 접근하기 위해서는 value 속성을 적용할 수 있다.
            mounted 훅은 컴포넌트가 마운트 된 이후이기 때문에 이렇게 접근이 가능한 것이다. 
        */

        
        // onMounted(() => {
        //     console.log('onMounted', inputRef.value.value)
        // }); 

        
        /* Updating(수정) */
        /* 
            그냥 변경을 하면 사용이 안되서 렌더링을 해서 사용해줘야 한다. 
            반응형 상태의 변경으로 인한 이러한 변경을 DOM에 적용시켜야 할 때
            그 때 호출되는 훅이 onBeforeUpdate, onUpdated 훅이다.
        */
        /* 
            onBeforeUpdate 훅은 DOM 트리를 업데이트 하기 이전이기 때문에
            DOM 컨텐츠를 가져왔을 때 아직 값이 바뀌지 않을 것을 확인할 수 있다.  
        */
        // onBeforeUpdate(() => {
        //     console.log('onBeforeUpdate', msg.value);
        //     console.log('DOM Content: ',document.querySelector('#msg').textContent);
            
        // });

        /* 
            DOM 변경한 이후에 호출되는 훅이기 때문에 DOM 컨텐츠를 가져오는걸 확인할 수 있다.  
            변경한 후에 DOM 컨텐츠를 가져오는 걸 확인 할 수 있다. 

            update훅은 디버깅 시에 재렌더링 시점을 알고 싶을 때에도 사용할 수 있다. 
        */
        // onUpdated(() => {
        //     console.log('onUpdated', msg.value)
        //     console.log('DOM Content: ',document.querySelector('#msg').textContent);
        // });


        /* Destruction */







		return {
            inputRef,
            msg,
            visible
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
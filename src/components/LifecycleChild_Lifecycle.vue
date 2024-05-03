<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
        <input id="input" type="text">
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';


export default {
	setup() {
        console.log('[Child] setup');
        onBeforeMount(() => {
            console.log('[Child] onBeforeMount');
        });
        onMounted(() => {
            console.log('[Child] onMounted');
        });


        /* Destruction(소멸) */
        // child 컴포넌트가 false가 되면 마운트 됐던 컴포넌트가 사라지면서 
        // onBeforeUnmount,onUnmounted 된것을 볼 수 있다. 
        /*  
            onBeforeUnmount는 마운트를 해제하기 직전에 호출하는 훅이기 때문에 
            아직 DOM을 가져올 수 있다.
        */
        onBeforeUnmount(() => {
            console.log('[Child] onBeforeUnmount');
            console.log(document.querySelector('#input'));
            
        });
        /*  
            onUnmounted 마운트를 해제하기 후에 호출하는 훅이기 때문에 
            DOM을 가져왔을 때는 없는 것을 확인할 수 있다.
        */
        onUnmounted(() => {
            console.log('[Child] onUnmounted');
            console.log(document.querySelector('#input'));
        })
		return {};
	},
};
</script>
<style lang="scss" scoped></style>
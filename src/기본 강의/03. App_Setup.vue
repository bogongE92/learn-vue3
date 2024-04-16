<template>
	<div>
		<p>{{ counter }}</p>
        <p>{{ message }}</p>
        <button @click="increment">click</button>
	</div>
</template>

<script>
import { ref } from 'vue';


export default {
	setup() {
		const counter = ref(0);
        const message = ref('hello lena');

        // 반응형 상태 뿐만아니라 메서드도 선언이 가능하다. 
        const increment = () => {
            counter.value++
        }

        // 만약에 return을 하지 않으면 템플릿에서 사용이 불가능 하다. 
        return{
            counter,
            message, 
            increment
        };
	},
};
</script>
<style lang="scss" scoped></style>
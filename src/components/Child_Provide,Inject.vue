<template>
	<div class="card">
		<div class="card-header">Child Component</div>
        <div class="card-body">
            <p>appMessage : {{ appMessage }}</p>
            <DeepChild></DeepChild>
        </div>
	</div>
</template>

<script>
import { inject } from 'vue';
import DeepChild from './DeepChild.vue';

export default {
    components : {
        DeepChild
    },
	setup() {
        // app 레벨에서 뿌려준 메세지를 가져온다. -> inject로 주입한다.
        const appMessage = inject('app-message');
		return {
            appMessage
        };
	},
};
</script>
<style lang="scss" scoped></style>
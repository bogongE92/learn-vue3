<template>
	<div class="card">
        <!-- 
            v-if="$slots.header
            header라는 slot이 정의 되어 있다면 이러한 엘리멘트를 렌더링 하겠다. 
        -->
        <div v-if="$slots.header" class="card-header">
            <slot name="header" header-message="헤더메세지">#Header</slot>
        </div>
        <!-- {{ $slots }} -->
        <div v-if="$slots.default" class="card-body">
            <slot :child-message="childMessage" hello-message="안녕 빵땡구??">#Body</slot>
            <!-- 이름을 주지 않으면 default named가 자동으로 붙는다. -->
        </div>
        <!-- <div v-if="$slots.footer" class="card-footer text-muted">
            <slot name="footer" footer-message="푸터메세지">#Footer</slot>
        </div> -->

        <!-- context 객체로 접근하기 -->
        <div v-if="hasFooter" class="card-footer text-muted">
            <slot name="footer" footer-message="푸터메세지">#Footer</slot>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';


export default {
    /* 
        그리고 만약에 셋업 함수에서 슬롯에 접근하고 싶으면 2번째 매개변수로 컨텍스트 객체를
        받아서, 컨텍스트 객체에서 슬롯으로 접근할 수 있다. 
    */
	setup(props, { slots }) {
        const childMessage = ref('자식 컴포넌트 메세지');
        // context.slots
        
        /* footer를 가지고 있다면 true를 반환하고, 아니면 false를 반환하도록 해보자 */
        const hasFooter = computed(() => !!slots.footer)
		return {
            childMessage,
            hasFooter
        };
	},
};
</script>
<style lang="scss" scoped></style>
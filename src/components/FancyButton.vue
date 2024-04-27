<template>
	<button class="fancy-btn">
        <!-- 외부에서 컨텐츠를 전달 했을때 삽입할 위체에 이렇게 slot 컴포넌트를 삽입해 주면 된다.  -->

        <!-- 클릭이라는 문자열이 FancyButton.vue의 slot부분에 그대로 삽입이 된 것이다 -->
        <!-- 
            slot 위치에 click이 그대로 삽입이 됐다고 볼 수 있다.
            이러한 컨텐츠는 문자열 뿐만 아니라 다양한 HTML 태그도 넣을 수 있다.  

            컴포넌트를 사용할때 슬롯 콘텐츠를 제공하고 싶지 않을 때가 있다면? 
            slot을 선언한 위치에서 기본컨텐츠를 제공할 수 있다.
            문자열 뿐만 아니라 HTML element도 올 수 있고, 
            또다른 컴포넌트도 올 수 있다.
        -->
    <slot>default 빵땡구</slot>
    </button>
</template>

<script>

export default {
	setup() {
		return {};
	},
};
</script>
<style scoped>
    .fancy-btn {
        color: #fff;
        background: linear-gradient(315deg, #42d392 25%, #647eff);
        border: none;
        padding: 5px 12px;
        margin: 5px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>
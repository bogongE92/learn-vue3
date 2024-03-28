<template>
	<div>
        <h2>보간법</h2>
        <p>{{ message1 }} : 이런식으로 사용하면 랜더링이 되는걸 알 수 있다.</p>
        <!-- v-once : 한번만 렌더링을 하고 데이터가 변경되도 갱신하지 않으려면 v-once를 사용한다.  -->
        <p v-once>{{ message2 }} : 이런식으로 사용하면 랜더링이 되는걸 알 수 있다.</p>
        <button v-on:click="message1 = message1 + '!'">click!</button>
        <hr />
        <h2>HTML</h2>
        <p>{{ rawHtml }}</p>
        <p v-html="rawHtml"></p>
        <hr />
        <h2>속성 바인딩</h2>
        <!-- <div v-bind:title="dynamicTitle">마우스를 올려보세요</div> -->
        <div :title="dynamicTitle">마우스를 올려보세요</div>
        <!-- <input type="text" value="빵땡구" v-bind:disabled="isInputDisabled"> -->
        <input type="text" value="빵땡구" :disabled="isInputDisabled" />
        <input v-bind="attrs" />
        <hr>
        <h2>JavaScript</h2>
        {{ message2.split('').reverse().join('') }}<br />
        {{ isInputDisabled ? '예' : '아니오' }}
        <!-- isInputDisabled 가 true이면 예를 출력하고 false이면 아니오를 출력하시오 -->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const message1 = ref('안녕하세요!');
        const message2 = ref('디지털빵땡구');
        const rawHtml = ref('<strong>안녕하세요</strong>');
        const dynamicTitle = ref('빵땡구를 눌러주세요!@@@@@!!!');
        const isInputDisabled = ref(true);
        const attrs = ref({
			type: 'password',
			value: '12345678',
			disalbed: false,
		});

		return {
            message1,
            message2,
            rawHtml,
            dynamicTitle,
            isInputDisabled,
            attrs
        }
		 //템플릿에서 사용하려면 객체로 내보내야 한다.
	}
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <main>
        <div class="container py-4">
            <!-- <MyButton class="my-button" id="my-button" @click="sayBread"></MyButton> -->
            <MyButton class="my-button" id="my-button" @click="sayBread"></MyButton>
            <LabelInputNP label="이름" data-id="id입니다."></LabelInputNP>
            <hr>
            <!-- 클릭이라는 문자열이 FancyButton.vue의 slot부분에 그대로 삽입이 된 것이다 -->
            <FancyButton>
                click!
                <span style="color: red;">Hi</span>
            </FancyButton>
            <!-- 슬롯 컴포넌트를 제공 하고 싶지 않을 때도 있을 것이다.  -->
            <FancyButton></FancyButton>
            <hr>
            <!-- 
                원하는 위치에 전달을 할 때는 슬롯 컨텐츠에 전달인자를 사용하면 된다. 

                슬롯도 단축표현이 #으로 가능하다.
            -->
            <AppCard>
                <template #header>제목이다 빵땡구</template>
                <template #default>디폴트 값이다 빵땡구</template>
                <template #footer> 푸터다 빵땡구</template>
            </AppCard>
        </div>
    </main>
</template>

<script>
import MyButton from './MyButton_NoEmit.vue';
import LabelInputNP from './LabelInput_Non-Prop.vue';
import FancyButton from './FancyButton.vue'
import AppCard from '@/components/AppCard.vue';
export default {
    components : {
        MyButton,
        LabelInputNP,
        FancyButton,
        AppCard
    },
    setup () {
        const sayBread = () => {
            alert('빵탱구를 부셔라');
        };

        return {
            sayBread,
        }
    }
}
</script>

<style lang="scss" scoped></style>
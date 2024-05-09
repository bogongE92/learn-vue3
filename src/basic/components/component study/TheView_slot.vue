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
            <FancyButton v-slot="{fancyMessage}">{{ fancyMessage }}</FancyButton>

            <!-- 템플릿을 사용해서 인자를 직접 전달 하고 싶다면?-->
            <FancyButton>
                <template v-slot="{fancyMessage}">{{ fancyMessage }}</template>
            </FancyButton>
            <hr>
            <!-- 
                원하는 위치에 전달을 할 때는 슬롯 컨텐츠에 전달인자를 사용하면 된다. 

                슬롯도 단축표현이 #으로 가능하다.
            -->
            <AppCard>
                <!-- <template #[slotArgs]>제목이다 빵땡구</template> -->
                <!-- <template #default>디폴트 값이다 빵땡구</template> -->
                <!-- 디폴트 슬롯이다. -->
                <!-- <template #footer> 푸터다 빵땡구</template> -->
                <!-- #footer 같은 이러한 전달인자는 동적으로 변경할 수 있다. -->

                <!-- 여기서 받을때는 자식 컴포넌트에서 넘겼던 메세지가 객체에 담겨서 넘어온다. -->
                <!-- <template #default="slotProps">
                    {{ slotProps }}
                    {{message}}
                    {{ slotProps.childMessage }}
                </template> -->

                <!-- 구조분해 할당으로도 받을 수 있다. -->
                <template #header="{headerMessage}">
                    {{ headerMessage }}
                </template>
                <template #default="{childMessage, helloMessage}">
                    {{message}}
                    <br>
                    {{ childMessage }}
                    <br>
                    {{ helloMessage }}
                </template>
                <template #footer="{footerMessage}">
                    {{ footerMessage }}
                </template>
            </AppCard>
            <hr>
            <AppCard>
                <!-- 
                    풀백 컨텐츠가 없을때도 header랑 footer를 사용하기 싫다면?
                    header와 footer를 넣어주지 않았음에도 불구하고 영역이 남아있다.
                    이러한 영역을 제거하기 위해서 컴포넌트 인스턴스의 슬롯 내장객체를 활용할 수 있다.

                    자식요소에서
                    v-if="$slots.header
                    header라는 slot이 정의 되어 있다면 이러한 엘리멘트를 렌더링 하겠다. 
                    이렇게 해당 슬롯에 정의 해야한다.
                -->
                게시글입니다.
            </AppCard>
        </div>
    </main>
</template>

<script>
import MyButton from './MyButton_NoEmit.vue';
import LabelInputNP from './LabelInput_Non-Prop.vue';
import FancyButton from './FancyButton.vue'
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
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
        const slotArgs = ref('header');
        const message = ref('안녕!!!!');

        return {
            sayBread,
            slotArgs,
            message
        }
    }
}
</script>

<style lang="scss" scoped></style>
<template>
    <main>
        <div class="container py-4">
            <!--  
                mybutton.vue 안에 아무런 이벤트를 정의하지 않았기 때문에 아래 MyButton 컴포넌트에서
                어떤 이벤트를 사용하는 것은 이것도 non-prop 속성안에 들어간다는 것이다. 
            -->
            <MyButton class="my-button" id="my-button" @click="sayBread"></MyButton>
            <!--  
                클릭이벤트가 잘 출력이 되는 이유는?
                non props 속성은 컴포넌트의 root element에 상속되기 때문이다. 
                
                개발자 도구에서 button 에 해당되는 이벤트 리스너에서 ancestors all(상위 전체)를
                해제 하면 해당 프레임워크에 달린 리스너가 나온다. 

                이렇게 이벤트 리스너도 동일하게 컴포넌트 루트 엘리먼트에 상속이 된다. 
            -->
            <LabelInputNP label="이름" data-id="id입니다."></LabelInputNP>
            <!-- 
                부모에서 주는 속성값이 있는데 자식 노드는 2개 일때  
                어디로 상속이 될까?
                이때 지정을 해주지 않으면 에러 메세지(런타임경고)가 뜬다. 
                이유는 non-prop 속성을 어디로 상속해줄지 모르기 때문이다.
                이렇게 다중 루트 노드를 사용할 때는 명시적으로 어디에 상속을 할지 
                v-bind로 지정을 해줘야한다. 
            -->
        </div>

    </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInputNP from './LabelInput_Non-Prop.vue';
export default {
    components : {
        MyButton,
        LabelInputNP
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
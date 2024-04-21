<template>
    <div class="p-3 bg-danger">
        <button class="btn btn-primary" type="button" v-bind="$attrs">My Button</button>
        <!-- {{$attrs}} -->
        <!-- 
            이런 non-prop 속성을 button tag에 바인딩을 해야한다. 
            이럴때는 v-bind를 사용할 수 있다. 
            v-bind만 사용해서 객체를 넘기게 되면 다중 속성 바인딩이 된다.
            attribute 객체를 v-bind="$attrs" 이렇게 바인딩 할 수 있다. 
            바인딩을 하면 부모의 속성을 가지고 오게 된다. 
            저장하기전 속성에 id, class가 없었는데, 바인딩하고 저장하게 되면서
            부모의 id, class값을 가지고 오게 된다.
        -->
    </div>
</template>

<script>
export default {
    inheritAttrs:false, // 상속 비활성화
    /*  
        inheritAttrs:false 를 하면 부모로 부터 어떠한 속성도 상속이 안되는 걸 볼 수 있다.    
        여기서, 속성상속은 안했는데, 클래스나 ID 클릭 이벤트를 버튼에 적용하고 싶다면?
        내장객체인 attribute 객체를 사용해서 바인딩 할 수 있다.
    */
    /*  
        이런 객체를 셋업 함수 안에서 접근하는 방법은 두번째 파라미터인 context 객체에 
        attrs 객체가 존재한다. 
    */
    setup (props, context) {
        //context.attrs
        console.log('context.attrs:', context.attrs);
        /*  
            출력을 하게 되면 현재 클래스 id onclick 이러한 속성을 가지고 있는것을
            확인 할 수 있다. 
            onclick은 현재 메서드이다. 
        */
        // 각각 아래 따로 출력해보면
        /* console.log('context.id:', context.attrs.id);
        console.log('context.class:', context.attrs.class);
        console.log('context.onClick:', context.attrs.onClick); */
        
        // 이런 non-prop 속성을 button tag에 바인딩을 해야한다. 
        // 이럴때는 v-bind를 사용할 수 있다. 
        // v-bind만 사용해서 객체를 넘기게 되면 다중 속성 바인딩이 된다.

        // context.attrs.onClick(); 함수라서 바로 실행 가능하다.
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="p-3 bg-danger">
        <!-- non-prop 속성 후에 볼것 --> 
        <!-- 이벤트(emit)를 선언하지 않으면 문제점-->
        <button class="btn btn-primary" type="button" @click="sayBread">My Button</button>
    </div>
</template>

<script>
export default {
    // inheritAttrs:false, // 상속 비활성화
    
    emits: ['click'], // non-prop 속성 제외하기

    // emit 으로 이벤트 발생
    setup (props, { emit }) {
        // 이벤트(emit)를 선언하지 않으면 문제점
        const sayBread = () => {
            // 이벤트 명 선언
            emit('click');
            /* 
                여기서 위에 emit 옵션으로 선언은 해주지 않았다. 
                non-prop 속성상 정의되지 않은 prop, event 특성상 root 엘리먼트에 상속이 된다.

                emit('say-bread') 라는 특별한 이름을 써줬을때는 괜찮았지만, 
            
                상위 컴포넌트에는 html을 선언안해줘서 click 이벤트를 먹진 않았지만 그래도 say-bread라는 
                이벤트를 상속받는다. 

                emit('click')을 선언하면 click이 중복 선언되서 버블링현상이 일어난다. 
                이땐, emit을 선언해서 non-prop 속성에서 제외를 시켜줘야 한다. 
            */

        };
        return {
            sayBread
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
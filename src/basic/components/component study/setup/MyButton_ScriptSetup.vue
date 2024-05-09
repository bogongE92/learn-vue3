<template>
    <div class="p-3 bg-danger">
        <button class="btn btn-primary" type="button" v-bind="$attrs">
            My Button {{ msg }}
        </button>
        <!-- {{$attrs}} -->
    </div>
</template>
<!--  
    inheritAttrs 같은 경우에는 non-prop 속성을 루트에 상속할 것인지 그런 속성인데 
    <script setup>에서는 지원을 안하기 때문에
    <script setup>과 <script> 일반 스크립트를 같이 사용한다.
    이렇게 옵션을 사용해야 하는 경우에 함께 사용할 수 있다.

-->
<script>
export default {
    // 상속 비활성화
    inheritAttrs:false, 
}
</script>

<script setup>
import { ref } from 'vue';

//반응형 선언
const msg = ref('message');
</script>

<style lang="scss" scoped></style>
<template>
    <div>
        <!-- 
            부모에서 value로 받으니깐 update쪽은 value로 받을 수 있다. 
        -->
        <LabelInput 
            :model-value="firstname"
            @update:model-value="value => $emit('update:firstname', value)"
            label="성"
        ></LabelInput>
        <LabelInput 
            :model-value="lastname" 
            @update:model-value="value => $emit('update:lastname', value)"
            label="이름"
        ></LabelInput>
    </div>
</template>

<script>
import LabelInput from './LabelInput.vue';
export default {
    // v-model 전달인자로 firstname, lastname 이 들어갔기 때문에 
    // 이름을 변경한 것처럼 props를 바로 받아 줄 수 있다. 
    props : ['firstname', 'lastname'],
    emits : ['update:firstname', 'update:lastname'],
    components: {
        LabelInput,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
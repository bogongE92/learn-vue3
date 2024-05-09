<template>
    <div class="card">
        <div class="card-body">
            <span class="badge text-bg-secondary mt-2">{{ typeName}}</span>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ contents }}
            </p>
            <!-- <a href="#" class="btn" :class="isLikeClass">
                {{ isLike === true ? '좋아요' : '싫어요' }}
            </a> -->
            <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">
                {{ isLike === true ? '좋아요' : '싫어요' }}
            </a>
        </div>
    </div>
</template>

<!--  
    PostItem를 여러개 사용할 경우, 각각의 컴포넌트 인스턴스가 생성인 된다.
    각각의 컴포넌트 인스턴스가 생성될 때는 셋업 함수가 호출이 된다.

    예를들어서 한번만 실행시키고 싶은 로직이 있다고 가정을 해보자.
    한번만 실행하고 싶은 로직은 만약에 <script setup> 이 안에서 사용하게 되면
    스크립트 셋업은 셋업 함수 안으로 컴파일이 된다. 
    그래서 이 인스턴스가 생성되는 갯수만큼 호출이 된다.
    따라서 한번만 실행하고 싶은 로직이 있을 떄는 일반 스크립트 블럭과 함께 사용할 수 있다.

    일반 스크립트 setup은 한번만 호출이 되고, 
	스크립트 셋업블럭은 인스턴스 갯수만큼 호출된다.
-->
<script>
console.log('Normal Script');
</script>

<script setup>
import { computed } from 'vue';
console.log('Script Setup');
// 문자열로도 선언할 수 있고, 객체로도 선언할 수 있다.
// 우선 props 객체는 defineProps에서 이렇게 객체를 반환한다.
const props = defineProps({
    type : {
        type : String ,
        default : 'news', 
        validator: (value) => {
            return ['news','notice'].includes(value); 
        },
    },
    title : {
        type : String,
        required : true,
    },
    contents : {
        type: String,
        // required: true,
    },
    isLike : {
        type : Boolean,
        default : false,
    },
    obj : {
        type: Object,
        default:() => ({}), 
    },
})

// emit 함수를 반환하면 바로 사용해주면 된다.
const emit = defineEmits(['toggleLike'])

const isLikeClass = computed(
    () => props.isLike ? 'btn-danger' : 'btn-outline-danger'
);
const typeName = computed(
    () => props.type === 'news' ? '뉴스' : '공지사항'
);
const toggleLike = () => {
    emit('toggleLike');
};
</script>
<style lang="scss" scoped></style>
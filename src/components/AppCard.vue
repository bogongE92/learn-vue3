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

<script>
import { computed } from 'vue';


export default {
    props : {
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
    },
    emit: ['toggleLike'],
    setup(props, context) {
        const isLikeClass = computed(
            () => props.isLike ? 'btn-danger' : 'btn-outline-danger'
        );
        const typeName = computed(
            () => props.type === 'news' ? '뉴스' : '공지사항'
        );
        const toggleLike = () => {
            context.emit('toggleLike');
        };

        return {
            isLikeClass,
            typeName,
            toggleLike,
        };
    },
};
</script>
<style lang="scss" scoped></style>
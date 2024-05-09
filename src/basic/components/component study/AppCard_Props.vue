<template>
    <div class="card">
        <div class="card-body">
            <!-- type : news, notice 구분해서 뿌려준다  -->
            <!-- <span class="badge text-bg-secondary mt-2">{{ type === 'news' ? '뉴스' : '공지사항' }}</span> -->
            <span class="badge text-bg-secondary mt-2">{{ typeName}}</span>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ contents }}
                <!-- 외부에서 값을 넣어주지 않으면 외부에서 아무 데이터를 받지 않았기 때문에 데이터가 나오지 않는다. -->
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
    // props를 선언할 때는 props 속성으로 선언 할 수 있다. 
    // 우선 title이랑 content를 선언해서 웹으로 부터 데이터를 받아오자 
    // 선언된 props를 템플릿 안에서 사용할때는 콧수염하고 {{ props }} 사용하면 된다. 
    // 외부에서 값을 넣어주지 않으면 외부에서 아무 데이터를 받지 않았기 때문에 데이터가 나오지 않는다. 
    // props: ['title', 'contents'], 이걸 type으로 바꿔보자
    props : {
        type : {
            // type이라는 속성을 정의 해주고
            type : String ,
            default : 'news', // 만약에 속성이 비어있거나, Undefined 라면 Default를 news로 지정한다. 
            // validator로 검사를 진행하자
            validator: (value) => {
                // 값으로는 news 혹은 notice가 넘어올 것이다. 
                return ['news','notice'].includes(value); 
                // news랑 notice가 포함되었을때 현재 value가 news나 notice라면 true가 나올 것이다. 
            },
        },
        title : {
            type : String,
            required : true, // 이 속성은 필수 속성이기 때문에 required라는 옵션으로 true를 지정한다. 
        },
        contents : {
            type: String,
            required: true,
        },
        isLike : {
            type : Boolean,
            default : false,
        },

        /* 
            객체나 배열과 같은 레퍼런스 타입의 디폴트를 설정할 때는 기본 값을 반환하는 
            팩토리 함수를 설정을 해줘야 한다
            obj라는 레퍼런스 타입의 이러한 오브젝트 타입의 값을 선언을 해보자 
        */
        obj : {
            type: Object, // 기본값을 반환하는 팩토리 함수형태로 선언 해줘야 한다.
            default:() => ({}), 
        },
    },
    // props 와 마찬가지로 emit도 선언을 해줘야 한다. 
    emit: ['toggleLike'],

    // 앱카드에서 셋업함수의 첫번째 배경변수로 이렇게 props 받을 수 있다.
    // 두번째 파라미터를 통하여 자식 컴포넌트에서 부모컴포넌트로 업데이트를 가능하게 해준다.
    // 이때 emit을 사용해야 한다. 
    setup(props, context) {
        //console.log('props.title :', props.title); 

        // 클래스 바인딩 사용하기
        const isLikeClass = computed(
            () => props.isLike ? 'btn-danger' : 'btn-outline-danger'
        );
        
        const typeName = computed(
            () => props.type === 'news' ? '뉴스' : '공지사항'
        );

        const toggleLike = () => {
            // props.isLike = !props.isLike; // 하위 컴포넌트는 readonly로 오류가 발생한다. 
            context.emit('toggleLike');
            // emit이라는 메서드 존재 toggleLike 이런 방법으로 이벤트를 올릴 수 있다. 
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
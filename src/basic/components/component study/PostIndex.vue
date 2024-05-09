<template>
    <main>
        <div class="container py-4">
            <PostCreate @create-post="createPost"></PostCreate>

            <hr class="my-4">

            <div class="row g-3">
                <div v-for="post in posts" :key="post.id" class="col col-4">
                    <AppCard 
                        :title="post.title" 
                        :contents="post.contents" 
                        :type="post.type" 
                        :is-like="post.isLike"
                        @toggle-like="post.isLike = !post.isLike"
                    >
                    </AppCard>
                </div>
            </div>

            <hr class="my-4">
            
            <LabelInput 
                v-model="username" 
                label="이름" 
                class="parent-class" 
                style="color:red"
                id="parent-id"
            ></LabelInput>
            <!-- 
                여기서 lable이라는 속성은 컴포넌트에 props로 정의 되어 있는 속성이다. 
                하지만 나머지 속성들은 컴포넌트에 props나 emit에 정의되어 있는 속성이 아니다. 

                하지만 개발자 도구를 열어서 이 labelInput을 보면 위에서 정의한 non-props 속성이
                현재 컴포넌트의 루트 엘리먼트인 lable의 속성으로 잘 상속이 된 것을 볼 수 있다. 

                만약 하위 tag가 label이 아니라 div tag면 div 태그에 상속이 될 것이다. (lableInput.vue)
            -->
            <!--  
                클래스 속성은 병합 : 부모 받은 클래스 속성과랑 자식 속성에 있던 클래스 속성이랑 합쳐진다.
                스타일 속성도 병합 : 부모랑 자식이랑 합쳐진다.

                ** 하지만 나머지 속성들은 부모로부터 받은 속성으로 덮어씌우기가 된다.  
            -->
        </div>
    </main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import LabelInput from '@/components/LabelInput.vue';
import UsernameInfo from '@/components/UsernameInfo.vue';
import { reactive, ref } from 'vue';

export default {
    components : {
        PostItem,
        PostCreate,
        LabelInput,
        LabelTitle,
        UsernameInfo,
    },
    setup() {
        const post = reactive({
            title : '제목2',
            contents : '내용2'
        });
        const posts = reactive([
            { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news'},
            { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'notice' },
            { id: 3, title: '제목3', contents: '내용3', isLike: false, type: 'news' },
            { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
            { id: 5, title: '제목5', contents: '내용5', isLike: true, type: 'notice' },
            { id: 6, title: '제목6', contents: '내용6', isLike: false, type: 'news' },
        ]);

        const createPost = (newPost) => {
            console.log('newPost',newPost);
            posts.push(newPost);
        };

        const username = ref('');
        const firstname = ref('');
        const lastname = ref('');
        
        return {
            post,
            posts,
            createPost,
            username,
            firstname,
            lastname,
        };
    },
};
</script>
<style lang="scss" scoped></style>
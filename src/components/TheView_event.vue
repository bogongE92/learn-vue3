<template>
    <main>
        <div class="container py-4">
            <!-- 자식컴포넌트에서 emit 으로 보낸 이벤트를 부모컴포넌트에서 이벤트를 받을때는 v-on으로 받을 수 있다.  -->
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
            <!-- value를 받은 값을 username에 저장해준다.  -->
            
            <!-- <LabelInput
                :model-value="username" 
                @update:model-value="value => (username = value)" 
            ></LabelInput> -->
            <!-- 위와 같은 props와 이벤트를 v-model로 사용할 수 있다. -->
            <LabelInput v-model="username" label="이름"></LabelInput>

            <!-- 이름을 변경하고 싶으면 전달인자를 넘기면된다. -->
            <LabelTitle v-model:title="username" label="제목"></LabelTitle>

            <!-- 
                여러개의 v-model을 사용할 때는 v-model에서 전달인자로 firstName을 전달할 수 있고, 
                여기에 firstName이라는 반응형 상태를 맵핑해준다.  
                
                전달인자를 활용하여 2개의 v-model을 활용한 것이다.
            -->
            <UsernameInfo 
                v-model:firstname="firstname" 
                v-model:lastname="lastname"
            ></UsernameInfo>
        </div>
    </main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import LabelInput from '@/components/LabelInput.vue';
import UsernameInfo from '@/components/UsernameInfo.vue';
import { reactive, ref } from 'vue';

export default {
    components : {
        AppCard,
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

        // postCreate 에서 emit 으로 넘겨줬던 파라미터 값 1, 2, 3, 'lena'이다.
        /* const createPost = (a, b, c, d) => {
            console.log('createPost',a, b, c, d);
            // 이렇게 사용하면 자식컴포넌트에서 넘긴 파라미터가 출력되는 것을 확인 할 수 있다.
            // 자식 컴포넌트에서 이벤트를 발생시킬 때 이러한 컴포넌트 내장 메서드를 활용할 수 있다. 
        }; */
        const createPost = (newPost) => {
            console.log('newPost',newPost);
            // 저장한 값이 자식요소에서 파라미터로 받아온다. 

            // 그다음 posts 배열에 push하면 된다. 
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
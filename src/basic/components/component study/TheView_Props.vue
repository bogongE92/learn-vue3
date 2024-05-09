<template>
    <main>
        <div class="container py-4">
            <div class="row g-3">
                <div v-for="post in posts" :key="post.id" class="col col-4">
                    <AppCard 
                        :title="post.title" 
                        :contents="post.contents" 
                        :type="post.type" 
                        :is-like="post.isLike"
                        @toggle-like="post.isLike = !post.isLike"
                    >
                        <!--  
                            - 공식문서에서 선언할때는 카멜케이스 caMel
                            - 부모 컴포넌트에서 값을 전달 할 때에는 케밥케이스 사용 ke-bab
                            
                            부모컴포넌트에서는 이렇게 받을 수 있다. 
                            @toggle-like="post.isLike = !post.isLike"
                        -->
                    </AppCard>
                    <!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
                    <!-- <AppCard title="제목" contents="내용1"></AppCard> -->
                    <!-- <app-card></app-card> -->
                </div>
                <!-- <div class="col col-4">
                    <AppCard :title="post.title" :contents="post.contents"></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div> -->
            </div>
        </div>
    </main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';

export default {
    components : {
        AppCard
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
        return {
            post,
            posts
        };
    },
};
</script>
<style lang="scss" scoped></style>
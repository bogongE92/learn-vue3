<template>
    <div class="card">
        <div class="card-body">
            <!-- {{ $style }} -->
            <h5 class="card-title red">Card title</h5>
            <!-- <p class="card-text" :class="$style.blue">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p> -->
            <!-- {{ lena }} -->
            <!-- <p class="card-text" :class="lena.blue">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p> -->
            <p class="card-text pink">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
import { ref, useCssModule } from 'vue';

console.log('AppCard module')
export default {
    setup() {
        const style = useCssModule();
        /* console.log('style: ', style) */
        const color = ref('#fdd');
        color.value = 'blue';

        console.log('AppCard setup();')
        return {
            style,
            color
        };
    },
};
</script>
<!-- scoped -->
<!-- <style scoped>
    .red{
        color:red !important;
    }
</style> -->

<!-- module -->
<!-- <style module="lena">
.blue {
    color: blue !important;
}
</style> -->

<!-- 스타일 객체를 setup 함수에서 가져오고 싶다면 useCSSModule 함수를 통해서 스타일을 가져올 수 있다. -->
<style>
.pink {
    color: v-bind(color) !important;
}
</style>
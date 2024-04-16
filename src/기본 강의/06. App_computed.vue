<template>
    <div>
        <h2>{{ teacher.name }}</h2>
        <h3>강의가 있습니까?</h3>
        <!-- lectures가 있다면 있음, 없으면 아니요,없음을 출력  -->
        <!-- 하지만 삼항연산자로 쓰는건 코드가 조금 복잡하다 -->
        <!-- 이럴때 사용하는것이 computed이다. -->
        <!-- <p>{{ teacher.lectures.length > 0 ? '있음😊' : '없음😢' }}</p> -->
        <p>{{ hasLecture }}</p>

        <!-- 하지만 위와 달리 메서드이기 때문에 괄호를 넣어줘야 한다.  -->
        <p>{{ existLecture() }}</p>
        
        <hr />
        <button v-on:click="counter++">Counter: {{ counter }}</button>
        
        <hr>
        <h2>이름</h2>
        <p>{{ fullName }}</p>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup () {
        const teacher = reactive({
            name: 'Lena',
            lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
        });

        const hasLecture = computed(()=>{
			// 읽기 전용 속성으로 사용 할 수 있다. 
            console.log('computed');
            return teacher.lectures.length > 0 ? '있음😊' : '없음😢'
            // arrow function은 명령어가 하나일때는 return과 중괄호를 생략할 수 있다. 
        })
        /* const hasLecture = computed( ()=> 
            teacher.lectures.length > 0 ? '있음😊' : '없음😢'
        ) */
        // 성능면에서 computed가 메서드보다 비용이 적게든다. 
        // computed는 이 안에서 계산된 값이 캐시되기 때문이다. 
        // computed 한번 이렇게 계산된 결과를 캐시되서 보관하고 있다가
        // 다음에 요청했을 때 그 캐시된 데이터를 돌려준다.  
        // 메서드는 실행될 때마다 다시 찍힌다. 


        // 같은 기능을 하는 메서드를 하나 정의해보자.
        const existLecture = () => {
            console.log('method');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😢'
        };
        const counter = ref(0);

        const firstName = ref('홍');
        const lastName = ref('길동');

        /* const fullName = computed(() => firstName.value + ' ' + lastName.value) */
        const fullName = computed({
            get(){
                // getter함수를 정의를 하고, 
                // getter니깐 무언가를 return을 해야한다.

                return firstName.value + ' ' + lastName.value
                // fullName은 여기서 return한 값이다. 
                // 그러니깐 firstName을 여기에다가 쓰고, 
                
            },
            set(value){
                //setter 함수니깐 무언가를 받아야 한다. 

                //fullName.value = 'Nong lena'
                // 이렇게 value를 쓴 값이 setter함수의 매개변수로 넘어온다. 
                console.log('value: ', value ); 
                // 이 벨류값을 firstName과 LastName에 집어 넣어보자
                // 그러면 getter안의 값이 바뀌었기 때문에 lastName도 갱신이 된다. 
                console.log(value.split(' '));
                
                // 그다음 구조분해 할당해서 새로운 변수에 할당해보자
                // 배열을 구조분해 할당할 때는 순서에 맞춰주면 된다. 
                // 그럼 빵은 first에 할당이 되고, 땡구는 last에 할당이 된다.
                /* const [first, last] = value.split(' ') */
                /* console.log('first: ', first);
                console.log('last: ', last); */

                // 이때 새로운 변수를 선언해서 할당하지 말고 그냥 기존 값에다가 할당을 해라
                [firstName.value, lastName.value] = value.split(' ')


            }
        })
        console.log('Console 출력: ', fullName.value)
        fullName.value = '빵 땡구'
        // 위에 값을 지우면 setter값이 실행이 되지 않는다. 
        
        return {
            teacher,
            hasLecture,
            existLecture,
            counter,
            fullName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
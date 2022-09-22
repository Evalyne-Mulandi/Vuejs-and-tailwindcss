<template>
    <div> <Heros />
        <Courses />
        <Swiper/>
        <Footer/>
     </div>
  
</template>

<script>

import Heros from '@/components/Heros.vue';
import Courses from '@/components/Courses.vue';
import Swiper from '@/components/swiper.vue';
import Footer from '@/components/footer.vue';
export default {
 name:'Home',
 components:{ Heros, Courses, Swiper, Footer }
  
}
</script>

<style>

</style>
<template>
    <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10"><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labore.</p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10"><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labore.</p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10"><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labore.</p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10"><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labore.</p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10 "><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labor.</p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      <swiper-slide class=" h-auto max-w-md  m-2 border-black border mt-4 rounded-lg text-black"><div class="flex flex-col items-center justify-center gap-y-1 p-2"><img src="@/assets/images/user2.png" alt="" class="rounded-full h-10 w-10"><p class="p-1 mx-auto text-black font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dicta pariatur praesentium distinctio sint cum, porro, reprehenderit debitis voluptate consequatur? Porro nemo itaque debitis inventore quibusdam cum sapiente labore </p><strong class="flex justify-center items-center p-1 ">~ Jane Doe</strong></div></swiper-slide>
      ...
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
   import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>
<template>
 <main  >
    <main class=" bg-black  max-w-full   justify-start  grid grid-flow-row lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-2 pr-16 items-start text-white ">
    <div class="block"
    ><li class=" font-extrabold text-white">solutions</li>
    <li>Marketing</li>
    <li> Analystics</li>
    <li> Commerce</li>
    <li>Insights</li>
    <li> Finance</li>
</div>
<div class="block"
    ><li class=" font-extrabold text-white">Company</li>
    <li>Marketing</li>
    <li> Analystics</li>
    <li> Commerce</li>
    <li>Insights</li>
    <li> Finance</li>
</div>
<div class="block"
    ><li class=" font-extrabold text-white">support</li>
    <li>Marketing</li>
    <li> Analystics</li>
    <li> Commerce</li>
    <li>Insights</li>
    <li> Finance</li>
</div>
<div class="block"
    ><li class=" font-extrabold text-white">Legal</li>
    <li>Marketing</li>
    <li> Analystics</li>
    <li> Commerce</li>
    <li>Insights</li>
    <li> Finance</li>
</div>
<div class=" flex flex-col gap-y-1 justify-center items-center "><li class=" text-white  font-semibold"> subscribe </li>
    <p class=" text-white font-light  italic"> The latest news.subscribe.share</p>
<div class=" flex flex-row  justify-center items-center gap-x-2  p-1 ">
    <input type="text" class=" px-6 py-2 text-black font-mono rounded-md ">
    <button class=" rounded-md px-4 py-2 text-white bg-blue-600"> Subscribe</button>
</div>

</div>
  </main>
  <div class="flex  justify-evenly items-center ">
    <p class="text-white font-mono ">&copy;copyright 2022 ALL RIGHTS RESERVED</p> 
    <div class=" flex flex-row justify-center items-center">
        <font-awesome-icon :icon="['fas', 'twitter']" class="icon alt"/>
        <font-awesome-icon :icon="['fas', 'twitter']" class="icon alt"/>
        <font-awesome-icon :icon="['fas', 'twitter']" class="icon alt"/>
        <font-awesome-icon :icon="['fas', 'twitter']" class="icon alt"/>
    </div>
  </div>
 </main>
</template>

<script>
export default {

}
</script>

<style>

</style>
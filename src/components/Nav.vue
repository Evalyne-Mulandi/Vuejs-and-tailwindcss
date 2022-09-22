<template>
  <main>
    <div class=" bg-red-900   text-white flex flex-row justify-center items-center gap-x-3 text-2xl  p-3" >
        <router-link to="/"> <h2> Home</h2> </router-link>
        <router-link to="/About"> <h2> About</h2></router-link>
        <router-link to="/Blog"> <h2> Blog</h2> </router-link>
        <router-link to="/Contact"> <h2> Contact us</h2></router-link>
    </div>
  </main>
</template>

<script>
export default {
name:'Nav'
}
</script>

<style>

</style>
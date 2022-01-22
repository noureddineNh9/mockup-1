<template>
   <div class="bg-gray-200 p-4 flex justify-center">
      <router-link to="/listannonce" class="mr-7">list annonce</router-link>
      <router-link to="/detailannonce">detail annonce</router-link>
   </div>
</template>

<script>
// @ is an alias to /src

export default {
   name: "Home",
};
</script>

<style lang="sass" scoped>
h1 { color: red; }
</style>

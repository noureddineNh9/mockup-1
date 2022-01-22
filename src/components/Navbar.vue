<template>
   <div class="nav">
      <a href="/"><img class="h-12" src="../assets/Logo.svg" alt="" /></a>
      <div class="flex items-center">
         <ul class="hidden md:flex">
            <li href="/about">Spécial investisseur</li>
            <li href="/products">Estimer</li>
            <li href="/products">Utiliser nos données</li>
         </ul>
         <button><img src="../assets/nav-btn.svg" alt="" /></button>
      </div>
   </div>
</template>

<script>
export default {
   name: "Navbar",
};
</script>

<style lang="scss">
.nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 30px;
   ul {
      li {
         margin-right: 20px;
         color: #2f3c43;
      }
   }
}
</style>

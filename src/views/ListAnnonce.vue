<template>
   <Navbar />

   <div class="bg-gray-100 py-20 px-8 sm:px-32">
      <p class="mb-16">
         20 Accueil | Annuaire des diagnostiqueurs immobiliers certifiés
      </p>
      <h1 class="mb-7 color-black">
         Annuaire des diagnostiqueurs
         <span class="color-blue">immobiliers certifiés</span>
      </h1>
      <p>Trouver un diagnostiqueur certifié à côté de chez vous</p>
   </div>
   <div class="py-20 px-8 sm:px-32">
      <!---------------------- Search Bar ------------------------->
      <SearchBar />
      <!---------------------- // Search Bar ------------------------->

      <div id="listAnnonce">
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
         <AnnonceCard />
      </div>

      <div class="flex justify-center mt-32">
         <div class="flex">
            <button class="page-btn flex justify-center items-center">
               <img
                  class="rotate-icon-180"
                  src="../assets/ListesannoncesAssets/next-icon.svg"
                  alt=""
               />
            </button>
            <button class="page-btn page selected">1</button>
            <button class="page-btn page">2</button>
            <button class="page-btn">...</button>
            <button class="page-btn page">3</button>
            <button class="page-btn page">4</button>
            <button class="page-btn flex justify-center items-center">
               <img src="../assets/ListesannoncesAssets/next-icon.svg" alt="" />
            </button>
         </div>
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import AnnonceCard from "../components/ListAnnonce/AnnonceCard.vue";
import SearchBar from "../components/ListAnnonce/SearchBar.vue";

export default {
   name: "ListAnnonce",
   components: {
      Navbar: Navbar,
      AnnonceCard: AnnonceCard,
      SearchBar: SearchBar,
   },
   mounted() {
      const pageButtons = document.querySelectorAll(".page");

      pageButtons.forEach((btn) => {
         btn.addEventListener("click", function (e) {
            pageButtons.forEach((b) => {
               b.classList.remove("selected");
            });
            e.target.classList.add("selected");
         });
      });
   },
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract/_variables.scss";

.page-btn {
   border: 1.5px solid $color-grey-6;
   border-radius: 4px;
   min-width: 32px;
   min-height: 32px;
   padding: 3px 6px;
   margin: 5px;
}

.selected {
   border: 1.5px solid $color-blue-1;
   color: $color-blue-1;
}

.rotate-icon-180 {
   transform: rotate(180deg);
}
</style>

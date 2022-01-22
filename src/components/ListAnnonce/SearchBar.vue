<template>
   <div id="serach-bar" class="xl:flex justify-center my-6">
      <div class="md:flex justify-center w-full">
         <!-------------------- Ville input ------------------->
         <div class="relative m-3 md:w-5/12">
            <input
               class="form-control"
               type="text"
               placeholder="Nom Complet"
               name="nomComplet"
            />
            <span class="absolute inset-y-0 left-4 flex items-center">
               <img
                  src="../../assets/ListesannoncesAssets/position-icon.svg"
                  alt="position"
                  class="h-6"
               />
            </span>
         </div>
         <!----------------------------------------------------->
         <!-------------------- Prestations input ------------------->
         <div id="prestation-input" class="relative m-3 md:w-7/12">
            <input
               readonly
               @click="togglePrestationsList"
               class="form-control"
               type="text"
               placeholder="Prestations"
               name="Prestations"
            />
            <span
               @click="togglePrestationsList"
               class="absolute inset-y-0 left-4 flex items-center"
            >
               <img
                  src="../../assets/ListesannoncesAssets/home1.svg"
                  alt="position"
                  class="h-6"
               />
            </span>
            <span
               @click="togglePrestationsList"
               class="absolute inset-y-0 right-5 flex items-center"
            >
               <img
                  src="../../assets/ListesannoncesAssets/bx_bxs-down-arrow.svg"
                  alt="position"
                  class="h-5"
                  id="prestations-down-icon"
               />
            </span>
            <div
               class="bg-gray-300 absolute w-full z-10 hidden border-2"
               id="prestationList"
            >
               <div class="flex items-center bg-color-gray-7 px-8 py-4">
                  <input type="checkbox" class="checkbox" />
                  <div class="relative m-3 w-full">
                     <input class="w-full p-4" type="text" name="search" />
                     <span class="absolute inset-y-0 right-4 flex items-center">
                        <img
                           src="../../assets/ListesannoncesAssets/loupe-black.svg"
                           alt="position"
                           class="h-6"
                        />
                     </span>
                  </div>
                  <span class="inset-y-0 left-4 flex items-center -mr-3 ml-1">
                     <img
                        src="../../assets/ListesannoncesAssets/add-outline.svg"
                        alt="position"
                        class="h-10"
                     />
                  </span>
               </div>
               <div>
                  <ul class="py-4 bg-white">
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Amiante</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">Diagnostics avant-location</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="md:flex justify-center w-full">
         <!-------------------- Qui input ------------------->

         <div class="relative m-3 md:w-5/12">
            <input
               class="form-control"
               type="text"
               placeholder="Qui"
               name="Qui"
            />
            <span class="absolute inset-y-0 left-4 flex items-center">
               <img
                  src="../../assets/ListesannoncesAssets/realtor1.svg"
                  alt="position"
                  class="h-6"
               />
            </span>
         </div>
         <!-------------------- langues parlées input ------------------->

         <div id="langues-input" class="relative m-3 md:w-7/12">
            <input
               readonly
               @click="toggleLanguesList"
               class="form-control"
               type="text"
               placeholder="langues parlées"
               name="langues"
            />
            <span
               @click="toggleLanguesList"
               class="absolute inset-y-0 left-4 flex items-center"
            >
               <img
                  src="../../assets/ListesannoncesAssets/language1.svg"
                  alt="position"
                  class="h-6"
               />
            </span>
            <span
               @click="toggleLanguesList"
               class="absolute inset-y-0 right-5 flex items-center"
            >
               <img
                  src="../../assets/ListesannoncesAssets/bx_bxs-down-arrow.svg"
                  alt="position"
                  class="h-5"
                  id="langues-down-icon"
               />
            </span>
            <div
               class="bg-gray-300 absolute w-full z-10 hidden border-2"
               id="languesList"
            >
               <div>
                  <ul class="py-4 bg-white">
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">arabe</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">anglais</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">espagnol</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">japonais</p>
                     </li>
                     <li class="flex items-center hover:bg-gray-200 py-5 px-8">
                        <input type="checkbox" class="checkbox mr-4" />
                        <p class="">français</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="flex justify-end m-3">
         <button class="btn flex">
            <img
               src="../../assets/ListesannoncesAssets/loupe-white.svg"
               alt="position"
               class="pr-3"
            />
            <span>Rechercher</span>
         </button>
      </div>
   </div>
</template>

<script>
export default {
   name: "SearchBar",
   methods: {
      togglePrestationsList() {
         document.getElementById("prestationList").classList.toggle("hidden");
         if (
            document
               .getElementById("prestationList")
               .classList.contains("hidden")
         )
            document
               .getElementById("prestations-down-icon")
               .classList.remove("rotate-down-icon");
         else
            document
               .getElementById("prestations-down-icon")
               .classList.add("rotate-down-icon");
      },
      toggleLanguesList() {
         document.getElementById("languesList").classList.toggle("hidden");
         if (
            document.getElementById("languesList").classList.contains("hidden")
         )
            document
               .getElementById("langues-down-icon")
               .classList.remove("rotate-down-icon");
         else
            document
               .getElementById("langues-down-icon")
               .classList.add("rotate-down-icon");
      },
   },
   mounted() {
      window.addEventListener("click", function (e) {
         if (!document.getElementById("prestation-input").contains(e.target)) {
            // Clicked outside the box
            if (
               !document
                  .getElementById("prestationList")
                  .classList.contains("hidden")
            ) {
               document
                  .getElementById("prestationList")
                  .classList.add("hidden");
               document
                  .getElementById("prestations-down-icon")
                  .classList.remove("rotate-down-icon");
            }
         }
         if (!document.getElementById("langues-input").contains(e.target)) {
            // Clicked outside the box
            if (
               !document
                  .getElementById("languesList")
                  .classList.contains("hidden")
            ) {
               document.getElementById("languesList").classList.add("hidden");
               document
                  .getElementById("langues-down-icon")
                  .classList.remove("rotate-down-icon");
            }
         }
      });
   },
};
</script>

<style lang="scss" scoped>
@import "../../styles/abstract/_variables.scss";

.form-control {
   border-radius: 3px;
   background-color: $color-grey-7;
   padding: 10px;
   padding-left: 35px;
   color: $color-grey-3;
   font-weight: 400;
   height: 44px;
   width: 100%;
}
.checkbox {
   max-height: 20px;
   max-width: 20px;
   min-height: 20px;
   min-width: 20px;
}
.btn {
   border-radius: 3px;
   background-color: $color-blue-1;
   color: #fff;
   height: 44px;
   padding: 10px 18px;
   align-items: center;
   justify-content: center;
   width: 200px;
   min-width: 200px;
}

#prestationList,
#languesList {
   max-height: 300px;
   overflow-y: auto;
   overflow-x: hidden;
   &::-webkit-scrollbar {
      width: 0.5em;
   }

   &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px $color-grey-7;
   }

   &::-webkit-scrollbar-thumb {
      background-color: rgb(187, 187, 187);
   }

   li:hover {
      background-color: $color-blue-3;
   }
}

.rotate-down-icon {
   transform: rotate(180deg);
}
</style>

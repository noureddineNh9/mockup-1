<template>
   <div class="card xl:flex p-3 sm:p-8 mt-16">
      <div class="lg:flex xl:w-2/4">
         <div class="flex items-center lg:w-auto m-6 ml-2">
            <span>
               <img src="../../assets/annonce-img-1.svg" alt="" />
            </span>
         </div>

         <div class="m-6 flex items-center">
            <div>
               <h3>DEFIM Diagnostics Immobiliers</h3>
               <p class="color-blue">Diagnostiqueur Immobilier</p>
            </div>
         </div>
      </div>

      <div class="xl:w-1/4 mx-6 my-12">
         <div class="flex mb-3">
            <img
               class="mr-2"
               src="../../assets/ListesannoncesAssets/star1.svg"
               alt=""
            />
            <img
               class="mr-2"
               src="../../assets/ListesannoncesAssets/star1.svg"
               alt=""
            />
            <img
               class="mr-2"
               src="../../assets/ListesannoncesAssets/star1.svg"
               alt=""
            />
            <img
               class="mr-2"
               src="../../assets/ListesannoncesAssets/star1.svg"
               alt=""
            />
            <img
               class="mr-2"
               src="../../assets/ListesannoncesAssets/star2.svg"
               alt=""
            />
         </div>
         <p class="mb-3">107 rue de Courcelles | 34567</p>
         <div class="flex">
            <img
               class="mr-3"
               src="../../assets/ListesannoncesAssets/global1.svg"
               alt=""
            />
            <img
               class="mr-3"
               src="../../assets/ListesannoncesAssets/telephone1.svg"
               alt=""
            />
         </div>
      </div>

      <div class="xl:w-1/4 fonctionnalites sm:mx-6 h-full my-auto">
         <div class="">
            <div class="title-container bg-blue-100">
               <h5>Fonctionnalités</h5>
            </div>
            <div class="icons-container px-8 py-3">
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/alert-circle1.svg"
                     alt=""
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/build1.svg"
                     alt="build1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/bar-chart1.svg"
                     alt="chart1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/flash1.svg"
                     alt="flash1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/leaf1.svg"
                     alt="flash1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/camera1.svg"
                     alt="flash1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/flame1.svg"
                     alt="flame1"
                  />
                  <p class="alt">some think</p>
               </div>
               <div class="alt-wrap">
                  <img
                     class="fonct-icon m-2"
                     src="../../assets/ListesannoncesAssets/ellipse1.svg"
                     alt="ellipse1"
                  />
                  <p class="alt">some think</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "AnnonceCard",
};
</script>

<style lang="scss" scoped>
@import "../../styles/abstract/_variables.scss";

.card {
   border: 2px solid $color-grey-7;
}

.fonctionnalites {
   border: 1px solid $color-blue-2;
   border-radius: 5px;
   color: $color-blue-1;
   min-width: 250px;
   max-width: 350px;
   height: max-content;

   .title-container {
      padding: 8px;
      text-align: center;
      width: 100%;
   }
   .icons-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, 25px);

      justify-content: center;
      grid-gap: 2px;
      .alt-wrap {
         display: inline-block;
      }
   }

   .alt-wrap {
      position: relative;
      .alt {
         z-index: 10;
         font-size: 14px;
         position: absolute;
         display: none;
         //opacity: 0; /* hide initially */
         top: 40px;
         right: 50%;
         transform: translateX(50%);
         width: max-content;
         padding: 6px 14px;
         border-radius: 8px;
         background-color: $color-blue-2;
         transition: all 300ms ease;
         &:after {
            position: absolute;
            content: "";
            top: -13px;
            right: 50%;
            transform: translateX(50%);
            width: 0;
            height: 0;
            border-bottom: solid 13px $color-blue-2;
            border-left: solid 13px transparent;
            border-right: solid 13px transparent;
         }
      }

      &:hover > .alt {
         display: inline;
         transition-delay: 0s;
      }
   }
}
</style>

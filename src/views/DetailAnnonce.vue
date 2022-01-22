<template>
   <Navbar />
   <div class="bg-image px-16 lg:px-32 xl:px-48 py-20 mb-16">
      <a class="flex cursor-pointer">
         <img
            class="inline mr-6"
            src="../assets/DetailannonceAssets/Vector.svg"
            alt=""
         />
         <p class="text-white">Retour à la liste</p>
      </a>

      <div class="md:flex mt-20">
         <div class="mb-10">
            <span>
               <img
                  class="h-52 w-52"
                  src="../assets/annonce-img-1.svg"
                  alt=""
               />
            </span>
         </div>

         <div class="md:ml-12 mb-10">
            <div>
               <h2 class="text-white">DEFIM Diagnostics Immobiliers</h2>
               <div class="flex mb-3">
                  <img
                     class="mr-2"
                     src="../assets/ListesannoncesAssets/star1.svg"
                     alt=""
                  />
                  <img
                     class="mr-2"
                     src="../assets/ListesannoncesAssets/star1.svg"
                     alt=""
                  />
                  <img
                     class="mr-2"
                     src="../assets/ListesannoncesAssets/star1.svg"
                     alt=""
                  />
                  <img
                     class="mr-2"
                     src="../assets/ListesannoncesAssets/star1.svg"
                     alt=""
                  />
                  <img
                     class="mr-2"
                     src="../assets/ListesannoncesAssets/star2.svg"
                     alt=""
                  />
               </div>
               <p class="mb-3">107 rue de Courcelles | 34567</p>
               <div class="flex">
                  <a class="cursor-pointer flex" href=""
                     ><img
                        class="mr-3"
                        src="../assets/ListesannoncesAssets/global1.svg"
                        alt=""
                     />
                     site web</a
                  >
               </div>
            </div>
         </div>
      </div>
   </div>
   <!--------------------------- Content ------------------------------->
   <div class="px-16 lg:px-32 xl:px-48 py-20 lg:grid lg:grid-cols-12 gap-24">
      <div class="lg:col-span-7">
         <!------------------- Scroll Nav ----------------------->
         <div id="elem" class="relative px-2">
            <nav id="prestations-nav" class="prestationsNav nav mb-32 p-0">
               <ul id="prestations-nav-content" class="prestationsNavContent">
                  <a
                     class="scroll-item selectedItem"
                     href="#informationsGenerales"
                  >
                     Informations générales
                  </a>
                  <a class="scroll-item" href="#nosPrestations">
                     Nos prestations
                  </a>
                  <a class="scroll-item" href="#notreExpertise">
                     Notre expertise
                  </a>
                  <a class="scroll-item" href="#lesAvis"> Les avis </a>
               </ul>
            </nav>
            <button
               id="left-button"
               class="arrow-btn arrow-btn-left"
               type="button"
            >
               <img
                  class="h-20"
                  src="../assets/DetailannonceAssets/arrow-button.svg"
                  alt=""
               />
            </button>
            <button
               id="right-button"
               class="arrow-btn arrow-btn-right"
               type="button"
            >
               <img
                  class="h-20"
                  src="../assets/DetailannonceAssets/arrow-button.svg"
                  alt=""
               />
            </button>
         </div>
         <div id="informationsGenerales" class="mb-16">
            <h3>QUI SOMMES-NOUS ?</h3>
            <p>
               Bonjour, dans le cadre de la mise en vente ou location de votre
               bien immobilier, nous vous proposons nos services pour la
               réalisation de vos Diagnostics Techniques Immobiliers
               réglementaires. Nous disposons d'une certification QUALIXPERT
               dans les domaines suivant : Aquimodiag est votre expert en
               diagnostic immobilier en Aquitaine. Pour particuliers ou
               professionnels, nous vous assurons un diagnostic fiable et
               compétent (devis gratuit). N'hésitez pas à nous contacter pour
               des informations complémentaires, nous restons à votre
               disposition.
            </p>
         </div>
         <div id="nosPrestations" class="mb-16 xl:max-w-7xl">
            <h3>Nos prestations</h3>
            <div class="prestations">
               <div v-for="i in 7" :key="i" class="prestation">
                  <div class="flex">
                     <span class="mt-1 mr-2">
                        <img
                           src="../assets/DetailannonceAssets/alert-circle2.svg"
                           alt=""
                        />
                     </span>
                     <h4 class="mb-2 color-blue">Amiante</h4>
                  </div>

                  <p class="pb-2 text-gray-400">
                     Certifié pour réaliser un diagnostic
                     <span class="text-gray-500">Amiante</span>
                  </p>
               </div>
            </div>
         </div>
         <div id="lesAvis" class="mb-16 xl:max-w-7xl">
            <div
               class="flex justify-between items-center mb-6 max-w-4xl xl:max-w-7xl"
            >
               <div class="md:flex items-center">
                  <h3 class="mb-2 mr-4">Les Avis</h3>

                  <div class="flex items-center">
                     <p class="mr-2">(20 avis)</p>
                     <div class="flex">
                        <img
                           class="mr-2 h-5"
                           src="../assets/ListesannoncesAssets/star1.svg"
                           alt=""
                        />
                        <img
                           class="mr-2 h-5"
                           src="../assets/ListesannoncesAssets/star1.svg"
                           alt=""
                        />
                        <img
                           class="mr-2 h-5"
                           src="../assets/ListesannoncesAssets/star1.svg"
                           alt=""
                        />
                        <img
                           class="mr-2 h-5"
                           src="../assets/ListesannoncesAssets/star1.svg"
                           alt=""
                        />
                        <img
                           class="mr-2 h-5"
                           src="../assets/ListesannoncesAssets/star2.svg"
                           alt=""
                        />
                     </div>
                     <span class="text-lg mr-2">4,3</span>
                  </div>
               </div>
               <button id="openModal" class="avis-btn">Ajouter un avis</button>
            </div>
            <div class="relative grid grid-cols-1 xl:grid-cols-2 gap-6">
               <div class="avis-card rounded-2xl max-w-2xl">
                  <div class="flex border-b-2 p-6">
                     <div class="mr-8">
                        <img
                           class="w-20 h-20 shadow-sm rounded-full object-cover"
                           src="../assets/DetailannonceAssets/homme-1.jpg"
                           alt=""
                        />
                     </div>
                     <div class="flex flex-col justify-center">
                        <p class="text-lg">
                           Fondateur et co-gérant de l'agence
                        </p>
                        <p class="color-blue">Location 2 pièces</p>
                     </div>
                  </div>
                  <div class="p-6">
                     <i class="text-lg">
                        “ Le contact avec M. Bismuth a été excellent et
                        chaleureux de bout en bout, malgré les difficultés liées
                        à la période Covid ... “
                     </i>
                  </div>
               </div>
               <div class="avis-card rounded-2xl max-w-2xl">
                  <div class="flex border-b-2 p-6">
                     <div class="mr-8">
                        <img
                           class="w-20 h-20 shadow-sm rounded-full object-cover"
                           src="../assets/DetailannonceAssets/homme-1.jpg"
                           alt=""
                        />
                     </div>
                     <div class="flex flex-col justify-center">
                        <p class="text-lg">
                           Fondateur et co-gérant de l'agence
                        </p>
                        <p class="color-blue">Location 2 pièces</p>
                     </div>
                  </div>
                  <div class="p-6">
                     <i class="text-lg">
                        “ Le contact avec M. Bismuth a été excellent et
                        chaleureux de bout en bout, malgré les difficultés liées
                        à la période Covid ... “
                     </i>
                  </div>
               </div>

               <div
                  class="absolute -right-12 xl:-right-14 top-1/2 translate-y-center flex-col hidden xl:flex"
               >
                  <img
                     class="m-1 h-5"
                     src="../assets/DetailannonceAssets/cercle-gray.svg"
                     alt=""
                  />
                  <img
                     class="m-1 h-7"
                     src="../assets/DetailannonceAssets/cercle.svg"
                     alt=""
                  />
                  <img
                     class="m-1 h-5"
                     src="../assets/DetailannonceAssets/cercle-gray.svg"
                     alt=""
                  />
               </div>
            </div>
         </div>
         <div
            class="mb-16 max-w-4xl xl:max-w-7xl flex justify-center xl:hidden"
         >
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
               <button class="page-btn page">3</button>
               <button class="page-btn page">4</button>
               <button class="page-btn flex justify-center items-center">
                  <img
                     src="../assets/ListesannoncesAssets/next-icon.svg"
                     alt=""
                  />
               </button>
            </div>
         </div>
      </div>
      <div class="lg:col-span-5">
         <div class="hidden sm:block mb-16 max-w-4xl">
            <h3 class="mb-4">Contacter ce professionnel</h3>
            <div class="border-gray p-8 flex flex-col items-center">
               <button class="btn-orange-primary w-auto my-3">
                  Contactez ce professionel par émail
               </button>
               <button class="btn-orange-secondary w-auto my-3">
                  Contacter ce professionel par téléphone
               </button>
            </div>
         </div>
         <div class="mb-16 max-w-4xl">
            <h3 class="mb-4">Suivi ce professionnel sur :</h3>
            <div
               class="grid gap-6 sm:grid-cols-2 border-gray p-8 justify-items-center"
            >
               <button class="social-btn">
                  <img
                     class="mr-4"
                     src="../assets/DetailannonceAssets/facebook.svg"
                     alt=""
                  />
                  Facebook
               </button>
               <button class="social-btn">
                  <img
                     class="mr-4"
                     src="../assets/DetailannonceAssets/twitter.svg"
                     alt=""
                  />
                  Twitter
               </button>
               <button class="social-btn">
                  <img
                     class="mr-4"
                     src="../assets/DetailannonceAssets/instagram.svg"
                     alt=""
                  />
                  Instagram
               </button>
               <button class="social-btn">
                  <img
                     class="mr-4"
                     src="../assets/DetailannonceAssets/youtube.svg"
                     alt=""
                  />
                  Youtube
               </button>
            </div>
         </div>
         <div id="notreExpertise" class="mb-16 max-w-4xl">
            <h3 class="mb-4">
               L'équipe de <span class="color-blue">aquimodiag</span>
            </h3>
            <div class="equipe-list border-gray">
               <div
                  v-for="i in 5"
                  :key="i"
                  class="equipe-item p-10 flex border-b-2"
               >
                  <div class="mr-8 w-28 h-28 image-container">
                     <img
                        class="w-full h-full shadow-sm rounded-full object-cover"
                        src="../assets/DetailannonceAssets/homme-1.jpg"
                        alt=""
                     />
                  </div>
                  <div class="flex flex-col justify-center">
                     <p class="color-blue">
                        Fondateur et co-gérant de l'agence
                     </p>
                     <h5>Philippe GAUDRY</h5>
                  </div>
               </div>
               <div class="p-10 underline color-blue">
                  <a class="line" href="">Voir toute l'équipe</a>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div
      class="flex btn-blue-container sm:hidden sticky bottom-0 w-full bg-white justify-center py-8"
   >
      <button class="btn-blue w-auto m-3">Contacter</button>
      <button class="btn-blue w-auto m-3">N° de téléphone</button>
   </div>

   <!------------------------- Avis Modal ----------------------->
   <div id="modal-container">
      <div class="modal-background">
         <div class="modal px-10 lg:px-16 pt-16 pb-6">
            <button id="closeModalBtn">
               <img
                  src="../assets/DetailannonceAssets/ant-design_plus-outlined.svg"
                  alt=""
               />
            </button>
            <div class="text-center">
               <h4>Donnez votre avis</h4>
            </div>
            <div class="form">
               <div>
                  <p class="mb-2">Quelle note donnez-vous ?</p>
                  <div class="flex mb-8">
                     <img class="mr-2" src="../assets/startEmpty.svg" alt="" />
                     <img class="mr-2" src="../assets/startEmpty.svg" alt="" />
                     <img class="mr-2" src="../assets/startEmpty.svg" alt="" />
                     <img class="mr-2" src="../assets/startEmpty.svg" alt="" />
                     <img class="mr-2" src="../assets/startEmpty.svg" alt="" />
                  </div>
               </div>
               <div class="form-group">
                  <label class="text-xl" for="pseudo">pseudo</label>
                  <input class="form-control h-12" type="text" name="pseudo" />
               </div>
               <div class="form-group">
                  <label class="text-xl" for="titre">Titre de votre avis</label>
                  <input class="form-control h-12" type="text" name="titre" />
               </div>
               <div class="form-group">
                  <label class="text-xl" for="experience"
                     >Décrivez votre expérience (50 caractères minimum)
                  </label>
                  <textarea
                     class="form-control"
                     type="text"
                     name="experience"
                     rows="3"
                  />
               </div>
               <div class="flex items-start">
                  <input class="mr-2" type="checkbox" />
                  <p>
                     J'ai lu et j'accepte les conditions générales d'utilisation
                     du site internet smartzone (voir les CGU)
                  </p>
               </div>
               <div class="flex justify-end">
                  <button>Envoyer l'avis</button>
               </div>
            </div>

            <p></p>
         </div>
      </div>
   </div>

   <footer>
      <div class="lg:flex justify-center">
         <div class="flex justify-center">
            <ul class="footer-list">
               <img
                  class="h-14 pb-4"
                  src="../assets/DetailannonceAssets/LogoFooter.svg"
                  alt=""
               />
               <li>À propos de nous</li>
               <li>Partenaires</li>
               <li>Nous contacter</li>
               <li>Nous recrutons</li>
            </ul>
            <ul class="footer-list">
               <h5 class="pb-4">L’entreprise</h5>
               <li>Besoin d'aide ?</li>
               <li>Newsroom</li>
               <li>politique de cookies</li>
               <li>Politique de Confidentialité</li>
            </ul>
         </div>
         <div class="flex justify-center">
            <ul class="footer-list">
               <h5 class="pb-4">Support</h5>
               <li>Documentation</li>
               <li>Sécurtié</li>
               <li>FAQ’s</li>
            </ul>
            <ul class="footer-list">
               <h5 class="pb-4">Legal</h5>
               <li>Conditions d'utilisation</li>
               <li>GDPR engagement</li>
            </ul>
         </div>
      </div>
      <div class="text-center">
         <h4>Smartzone</h4>
         <span class="text-lg"
            >Copyright © 2020 smartzone Ltd. All rights reserved.</span
         >
      </div>
   </footer>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import $ from "jquery";

export default {
   name: "DetailAnnonce",
   components: {
      Navbar: Navbar,
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

      const scrollNavButtons = document.querySelectorAll(".scroll-item");
      scrollNavButtons.forEach((btn) => {
         btn.addEventListener("click", function (e) {
            scrollNavButtons.forEach((b) => {
               b.classList.remove("selectedItem");
            });
            e.target.classList.add("selectedItem");
         });
      });

      $(function () {
         /*
         var setInvisible = function (elem) {
            elem.css("visibility", "hidden");
         };

         */
         var setVisible = function (elem) {
            elem.css("visibility", "visible");
         };
         var outer = $("#prestations-nav");

         function hideArrowButtons() {
            $("#right-button").addClass("hidden");
            $("#left-button").addClass("hidden");
         }

         function showArrowButtons() {
            $("#right-button").removeClass("hidden");
            $("#left-button").removeClass("hidden");
         }

         function checkArrowButtonsVisibility() {
            var widthNavContainer = $("#elem").width();
            var widthNav = $("#prestations-nav-content").width();
            if (widthNavContainer >= widthNav) {
               hideArrowButtons();
            } else {
               showArrowButtons();
            }
         }
         checkArrowButtonsVisibility();
         window.onresize = function () {
            checkArrowButtonsVisibility();
         };

         var updateUI = function () {
            var maxWidth = outer.outerWidth(true);
            var actualWidth = 0;
            $.each($("#prestations-nav-content >"), function (i, item) {
               actualWidth += $(item).outerWidth(true);
            });

            if (actualWidth <= maxWidth) {
               setVisible($("#left-button"));
            }
         };
         updateUI();

         $("#right-button").click(function () {
            setVisible($("#right-button"));
            var leftPos = outer.scrollLeft();
            outer.animate(
               {
                  scrollLeft: leftPos + 200,
               },
               0
            );
         });

         $("#left-button").click(function () {
            var leftPos = outer.scrollLeft();
            outer.animate(
               {
                  scrollLeft: leftPos - 200,
               },
               0
               /*
               function () {
                  if ($("#prestations-nav-content").scrollLeft() <= 0) {
                     setInvisible($("#right-button"));
                  }
               }
               */
            );
         });

         $(window).resize(function () {
            updateUI();
         });

         /********************* Scrolling  ******************************/

         $("a").on("click", function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
               // Prevent default anchor click behavior
               event.preventDefault();

               // Store hash
               var hash = this.hash;

               // Using jQuery's animate() method to add smooth page scroll
               // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
               $("html, body").animate(
                  {
                     scrollTop: $(hash).offset().top,
                  },
                  500,
                  function () {
                     // Add hash (#) to URL when done scrolling (default click behavior)
                     window.location.hash = hash;
                  }
               );
            } // End if
         });

         /********************* Avis Modal  ******************************/

         $("#openModal").click(function () {
            $("#modal-container").removeAttr("class").addClass("two");
            $("body").addClass("modal-active");
         });

         $("#closeModalBtn").click(function () {
            console.log("aze");
            $("#modal-container").addClass("out");
            $("body").removeClass("modal-active");
         });
         /*
         $("#modal-container").click(function (e) {
            if ($(e.target).parents(".modal").length === 0) {
               $("#modal-container").addClass("out");
               $("body").removeClass("modal-active");
            }
         });
         */
      });
   },
   methods: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract/_variables.scss";

@font-face {
   font-family: Poppins;
   src: url("../assets/Fonts/Poppins-Medium.otf");
}

@font-face {
   font-family: Poppins-Light;
   src: url("../assets/Fonts/Poppins-Light.otf");
}

@font-face {
   font-family: Gilroy;
   src: url("../assets/Fonts/Gilroy-Medium.ttf");
}

* {
   scroll-behavior: smooth;
   font-family: Gilroy;
}

h3 {
   color: black;
}

.prestations {
}

.bg-image {
   background: rgba(0, 0, 0, 0.788);
   background-image: linear-gradient(145deg, #000000a6, #0000005e),
      url("../assets/BG-annonce.jpg");
   background-repeat: repeat;
   background-size: contain;
   min-height: 400px;
   height: auto;
   color: #fff;
}

.prestationsNav {
   .prestationsNavContent {
      float: left;
   }
}

.nav {
   font-family: Gilroy;
   /* Make this scrollable when needed */
   overflow-x: auto;
   /* We don't want vertical scrolling */
   overflow-y: hidden;
   /* Make an auto-hiding scroller for the 3 people using a IE */
   -ms-overflow-style: -ms-autohiding-scrollbar;
   /* For WebKit implementations, provide inertia scrolling */
   -webkit-overflow-scrolling: touch;
   /* We don't want internal inline elements to wrap */
   white-space: nowrap;
   /* Remove the default scrollbar for WebKit implementations */
   &::-webkit-scrollbar {
      display: none;
   }
   ul {
      display: flex;
      border: 1px solid #999;
      border-radius: 5px;

      a {
         border-right: 1px solid #999;
         padding: 15px 30px 10px 30px;
         margin: 0;
         cursor: pointer;
         &:last-child {
            border-right: none;
         }
      }

      .selectedItem {
         color: $color-blue-1;
         border-bottom: 3px solid $color-blue-1;
      }
   }
}

.prestation {
   border-left: 5px solid $color-orange-1;
   padding-left: 15px;
   margin: 30px 0;
   p {
      border-bottom: 1px solid rgba(153, 153, 153, 0.664);
   }
}

.border-gray {
   border: 1px solid $color-grey-6;
   border-radius: 8px;
}

.btn-orange-primary {
   padding: 10px 40px;
   background-color: $color-orange-2;
   border: none;
   border-radius: 5px;
   color: #fff;
}

.btn-orange-secondary {
   padding: 10px 40px;
   background-color: $color-orange-3;
   border: none;
   border-radius: 5px;
   color: $color-orange-2;
}

.social-btn {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 8px 15px;
   background-color: $color-grey-7;
   width: 180px;
   max-width: 100%;
}

.arrow-btn {
   /* Reset the button */
   appearance: none;
   background: transparent;
   padding: 0;
   border: 0;
   &:focus {
      outline: 0;
   }
   /* Now style it as needed */
   position: absolute;
   top: 0;
   bottom: 0;
}

.arrow-btn-left {
   left: -35px;
   img {
      transform: rotate(180deg);
   }
}

.arrow-btn-right {
   right: -35px;
}

.btn-blue {
   padding: 12px 30px;
   border-radius: 35px;
   background-color: $color-blue-1;
   color: #fff;
   width: max-content;
}

.avis-btn {
   padding: 7px 20px;
   border-radius: 6px;
   background-color: $color-blue-1;
   color: white;
}

.avis-card {
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

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

.translate-y-center {
   transform: translateY(-50%);
}

footer {
   padding: 50px 10px;
   .footer-list {
      width: 200px;
      margin: 20px 20px;
      li {
         font-size: 11.5px;
         padding-bottom: 6px;
      }
   }

   h5,
   h4 {
      color: #222222;
   }
   color: #73738d;
}

.image-container {
   min-width: 70px;
   min-height: 70px;
}

#modal-container {
   position: fixed;
   display: table;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   transform: scale(0);
   z-index: 1;

   &.two {
      transform: scale(1);
      .modal-background {
         background: rgba(0, 0, 0, 0);
         animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
         .modal {
            opacity: 0;
            animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
         }
      }
      + .content {
         animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
      &.out {
         animation: quickScaleDown 0s 0.5s linear forwards;
         .modal-background {
            animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            .modal {
               animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
                  forwards;
            }
         }
         + .content {
            animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
               forwards;
         }
      }
   }

   .modal-background {
      background: rgba(90, 108, 129, 0.8);
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      .modal {
         font-family: Poppins-Light;

         background: white;
         display: inline-block;
         border-radius: 3px;
         font-weight: 300;
         position: relative;
         height: max-content;
         width: 60vw;
         min-width: 300px;
         max-width: 700px;
         #closeModalBtn {
            background-color: $color-blue-1;
            padding: 8px;
            border-radius: 5px;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(30%, -30%);
            img {
               transform: rotate(45deg);
               height: 30px;
            }
         }

         .form-group {
            padding: 5px 10px;
            background-color: #f1f1f1;
            margin-bottom: 15px;
            border-radius: 5px;
            .form-control {
               width: 100%;
               color: #244988;
               background: transparent;
            }
         }
         input[type="checkbox"] {
            appearance: none;
            background-color: #fff;
            font: inherit;
            color: $color-blue-1;
            width: 22px;
            height: 20px;
            border: 3px solid $color-blue-1;
            border-radius: 3px;
            display: grid;
            place-content: center;
         }
         input[type="checkbox"]::before {
            content: "";
            width: 10px;
            height: 10px;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em $color-blue-1;
         }
         input[type="checkbox"]:checked::before {
            transform: scale(1);
         }
         h4 {
            color: #244988;
         }
         color: #8c92a4;
      }
   }
}

@keyframes fadeIn {
   0% {
      background: rgba(0, 0, 0, 0);
   }
   100% {
      background: rgba(0, 0, 0, 0.7);
   }
}

@keyframes fadeOut {
   0% {
      background: rgba(0, 0, 0, 0.7);
   }
   100% {
      background: rgba(0, 0, 0, 0);
   }
}

@keyframes scaleUp {
   0% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
   }
   100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
   }
}

@keyframes scaleDown {
   0% {
      transform: scale(1) translateY(0px);
      opacity: 1;
   }
   100% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
   }
}

@keyframes scaleBack {
   0% {
      transform: scale(1);
   }
   100% {
      transform: scale(0.85);
   }
}

@keyframes scaleForward {
   0% {
      transform: scale(0.85);
   }
   100% {
      transform: scale(1);
   }
}

@keyframes quickScaleDown {
   0% {
      transform: scale(1);
   }
   99.9% {
      transform: scale(1);
   }
   100% {
      transform: scale(0);
   }
}
</style>

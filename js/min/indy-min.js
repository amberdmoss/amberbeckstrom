angular.module("website",["ngAnimate","ngTouch"]).controller("MainCtrl",function(e){e.slides=[{image:"img/impact1.jpg",image2:"img/impact2.jpg",image3:"img/impact3.jpg",description:"Class project that included a logo and brand for a company. After revisions of sketches and wireframes the final design was created.",title:"Impact",date:"2013",tools:"Logo, Branding, Web Design"},{image:"img/toppers2.jpg",image2:"img/toppers1.jpg",description:"Brand created as an icecream company. The name and logo were first designed and then the stationary was later created. The icecream cones would be wrapped in a paper wrapping with the logo on it.",title:"Toppers",date:"2014",tools:"Logo, Branding"},{image:"img/james1.jpg",image2:"img/james2.jpg",description:"These images were done for a portrait photography class. This shoot was to portray a business look. It was shot with a three light set up.",title:"James",date:"2012",tools:"Photography"},{image:"img/trendy1.jpg",image2:"img/trendy2.jpg",image3:"img/trendy3.jpg",description:"A winter magazine spread that gives tips and advise for dressing in the winter. This spread was a demonstration of layout.",title:"Trendy Press",date:"2014",tools:"Design, Photography"},{image:"img/chefssource1.jpg",image2:"img/chefssource2.png",image3:"img/chefssource3.png",image4:"img/chefssource4.png",image5:"img/chefssource5.png",image6:"img/chefssource6.png",description:"Created in a UX - UI Class. We were asked to make a recipe app. I created Chefs Source as an easy way to find food according to category. Then be able to search through large beautiful imagery. Along with a well organized description and instructions.",title:"Chefs Source",date:"2013",tools:"Logo, Branding, UX - UI Design"},{image:"img/craters1.jpg",image2:"img/craters2.jpg",image3:"img/craters3.jpg",description:"Created a company that included name, logo and branding. Crater came from the idea of a cookie and milk bar. Where your dessert would come out in crates.",title:"Crater",date:"2014",tools:"Logo, Branding"},{image:"img/surelock1.jpg",image2:"img/surelock2.jpg",image3:"img/surelock3.jpg",image4:"img/surelock4.jpg",image5:"img/surelock5.jpg",description:"Class assignment to create a home security app. The design included being able to control temperature, door locks and security cameras.",title:"Surelock Homes",date:"2013",tools:"Logo, Branding, UX-UI Design"},{image:"img/indy1.jpg",image2:"img/indy2.jpg",image3:"img/indy3.jpg",description:"Portrait photography class assignment where we were to have an action shot and show shutter drag. Two light set up.",title:"Indy",date:"2012",tools:"Photography"},{image:"img/janell1.jpg",image2:"img/janell2.png",description:"Assignment in a portriat photography class we were to work with a makeup artist and hairstylist. These shot were taken with the beauty dish.",title:"Janell",date:"2012",tools:"Photography"},{image:"img/fish1.jpg",description:"Product photography assignment to show shooting with glass. Rizzo the little fish was a great model.",title:"Rizzo",date:"2013",tools:"Photography"},{image:"img/tate2.jpg",image2:"img/tate1.jpg",image3:"img/tate4.jpg",image4:"img/tate3.jpg",image5:"img/tate5.jpg",description:"Graduation photoshoot. It was a great experience shooting with tate. Taking pictures of him riding his long board was a lot of fun.",title:"Tate",date:"2014",tools:"Photography"},{image:"img/chicken1.jpg",image2:"img/chicken2.jpg",description:"Product shoot for class. I was asked to do a food shoot. The look that i had wanted was for the background to be very clean and white but the chicken to still be messy and gross.",title:"Chicken",date:"2013",tools:"Photography"},{image:"img/grant3.jpg",image2:"img/grant2.jpg",image3:"img/grant1.jpg",description:"Final photoshoot that combined product and portriat photography. In class we were required to make an advertisement by having a model and either a cologne or perfume bottle.",title:"Cologne Advertisement",date:"2013",tools:"Photography"},{image:"img/lexi1.jpg",image2:"img/lexi2.jpg",description:"Portriat photography class. For this assignment we were to work with a model that we found on our own and were to do a shoot with them.",title:"Lexi",date:"2012",tools:"Photography"},{image:"img/ziel1.jpg",image2:"img/ziel2.jpg",image3:"img/ziel3.jpg",image4:"img/ziel4.jpg",image5:"img/ziel5.jpg",image6:"img/ziel6.jpg",description:"Class project where we worked in groups to create any app we wanted. We chose to make a goal tracking app where you could challenge your friends to see who could complete the goal first.",title:"Ziel",date:"2014",tools:"Branding, UX-UI Design"}],e.direction="left",e.currentIndex=7,e.setCurrentSlideIndex=function(t){e.direction=t>e.currentIndex?"left":"right",e.currentIndex=t},e.isCurrentSlideIndex=function(t){return e.currentIndex===t},e.prevSlide=function(){e.direction="left",e.currentIndex=e.currentIndex<e.slides.length-1?++e.currentIndex:0},e.nextSlide=function(){e.direction="right",e.currentIndex=e.currentIndex>0?--e.currentIndex:e.slides.length-1}}).animation(".slide-animation",function(){return{beforeAddClass:function(e,t,i){var a=e.scope();if("ng-hide"===t){var o=e.parent().width();"right"!==a.direction&&(o=-o),TweenMax.to(e,0,{left:o,onComplete:i})}else i()},removeClass:function(e,t,i){var a=e.scope();if("ng-hide"===t){e.removeClass("ng-hide");var o=e.parent().width();"right"===a.direction&&(o=-o),TweenMax.fromTo(e,0,{left:o},{left:0,onComplete:i})}else i()}}});
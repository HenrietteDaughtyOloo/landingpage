let navbar = document.getElementById("navigation");

let shouldStickPosition = navbar.offset;

function addOrRemoveSticyClass(){
   if (window.pageYOffset>= shouldStickPosition){
        navbar.classList.add("sticky")
    }   else{
         navbar.classList.remove("sticky");

   }
    }
//     window.onscroll = () =>{
//         addOrRemoveSticyClass();
//    };
     window.onresize = () =>{
         shouldStickPosition=navbar.offsetTop;
     };

//      const section = document.querySelector('.all');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       section.classList.add('visible');
//     } else {
//       section.classList.remove('visible');
//     }
//   });
// });
// observer.observe(section);

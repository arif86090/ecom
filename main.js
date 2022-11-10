
document.querySelector('.arif').addEventListener('click',
	function(){
		document.querySelector('.all-categorys').classList.toggle('activet');

}) 

		// var arif=document.querySelector('.allCategorys');
// document.querySelector('.arif').addEventListener('click',function(){
// 	arif.classList.toggle('activee')
// })

// ********categores




// navbar

var menuitems =document.getElementById("menuitems");
	menuitems.style.maxHeight ="0px";

	function menutoggle() {
		if (menuitems.style.maxHeight =="0px") {
			menuitems.style.maxHeight ="400px";
		}
		else{
			menuitems.style.maxHeight ="0px";
		}
	}

// navbar active	

	$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>200) {
	$('.navbar').addClass('active');
		}else {
			$('.navbar').removeClass('active');
		}
	})
	})


	 $('.as').owlCarousel({
                  loop:true,
                  margin:10,
                  nav:true,
                  responsive:{
           0:{
            items:1
                },
           600:{
            items:1
                  },
           1000:{
            items:1
                 }
             }
              })






// color	
// document.querySelector('.color-icon').addEventListener('click',
// 	function(){
// 		document.querySelector('.color-all-btn').classList.toggle('color-out');


// })  



document.querySelector('.color-btn-1').addEventListener('click',
	function(){
		document.body.classList.add('firstColor');
		document.body.classList.remove('secondColor');
		document.body.classList.remove('thirdColor');
		


	})

document.querySelector('.color-btn-2').addEventListener('click',
	function(){
		document.body.classList.add('secondColor');
		document.body.classList.remove('firstColor');
		document.body.classList.remove('thirdColor');

	})
document.querySelector('.color-btn-3').addEventListener('click',
	function(){
		document.body.classList.add('thirdColor');
		document.body.classList.remove('secondColor');
		document.body.classList.remove('firstColor');

		

	})







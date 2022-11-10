
const pBtn=document.querySelector('.flash-btn1');
const pSidebar=document.querySelector('.product-sidebar');
const pSideclose=document.querySelector('.closs-slider');
const categores=document.querySelector('.all');


pBtn.addEventListener('click',(e)=>{
	e.preventDefault();
pSidebar.classList.toggle('active');
categores.classList.toggle('activeg');

})

 pSideclose.addEventListener('click',()=>{
 	pSidebar.classList.remove('active');
 	categores.classList.remove('activeg');
 })
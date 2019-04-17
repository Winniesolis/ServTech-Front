// $(function(){
//     $(window).scroll(function(){
//         var winTop = $(window).scrollTop();
//         if(winTop >= 30){
//             $("body").addClass("sticky-header display-none");
//         }else{
//             $("body").removeClass("sticky-header display-none");
//         }
//     })
// });



function abrirlogin(){
	document.getElementById("sec-log").classList.remove("disp--none");
}
function log(){
	document.getElementById("cont-contac2").classList.add("disp--none");
}
function registro(){
	document.getElementById("cont-contac2").classList.remove("disp--none");
}
$(document).ready(function(){

//nav toggle 
		$('.toggle').click(function(){
			$('.display').toggleClass('active');
			$('.toggle').toggleClass('active');
			$('.overlay').toggleClass('active');
			$('body').toggleClass('active');
		});

		$('nav ul li a').on("click", function(){
					$('.display').removeClass('active');
					$('.toggle').removeClass('active');
					$('.overlay').removeClass('active');
					$('body').toggleClass('active');
			});
		 
    	

});





const dropDownSkills = () =>{
	const dropTitles= document.querySelectorAll('.drop-title');
	const drops= document.querySelectorAll('.drop');
	const ups= document.querySelectorAll('.up');

	dropTitles.forEach(function(dropTitle,dropTitleIndex){
		drops.forEach(function(drop,dropIndex){
			dropTitle.addEventListener('click',()=>{
				if(dropTitleIndex == dropIndex){
					drop.classList.toggle('down');
					ups.forEach(function(up,upIndex){
						if(dropTitleIndex == upIndex){
							up.classList.toggle('arrowdown');
						}
					});
				}
			});
		});
	});
}


dropDownSkills();
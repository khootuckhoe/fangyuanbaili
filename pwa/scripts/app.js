(function() {

	//onload functions
	startTime();


	var app ={
		
	};

	var butMenu = document.getElementById('butMenu');
	var butMenuT = butMenu.getAttribute("class");
	var butLogin = document.getElementById('butLogin');
	var butLogout = document.getElementById('butLogout');

	butMenu.addEventListener('click', function() {
		if (!butMenuT.includes("active")) {
	    	document.getElementById("mySidenav").style.width = "50%";
	    	butMenu.setAttribute("class", "headerButton menu active");
	    	butMenuT = butMenu.getAttribute("class");
   		}
   		else{
   			document.getElementById("mySidenav").style.width = "0px";
   			butMenu.setAttribute("class", "headerButton menu");
   			butMenuT = butMenu.getAttribute("class");
   		}
  	});

  	butLogin.addEventListener('click', function() {
  		butLogout.setAttribute("style", "display:block");
  		butLogin.setAttribute("style", "display:none");
  		window.location.replace("/admin.html");
  	});
  	butLogout.addEventListener('click', function() {
  		window.location.replace("/pwa.html");
  	});

  	//clock 
	function startTime(){
		//get time from local
	  	var date = new Date;
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();
		var day = date.getDate();
		var month = ["January", "February", "March", "April", "May", 
		"June", "July", "August", "September", "October", "November", "December"];
		var year = date.getFullYear();

		minutes = checkTime(minutes);
		seconds = checkTime(seconds);
		document.getElementById('time').innerHTML =
		day + " " + month[date.getMonth()] + " " + year + 
		"<br/>" + hours + ":" + minutes + ":" + seconds;
		var t = setTimeout(startTime, 500);
	}

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i
		};  // add zero in front of numbers < 10
		return i;
	}


	if('serviceWorker' in navigator) {
	    navigator.serviceWorker.register('sw.js');
	 };
	
})();
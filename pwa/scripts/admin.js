(function() {

	//start of admin side of javascript
	var butTest = document.getElementById('butTest');

	butTest.addEventListener('click', function(){
		console.log("hello");
		document.getElementById('editTime').innerHTML =
		"12 March 2019";
	});


})();
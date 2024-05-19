window.onload = () => {
    let button = document.querySelector("#btn");
    
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
    };
    
    function calculateBMI() {
    
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
    
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#result");
    
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
    
    // If both input is valid, calculate the bmi
    else {
    
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
    
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
    
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
    
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
    }

	/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }




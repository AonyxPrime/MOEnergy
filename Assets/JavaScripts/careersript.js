/* 
   Javascript for Input MO Energy
   Filename: script.js

   Author:   Sam L.
   Date:     5/8/21

 */


/*Careers */

const submitbuttoncareer = document.querySelector("input.submitcareer");
const resetbutton = document.querySelector("input.reset");

submitbuttoncareer.addEventListener('click', popupcareer, false);
resetbutton.addEventListener('click', resetinput, false);


function popupcareer(){
    var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
	var address = document.getElementById('address').value;
	var City = document.getElementById('city').value;
	var State = document.getElementById('state').value;
	var zipcode = document.getElementById('zip').value;
	var phonenum = document.getElementById('phone').value;
	var emailadd = document.getElementById('email').value;
	var pros = document.getElementById('pronouns').value;
	var hear = document.getElementById('ctype').options[ctype.selectedIndex].text;
	var interests = document.getElementById('interest').value;
	var news = document.getElementById('call').checked;

    const pop = window.open('', 'formpopup', 'width=400,height=300,resizeable,scrollbars');
	pop.focus();
    pop.document.body.innerHTML = "Firstname: " + firstName + '<br />'+ "Lastname: " + lastName + '<br />' + "Address: " + address + '<br />' + "City: " + City + '<br />' + "State: " + State + '<br />' + "Zipcode: " + zipcode + '<br />' + "Phonenumber: " + phonenum + '<br />' + "Email: " + emailadd + '<br />' + "Preferred Pronouns: " + pros + '<br />' + "How did you hear about us?: " + hear + '<br />' + "Positions interested: " + interests + '<br />' + "Newsletter: " + news;
}

function resetinput(){
	document.getElementById('intestForm').reset();
}
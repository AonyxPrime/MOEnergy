/* 
   Javascript for Input MO Energy
   Filename: script.js

   Author:   Sam L.
   Date:     5/8/21

 */

/*Contact Us*/

const submitbut = document.querySelector("input.submit");
const resetbutton = document.querySelector("input.reset");

submitbut.addEventListener('click', popup, false);
resetbutton.addEventListener('click', resetinput, false);


function popup(){
    var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
	var account = document.getElementById('accountNum').value;
	var phonenum = document.getElementById('phone').value;
	var emailadd = document.getElementById('email').value;
	var Reason = document.getElementById('reason').options[reason.selectedIndex].text;
	var Comments = document.getElementById('comments').value;
	var Preference = document.getElementById('prefer').options[prefer.selectedIndex].text;

    const pop = window.open('', 'formpopup', 'width=400,height=250,resizeable,scrollbars');
    pop.document.body.innerHTML = "Firstname: " + firstName + '<br />'+ "Lastname: " + lastName + '<br />' + "Account Number: " + account + '<br />' + "Phone Number: " + phonenum + '<br />' + "Email: " + emailadd + '<br />' + "Reason for contact: " + Reason + '<br />' + "Comments: " + Comments + '<br />' + "Contact Preference: " + Preference;
	pop.focus();
}

function resetinput(){
	document.getElementById('helpForm').reset();
}


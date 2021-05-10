/* 
   Javascript for Input MO Energy
   Filename: script.js

   Author:   Sam L.
   Date:     5/8/21

 */

/*Contact Us*/

const submitbut = document.querySelector("input.submit");

submitbut.addEventListener('click', popup, false)


function popup(){
	var emailadd = document.getElementById('email').value;

    const pop = window.open('', 'formpopup', 'width=400,height=250,resizeable,scrollbars');
    pop.document.body.innerHTML = "Email: " + emailadd;
	pop.focus();
}


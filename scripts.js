//1. Capture vistor input
	
var visitor = prompt("What is your name?");
	
//2. Combine strings so this prints to page. Hello [  ]. Welcome to Treehouse.We are so glad that you came by to visit, [   ]. Please come again, when you want to learn some more.

var message = "Hello " + visitor + ".  Welcome to Treehouse.";
		message += " We are so glad that you came by to visit, ";
		message += visitor;
		message += ". Please come again, when you want to learn some more."

//3. write it to the page

document.write(message);
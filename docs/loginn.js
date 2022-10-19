function validate(){
	var username=document.getElementById("username").value;
	var Password=document.getElementById("Password").value;
	if(username=="sitialfira"&& Password=="lia")
	{
		window.open("db.html");
		return false;
	}
	else
	{
		alert("Error");
	}
}
	

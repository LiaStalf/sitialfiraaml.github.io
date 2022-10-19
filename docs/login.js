function validate(){
	var username=document.getElementById("username").value;
	var Password=document.getElementById("Password").value;
	if(username=="admin"&& Password=="user")
	{
		alert("login succesfully");
		return false;
	}
	else
	{
		alert("Error");
	}
}
	

  function checkForm(form)
  {
	  var f = 0;
    if(form.uname.value == "") {
      alert("Error: Username cannot be blank!");
      form.uname.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.uname.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.uname.focus();
      return false;
    }

    if(form.psw.value != "") {
      if(form.psw.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.psw.focus();
        return false;
      }
      if(form.psw.value == form.uname.value) {
        alert("Error: Password must be different from Username!");
        form.psw.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.psw.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.psw.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.psw.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.psw.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.psw.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.psw.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.psw.focus();
      return false;
    }
	f = 1;
    alert("You entered a valid password: " + form.psw.value);
	if ( f == 1)
	{
		loadDoc();
	}
    return true;
  }
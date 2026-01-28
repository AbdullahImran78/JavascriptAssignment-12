function showData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  document.getElementById("output").innerHTML ="Name: " + name + "<br>" + "Email: " + email + "<br>" + "Password: " + password;
}

function showMessage() {
   alert("Welcome to 696 Dept 🔥");
}

function submitForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;

   if (name === "" || email === "") {
       alert("Please fill in all fields.");
   } else {
       alert("Thank you, " + name + "! We will contact you soon.");
   }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("telephone").value;
    let date = document.getElementById("date").value;
  
    if (name == "" || phone == "" || date == "" ) {
      alert("Будь ласка, заповніть всі обов'язкові поля.");
      return false;
    }
  
    return true;
  }


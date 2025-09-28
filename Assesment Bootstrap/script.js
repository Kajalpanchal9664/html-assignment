document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Input values
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();
  let date = document.getElementById("date").value.trim();
  let concern = document.getElementById("concern").value.trim();

  // Error elements
  let errors = {
    nameError: "",
    phoneError: "",
    emailError: "",
    ageError: "",
    dateError: "",
    concernError: ""
  };

  // Validation
  let valid = true;

  if (name === "") {
    errors.nameError = "Full Name is required";
    valid = false;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    errors.phoneError = "Phone must be exactly 10 digits";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = "Invalid email format";
    valid = false;
  }

  if (age < 1 || age > 120 || age === "") {
    errors.ageError = "Age must be between 1 and 120";
    valid = false;
  }

  if (date === "") {
    errors.dateError = "Please select a date";
    valid = false;
  }

  if (concern === "") {
    errors.concernError = "Health concern is required";
    valid = false;
  }

  // Show errors
  for (let key in errors) {
    document.getElementById(key).textContent = errors[key];
  }

  if (valid) {
    // Create booking object
    let booking = { name, phone, email, age, date, concern };

    // Get existing bookings
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    bookings.push(booking);

    // Save back to localStorage
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show success
    document.getElementById("successMessage").textContent = "Booking saved successfully!";

    // Reset form
    document.getElementById("bookingForm").reset();
  }
});

// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });





 




  // Email.send({
  //   SecureToken: "447788d3-83f2-4551-8c0f-72e3b99e5f99",
  //   To: 'maazfaridi22@gmail.com',
  //   From:emailInput.value,
  //   Subject: "enquiry",
  //   Body:"Message From: " + nameInput.value + "<br>" + "Phone Number: " + phoneInput.value + "<br>" + "Message is : " + "<br>" + messageInput.value
  // }).then(message => swal("Form Submitted Successfully!", "Thank you , we will get in touch as soon as possible", "success")
  // );

 

// const formContact = document.getElementById("contactForm");
// const nameInput = document.getElementById("nameInput");
// const emailInput = document.getElementById("emailInput");
// const phoneInput = document.getElementById("phoneInput");
// const subjectInput = document.getElementById("subjectInput");
// const messageInput = document.getElementById("messageInput");
// const statusText = document.getElementById("statusText");


// formContact.onsubmit = (e) => {
//     let errMessages = [];
//     let nameInputFlag = 1;
//     let emailInputFlag = 1;
//     let phoneInputFlag = 1;
//     let subjectInputFlag = 1;
//     let messageInputFlag = 1;

//     if (nameInput.value === '' || nameInput == null){
//         nameInputFlag = 0;
//         errMessages.push("Name is required");
//         nameInput.style.borderColor = "red";
//     }

//     if (nameInput.value.length > 15){
//         nameInputFlag = 0;
//         errMessages.push("Name must be 15 characters or less");
//         nameInput.style.borderColor = "red"; 
//     }

//     if (nameInputFlag == 1){
//         nameInput.style.borderColor = "#333333";
//     }

//     if (emailInput.value === '' || emailInput.value == null){
//         emailInputFlag = 0;
//         errMessages.push("Email is required");
//         emailInput.style.borderColor = "red";
//     }

//     if (emailInputFlag == 1){
//         emailInput.style.borderColor = "#333333";
//     }

//     if (phoneInput.value === '' || phoneInput == null){
//         phoneInputFlag = 0;
//         errMessages.push("Phone is required");
//         phoneInput.style.borderColor = "red";
//     }

//     if (phoneInput.value.length != 11){
//         phoneInputFlag = 0;
//         errMessages.push("Phone number must be 11 digits");
//         phoneInput.style.borderColor = "red";
//     }

//     if (phoneInput.value.substr(0 , 3) == "010" || phoneInput.value.substr(0 , 3) == "011" || phoneInput.value.substr(0 , 3) == "012" || phoneInput.value.substr(0 , 3) == "015"){
//         phoneInputFlag = 1;
//         phoneInput.style.borderColor = "#333333";
//     }

//     else {
//         phoneInputFlag = 0;
//     }

//     if (phoneInputFlag == 0){
//         phoneInput.style.borderColor = "red";
//         errMessages.push("Phone number must start with 010, 011 , 012 , 015")
//     }
    
//     if (subjectInput.value === '' || subjectInput == null){
//         subjectInputFlag = 0;
//         errMessages.push("Subject is required");
//         subjectInput.style.borderColor = "red";
//     }

//     if (subjectInput.value.length > 30){
//         subjectInputFlag = 0;
//         errMessages.push("Subject Field can't be more than 30 characters long");
//         subjectInput.style.borderColor = "red";
//     }

//     if (subjectInputFlag == 1){
//         subjectInput.style.borderColor = "#333333";
//     }

//     if (messageInput.value === '' || messageInput == null){
//         messageInputFlag = 0;
//         errMessages.push("Message is required");
//         messageInput.style.borderColor = "red";
//     }

//     if (messageInputFlag == 1){
//         messageInput.style.borderColor = "#333333";
//     }

//     if (errMessages.length > 0 ){
//         e.preventDefault();
//         statusText.innerText = errMessages.join(", ");
//         statusText.style.display = "inline";
//     }

//     else if (errMessages.length == 0){
//         Email.send({
//             Host: "smtp.elasticemail.com",
//             Username: "lawsinfo22@gmail.com",
//             Password: "93EAC29944163FDCE4745D1C7D30195B0803",
//             To: "maazfaridi22@gmail.com",
//             From: emailInput.value,
//             Subject: "enquiry",
//             Body: "Message From: " + nameInput.value + "<br>" + "Phone Number: " + phoneInput.value + "<br>" + "Message is : " + "<br>" + messageInput.value
//         }).then(
//             msg => swal("Form Submitted Successfully!", "Thank you , we will get in touch as soon as possible", "success")
//           );
//         //console.log(nameInput.value + "" + emailInput.value + "" + messageInput.value + "" + phoneInput.value);
//         statusText.innerText = "Success";
//         statusText.style.color = "green";
//         statusText.style.display = "inline";
//     }
    
//     return false;

// };









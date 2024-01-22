updateEntryCount();

document.getElementById("myForm").addEventListener("submit", function(event){
    
    event.preventDefault();

    let user,email,mobile,gender,contact,range,form;

    user = document.getElementById("name");
    email = document.getElementById("email");
    mobile = document.getElementById("mobile");
    gender = document.getElementsByName("gender");
    contact = document.getElementsByName("check");
    range= document.getElementById("age");
    form=document.getElementById("myForm");


    let userEr,emailEr,mobileEr,genderEr,contactEr,rangeEr;

    userEr = document.getElementById("namee");
    emailEr = document.getElementById("emaill");
    mobileEr = document.getElementById("mobilee");
    genderEr = document.getElementById("genderr");
    contactEr = document.getElementById("preff");
    rangeEr = document.getElementById("rangee");
    
    if (user.value.trim() === "") {
    userEr.textContent = "Name cannot be empty";
    user.focus();
    return;
    } else if (/^\d+$/.test(user.value)) {
    userEr.textContent = "Name cannot contain numbers";
    user.focus();
    return;
    } else {
    userEr.textContent = "";
    }

    
    if (email.value.trim() === "") {
    emailEr.textContent = "Email cannot be empty";
    email.focus();
    return;
    } else if (!emailSyntax(email.value)) {
    emailEr.textContent = "Invalid email format";
    email.focus();
    return;
    } else {
    emailEr.textContent = "";
    }

    
    if (!/^\d{10}$/.test(mobile.value)) {
    mobileEr.textContent = "Invalid mobile number";
    mobile.focus();
    return;
    } else {
    mobileEr.textContent = "";
    }

    
    var selectedGender = Array.from(gender).find(input => input.checked);
    if (!selectedGender) {
    genderEr.textContent = "Please select a gender";
    gender.focus();
    return;
    } else {
    genderEr.textContent = "";
    }


    var selectedContact = Array.from(contact).filter(input => input.checked);
    if (selectedContact.length === 0) {
    contactEr.textContent = "Please select at least one option";
    contact.focus();
    return;
    } else {
    contactEr.textContent = "";
    }

    
    if (isNaN(range.value) || range.value < 0 || range.value > 2) {
    seniorityLevelError.textContent = "Please select a valid seniority level";
    range.focus();
    return;
    } else {
    rangeEr.textContent = "";
    }

// ll

    let record = new Array();
    record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(record.some((v)=>{return v.mobile==mobile})){
        alert("duplicate data");
    }else{
        record.push({
            "name":user.value,
            "email":email.value,
            "mobile":mobile.value,
            "gender":selectedGender.value,
            "contact":selectedContact.map(input => input.value),
            "range":range.value
        })
        localStorage.setItem("users",JSON.stringify(record));
    }
    
    form.reset();
    updateEntryCount();
});

function emailSyntax(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
    

function updateEntryCount() {
    var existingEntries = JSON.parse(localStorage.getItem("users")) || [];

    document.getElementById("count").textContent = "Entry Count: " + existingEntries.length;
    console.log("helo");
}

// Entries

let entry = document.getElementById("user-data-btn");

function click(){
    window.location.href = "entries.html";
}

entry.addEventListener('click', click);
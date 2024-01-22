document.addEventListener("DOMContentLoaded", function() {
    
    var existingEntries = JSON.parse(localStorage.getItem("users")) || [];
  
    displayEntries(existingEntries);
  });
  
function displayEntries(entries) {
    var entriesList = document.getElementById("entriesList");
  
    entries.forEach(function(entry, index) {
        var listItem = document.createElement("li");
    
        var entryDetails = document.createElement("div");
        entryDetails.innerHTML = `
            <label>Name :</label> ${entry.name}<br>
            <label>Email :</label> ${entry.email}<br>
            <label>Mobile :</label> ${entry.mobile}<br>
            <label>Gender :</label> ${entry.gender}<br>
            <label>Contact Preference :</label> ${entry.contact.join(", ")}<br>
            <label>Seniority Level :</label> ${getSeniorityLevelLabel(entry.range)}
        `;
    
        listItem.appendChild(entryDetails);
    
        entriesList.appendChild(listItem);
    });
}
  
function getSeniorityLevelLabel(level) {
    switch (level) {
    case "0":
        return "Fresher";
    case "1":
        return "Junior";
    case "2":
        return "Senior";
    default:
        return "Unknown";
    }
}
  
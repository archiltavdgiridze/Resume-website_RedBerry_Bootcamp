//make walidateform function to check if name value is empty or not
function validateForm() {
    var x = document.forms["#name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
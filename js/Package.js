function updateCircleColor() {
    // Get the selected option
    var selectedOption = document.getElementById("pet-select").value;

    // Get the status circle element
    var statusCircle = document.getElementById("status-circle");

    // Remove previous status classes
    statusCircle.classList.remove("working-on", "verified", "approved");

    // Add the appropriate class based on the selected option
    if (selectedOption === "Working") {
        statusCircle.classList.add("working-on");
    } else if (selectedOption === "Verified") {
        statusCircle.classList.add("verified");
    } else if (selectedOption === "Approved") {
        statusCircle.classList.add("approved");
    }
}

function updateCircleCol() {
    // Get the selected option
    var selectedOption = document.getElementById("pete-select").value;

    // Get the status circle element
    var statusCircle = document.getElementById("status-cir");

    // Remove previous status classes
    statusCircle.classList.remove("published", "unpublished");

    // Add the appropriate class based on the selected option
    if (selectedOption === "dog") {
        statusCircle.classList.add("published");
    } else if (selectedOption === "cat") {
        statusCircle.classList.add("unpublished");
    }
}
import img from "../../assets/voyHENRY_logo.png";

export default function customAlert(message) {
  // Create a new div element to hold the alert message
  var alertDiv = document.createElement("div");

  // Set the CSS styles for the alert message
  alertDiv.style.backgroundColor = "white";
  alertDiv.style.border = "1px solid #000";
  alertDiv.style.color = "#000";
  alertDiv.style.padding = "1rem";
  alertDiv.style.width = "20rem";
  alertDiv.style.height = "20rem";
  alertDiv.style.position = "fixed";
  alertDiv.style.fontSize = "1.2rem";
  alertDiv.style.display = "flex";
  alertDiv.style.alignItems = "center";
  alertDiv.style.justifyContent = "center";
  alertDiv.style.flexDirection= "column";
  alertDiv.style.top = "50%";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translate(-50%, -50%)";
  alertDiv.style.borderRadius = "0.25rem";
  alertDiv.style.boxShadow = "3px 3px 5px 2px #b1b1b1";

  // Create a new image element and set its source to the provided imagePath
  var image = document.createElement("img");
  image.src = img;
  image.style.maxWidth = "100%";

  // Create a new text node with the message and add it to the alert div
  var alertText = document.createTextNode(message);
  alertDiv.appendChild(image);
  alertDiv.appendChild(alertText);

  // Add the alert div to the document body
  document.body.appendChild(alertDiv);

  // Remove the alert div after 3 seconds
  setTimeout(function () {
    document.body.removeChild(alertDiv);
  }, 3000);
}
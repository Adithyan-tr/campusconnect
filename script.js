function showDetails(eventName) {

    alert(
        eventName +
        "\n\nEvent details will be displayed here!"
    );

}


function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        "✓ Registration successful, " + name + "!";

    event.target.reset();

}
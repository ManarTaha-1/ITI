function addUser(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();

    const nameError = document.querySelector(".n");
    const ageError = document.querySelector(".a");
    const emailError = document.querySelector(".e");

    nameError.textContent = "";
    ageError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    if (isFinite(name) || name === "") {
        nameError.textContent = "Please enter a valid name";
        valid = false;
    }
    if (isNaN(age) || age === "" || age <= 0) {
        ageError.textContent = "Please enter your age";
        valid = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email";
        valid = false;
    }

    if (valid) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
        `;
        document.querySelector("#userTable").appendChild(row);

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
    }
}

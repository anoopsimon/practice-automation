$(document).ready(function () {
    M.AutoInit(); // Initialize Materialize CSS components

    // Sample array of fields (you can replace this with your own data)
    const fieldsArray = [
        { id: "first-name", type: "text", label: "First Name", required: true },
        { id: "last-name", type: "text", label: "Last Name", required: true },
        { id: "age", type: "text", label: "Age", required: true },
        { id: "email", type: "email", label: "Email", required: true },
        { id: "phone", type: "tel", label: "Phone Number", required: true },
        { id: "address", type: "text", label: "Address", required: true },
        { id: "employer", type: "text", label: "Employer", required: true }
    ];

    // Function to render fields dynamically
    function renderFields(fields) {
        const dynamicFields = document.getElementById("dynamic-fields");

        fields.forEach((field) => {
            const div = document.createElement("div");
            div.classList.add("input-field");

            const input = document.createElement("input");
            input.type = field.type;
            input.id = field.id;
            input.required = field.required;

            const label = document.createElement("label");
            label.htmlFor = field.id;
            label.textContent = field.label;

            div.appendChild(input);
            div.appendChild(label);

            dynamicFields.appendChild(div);
        });
    }

    // Call the function to render fields from the array
    renderFields(fieldsArray);
});
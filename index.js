function validar(e) {
    e.preventDefault()

    let first_name = document.getElementById("first_name").value
    let exp_first_name = /^([A-Za-zÁÉÍÓÚáéíóú ]){0,100}$/
    const dom_first_name = document.getElementById("first_name")
    if (exp_first_name.test(first_name) && first_name !== "") {
        dom_first_name.setAttribute("class", "form-control is-valid")
    } else {
        dom_first_name.setAttribute("class", "form-control is-invalid")
    }

    let last_name = document.getElementById("last_name").value
    let exp_last_name = /^([A-Za-zÁÉÍÓÚáéíóú ]){0,100}$/
    const dom_last_name = document.getElementById("last_name")
    if (exp_last_name.test(last_name) && last_name !== "") {
        dom_last_name.setAttribute("class", "form-control is-valid")
    } else {
        dom_last_name.setAttribute("class", "form-control is-invalid")
    }

    let email_address = document.getElementById("email_address").value
    let exp_email_address = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const dom_email_address = document.getElementById("email_address")
    if (exp_email_address.test(email_address)) {
        dom_email_address.setAttribute("class", "form-control is-valid")
    } else {
        dom_email_address.setAttribute("class", "form-control is-invalid")
    }

    let phone = document.getElementById("phone").value
    let exp_phone = /^9\d{0,8}$/; // /^[9][0-9]{8}$/
    const dom_phone = document.getElementById("phone")
    if (exp_phone.test(phone)) {
        dom_phone.setAttribute("class", "form-control is-valid")
    } else {
        dom_phone.setAttribute("class", "form-control is-invalid")
    }

    let message = document.getElementById("message").value
    const dom_message = document.getElementById("message")
    if (message !== "") {
        dom_message.setAttribute("class", "form-control is-valid")
    } else {
        dom_message.setAttribute("class", "form-control is-invalid")
    }
}
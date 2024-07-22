function clearErrorMessages() {
    document.querySelectorAll('span[id$="_error"]').forEach(span => span.innerHTML = '');
}

const isValidate = () => {
    const first_name = document.querySelector("#firstname").value.trim();
    const last_name = document.querySelector("#lastname").value.trim();
    const email = document.querySelector('#email').value.trim();
    const number = document.querySelector('#number').value.trim();
    const address = document.querySelector('#address').value.trim();
    const legal_status = document.querySelector('#legalstatus').value;
    const donot_amount = document.querySelector("#donotamount").value.trim();
    const used_toward = document.querySelector('#usedToward').value.trim();
    const currency = document.querySelector('#currency').value.trim();
    const located_at = document.querySelector('#locatedAt').value.trim();
    const preacher = document.querySelector('#preacher').value;
    const came_to_know = document.querySelector("#cametoknow").value;

    const first_name_error = document.querySelector("#firstname_error");
    const last_name_error = document.querySelector("#lastname_error");
    const email_error = document.querySelector('#email_error');
    const number_error = document.querySelector('#number_error');
    const address_error = document.querySelector('#address_error');
    const legal_status_error = document.querySelector('#legalstatus_error');
    const donot_amount_error = document.querySelector("#donotamount_error");
    const used_toward_error = document.querySelector('#usedToward_error');
    const currency_error = document.querySelector('#currency_error');
    const located_at_error = document.querySelector('#locatedAt_error');
    const preacher_error = document.querySelector('#preacher_error');
    const came_to_know_error = document.querySelector("#cametoknow_error");
    // file input type start here
    const ext = [".jpg", ".jpeg", ".png"]
    const maxSize = 2 * 1024 * 1024;

    const donorSignatureElement = document.getElementById("donor_signature");
    const donor_signature_error = document.getElementById("donor_signature_error");
    const donorSignature = donorSignatureElement.value;
    const donorSignatureFile = donorSignatureElement.files[0];
    const file_ext = donorSignature ? donorSignature.substring(donorSignature.lastIndexOf('.'), donorSignature.length) : '';
    const signature_size = donorSignatureFile ? donorSignatureFile.size : 0;

    const passportCopyElement = document.getElementById("Passport_Copy");
    const Passport_Copy_error = document.getElementById("Passport_Copy_error");
    const passportCopy = passportCopyElement.value;
    const passportCopyFile = passportCopyElement.files[0];
    const file2_ext = passportCopy ? passportCopy.substring(passportCopy.lastIndexOf('.'), passportCopy.length) : '';
    const Passport_size = passportCopyFile ? passportCopyFile.size : 0;
    //file input type end here

    clearErrorMessages();

    if (first_name === "") {
        first_name_error.innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((first_name.length <= 2) || (first_name.length > 20)) {
        first_name_error.innerHTML = " ** Username length must be between 2 and 20";
        return false;
    }
    if (!first_name.match(/^[A-Za-z]+$/)) {
        first_name_error.innerHTML = '** Only characters are allowed, no special characters';
        return false;
    }

    if (last_name === "") {
        last_name_error.innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((last_name.length <= 2) || (last_name.length > 20)) {
        last_name_error.innerHTML = " ** Username length must be between 2 and 20";
        return false;
    }
    if (!last_name.match(/^[A-Za-z]+$/)) {
        last_name_error.innerHTML = '** Only characters are allowed, no special characters';
        return false;
    }

    if (email === "") {
        email_error.innerHTML = "** Please enter a valid email address";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email_error.innerHTML = '** Invalid email address';
        return false;
    }

    if (number === "") {
        number_error.innerHTML = "Please enter your mobile number";
        return false;
    }
    if (!number.match(/^[6-9]\d{9}$/)) {
        number_error.innerHTML = "Please enter a valid 10 digit mobile number";
        return false;
    }

    if (address === "") {
        address_error.innerHTML = "Please enter your address";
        return false;
    }
    if ((address.length <= 5) || (address.length > 1000)) {
        address_error.innerHTML = "Please enter a valid address";
        return false;
    }

    if (legal_status === "") {
        legal_status_error.innerHTML = "Please choose any one";
        return false;
    }

    if (donot_amount === "") {
        donot_amount_error.innerHTML = "Please enter your amount";
        return false;
    }
    if (isNaN(donot_amount)) {
        donot_amount_error.innerHTML = "Please enter digits only";
        return false;
    }
    if (donot_amount < 100) {
        donot_amount_error.innerHTML = "Please donate at least 100 Rs";
        return false;
    }

    if (used_toward === "") {
        used_toward_error.innerHTML = 'Please enter your contribution purpose';
        return false;
    }
    if (!used_toward.match(/^[A-Za-z\s]+$/)) {
        used_toward_error.innerHTML = 'Please enter characters only, no special characters';
        return false;
    }

    if (currency === "") {
        currency_error.innerHTML = 'Please enter your currency name';
        return false;
    }
    if (!currency.match(/^[A-Za-z\s]+$/)) {
        currency_error.innerHTML = 'Please enter characters only, no special characters';
        return false;
    }

    if (located_at === "") {
        located_at_error.innerHTML = 'Please enter your location';
        return false;
    }
    if (!located_at.match(/^[A-Za-z\s]+$/)) {
        located_at_error.innerHTML = 'Please enter characters only, no special characters';
        return false;
    }

    //donorSignature
    if (donorSignature === "") {
        donor_signature_error.innerHTML = 'please give your signature';
    }
    if (!ext.includes(file_ext)) {
        donor_signature_error.innerHTML = "Invalid image format";
    }
    if (signature_size > maxSize) {
        donor_signature_error.innerHTML = 'File size must be less than 2MB';
    }

    // Passport copy
    if (passportCopy === "") {
        Passport_Copy_error.innerHTML = 'please give your signature';
    }
    if (!ext.includes(file2_ext)) {
        Passport_Copy_error.innerHTML = "Invalid image format";
    }
    if (Passport_size > maxSize) {
        Passport_Copy_error.innerHTML = 'File size must be less than 2MB';
    }

    //preacher
    if (preacher === "") {
        preacher_error.innerHTML = 'Please select any one option';
        return false;
    }
    //came_to_know
    if (came_to_know === "") {
        came_to_know_error.innerHTML = 'Please select any one option';
        return false;
    }

    return true;
}

function handleSubmit(event) {
    event.preventDefault();
    if (isValidate()) {
        // Clear the input fields
        document.querySelector("#firstname").value = '';
        document.querySelector("#lastname").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#number").value = '';
        document.querySelector("#address").value = '';
        document.querySelector("#legalstatus").value = '';
        document.querySelector("#donotamount").value = '';
        document.querySelector("#usedToward").value = '';
        document.querySelector("#currency").value = '';
        document.querySelector("#locatedAt").value = '';
        document.getElementById("donor_signature").value='';
        document.getElementById("Passport_Copy").value='';
        document.querySelector("#preacher").value = '';
        document.querySelector("#cametoknow").value = '';
        return true;
    } else {
        return false;
    }
}

// Attach the handleSubmit function to the form submission event


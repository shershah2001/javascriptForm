function clearErrorMessages() {
    document.querySelectorAll('span[id$="_error"]').forEach(span => span.innerHTML = '')
}
const isValidate = () => {
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const date = document.getElementById("date").value;
    const initiatedname = document.getElementById('initiatedname').value.trim();
    const othersname = document.getElementById("othersname").value.trim();
    const email = document.getElementById('email').value.trim();
    const pannumb = document.getElementById("pannumb").value.trim();
    const companyname = document.getElementById("companyname").value.trim();
    const number = document.getElementById("number").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById("state").value;
    const pincode = document.getElementById('pincode').value.trim();
    const country = document.getElementById('country').value;
    const preacher = document.getElementById('preacher').value;
    const cometoknow = document.getElementById('cametoknow').value;
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const relation = document.getElementById('relation').value;

    // error start here
    const firstname_error = document.getElementById("firstname_error");
    const lastname_error = document.getElementById("lastname_error");
    const date_error = document.getElementById("date_error");
    const initiatedname_error = document.getElementById("initiatedname_error");
    const othersname_error = document.getElementById('othersname_error');
    const email_error = document.getElementById('email_error');
    const pannumb_error = document.getElementById('pannumb_error');
    const companyname_error = document.getElementById('companyname_error');
    const number_error = document.getElementById('number_error');
    const address_error = document.getElementById('address_error');
    const city_error = document.getElementById('city_error');
    const state_error = document.getElementById('state_error');
    const pincode_error = document.getElementById('pincode_error');
    const country_error = document.getElementById('country_error');
    const name_error = document.getElementById('name_error');
    const age_error = document.getElementById('age_error');
    const relation_error = document.getElementById('relation_error');
    const preacher_error = document.getElementById('preacher_error');
    const cametoknow_error = document.getElementById("cametoknow_error");
    // const replicateform_error = document.getElementById('replicateform_error');

    // error end here
    clearErrorMessages();
    //validation start here
    if (firstname === '') {
        firstname_error.innerHTML = '** Please fill the username field';
        return false;
    }
    if ((firstname.length < 2) || (firstname.length > 20)) {
        firstname_error.innerHTML = '** first name length must be between 2 and 20';
        return false;
    }
    if (!firstname.match(/^[A-Za-z]+$/)) {
        firstname_error.innerHTML = `** only characters are allowed, no special characters`;
        return false;
    }

    //  lastname start here
    if (lastname === "") {
        lastname_error.innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((lastname.length < 2) || (lastname.length > 20)) {
        lastname_error.innerHTML = " ** last name length must be between 2 and 20";
        return false;
    }
    if (!lastname.match(/^[A-Za-z]+$/)) {
        lastname_error.innerHTML = '** Only characters are allowed, no special characters';
        return false;
    }
    // lastname end here

    // date start here
    if (date === "") {
        date_error.innerHTML = '** please enter date';
        return false;
    }
    // date end here

    // initiatedname start here
    if (initiatedname === "") {
        initiatedname_error.innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((initiatedname.length <= 2) || (initiatedname.length > 20)) {
        initiatedname_error.innerHTML = "** last name length must be between 2 and 20";
        return false;
    }
    if (!initiatedname.match(/^[A-Za-z]+$/)) {
        initiatedname_error.innerHTML = '** Only characters are allowed, no special characters';
        return false;
    }
    // initiatedname end here

    // donate others name start here
    if (othersname === "") {
        othersname_error.innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((othersname.length < 2) || (othersname.length > 20)) {
        othersname_error.innerHTML = " ** last name length must be between 2 and 20";
        return false;
    }
    if (!othersname.match(/^[A-Za-z]+$/)) {
        othersname_error.innerHTML = '** Only characters are allowed, no special characters';
        return false;
    }
    // donate others name end here

    // email start here
    if (email === "") {
        email_error.innerHTML = "** Please enter a valid email address";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email_error.innerHTML = '** Invalid email address';
        return false;
    }
    // email end here

    // pannumb start here
    if (pannumb === "") {
        pannumb_error.innerHTML = `** Please enter your pan card number`
        return false;
    }
    if (!pannumb.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
        pannumb_error.innerHTML = `** Please Enter 5 Upper Characters, 4 number and One Upper Character`;
        return false
    }
    // pannumb end here

    // companyname start here
    if (companyname === '') {
        companyname_error.innerHTML = `** Please enter your company name`;
        return false;
    }
    if ((companyname.length < 2) || (companyname.length > 200)) {
        companyname_error.innerHTML = `** Please enter at least 2 char. and max char. is 200`;
        return false;
    }
    //companyname end here

    //  number start here
    if (number === "") {
        number_error.innerHTML = "Please enter your mobile number";
        return false;
    }
    if (!number.match(/^[6-9]\d{9}$/)) {
        number_error.innerHTML = "Please enter a valid 10 digit mobile number";
        return false;
    }
    // number end here

    //  address start here
    if (address === "") {
        address_error.innerHTML = "Please enter your address";
        return false;
    }
    if ((address.length < 5) || (address.length > 1000)) {
        address_error.innerHTML = "Please enter a valid address";
        return false;
    }
    // address end here

    // city start here
    if (city === '') {
        city_error.innerHTML = `Please enter your city name`;
        return false;
    }
    if ((city.length < 2) || (city.length > 200)) {
        city_error.innerHTML = `Please enter atleast 2 char. and atmost 200 char.`;
        return false;
    }
    if (!city.match(/^[A-Za-z]+$/)) {
        city_error.innerHTML = `Please enter character not digit`;
        return false;
    }
    // city end here

    // state start here
    if (state === '') {
        state_error.innerHTML = `Please enter your state name`;
        return false;
    }
    
    // state end here

    // pincode start here
    if (pincode === "") {
        pincode_error.innerHTML = ` Please enter your pin code`;
        return false;
    }
    if (!pincode.match(/^[1-9][0-9]{2}\s?[0-9]{3}$/)) {
        pincode_error.innerHTML = ` Please enter your 6 digit pin code`;
        return false;
    }
    // pincode end here

    // country start here
    if (country === '') {
        country_error.innerHTML = `Please choose atleast one option`;
        return false;
    }
  
    // country end here

  

    // replicate form validation start here
    // name start here
    if (name === '') {
        name_error.innerHTML = '** Please fill the name field';
        return false;
    }
    if ((name.length < 2) || (name.length > 20)) {
        name_error.innerHTML = '**  name length must be between 2 and 20';
        return false;
    }
    if (!name.match(/^[A-Za-z]+$/)) {
        name_error.innerHTML = `** only characters are allowed, no special characters`;
        return false;
    }
    // name end here

    //  age start here
    if (age === '') {
        age_error.innerHTML = '** Please enter your age';
        return false;
    }
    if ((age < 18) || (name > 100)) {
        age_error.innerHTML = '** your age must be 18 and less than 100 ';
        return false;
    }
    if (isNaN(age)) {
        age_error.innerHTML = ' Please enter digit not character';
        return false;
    }
    // age end here

    // relation start here
    if (relation === '') {
        relation_error.innerHTML = `please choose atleast one option`;
        return false;
    }
    // relation end here
    // replicate form validation end here

    // preacher start here
    if (preacher === '') {
        preacher_error.innerHTML = `Please choose atleast one option`;
        return false;
    }
    if (cometoknow === "") {
        cametoknow_error.innerHTML = `Please choose atleast one option`;
        return false;
    }
    // preacher end here 

    //validation end here
   
    return true;
}

const handleSubmit = () => {
    if (isValidate()) {
        document.getElementById("firstname").value = "";
        document.getElementById('lastname').value = "";
        document.getElementById("date").value;
        document.getElementById('initiatedname').value = "";
        document.getElementById("othersname").value = "";
        document.getElementById('email').value = "";
        document.getElementById("pannumb").value = "";
        document.getElementById("companyname").value = "";
        document.getElementById("number").value = "";
        document.getElementById("address").value = "";
        document.getElementById('city').value = "";
        document.getElementById("state").value;
        document.getElementById('pincode').value = "";
        document.getElementById('country').value;
        document.getElementById('preacher').value;
        document.getElementById('cametoknow').value;
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('relation').value = "";
        return true;
    }else{
        return false;
    }


}
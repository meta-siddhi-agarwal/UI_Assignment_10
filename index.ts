
class Employee {
    private nameRegex: any;
    private emailRegex: any;
    private passRegex: any;
    private contactRegex: any;

    constructor(nameRegex: any, emailRegex: any, passRegex: any, contactRegex: any) {
        this.nameRegex = nameRegex;
        this.emailRegex = emailRegex;
        this.passRegex = passRegex;
        this.contactRegex = contactRegex;
    }

    public  closeForm=()=> {
        let userContact = document.querySelector('#contact_no');
        let contactValue = (userContact as HTMLInputElement).value;
        if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
            let result: string = ' ';
            const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let charIndex = 0; charIndex < 5; charIndex++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            alert("Employee id is " + result);
            let userContactDiv = document.querySelector(".userContact");
            userContactDiv?.setAttribute("style", "display:none");

            let regSectionDiv = document.querySelector("#regSection");
            regSectionDiv?.setAttribute("style", "display:none");

            let addVechDiv = document.querySelector("#add_vehicle");
            addVechDiv?.setAttribute("style", "display:flex");
        }
    }

    public  setEvent=()=> {
        let textField = document.querySelector('#name');
        let userName = (textField as HTMLInputElement)?.value;
        textField?.setAttribute('pattern', this.nameRegex);
        textField?.addEventListener('keydown', (event: any) => {
            if (event?.code == 'Enter') {
                userName = (textField as HTMLInputElement)?.value;
                if (userName != null && userName != undefined && userName.length >= 2 && this.nameRegex.test(userName)) {
                    let nameDiv = document.querySelector(".nam");
                    nameDiv?.setAttribute("style", "display:none");

                    let genderDiv = document.querySelector(".genderDiv");
                    genderDiv?.setAttribute("style", "display:block");

                    let genderLabel = document.querySelector("#userGender");
                    if (genderLabel != null && genderLabel != undefined) {
                        genderLabel.innerHTML = `Hi ${userName},Can I know your gender`;
                    }
                }
                else {
                    let textField = document.querySelector('#name');
                    let userName = textField?.getAttribute('value');

                    if (userName != null && userName != undefined && userName.length < 2) {
                        textField?.setAttribute('title', "Length should be min. 2");
                        alert(textField?.getAttribute('title'));
                    }
                    else if (!this.nameRegex?.test(userName)) {
                        textField?.setAttribute('title', "Please enter valid name");
                    }
                    else if (this.nameRegex?.test(userName)) {
                        textField?.setAttribute('title', "Name is valid");
                    }
                    else {
                    }
                }
            }
        });
    }


    public  setEmailEvent=()=> {
        let userEmail: any = document.querySelector('#email');
        userEmail?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let email: any = (userEmail as HTMLInputElement)?.value;
                if (this.emailRegex.test(email)) {

                    let emailDiv = document.querySelector(".emailDiv");
                    emailDiv?.setAttribute("style", "display:none");


                    let passDiv = document.querySelector(".passDiv");
                    passDiv?.setAttribute("style", "display:block");

                    let passLabel = document.querySelector("#pass");

                    let textField = document.querySelector('#name');
                    let userName = (textField as HTMLInputElement)?.value;
                    if (passLabel != null && passLabel != undefined) {
                        passLabel.innerHTML = `Hi ${userName},Can I know your password`;
                    }

                    let eyeDiv = document.querySelector("#eyeButton");
                    eyeDiv?.setAttribute("style", "visibility:visible");

                }
                else {
                    userEmail.setAttribute('title', "Please enter valid email");
                }
            }
        });
    }

    public  setPassEvent=()=> {
        let userPassword = document.querySelector('#password');
        userPassword?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {

                let passwordValue = (userPassword as HTMLInputElement)?.value;
                /* for displaying orange border*/
                if ((this.passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
                    document.getElementById('password')?.setAttribute("style", "border = 2px solid orange");
                }
                /*for displaying strong password*/
                else if (this.passRegex.test(passwordValue) && passwordValue.length >= 12) {
                    document.getElementById('password')?.setAttribute("style", "border = 2px solid green");
                    let passDiv = document.querySelector(".passDiv");
                    passDiv?.setAttribute("style", "display:none");

                    let confirmPassDiv = document.querySelector(".confirmPassDiv");
                    confirmPassDiv?.setAttribute("style", "display:block");
                }
                /*for weak password*/
                else {
                    document.getElementById('password')?.setAttribute("style", "border = 2px solid red");
                    userPassword.setAttribute('title', "Please enter strong password");
                }
            }
        });
    }

    public  setConfirmPassEvent=()=> {
        let confirmedPassword = document.querySelector('#confirm_password');
        let password = document.querySelector('#password');
        confirmedPassword?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let confirmedPasswordValue = (confirmedPassword as HTMLInputElement).value;
                let passwordValue = (password as HTMLInputElement).value;
                if (passwordValue == confirmedPasswordValue) {
                    document.querySelector('.userContact')?.setAttribute("style", "display:block");
                    let confirmPassDiv = document.querySelector(".confirmPassDiv");
                    confirmPassDiv?.setAttribute("style", "display:none");

                    let textField = document.querySelector('#name');
                    let userName = (textField as HTMLInputElement)?.value;
                    let passLabel = document.querySelector("#contact_No");

                    if (passLabel != null && passLabel != undefined) {
                        passLabel.innerHTML = `Hi ${userName},Can I know your contact no.`;
                    }
                }
                else {
                    confirmedPassword.setAttribute('title', "Password does not matches");
                    alert("Password does not matches");
                }
            }
        });
    }

    public  setContactEvent=()=> {
        let userContact = document.querySelector('#contact_no');
        userContact?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let contactValue = (userContact as HTMLInputElement).value;

                if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
                    let result: string = ' ';
                    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    const charactersLength = characters.length;
                    for (let charIndex = 0; charIndex < 5; charIndex++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    alert("Employee id is " + result);
                    let userContactDiv = document.querySelector(".userContact");
                    userContactDiv?.setAttribute("style", "display:none");

                    let regSectionDiv = document.querySelector("#regSection");
                    regSectionDiv?.setAttribute("style", "display:none");

                    let addVechDiv = document.querySelector("#add_vehicle");
                    addVechDiv?.setAttribute("style", "display:flex");

                }
                else {
                    alert("Invalid contact no.");
                }
            }
        });
    }
    public  showSubmitButton=()=> {
        let contact = document.querySelector('#contact_no');
        let contactValue = (contact as HTMLInputElement).value;
        let submitEmpForm = document.querySelector("#submitEmpForm");
        if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
            submitEmpForm?.setAttribute("style", "cursor:pointer");
            submitEmpForm?.setAttribute("style", "opacity:1");
        }
        else {
            submitEmpForm?.setAttribute("style", "cursor:none");
            submitEmpForm?.setAttribute("style", "opacity:0.2");
        }
    }
}


class Vehicle {
    vehicleRegex: any;
    constructor(vehicleRegex: any) {
        this.vehicleRegex = vehicleRegex;
    }

  
        public  setCompNameEvent=()=> {
        let vehicleName = document.querySelector('#company');
        let vehicleValue;
        vehicleName?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                vehicleValue = (vehicleName as HTMLInputElement).value;
                if (this.vehicleRegex.test(vehicleValue)) {
                    let compNameDiv = document.querySelector(".compName");
                    compNameDiv?.setAttribute("style", "display:none");

                    let compModelDiv = document.querySelector(".modelName");
                    compModelDiv?.setAttribute("style", "display:block");
                }
                else {
                    alert(`Please enter valid vehicle name\nVehicle name must start with capital letter`);
                    if (!(this.vehicleRegex.test(vehicleValue))) {
                        vehicleName.setAttribute('title', "Please enter valid name");
                    }
                    else if (vehicleValue.length < 2) {
                        vehicleName.setAttribute('title', "Length should be min. 2");
                    }
                    else {
                        vehicleName.setAttribute('title', "Invalid name");
                    }
                }
            }
        });

    }

        public  setCompModelEvent=()=> {
        let vehicleModel = document.getElementById('model');
        vehicleModel?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let companyModelDiv = document.querySelector(".modelName");
                companyModelDiv?.setAttribute("style", "display:none");

                let vechTypeDiv = document.querySelector(".vechType");
                vechTypeDiv?.setAttribute("style", "display:block");

            }
        });
    }

    
        public setVechNoEvent=()=> {

        let vehicleNumberFiels = document.querySelector("#VehicleNo");
        vehicleNumberFiels?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let vechNoDiv = document.querySelector(".vechNo");
                vechNoDiv?.setAttribute("style", "display:none");
                let empIdDiv = document.querySelector(".employeeId");
                empIdDiv?.setAttribute("style", "display:block");
            }
        });
    }

        public empIdEvent=()=> {

        let empId = document.querySelector("#empId");
        empId?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let empIdDiv = document.querySelector(".employeeId");
                empIdDiv?.setAttribute("style", "display:none");
                let identityDiv = document.querySelector(".identity");
                identityDiv?.setAttribute("style", "display:block");
            }
        });
    }

        public setIdentityEvent=()=> {

        let identificationField = document.getElementById('identification');
        const cycle = {
            daily: "5",
            monthly: "100",
            yearly: "500"
        };
        const motorcycle = {
            daily: "10",
            monthly: "200",
            yearly: "1000"
        };
        const fourWheeler = {
            daily: "20",
            monthly: "500",
            yearly: "3500"
        };
        const vehicles = new Array(cycle, motorcycle, fourWheeler);

        identificationField?.addEventListener('keydown', (event: any) => {
            if (event.code == 'Enter') {
                let identificationVal = (identificationField as HTMLInputElement).value;
                /*if identification field is empty*/
                let vechCloseDiv = document.querySelector("#vehCloseButton");
                if (identificationVal.length == 0) {
                    vechCloseDiv?.setAttribute("style", "cursor:not-allowed");
                    vechCloseDiv?.setAttribute("style", "opacity:0.2");
                }
                /*else*/
                else {
                    vechCloseDiv?.setAttribute("style", "cursor:pointer");
                    vechCloseDiv?.setAttribute("style", "opacity:1");

                    let addVechDiv = document.querySelector("#add_vehicle");
                    addVechDiv?.setAttribute("style", "display:none");

                    let pricingDiv = document.querySelector("#pricing");
                    pricingDiv?.setAttribute("style", "display:block");

                    let priceLabel = document.querySelector("#priceOfSelectedType");
                    let vechType = document.getElementById('typeOfVeh');

                    let vechTypeVal = (vechType as HTMLInputElement)?.value;
                    if (priceLabel != null && priceLabel != undefined) {
                        priceLabel.innerHTML = vechTypeVal;
                    }
                    for (let index of vehicles) {
                        let dailyPrice = document.querySelector('#daily');
                        if (dailyPrice != null && dailyPrice != undefined) {
                            dailyPrice.innerHTML = `Rs. ${index.daily} Daily`;
                            dailyPrice.setAttribute("value", `${index.daily}`);
                        }
                        let monthlyPrice = document.querySelector('#monthly');
                        if (monthlyPrice != null && monthlyPrice != undefined) {
                            monthlyPrice.innerHTML = `Rs. ${index.monthly} Monthly`;
                            monthlyPrice.setAttribute("value", `${index.monthly}`);
                        }
                        let yearlyPrice = document.querySelector('#yearly');
                        if (yearlyPrice != null && yearlyPrice != undefined) {
                            yearlyPrice.innerHTML = `Rs. ${index.yearly} Yearly`;
                            yearlyPrice.setAttribute("value", `${index.yearly}`);
                        }
                        let pricePerMonth = document.querySelector('#pricePerMonth');
                        if (pricePerMonth != null && pricePerMonth != undefined) {
                            pricePerMonth.innerHTML = `Rs. ${index.monthly}`;
                        }
                    }
                }
            }
        });
    }
}
class Pass {
   public showPrice(vehicleType: string, vehicleInputField: string) {
        let pricing = document.getElementById(vehicleType);
        let price = (pricing as HTMLInputElement)?.value;
        let vechInputDiv = document.getElementById(vehicleInputField);
        vechInputDiv?.setAttribute("style", "display:block");
        if (vechInputDiv != null && vechInputDiv != undefined) {
            vechInputDiv.innerHTML = `Total price is Rs.${price}`;
        }
    }

   public conversion(planType: any, price: string, vehicleType: string) {
        let pricing = document.getElementById(planType);
        const result = document.getElementById(price);
        const from = document.getElementById(vehicleType);
        let toCurrency = (from as HTMLInputElement)?.value;
        let amt: any = (pricing as HTMLInputElement)?.value;
        fetch(`https://api.exchangerate-api.com/v4/latest/${"INR"}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let rate = data.rates[toCurrency];
                let total = rate * amt;
                if (result != null && result != undefined) {
                    result.innerHTML = `${amt} ${"INR"} = ${total} ${toCurrency}`;
                }
            });
    }
}


let vechObj = new Vehicle(/^[A-Z]{1}[A-Za-z\s]+/);

let empObj = new Employee(/^[A-Za-z]+[\s][A-Za-z]+$/, /^[A-Za-z0-9\-\_\+\.]+[@][a-zA-Z\-]+[.][a-z]{2,3}$/,
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\.\_])/,
    /^[6-9][0-9]{9}/);

empObj.setEvent();
empObj.setEmailEvent();
empObj.setPassEvent();
empObj.setConfirmPassEvent();
empObj.setContactEvent();


vechObj.setCompNameEvent();
vechObj.setCompModelEvent();
vechObj.setVechNoEvent();
vechObj.empIdEvent();
vechObj.setIdentityEvent();

function validateUserName() {
    let regex = /^[A-Za-z]+[\s][A-Za-z]+$/;
    let textField = document.querySelector('#name');
    let userName = (textField as HTMLInputElement)?.value;
    if (userName != null && userName != undefined && userName.length < 2 && userName.length < 2) {
        textField?.setAttribute('title', "Length  be min. 2");
    }
    else if (userName != null && userName != undefined && !regex.test(userName)) {
        textField?.setAttribute('title', "Please enter valid name");
    }
    else if (userName != null && userName != undefined && regex.test(userName)) {

        textField?.setAttribute('title', "Name is valid");
    }
    else {
    }
}
function showEmail() {
    let genderDiv = document.querySelector(".genderDiv");
    genderDiv?.setAttribute("style", "display:none");

    let emailDiv = document.querySelector(".emailDiv");
    emailDiv?.setAttribute("style", "display:block");

    let emailLabel = document.querySelector("#emailId");

    let textField = document.querySelector('#name');
    let userName = (textField as HTMLInputElement)?.value;

    if (emailLabel != null && emailLabel != undefined) {
        emailLabel.innerHTML = `Hi ${userName},Can I know your email`;
    }
}
function showVehicleNumber() {
    let vechTypeDiv = document.querySelector(".vechType");
    vechTypeDiv?.setAttribute("style", "display:none");
    let vechNoDiv = document.querySelector(".vechNo");
    vechNoDiv?.setAttribute("style", "display:block");
}
let passObj = new Pass();
function showPrice(vehicleType: string, vehicleInputField: string) {
    passObj.showPrice(vehicleType, vehicleInputField);
}
function showButton() {
    let identification = document.querySelector('#identification');
    let identityVal = (identification as HTMLInputElement).value;
    let vechCloseDiv = document.querySelector("#vehCloseButton");

    if (identityVal.length == 0) {
        vechCloseDiv?.setAttribute("style", "cursor:not-allowed");
        vechCloseDiv?.setAttribute("style", "opacity:0.2");
    }
    else {
        vechCloseDiv?.setAttribute("style", "cursor:pointer");
        vechCloseDiv?.setAttribute("style", "opacity:1");
    }
}
function conversion(planType: any, price: string, vehicleType: string) {
    passObj.conversion(planType, price, vehicleType);
}
function showSubmitButton() {
    empObj.showSubmitButton();

}
function closeForm() {
    empObj.closeForm();
}


function showPass() {
    let inputType = document.getElementById('password');
    let typeOfInput = inputType?.getAttribute('type');

    // let typeOfInput=(inputType as HTMLInputElement).type;
    if (typeOfInput == 'password')
        typeOfInput = 'text';
    else {
        typeOfInput = 'password';
    }
    let eyeType = document.getElementById('eyeButton');
    // userContactDiv?.setAttribute("style", "display:none");
    let eyeTyepe = eyeType?.getAttribute('src.value');


    if (eyeTyepe != null && eyeTyepe != undefined && eyeTyepe === 'images/eye-password-hide-svgrepo-com.svg') {
        // eyeType.attributes.src.value = 'images/eye-view-interface-symbol-svgrepo-com.svg';
        eyeType?.setAttribute("src", "images/eye-view-interface-symbol-svgrepo-com.svg");

    }
    else {
        eyeType?.setAttribute("src", "images/eye-password-hide-svgrepo-com.svg");
        // eyeType.src = "images/eye-password-hide-svgrepo-com.svg";
    }
}
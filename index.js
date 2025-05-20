"use strict";
//Employee class for taking emp. details
class Employee {
    constructor(nameRegex, emailRegex, passRegex, contactRegex) {
        /**
         * will close emp. form
         */
        this.closeForm = () => {
            let userContact = document.querySelector('#contact_no');
            let contactValue = userContact.value;
            if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
                let result = ' ';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for (let charIndex = 0; charIndex < 5; charIndex++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                alert("Employee id is " + result);
                let userContactDiv = document.querySelector(".userContact");
                userContactDiv === null || userContactDiv === void 0 ? void 0 : userContactDiv.setAttribute("style", "display:none");
                let regSectionDiv = document.querySelector("#regSection");
                regSectionDiv === null || regSectionDiv === void 0 ? void 0 : regSectionDiv.setAttribute("style", "display:none");
                let addVechDiv = document.querySelector("#add_vehicle");
                addVechDiv === null || addVechDiv === void 0 ? void 0 : addVechDiv.setAttribute("style", "display:flex");
            }
        };
        /**
         * validating user name and displaying gender block
         */
        this.setEvent = () => {
            let textField = document.querySelector('#name');
            let userName = textField === null || textField === void 0 ? void 0 : textField.value;
            textField === null || textField === void 0 ? void 0 : textField.setAttribute('pattern', this.nameRegex);
            textField === null || textField === void 0 ? void 0 : textField.addEventListener('keydown', (event) => {
                var _a, _b;
                if ((event === null || event === void 0 ? void 0 : event.code) == 'Enter') {
                    userName = textField === null || textField === void 0 ? void 0 : textField.value;
                    if (userName != null && userName != undefined && userName.length >= 2 && this.nameRegex.test(userName)) {
                        let nameDiv = document.querySelector(".nam");
                        nameDiv === null || nameDiv === void 0 ? void 0 : nameDiv.setAttribute("style", "display:none");
                        let genderDiv = document.querySelector(".genderDiv");
                        genderDiv === null || genderDiv === void 0 ? void 0 : genderDiv.setAttribute("style", "display:block");
                        let genderLabel = document.querySelector("#userGender");
                        if (genderLabel != null && genderLabel != undefined) {
                            genderLabel.innerHTML = `Hi ${userName},Can I know your gender`;
                        }
                    }
                    else {
                        let textField = document.querySelector('#name');
                        let userName = textField === null || textField === void 0 ? void 0 : textField.getAttribute('value');
                        if (userName != null && userName != undefined && userName.length < 2) {
                            textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Length should be min. 2");
                            alert(textField === null || textField === void 0 ? void 0 : textField.getAttribute('title'));
                        }
                        else if (!((_a = this.nameRegex) === null || _a === void 0 ? void 0 : _a.test(userName))) {
                            textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Please enter valid name");
                        }
                        else if ((_b = this.nameRegex) === null || _b === void 0 ? void 0 : _b.test(userName)) {
                            textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Name is valid");
                        }
                        else {
                        }
                    }
                }
            });
        };
        /**
         * function for validating user name is correct or not
         */
        this.validateUserName = () => {
            let regex = /^[A-Za-z]+[\s][A-Za-z]+$/;
            let textField = document.querySelector('#name');
            let userName = textField === null || textField === void 0 ? void 0 : textField.value;
            if (userName != null && userName != undefined && userName.length < 2 && userName.length < 2) {
                textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Length  be min. 2");
            }
            else if (userName != null && userName != undefined && !regex.test(userName)) {
                textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Please enter valid name");
            }
            else if (userName != null && userName != undefined && regex.test(userName)) {
                textField === null || textField === void 0 ? void 0 : textField.setAttribute('title', "Name is valid");
            }
            else {
            }
        };
        /**
         *validating user email and displaying password block
         */
        this.setEmailEvent = () => {
            let userEmail = document.querySelector('#email');
            userEmail === null || userEmail === void 0 ? void 0 : userEmail.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let email = userEmail === null || userEmail === void 0 ? void 0 : userEmail.value;
                    if (this.emailRegex.test(email)) {
                        let emailDiv = document.querySelector(".emailDiv");
                        emailDiv === null || emailDiv === void 0 ? void 0 : emailDiv.setAttribute("style", "display:none");
                        let passDiv = document.querySelector(".passDiv");
                        passDiv === null || passDiv === void 0 ? void 0 : passDiv.setAttribute("style", "display:block");
                        let passLabel = document.querySelector("#pass");
                        let textField = document.querySelector('#name');
                        let userName = textField === null || textField === void 0 ? void 0 : textField.value;
                        if (passLabel != null && passLabel != undefined) {
                            passLabel.innerHTML = `Hi ${userName},Can I know your password`;
                        }
                    }
                    else {
                        userEmail.setAttribute('title', "Please enter valid email");
                    }
                }
            });
        };
        /**
         * show email field to user
         */
        this.showEmail = () => {
            let genderDiv = document.querySelector(".genderDiv");
            genderDiv === null || genderDiv === void 0 ? void 0 : genderDiv.setAttribute("style", "display:none");
            let emailDiv = document.querySelector(".emailDiv");
            emailDiv === null || emailDiv === void 0 ? void 0 : emailDiv.setAttribute("style", "display:block");
            let emailLabel = document.querySelector("#emailId");
            let textField = document.querySelector('#name');
            let userName = textField === null || textField === void 0 ? void 0 : textField.value;
            if (emailLabel != null && emailLabel != undefined) {
                emailLabel.innerHTML = `Hi ${userName},Can I know your email`;
            }
        };
        /**
         * validating user password and displaying confirm password block
         */
        this.setPassEvent = () => {
            let userPassword = document.querySelector('#password');
            userPassword === null || userPassword === void 0 ? void 0 : userPassword.addEventListener('keydown', (event) => {
                var _a, _b, _c;
                if (event.code == 'Enter') {
                    let passwordValue = userPassword === null || userPassword === void 0 ? void 0 : userPassword.value;
                    /* for displaying orange border*/
                    if ((this.passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
                        (_a = document.getElementById('password')) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "border = 2px solid orange");
                    }
                    /*for displaying strong password*/
                    else if (this.passRegex.test(passwordValue) && passwordValue.length >= 12) {
                        (_b = document.getElementById('password')) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "border = 2px solid green");
                        let passDiv = document.querySelector(".passDiv");
                        passDiv === null || passDiv === void 0 ? void 0 : passDiv.setAttribute("style", "display:none");
                        let confirmPassDiv = document.querySelector(".confirmPassDiv");
                        confirmPassDiv === null || confirmPassDiv === void 0 ? void 0 : confirmPassDiv.setAttribute("style", "display:block");
                    }
                    /*for weak password*/
                    else {
                        (_c = document.getElementById('password')) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "border = 2px solid red");
                        userPassword.setAttribute('title', "Please enter strong password");
                    }
                }
            });
        };
        /**
         * validating confirm password and displaying contact block
         */
        this.setConfirmPassEvent = () => {
            let confirmedPassword = document.querySelector('#confirm_password');
            let password = document.querySelector('#password');
            confirmedPassword === null || confirmedPassword === void 0 ? void 0 : confirmedPassword.addEventListener('keydown', (event) => {
                var _a;
                if (event.code == 'Enter') {
                    let confirmedPasswordValue = confirmedPassword.value;
                    let passwordValue = password.value;
                    if (passwordValue == confirmedPasswordValue) {
                        (_a = document.querySelector('.userContact')) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display:block");
                        let confirmPassDiv = document.querySelector(".confirmPassDiv");
                        confirmPassDiv === null || confirmPassDiv === void 0 ? void 0 : confirmPassDiv.setAttribute("style", "display:none");
                        let textField = document.querySelector('#name');
                        let userName = textField === null || textField === void 0 ? void 0 : textField.value;
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
        };
        /**
         * validating user contact no. and diaplying vech. form
         */
        this.setContactEvent = () => {
            let userContact = document.querySelector('#contact_no');
            userContact === null || userContact === void 0 ? void 0 : userContact.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let contactValue = userContact.value;
                    if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
                        let result = ' ';
                        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        const charactersLength = characters.length;
                        for (let charIndex = 0; charIndex < 5; charIndex++) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        alert("Employee id is " + result);
                        let userContactDiv = document.querySelector(".userContact");
                        userContactDiv === null || userContactDiv === void 0 ? void 0 : userContactDiv.setAttribute("style", "display:none");
                        let regSectionDiv = document.querySelector("#regSection");
                        regSectionDiv === null || regSectionDiv === void 0 ? void 0 : regSectionDiv.setAttribute("style", "display:none");
                        let addVechDiv = document.querySelector("#add_vehicle");
                        addVechDiv === null || addVechDiv === void 0 ? void 0 : addVechDiv.setAttribute("style", "display:flex");
                    }
                    else {
                        alert("Invalid contact no.");
                    }
                }
            });
        };
        /**
         * will show emp. submit button to user
         */
        this.showSubmitButton = () => {
            let contact = document.querySelector('#contact_no');
            let contactValue = contact.value;
            let submitEmpForm = document.querySelector("#submitEmpForm");
            if (this.contactRegex.test(contactValue) && contactValue.length == 10) {
                submitEmpForm === null || submitEmpForm === void 0 ? void 0 : submitEmpForm.setAttribute("style", "cursor:pointer");
                submitEmpForm === null || submitEmpForm === void 0 ? void 0 : submitEmpForm.setAttribute("style", "opacity:1");
            }
            else {
                submitEmpForm === null || submitEmpForm === void 0 ? void 0 : submitEmpForm.setAttribute("style", "cursor:none");
                submitEmpForm === null || submitEmpForm === void 0 ? void 0 : submitEmpForm.setAttribute("style", "opacity:0.2");
            }
        };
        this.nameRegex = nameRegex;
        this.emailRegex = emailRegex;
        this.passRegex = passRegex;
        this.contactRegex = contactRegex;
    }
}
//Vehicle class for taking veh. details
class Vehicle {
    constructor(vehicleRegex) {
        /**
         * validate company name and display company model
         */
        this.setCompNameEvent = () => {
            let vehicleName = document.querySelector('#company');
            let vehicleValue;
            vehicleName === null || vehicleName === void 0 ? void 0 : vehicleName.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    vehicleValue = vehicleName.value;
                    if (this.vehicleRegex.test(vehicleValue)) {
                        let compNameDiv = document.querySelector(".compName");
                        compNameDiv === null || compNameDiv === void 0 ? void 0 : compNameDiv.setAttribute("style", "display:none");
                        let compModelDiv = document.querySelector(".modelName");
                        compModelDiv === null || compModelDiv === void 0 ? void 0 : compModelDiv.setAttribute("style", "display:block");
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
        };
        /**
         * validate company model and display vech. type
         */
        this.setCompModelEvent = () => {
            let vehicleModel = document.getElementById('model');
            vehicleModel === null || vehicleModel === void 0 ? void 0 : vehicleModel.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let companyModelDiv = document.querySelector(".modelName");
                    companyModelDiv === null || companyModelDiv === void 0 ? void 0 : companyModelDiv.setAttribute("style", "display:none");
                    let vechTypeDiv = document.querySelector(".vechType");
                    vechTypeDiv === null || vechTypeDiv === void 0 ? void 0 : vechTypeDiv.setAttribute("style", "display:block");
                }
            });
        };
        /**
         * show vech. no. field and disable vech. type field
         */
        this.showVehicleNumber = () => {
            let vechTypeDiv = document.querySelector(".vechType");
            vechTypeDiv === null || vechTypeDiv === void 0 ? void 0 : vechTypeDiv.setAttribute("style", "display:none");
            let vechNoDiv = document.querySelector(".vechNo");
            vechNoDiv === null || vechNoDiv === void 0 ? void 0 : vechNoDiv.setAttribute("style", "display:block");
        };
        /**
        * display emp. id
        */
        this.setVechNoEvent = () => {
            let vehicleNumberFiels = document.querySelector("#VehicleNo");
            vehicleNumberFiels === null || vehicleNumberFiels === void 0 ? void 0 : vehicleNumberFiels.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let vechNoDiv = document.querySelector(".vechNo");
                    vechNoDiv === null || vechNoDiv === void 0 ? void 0 : vechNoDiv.setAttribute("style", "display:none");
                    let empIdDiv = document.querySelector(".employeeId");
                    empIdDiv === null || empIdDiv === void 0 ? void 0 : empIdDiv.setAttribute("style", "display:block");
                }
            });
        };
        /**
         * display identity field and disable emp. id field
         */
        this.empIdEvent = () => {
            let empId = document.querySelector("#empId");
            empId === null || empId === void 0 ? void 0 : empId.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let empIdDiv = document.querySelector(".employeeId");
                    empIdDiv === null || empIdDiv === void 0 ? void 0 : empIdDiv.setAttribute("style", "display:none");
                    let identityDiv = document.querySelector(".identity");
                    identityDiv === null || identityDiv === void 0 ? void 0 : identityDiv.setAttribute("style", "display:block");
                }
            });
        };
        /**
         * show submit button of vech. form
         */
        this.showButton = () => {
            let identification = document.querySelector('#identification');
            let identityVal = identification.value;
            let vechCloseDiv = document.querySelector("#vehCloseButton");
            if (identityVal.length == 0) {
                vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "cursor:not-allowed");
                vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "opacity:0.2");
            }
            else {
                vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "cursor:pointer");
                vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "opacity:1");
            }
        };
        /**
         * display price form and hide vechicle form
         */
        this.closeVehForm = () => {
            let submirButton = document.querySelector('#vehCloseButton');
            if (submirButton != null && submirButton != undefined) {
                if (submirButton.getAttribute("style.opacity") != "0.2") {
                    let vechDiv = document.querySelector("#add_vehicle");
                    vechDiv === null || vechDiv === void 0 ? void 0 : vechDiv.setAttribute("style", "display:none");
                    let priceDiv = document.querySelector("#pricing");
                    priceDiv === null || priceDiv === void 0 ? void 0 : priceDiv.setAttribute("style", "display:block");
                    let vechType = document.getElementById('typeOfVeh');
                    let vechInputDiv = document.querySelector('#priceOfSelectedType');
                    if (vechInputDiv != null && vechInputDiv != undefined) {
                        vechInputDiv.innerHTML = vechType === null || vechType === void 0 ? void 0 : vechType.value;
                    }
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
        };
        /**
         * display price form and hide vechicle form
         */
        this.setIdentityEvent = () => {
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
            identificationField === null || identificationField === void 0 ? void 0 : identificationField.addEventListener('keydown', (event) => {
                if (event.code == 'Enter') {
                    let identificationVal = identificationField.value;
                    /*if identification field is empty*/
                    let vechCloseDiv = document.querySelector("#vehCloseButton");
                    if (identificationVal.length == 0) {
                        vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "cursor:not-allowed");
                        vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "opacity:0.2");
                    }
                    /*else*/
                    else {
                        vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "cursor:pointer");
                        vechCloseDiv === null || vechCloseDiv === void 0 ? void 0 : vechCloseDiv.setAttribute("style", "opacity:1");
                        let addVechDiv = document.querySelector("#add_vehicle");
                        addVechDiv === null || addVechDiv === void 0 ? void 0 : addVechDiv.setAttribute("style", "display:none");
                        let pricingDiv = document.querySelector("#pricing");
                        pricingDiv === null || pricingDiv === void 0 ? void 0 : pricingDiv.setAttribute("style", "display:block");
                        let priceLabel = document.querySelector("#priceOfSelectedType");
                        let vechType = document.getElementById('typeOfVeh');
                        let vechTypeVal = vechType === null || vechType === void 0 ? void 0 : vechType.value;
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
        };
        this.vehicleRegex = vehicleRegex;
    }
}
//Pass class for taking displaying price
class Pass {
    constructor() {
    }
    /**
     * function for displaying total price for selected plan for chosen vehicle
     * @param {vehicleType}->type of plan chosen
     * @param {vehicleInputField}-> label for displaying total price for selected plan
     */
    showPrice(vehicleType, vehicleInputField) {
        let pricing = document.getElementById(vehicleType);
        let price = pricing === null || pricing === void 0 ? void 0 : pricing.value;
        let vechInputDiv = document.getElementById(vehicleInputField);
        vechInputDiv === null || vechInputDiv === void 0 ? void 0 : vechInputDiv.setAttribute("style", "display:block");
        if (vechInputDiv != null && vechInputDiv != undefined) {
            vechInputDiv.innerHTML = `Total price is Rs.${price}`;
        }
    }
    /**
     * function for converting currency
     * @param {planType}->type of plan chosen
     * @param {price}->label for displaying total price for selected plan
     * @param {vehicleType} ->currrency into which we want to convert
     */
    conversion(planType, price, vehicleType) {
        let pricing = document.getElementById(planType);
        const result = document.getElementById(price);
        const from = document.getElementById(vehicleType);
        let toCurrency = from === null || from === void 0 ? void 0 : from.value;
        let amt = pricing === null || pricing === void 0 ? void 0 : pricing.value;
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
//vech. obj.
let vechObj = new Vehicle(/^[A-Z]{1}[A-Za-z\s]+/);
//emp. object
let empObj = new Employee(/^[A-Za-z]+[\s][A-Za-z]+$/, /^[A-Za-z0-9\-\_\+\.]+[@][a-zA-Z\-]+[.][a-z]{2,3}$/, /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\.\_])/, /^[6-9][0-9]{9}/);
//pass obj.
let passObj = new Pass();
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

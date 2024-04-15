function signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let cpassword = document.getElementById("confirmPassword").value;

    let storage = JSON.parse(localStorage.getItem("item"))

    if (email == "") {
        alert("Please enter your email")
    }
    else if (password == "") {
        alert("Please enter your password")
    }
    else if (cpassword == "") {
        alert("Please enter your cpassword")
    }
    else if(cpassword !== password){
            alert("password not match")
    }
    else {

        alert("Register seuccesssfully")
        location.reload();
        window.location = "login.html"
       
       
    }


    if (storage == null) {
        storage = [];
    }

    storage.push({
        email: email,
        password: password,
        cpassword: cpassword,
    })

    localStorage.setItem("item", JSON.stringify(storage));

    console.log(JSON.parse(localStorage.getItem("item")));

}

function signin() {
    let loginEmail1 = document.getElementById("loginEmail").value;
    let loginPassword1 = document.getElementById("loginPassword").value;
    let login = JSON.parse(localStorage.getItem("item"))


    if (loginEmail1 == "") {
        alert("Please enter your email")

    }
    else if (loginPassword1 == "") {
        alert("Please enter your Password")
    }
    else {
        let match = login.filter(function (e) {
            return e.email == loginEmail1 && e.password == loginPassword1;
        })

        if (match.length == 0) {
            // alert("Please enter valid field...")
            alert("please SignUp Form")

        }
        else {
            alert(" Login Successfull..")
            location.reload();

        }
    }

}
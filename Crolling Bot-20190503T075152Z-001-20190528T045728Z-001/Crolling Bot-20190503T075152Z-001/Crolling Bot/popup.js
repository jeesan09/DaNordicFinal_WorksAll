//var user=false;
var q = [];
var linkCutter = [];
var input_EMAIL;
var input_EMAIL;
var login_Button;
var linebreak_dynamic;
var linebreak_dynamic2;
var token_val;

function login() {




    var login_div = document.getElementById("login");

    input_EMAIL = document.createElement("input");
    input_PasswordL = document.createElement("input");
    button_login = document.createElement("button")
    linebreak_dynamic = document.createElement("br");
    linebreak_dynamic2 = document.createElement("br");
    button_sign_up = document.createElement("button");
    button_forget_password = document.createElement("button");
    linebreak_dynamic3 = document.createElement("br");



    input_EMAIL.setAttribute('placeholder', " User name or Email");
    input_EMAIL.setAttribute('id', "email");
    input_PasswordL.setAttribute('placeholder', " password");
    input_PasswordL.setAttribute('id', "password");
    input_PasswordL.setAttribute('type', 'password');

    button_login.innerHTML = 'SIGN IN';
    button_sign_up.innerHTML = "Don't have an account";
    button_forget_password.innerHTML = 'Forget Password';

    button_login.setAttribute('id', "login_btn");
    button_sign_up.setAttribute('id', "Signup");
    button_forget_password.setAttribute('id', "ForgetPassword");


    login_div.appendChild(input_EMAIL);
    login_div.appendChild(linebreak_dynamic);
    login_div.appendChild(input_PasswordL);
    login_div.appendChild(linebreak_dynamic2);
    login_div.appendChild(button_login);
    login_div.appendChild(linebreak_dynamic3);

    login_div.appendChild(button_forget_password);
    login_div.appendChild(button_sign_up);


    document.getElementById("login_btn").addEventListener("click", loginClicked);




    function loginClicked() {


        User = {
            email: '',
            password: ''
        }


        User.email = document.getElementById("email").value;
        User.password = document.getElementById("password").value;


        $.ajax({
            url: 'http://demosida.net/laravlFinal_extentin/public/api/auth/login',
            type: 'post',
            data: User,
            dataType: 'json',
            async: false,
            success: function(my_var) {
                var y = JSON.stringify(my_var);
                localStorage.setItem('token', y);
                location.reload();

                console.log(my_var);


            },
            error: function(error) {
                alert("Wrong User information");

            }


        });


    }



    //sign_Up 
    document.getElementById("Signup").addEventListener("click", SignupClicked);




    function SignupClicked() {



        User = {
            email: '',
            password: ''
        }


        User.email = document.getElementById("email").value;
        User.password = document.getElementById("password").value;


        if (User.email == '' && User.password == '' && document.getElementById("login_btn") == null) {

            alert("Email or Password Can't be Empty");


        }


        if (User.email == '' && User.password == '' && document.getElementById("login_btn") != null) {


            login_div.removeChild(button_forget_password);
            login_div.removeChild(button_login);

            button_sign_up.innerHTML = "Confirm Signup";

        }




        if (User.email != '' && User.password != '') {


            $.ajax({
                url: 'http://demosida.net/laravlFinal_extentin/public/api/auth/register',
                type: 'post',
                data: User,
                dataType: 'json',
                async: false,
                success: function(my_var) {
                    var y = JSON.stringify(my_var);

                    location.reload();

                    if (my_var.email == 'The email has already been taken.') {
                        alert(my_var.email);
                    } else if (my_var.email == 'The email must be a valid email address.') {
                        alert(my_var.email);
                    } else {

                        alert("This account :  " + my_var.email + "  successfully created.")
                    }

                    console.log(my_var);


                },
                error: function(error) {
                    alert("Opps Something Wrong");

                }


            });
        }




    }

    //Forget Password
    document.getElementById("ForgetPassword").addEventListener("click", forgetPassword);


    function forgetPassword() {



        User_forgetPassword = {
            email: ''

        }


        var rrrr = document.getElementById("email").value;

        if (rrrr == '') {


            login_div.removeChild(input_PasswordL);
            login_div.removeChild(button_sign_up);
            login_div.removeChild(button_login);

            button_forget_password.innerHTML = 'Send Mail';




        }




        User_forgetPassword.email = document.getElementById("email").value;

        if (User_forgetPassword.email != '') {

            $.ajax({
                url: 'http://demosida.net/laravlFinal_extentin/public/api/auth/RememberPassword',
                type: 'post',
                data: User_forgetPassword,
                dataType: 'json',
                async: false,
                success: function(my_var) {
                    var y = JSON.stringify(my_var);

                    location.reload();
                    alert("We have sent a code to your email.");


                    // console.log(my_var);


                },
                error: function(error) {

                    var j = JSON.stringify(error);
                    alert("Email Does not exist");

                }


            });

        }




    }




}



var x = '';
var emailsReg = '';

myObj = {

    "emails": []

}

x = localStorage.getItem("token")

console.log("value frm ls :" + x);


if (x != null) {










    var login_div = document.getElementById("login");




    document.body.removeChild(login_div);



// Scarch Fild and acton
    var scarchField = document.createElement("input");
    scarchField.setAttribute('placeholder', 'Search..');
    scarchField.setAttribute('id', 'SearchField');
    document.body.appendChild(scarchField);

    var scarch_btn = document.createElement("a");
    scarch_btn.setAttribute('href', '#');
    scarch_btn.setAttribute('class', 'fa fa-search');
    document.body.appendChild(scarch_btn);

    var line_scarch = document.createElement("hr");
    document.body.appendChild(line_scarch);

    scarchField.onchange= function(){
     
        var scarh_key_word = document.getElementById("SearchField").value;
        find(scarh_key_word);


    }

scarchField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
        var scarh_key_word = document.getElementById("SearchField").value;
        find(scarh_key_word);

  }
});



/*    scarchField.onkeypress= function(){
     
        var scarh_key_word = document.getElementById("SearchField").value;
        find(scarh_key_word);


    }*/

    scarch_btn.onclick = function() {

        var scarh_key_word = document.getElementById("SearchField").value;
        find(scarh_key_word);


    }

// Scarch Fild and acton




    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "getText"
        }, function(response) {




            if (response !== "undefined") {



                for (var th = 0; th < response.all_link[0].links.length; th++) {




                    var recentMail = [];

                    for (var t = 0; t < response.all_link[0].emails[th].length; t++) {


                        //  console.log(myArray[r][t]);

                        //   allMailinDomain += myArray[r][t].toString() + ',';


                        if (q.indexOf(response.all_link[0].emails[th][t]) == -1) {


                            q.push(response.all_link[0].emails[th][t]);

                            var divv_EMAIL = document.createElement("p");

                            divv_EMAIL.setAttribute('id', 'email' + t);


                            divv_EMAIL.innerHTML = response.all_link[0].emails[th][t].toString();

                            document.body.appendChild(divv_EMAIL);

                            //   document.body.appendChild(linebreak_e);

                            recentMail.push(response.all_link[0].emails[th][t]);



                        }



                        //console.log(allMailinDomain.length);


                    }


                    if (recentMail.length > 0) {

                        if (linkCutter.indexOf(response.all_link[0].links[th]) == -1) {


                            linkCutter.push(response.all_link[0].links[th]);


                            var divv = document.createElement("a");

                            var linebreak = document.createElement("br");

                            var line = document.createElement("hr");

                            var linkAddress = response.all_link[0].links[th].toString();


                            divv.setAttribute("class", "btn btn-outline-primary ");
                            divv.setAttribute("id", "source_btn");

                            //        console.log(linkAddress);

                            divv.setAttribute('href', linkAddress);

                            divv.setAttribute('target', linkAddress);



                            divv.innerHTML = "Source";

                            document.body.appendChild(linebreak);

                            document.body.appendChild(divv);

                            var line = document.createElement("hr");
                            document.body.appendChild(line);

                            //   document.body.appendChild(line);




                        }


                    }
                    var linebreak_e = document.createElement("br");
                    document.body.appendChild(linebreak);




                }




                function logout_clicked() {



                    var x = '';

                    x = JSON.parse(localStorage.getItem("token"));

                    console.log(x.access_token);



                    $.ajax({
                        url: `http://demosida.net/laravlFinal_extentin/public/api/auth/logout?token=${x.access_token}`,
                        type: 'post',
                        dataType: 'json',
                        async: false,

                        success: function(my_var) {

                            localStorage.clear();
                            location.reload();


                        },
                        error: function(error) {
                            alert("Wrong User information");

                        }


                    });




                }



            }

            var hr_e = document.createElement("hr");



            // this part of code for bing scarch




            console.log(response.phone);
            var domain = response.phone;
            var subdoaminWWW = '';
            var subdoamin = domain.substring(8, domain.length);


            var wwwCheaker = subdoamin.substring(0, 4)
            /*   console.log(wwwCheaker);*/
            if (wwwCheaker == 'www.') {


                var subdoaminWWW = domain.substring(12, domain.length);
                console.log(subdoaminWWW);
                Bingurl = 'http://www.bing.com/search?q="*%40' + subdoaminWWW + '"';
                console.log(Bingurl);




            } else {

                console.log(subdoamin);
                Bingurl = 'http://www.bing.com/search?q="*%40' + subdoamin + '"';
                console.log(Bingurl);

            }



            $.ajax({
                url: Bingurl,
                type: 'post',
                dataType: 'html',
                async: true,
                cache: false,
                success: function(my_var) {
                    string = my_var.toString();


                    var result = string.replace(/<[^>]*>/g, "");



                    var regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

                    emailsReg = result.match(regEmail);

                    for (var i = 0; i < emailsReg.length; i++) {

                        if (q.indexOf(emailsReg[i]) == -1) {


                            q.push(emailsReg[i]);
                            var divv_EMAIL = document.createElement("p");

                            divv_EMAIL.setAttribute('id', 'email' + t);


                            divv_EMAIL.innerHTML = emailsReg[i].toString();

                            document.body.appendChild(divv_EMAIL);



                        }









                    }


                            var divv = document.createElement("a");


                            var line = document.createElement("hr");

                            var linkAddress = Bingurl;


                            divv.setAttribute("class", "btn btn-outline-primary ");
                            divv.setAttribute("id", "source_btn");

                            //        console.log(linkAddress);

                            divv.setAttribute('href', linkAddress);

                            divv.setAttribute('target', linkAddress);



                            divv.innerHTML = "Source";

             

                            document.body.appendChild(divv);

                            var line = document.createElement("hr");
                            document.body.appendChild(line);





                    // This code is for logout Button                               
                    button_log_Out = document.createElement("button");
                    button_log_Out.setAttribute('id', "logout_btn");
                    button_log_Out.setAttribute('class', "btn btn-outline-danger waves-effect");

                    button_log_Out.innerHTML = 'logout';


                    document.body.appendChild(button_log_Out);

                    document.getElementById("logout_btn").addEventListener("click", logout_clicked);

                    // This code is for logout Button 

                    // This code is for  Header mail Count 
                    var header_Text = document.getElementById("headerText");
                    header_Text.innerHTML = 'All Mails of the Domain' + ' ( ' + q.length + ' ) ';
                    header_Text.appendChild(hr_e);
                    // This code is for  Header mail Count 









                }



            });

            // this part of code for bing scarch




            //  console.log(q.length);

        });



    });




} else {

    login();




}
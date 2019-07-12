
$(document).ready(function() {
    // Custom Holidays------------------------------

    var d = new Date();
    var n = d.getDay();


    var Cholliday = ["6/1/2019", "07/01/2019", "7/02/2019", "7/03/2019"];

    var holidayCheaker = false;


    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d.getFullYear();

    var today = mm + '/' + dd + '/' + yyyy;


    console.log(today);

    // Custom Holidays------------------------------            

    
    // $("#open_Office").hide();
    // $("#close_office").hide();
    //$("#kbconainer").hide();
    $("#buttonn").click(function() {
        //   $("#kbconainer").show();
  /*        $("#kbconainer").fadeToggle(500);*/
        document.getElementById("phone").value = ""
        var d = new Date();
        var n = d.getDay();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        console.log("today" + n + "   time   " + time);

        if (d.getHours() < 18 && d.getHours() >= 9 && n != 6 && n != 0) {


            //Cutom Holiday--------------------------------------------------------------------------------------------------------

            for (var i = Cholliday.length - 1; i >= 0; i--) {
                //Cholliday[i]

                if (today == Cholliday[i]) {

                    holidayCheaker = true;

                }


            }

            if (holidayCheaker == false) {

                $("#open_Office").fadeToggle(1000);
                $("#kbconainer").toggleClass("opcityClass");
                $("#kbconainer").fadeToggle(1000);

                var input = document.querySelector("#phone");

            } else {


                $("#close_office").fadeToggle(1000);
                $("#kbconainer").toggleClass("opcityClass");
                $("#kbconainer").fadeToggle(1000);
                var input = document.querySelector("#phone1");
            }



            //Cutom Holiday---------------------------------------------------------------------------------------------------------




        } else {

            $("#close_office").fadeToggle(1000);
            $("#kbconainer").toggleClass("opcityClass");
            $("#kbconainer").fadeToggle(1000);
            var input = document.querySelector("#phone1");
        }
        window.intlTelInput(input, {
            // allowDropdown: false,
            autoHideDialCode: true,
            //autoPlaceholder: "aggressive",
            dropdownContainer: document.body,
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            // geoIpLookup: function(callback) {
            //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //     var countryCode = (resp && resp.country) ? resp.country : "";
            //     callback(countryCode);
            //   });
            // },
            //hiddenInput: "full_number",
            initialCountry: "se",
            localizedCountries: {
                'se': 'Sweden'
            },
            nationalMode: true,
            onlyCountries: ['se'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            //separateDialCode: true,
            //*'de', 'fi', 'dk', 'no'*//
            utilsScript: "build/js/utils.js",
        });

    });
    $("#closeBtn_close").click(function() {
        $("#kbconainer").removeClass("opcityClass");
        $("#close_office").fadeOut();
        $("#kbconainer").hide();

    });
    $("#closeBtn_open").click(function() {
        $("#kbconainer").removeClass("opcityClass");
        $("#open_Office").fadeOut();
        $("#kbconainer").hide();
    });
});


//block phones        

function Cheaker_Function(c3, c4, c2, c5) {



    if (c2 == '90' || c2 == '95' || c3 == '020' || c3 == '900' || c3 == '112' || c3 == '118' || c3 == '116' || c3 == '118' || c3 == '099' || c4 == '0771' || c4 == '1177' || c4 == '0900' || c5 == '11313' || c5 == '11414') {

        return false;


    } else {

        return true;

    }

}

//block phones 




$("#Ring_btn").click(function() {



    var x = document.getElementById("phone").value;

    var reg8 = /^(\d{7}|\d{8}|\d{9}|\d{10}|\d{11}|\d{12}|\d{13})$/; ///^(\d{7}|\d{8}|\d{9}|\d{10}|\d{11}|\d{12}|\d{13})$/  // woking for 7 to 13 degits
    var vphone = '';
    var vphone = x.match(reg8);

    console.log(vphone);


    /*             if(vphone1 != null){

                     var cheak2=/^(!(300).*|!85.*)$/;
                     var vphone = '';
                     var vphone = vphone1[0].toString().match(cheak2);
                 }*/

    //block phones   

    if (vphone != null) {


        var first2 = vphone[0].toString().substring(0, 2);
        var first3 = vphone[0].toString().substring(0, 3);
        var first4 = vphone[0].toString().substring(0, 4);
        var first5 = vphone[0].toString().substring(0, 5);




        //block phones      
        /*             console.log( first4);

                     console.log(Cheaker_Function(first3,first4));*/

        var cheaker = Cheaker_Function(first3, first4, first2, first5);


    }
    if (vphone == null || cheaker == false) { //block phones
        Swal.fire({
            type: 'error',

            text: ' Unauthorized ',
            footer: '<a href>Please enter authorized phone number!</a>'
        })
    } else {

               
                  $("#open_Office").hide();
             



        Swal.fire({

            type: 'success',
            title: 'We are calling you!',
            showConfirmButton: false,
            backdrop: `rgba(0,0,0,0)`,
            timer: 2000


        }).then(() => {
            //   alert("Hello! I am an alert box!!");
                      $("#kbconainer").hide();
                     $("#kbconainer").removeClass("opcityClass");
            $.ajax({
                url: "build/js/CallFunction.php", //the page containing php script
                type: "post", //request type,
                dataType: 'json',
                data: {
                    phone: vphone
                }


            }).then(() => {

                

            });


        })
    }
});
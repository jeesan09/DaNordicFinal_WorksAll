
https://danordic.com:2096/
 var currentLocationBlock = window.location.href;


var locaton_substring=currentLocationBlock.substring(0, 27);
var locaton_substring_2=currentLocationBlock.substring(0, 24);

console.log('this is the current_domain-HOME substring  ' + locaton_substring_2);
var block_link_1 = 'http://webmail.danordic.com';
var block_link_2 = 'https://danordic.com:2096/';

if(locaton_substring == block_link_1 || locaton_substring_2 == block_link_2){


    console.log("freeze the extention");


}

else{

var search_in = document.documentElement.innerHTML;
//////////////////////// This code Chage The colour of the section///////////////////////////////////////////////////////////////////////////////
var xM = document.querySelectorAll('*');
 var counter = 0;


for (var i = 0; i < xM.length; i++) {


    //console.log(xM[i]);

    var k = xM[i].innerHTML;
    // console.log(k.toString());

    var kstring = k.toString();

    var regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    var emailsReg = '';
    emailsReg = kstring.match(regEmail);

    if (emailsReg !== null) {

        //	console.log(xM[i] + "    hasmail");
        var yM = xM[i].querySelectorAll('*');

        //console.log(yM.length);

        if (yM.length == 0) {


            xM[i].style.backgroundColor = "#6D8764";
            xM[i].style.color = "#FFFFFF";




        }
        //	
    }

}

//////////////////////// This code Chage The colour of the section///////////////////////////////////////////////////////////////////////////////

/*document.body.innerHTML;*/
string_context = search_in.toString();

//var array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
var reg = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
var emails = '';
emails = string_context.match(reg);









///////////////////// loops for regular expression to text convertion//////////////////////////

var emails_final = [...new Set(emails)];

var text = '';

if (emails_final != null) {

    for (var i = 0; i < emails_final.length; i++) {

        if (emails_final[i] != emails_final[i - 1]) {
            text += emails_final[i].toString() + "\n";
        }
        // or whatever you need to do with them
    }
}


    var currentLocation_for_popup = window.location.href;
    var currentLocation_for_popup_string=currentLocation_for_popup.toString();
    reg_domain = /^(.*?)(\.com|\.de|\.se|\.fi|\.fr|\.no|\.net|\.co|\.uk)/gi;
    current_domain = currentLocation_for_popup_string.match(reg_domain);

    console.log(current_domain.toString());

cdomin=current_domain.toString();      

/////////////////////////////////////After all dOne///////////////////////
var myArray = [];
myObj = {
    "email": '',
    "phone": ''
}

myObj_2 = {
    "phone": '',
    "all_link": [{

            "links": [],
            "emails": []
          


        }

    ]
}

myObj_2.phone=current_domain.toString();

async function f()

{



    var rep_myvar;

    var currentLocation = window.location.href;
    console.log('this is the current_domain-HOME   ' + currentLocation);

    reg_current_domain = /^(.*?)(\.com|\.de|\.se|\.fi|\.fr|\.no|\.net|\.co|\.uk)/gi;

    /*  /^(.*?)(\.com|\.de|\.se|\.fi|\.fr|\.no|\.net|\.co|\.uk)/gi;*/
    reg_for_google = /https?:\/\/?(www\.)google\.com/;
    google_cheak = currentLocation.match(reg_for_google);



    reg_for_stacoverFolow = /https?:\/\/stackoverflow\.com/;
    stck_cheak = currentLocation.match(reg_for_stacoverFolow);

    reg_for_w3 = /https?:\/\/?(www\.)w3schools\.com/;
    w3_cheak = currentLocation.match(reg_for_w3);


    reg_for_youTube = /https?:\/\/?(www\.)youtube\.com/;
    youTube_cheak = currentLocation.match(reg_for_youTube);


    reg_for_linkedin = /https?:\/\/?(www\.)linkedin\.com/;
    linkedin_cheak = currentLocation.match(reg_for_linkedin);



    reg_for_facebook = /https?:\/\/?(www\.)facebook\.com/;
    facebook_cheak = currentLocation.match(reg_for_facebook);


    reg_for_merinfo = /https?:\/\/?(www\.)merinfo\.se/;
    merinfo_cheak = currentLocation.match(reg_for_merinfo);

    reg_for_allabolag = /https?:\/\/?(www\.)allabolag\.se/;
    allabolag_cheak = currentLocation.match(reg_for_allabolag);

    reg_for_hitta = /https?:\/\/?(www\.)hitta\.se/;
    hitta_cheak = currentLocation.match(reg_for_hitta);


    reg_for_eniro = /https?:\/\/?(www\.)eniro\.se/;
    eniro_cheak = currentLocation.match(reg_for_eniro);

    reg_for_twitter = /https?:\/\/?(www\.)twitter\.com/;
    twitter_cheak = currentLocation.match(reg_for_twitter);


    reg_for_instagram = /https?:\/\/?(www\.)instagram\.com/;
    instagram_cheak = currentLocation.match(reg_for_instagram);


    reg_for_danordic = /https?:\/\/?(www\.)portal\.danordic\.com/;
    danordic_cheak = currentLocation.match(reg_for_danordic);

    reg_for_google_derive = /https?:\/\/?(www\.)drive\.google\.com/;
    danordic_google_derive = currentLocation.match(reg_for_google_derive); 


    reg_for_web_mail = /https?:\/\/?(www\.)danordic\.com:2095/;
    danordic_web_mail = currentLocation.match(reg_for_web_mail);

    reg_for_web_mail_2 = /https?:\/\/?(www\.)webmail\.danordic\.com/;
    danordic_web_mail = currentLocation.match(reg_for_web_mail_2);


    reg_for_web_mail_3 = /(https?:\/\/?(www\.)webmail\.danordic\.com).*/;
    danordic_web_mail = currentLocation.match(reg_for_web_mail_3);



    if (reg_for_web_mail_3==null && reg_for_web_mail_2==null && danordic_web_mail== null && google_cheak == null && stck_cheak == null && merinfo_cheak==null &&  allabolag_cheak==null && danordic_google_derive==null

     && hitta_cheak==null && eniro_cheak == null && twitter_cheak == null && instagram_cheak == null && danordic_cheak == null


     && w3_cheak == null && youTube_cheak == null && linkedin_cheak==null && facebook_cheak==null) {

        var currentLocation_reg = '';
        currentLocation_reg = currentLocation.match(reg_current_domain);

    }

/*        var currentLocation_reg = '';
        currentLocation_reg = currentLocation.match(reg_current_domain);*/

   // console.log('Google or stackoverflow  --' + currentLocation_reg);




    //////////////////////////////// Current domain name//////////////////////////
    var xall = document.querySelectorAll('a');

    console.log(xall);





    var y = [];

    for (var b = 0; b < xall.length; b++) {

        var linkval = xall[b].href;

        if (linkval != '') {


            y.push(linkval);



        }



    }

  //  console.log(y);

    
    var currentLocationxxx = window.location.href;

    

     x = [...new Set(y)];

     x.push(currentLocationxxx);


    console.log(x);



   // console.log('after triomming' + x);



    var emailsg = '';

   

    for (var i = 0; i < x.length; i++)

    {
       


           // console.log('this is cunter value'+counter);
            console.log("In All Links link NO    "+i);
            if (x[i] != null) {
                url = x[i].toString();
                reg_domain = /^(.*?)(\.com|\.de|\.se|\.fi|\.fr|\.no|\.net|\.co|\.uk)/gi;
                var current_url = '';
                current_url = url.match(reg_domain);
                console.log("inloop     " + current_url);
                if (current_url != null) {
                    var y = current_url.toString();
                }

                

                string0f_url = x[i].toString();
                console.log('befor e function call ' + string0f_url);

                


                if (y == currentLocation_reg) {

                if (counter < 50 && x[i].toString() != '') {

                   
                    var emailsg = '';
                    var rep_myvar = '';
                    string0f_url = x[i].toString();

                    console.log("counter no    "+counter);
                    console.log("insid CurrentDomain--------" + string0f_url);


                    if (string0f_url != '') {

                        $.ajax({
                            url: string0f_url,
                            type: 'get',
                            dataType: 'html',
                            async: true,
                            cache: false,
                            success: function(my_var) {
                                string = my_var.toString();
                                rep_myvar += string;
                                var regrr = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi; //(^\b((?!\.png|\.jpg|\.jpeg).)*\b$) try future
                                emailsg = rep_myvar.match(regrr);

                                 
                                if (emailsg !== null) {
                                   
                                    var arrind = 0;



                                    myArray.push(emailsg);

                                     console.log("this is the when success "+arrind+"  "+this.url);

                                    // myObj_2.all_link[arrind].emails.push(url);

                                   myObj_2.all_link[arrind].emails.push(emailsg);
                                   myObj_2.all_link[arrind].links.push(this.url);




                                    

                                    arrind++;




                                }

                               
                            }
                        });

                        counter++;

                    }

              //      console.log('array length'+myObj_2.all_link[0].emails.length);




                }




            }

        }
    }

}




f().then(() => {

    var allMailinDomain = '';

    var MYnwe_all_domain_mail_arrary = [];




    if (myArray.length !== null) {



        for (var r = 0; r < myArray.length; r++) {



            if (myArray[r].length > 0) {

                for (var t = 0; t < myArray[r].length; t++) {



                    MYnwe_all_domain_mail_arrary.push(myArray[r][t]);





                }

            }




        }



    }


    var MYnwe_all_domain_mail_arrary_F = MYnwe_all_domain_mail_arrary.concat(emails_final);

    var final_array_allMail = [...new Set(MYnwe_all_domain_mail_arrary_F)];



    for (var h = 0; h < final_array_allMail.length; h++) {


        allMailinDomain += final_array_allMail[h].toString() + "\n";

    }




    //////////////////////////////////////////////////////Previou Show Opton///////////////////////////////////////////////////////////////////////
    var text_final = '';






    console.log(myObj_2);

    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {




            sendResponse(myObj_2);




        }
    )
});

}
///////////////////// loops for regular expression to text convertion//////////////////////////


//console.log('from the array-----'+myArray[0][1]);

<html>
   <head>
      <title></title>
      
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="build/css/intlTelInput.css">
      <link rel="stylesheet" href="build/css/demo.css">


   </head>
   <body>

<button type="button" class="pulse-button" data-toggle="modal" data-target="#myModal" id="buttonn">
    <img src="build/img/call-icon.png" alt="">
</button>
<!--   
    <button type="button"  class="pulse-button" data-toggle="modal" data-target="#myModal" id="buttonn" >
    <img src="img/call-icon.png" alt=""> -->
<div class="container" id="kbconainer" style="display: none;">
    <!-- Modal -->
    <div class="popups" id="open_Office" role="">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body">
                    <h2> Office Open</h2>
                    <h3>We are available now!</h3>
                    <p>Please leave your number and we will call you right now!</p>
                </div>
                <div class="modal-body">

                    <input id="phone" name="phone" type="tel" placeholder="" class="ph_input" required>
                    <button type="submit" value="Ring mig!" id="Ring_btn" class="ring_btn">Ring mig!</button>

                </div>
                <!-- <div class="lead_txt">
              Lorem Ipsum is simply dummy<br> text of the printing and typesetting industry. 
            </div> -->
                <div class="Cstmodal_footer">
                    <button type="button" id="closeBtn_open" class="btn btn-default" data-dismiss="open_Office">X</button>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="modal fade" id="myModal" role="dialog" > -->

    <div class="popups" id="close_office" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h2> Office Close</h2>
                    <h3>Unfortunately, we are not available now.</h3>
                    <p>Please leave your number and we will call you ASAP!</p>
                </div>
                <div class="modal-body">
                    <input id="phone1" name="phone" type="tel" placeholder="" class="ph_input" required>
                    <button type="submit" value="Ring mig!" id="Ring_btn" class="ring_btn">Ring mig!</button>
                </div>
                <!--  <div class="lead_txt">
                    Lorem Ipsum is simply dummy<br> text of the printing and typesetting industry. 
                  </div> -->
                <div class="Cstmodal_footer">
                    <button type="button" id="closeBtn_close" class="btn btn-default" data-dismiss="modal">X</button>
                </div>
            </div>
        </div>
    </div>

</div>
    

<script src="build/js/intlTelInput.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script src="build/js/leadphone.js"></script>



<script type="text/javascript">



   </script>

   </body>


</html>


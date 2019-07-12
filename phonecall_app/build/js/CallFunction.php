<?php
    // $FinalCsNo = '';
    // function fromStart($inp, $del)  
    // { 
    //     $inp1 = substr($inp, 0, $del - 1); 
    //     $inp2 = substr($inp, $del, strlen($inp)); 
    //     return $inp1.$inp2; 
    // } 
    // $CsNo = $_POST["phone"];
    // $StrCsNo = str_replace("-","", $CsNo);
    // $StrCsNo = str_replace(" ","", $StrCsNo);
    // $StrCsNo = str_replace("(","", $StrCsNo);
    // $StrCsNo = str_replace(")","", $StrCsNo);
    // $FinalCsNo1 = strval($StrCsNo); 
    // $del = 1; 
    //   if($FinalCsNo1[0]==0){
    //     $FinalCsNo2 = fromStart($FinalCsNo1, $del);
    // }
    // $FinalCsNo='+46'.$FinalCsNo2;
    
    function sendcalls ($calls) { 
      $username = "u081f43d2fbf8a880d575273cc4c6671e";
      $password = "91EE41C245B29932D21B76D46EFEF34A";
      $context = stream_context_create(array(
        'http' => array(
          'method' => 'POST',
          'header'  => 'Authorization: Basic '.
                       base64_encode($username.':'.$password). "\r\n".
                       "Content-type: application/x-www-form-urlencoded\r\n",
          'content' => http_build_query($calls),
          'timeout' => 10
      )));
      $response = file_get_contents("https://api.46elks.com/a1/calls",
        false, $context);
     // if (!strstr($http_response_header[0],"200 OK"))
     //   return $http_response_header[0];
     //  return $response;
    }


    $calls = array(
      "from" => "+46101994113",   /* Can be up to 11 alphanumeric characters */
      "to" => "+8801303120149",  /* The mobile number you want to send to */
      "voice_start" => '{"connect":"+46732600000",
                        "timeout":"15",
                        "busy":{
                            "connect":"+46731460000",
                            "timeout":"15"
                            },
                        "failed":{
                          "connect":"+46731460000",
                          "timeout":"15"
                        }
                        }',
      "whenhangup" => "http://elk.demosida.net/webhook_database_live/webhook_sms_demo.php"
    );
    echo sendcalls($calls);
    
?>
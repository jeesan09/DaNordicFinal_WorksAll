<?php


/*Function for SMS sending*/
function sendSMS ($sms_final) {
  $username = "u081f43d2fbf8a880d575273cc4c6671e";
  $password = "91EE41C245B29932D21B76D46EFEF34A";
  $context = stream_context_create(array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Authorization: Basic '.
                  base64_encode($username.':'.$password). "\r\n".
                  "Content-type: application/x-www-form-urlencoded\r\n",
      'content' => http_build_query($sms_final),
      'timeout' => 10
  )));
  $response = file_get_contents("https://api.46elks.com/a1/sms",
    false, $context);

  // if (!strstr($http_response_header[0],"200 OK"))
  //   return $http_response_header[0];
  // return $response;
}

function sendSMS1 ($sms_final2) {
  $username = "u081f43d2fbf8a880d575273cc4c6671e";
  $password = "91EE41C245B29932D21B76D46EFEF34A";
  $context = stream_context_create(array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Authorization: Basic '.
                  base64_encode($username.':'.$password). "\r\n".
                  "Content-type: application/x-www-form-urlencoded\r\n",
      'content' => http_build_query($sms_final2),
      'timeout' => 10
  )));
  $response = file_get_contents("https://api.46elks.com/a1/sms",
    false, $context);

  // if (!strstr($http_response_header[0],"200 OK"))
  //   return $http_response_header[0];
  // return $response;
}

/*Function for getting Call Logs*/
function getHistory ($extra = '') {
  // Set your 46elks API username and API password here
  // You can find them at https://dashboard.46elks.com/
  $username = 'u081f43d2fbf8a880d575273cc4c6671e';
  $password = '91EE41C245B29932D21B76D46EFEF34A';
  $context = stream_context_create(array(
    'http' => array(
      'method' => 'GET',
      'header'  => "Authorization: Basic ".
                   base64_encode($username.':'.$password). "\r\n",
      'timeout' => 10
  )));
  $text = file_get_contents(
    'https://api.46elks.com/a1/calls'.$extra, false, $context );
  if (!strstr($http_response_header[0],"200 OK"))
    die ($http_response_header[0]);
  
  return json_decode($text,1);
}


/*Function for changing array key (multidimensional capable)*/
function recursive_change_key($arr, $set) {
        if (is_array($arr) && is_array($set)) {
     $newArr = array();
     foreach ($arr as $k => $v) {
            $key = array_key_exists( $k, $set) ? $set[$k] : $k;
            $newArr[$key] = is_array($k) ? recursive_change_key($v, $set) : $v;
     }
     return $newArr;
     }
     return $arr;    
    }

    function recursive_change_key1($arr, $set) {
        if (is_array($arr) && is_array($set)) {
     $newArr = array();
     foreach ($arr as $k => $v) {
            $key = array_key_exists( $k, $set) ? $set[$k] : $k;
            $newArr[$key] = is_array($v) ? recursive_change_key1($v, $set) : $v;
     }
     return $newArr;
     }
     return $arr;    
    }

/** Function for swedish time from UTC (Created and To array index must be given**/

    function swedish_time(&$array){
            $obj3 = $array;
            $day_sweden = 0;
            $GMT = 2;
            $final_array = [];
            $allowed = ['created','to'];
            $obj3 = array_filter($obj3,function ($key) use ($allowed) {
                return in_array($key, $allowed);
            },ARRAY_FILTER_USE_KEY);

            /*Convert from UTC to Sweden hour*/
            $hour_gmt = substr($obj3['created'], 11, -13);
            if ($hour_gmt == 10 or $hour_gmt == 8) {
                $day_gmt = substr($obj3['created'], 8, -16)+1;
            } else {
                $day_gmt = substr($obj3['created'], 8, -16);
            }
            array_push($obj3, $day_gmt);
            $hour_gmt = substr($obj3['created'], 11, -13) + $GMT;
            for ($i=0; $i <24 ; $i++) {
                if ($hour_gmt>24) {
                    $hour_gmt = $hour_gmt-24;
                }
            }
            array_push($obj3, $hour_gmt);
            $obj3 = recursive_change_key1($obj3, array('0' => 'day', '1' => 'hour'));
            
            echo '<pre>','ggwp'.print_r($obj3),'</pre>';

            return $obj3;
        }
?>
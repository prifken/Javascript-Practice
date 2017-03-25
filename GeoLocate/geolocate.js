jQuery(document).ready(function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  

var test = $.ajax({url: url,async:false,success: pushResult}).responseText;
   return false;
});

function showPosition(position){

      var editURL = "";
      editURL = "bmcx4gyxs";
      editURL += "?act=API_EditRecord&key=" + QBU_recid;
      editURL += "&_fid_7=" + position.coords.latitude;
      editURL += "&_fid_8=" + position.coords.longitude;
     
      $.ajax({url: editURL,async:false});

      location.reload(true);
 }
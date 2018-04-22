$(function(){
  var api_key = "46c28917c3f47b7f0221470b5f1e256e";
  var api_url = "http://api.openweathermap.org/data/2.5/forecast";
  var query = api_url + "?q=kagoshima-shi,jp&APPID=" + api_key;

  var sun   = "<i class='fas fa-sun'></i>"
  var cloud = "<i class='fas fa-cloud'></i>"
  var rain = "<i class='fas fa-umbrella'></i>"

  $.ajax({
    type: "get",
    url: query,
    dataType: "json",
    success: function(data, dataType){
      console.log(data);
      var weather = "";
      switch( data.list[0].weather[0].main ){
        case "Sun":   weather = sun;  break;
        case "Cloud": weather = cloud; break;
        case "Rain":  weather = rain; break;
      }
      $("#weatherList").append("<tr> <td>openWeather</td><td>"+weather+"</td> </tr>")
    }
  });
});
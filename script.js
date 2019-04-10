console.log("Here.");

var button = $("#fetchData");
var URL = "https://jsonplaceholder.typicode.com/posts";

button.click(function() {
  $.ajax(URL, {method: "GET", success: function(data){
    for (var i = 0; i < data.length; i++){
      console.log(data[i].title);
      var text = $("#data").text();
      $("#data").text(text + data[i].title + "\n");
    }
  }});
});



$(document).ready(()=>{
  $("#searchForm").submit(function(event){
    search($("#searchText").val())
    event.preventDefault()
  })
})
function search(input){
  var searchURL = "https://itunes.apple.com/search?term="+input+"&entity=software&limit=5"
  $.ajax({
    crossDomain: true,
    type:"GET",
    contentType: "application/javascript; charset=utf-8",
    async:true,
    url: searchURL,
    dataType: "jsonp",
    success : function(json)
    {
        displayResults(json);
    },
    error: function(e) {
        console.log("error: " + e.message);
    }
  
  });
}

function displayResults(data){

  data.results.forEach((result)=>{

    $("#results").append("<h1>"+result.trackName+"</h1><img src='"+result.artworkUrl100+"'><p>"+result.description+"</p>")
  })
}

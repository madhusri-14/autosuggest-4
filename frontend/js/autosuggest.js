//"https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8"
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar = document.getElementById("search-bar");
var suggestionsContainer = document.getElementById("search-suggestions");
searchbar.addEventListener("input", function () {
  // get user typed data
  //use user typed data in query for api call
  //api call
  //append to all the suggestions to div tag in ui
    var query = searchbar.value.trim();
    console.log(query);
});
function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();

})
.then(function(data){
    console.log(data);
    //showSuggestions(data);
})
.catch(function(err){
    console.log("Error :"+err);
})
function showsuggestions(data){
    var values = data.results;
    if(data.count==0){
        searchsuggestions.innerHTML = "<div><p>No suggestions found</p></div>";
    }
    else{
        var htmlString="";
        for(var i=0;i<values.length;i++){
            htmlString += "<div <span> class='suggestionitem'>" + values[i].text+"</span><span> class='item weight'>" + values[i].weight+"</span></div>";
        }
        searchsuggestions.innerHTML = htmlString;
    }
}
}

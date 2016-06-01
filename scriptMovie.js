function getword(info,tab) {

    //console.log("Word " +  + " was clicked.");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data=JSON.parse(xhttp.responseText);
            if(data.Title != undefined ) {
                if(data.imdbRating<=5)
                {
                    var revert= "Its Rating is "+data.imdbRating+ ".\nAwards: "+data.Awards+" \n\n You should not watch this movie";

                }
                if(data.imdbRating>5 || data.imdbRating <=7 )
                {
                    var revert= "Its Rating is "+data.imdbRating+ ".\nAwards: "+data.Awards+"\n\n It can be a one time Watch";
                }
                if(data.imdbRating>5 || data.imdbRating >7 )
                {

                    var revert= "Its Rating is "+data.imdbRating+ ".\nAwards: "+data.Awards+"\n\n Movie is awesome. Go for it :)";
                }

                alert(revert);
                //document.getElementById("dataHere").innerHTML = document.getElementById("dataHere").innerHTML+ '<br><center><font size="5">' + revert+ '</font></center>';

            }
            else
                alert("No movie with this name found. Please check your spelling.");
                //document.getElementById("dataHere").innerHTML = 'No movie with this name found. Please check your spelling.';
        }
    };
    var name=info.selectionText;
    xhttp.open("GET", "http://www.omdbapi.com/?t="+name+"&r=json", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

}

chrome.contextMenus.create({

    title: "Get ImDb Rating: %s",
    contexts:["selection"],
    onclick: getword,

});
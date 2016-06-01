document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('findButton');
    checkPageButton.addEventListener('click', function() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data=JSON.parse(xhttp.responseText);
                console.log(data);
                if(data.Title != undefined ) {
                    document.getElementById("dataHere").innerHTML = "<div class='col-md-3'> <img  width='350' src='" + data.Poster + "'></div><div class='col-md-6' style='padding:10px;margin:10px;'>Movie: " + data.Title + "<br>Rating: " + data.imdbRating + "<br>Awards: " + data.Awards + "<br>Plot: " + data.Plot + "<br>Language: " + data.Language + "<br>Genre: " + data.Genre + "<br>Director: " + data.Director + "<br>Release: " + data.Released + "</div>";
                    if(data.imdbRating<=5)
                    {
                        var revert= "You should not watch this movie";
                    }
                    if(data.imdbRating>5 || data.imdbRating <=7 )
                    {
                        var revert= "It can be a one time Watch";
                    }
                    if(data.imdbRating>5 || data.imdbRating >7 )
                    {
                        var revert= "Movie is awesome. Go for it :)";
                    }

                    document.getElementById("dataHere").innerHTML = document.getElementById("dataHere").innerHTML+ '<br><center><font size="5">' + revert+ '</font></center>';

                }
                else
                    document.getElementById("dataHere").innerHTML = 'No movie with this name found. Please check your spelling.';
            }
        };
        var name=document.getElementById('movieName').value;
        xhttp.open("GET", "http://www.omdbapi.com/?t="+name+"&r=json", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();

        });
    }, false);

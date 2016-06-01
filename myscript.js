/**
 * Created by chowmean on 6/1/16.
 */

var a=document.getElementsByClassName('post-box-title');

for (i=0;i<a.length;i++) {
    t = a[i].getElementsByTagName('a')[0];

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {



        if (xhttp.readyState == 4 && xhttp.status == 200) {

            //alert(t.innerHTML)

            var data=JSON.parse(xhttp.responseText);
            //alert(data.imdbRating);
            if(data.imdbRating<=5)
            {
                review='You probably should avoid it';
            }
            if(data.imdbRating>5 || data.imdbRating <=7 )
            {
                review='One time watch.';
            }
            if(data.imdbRating>7 ) {
                review='Awesome Movie.';
            }

            t.innerHTML=t.innerHTML + "<br>Imdb Rating: " + data.imdbRating+ "<br>Review: " + review;
            /*alert(data);
            if(data.Title != undefined ) {
                if(data.imdbRating<=5)
                {
                    alert(data.imdbRating);
                    t.innerHTML=t.innerHTML + data.imdbRating;
                }
                if(data.imdbRating>5 || data.imdbRating <=7 )
                {
                    alert(data.imdbRating);
                    t.innerHTML=t.innerHTML + data.imdbRating;
                }
                if(data.imdbRating>7 ) {
                    alert(data.imdbRating);
                    t.innerHTML=t.innerHTML + data.imdbRating;
                }

                alert(revert);
                //document.getElementById("dataHere").innerHTML = document.getElementById("dataHere").innerHTML+ '<br><center><font size="5">' + revert+ '</font></center>';

            }
            else
                alert("No movie with this name found. Please check your spelling.");
            //document.getElementById("dataHere").innerHTML = 'No movie with this name found. Please check your spelling.';*/
        }
    };
    xhttp.open("GET", "http://www.omdbapi.com/?t="+t.innerHTML+"&r=json", false);
    xhttp.send();
}
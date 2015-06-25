
function beerSong(){
    var numBeer = prompt("how many beers do you want to drink?");
    var songTxt = "";
    for(var i = 0; i < numBeer; i++){
       if(numBeer - i > 1) {
        songTxt += (numBeer - i) + " bottles of beer on the wall.\n";
        songTxt += (numBeer - i) + " bottles of Beer!\n";
        songTxt += "Take one down and pass it around,\n";
        songTxt += ((numBeer - i)-1) + " bottles of beer on the wall!\n"
       }else{
         songTxt += (numBeer - i) + " bottle of beer on the wall.\n";
         songTxt += (numBeer - i) + " bottle of Beer!\n";
         songTxt += "Take one down and pass it around,\n";
         songTxt += "No more bottles of beer on the Wall!";
       } 
    }
    return songTxt;
}

beerSong();
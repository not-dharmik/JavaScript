function average(ar){
    var tot=0;
    ar.forEach(function(score){
    tot+= score;        
    });
    avg = tot/ ar.length;
    return Math.round(avg);
}

var scores = [1,2,3,6,5,4,7,8,9,10];
console.log( average(scores));

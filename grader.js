function average(mrks){
    var tot=0;
    mrks.forEach(function(mrk){
        tot += mrk;
    });
    tot /= mrks.length;
    return Math.round(tot);
}

var avg=[4,5,7,8,6,3,3,2,4]
console.log( average(avg));
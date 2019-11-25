/* eslint no-restricted-globals: 'off' */




// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(anArray){
    let copy = [...anArray];
    copy.sort( (a, b) =>{
        if(a.year < b.year){
            return -1;
        }
        else if(b.year < a.year){
            return 1;
        }
    else {
        if(a.title < b.title){
            return -1;
        }
        else if(b.title < a.title){
            return 1;
        }
        else {
            return 0;
        }
    }
});
    return copy;
}

movies.sort(anArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    return array >= movies.filter("checkSteven").value
}

function myFunction(){
    movies.director.drama() = array.filter(checkSteven)
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(anArray) {
let copyTitle = [...anArray]
    copyTitle.sort( (a, b) =>{

        if (a.title > b.title){
            return 1}
        else if (b.title > a.title) {
            return -1;
        } 
        else {
            return 0;
        }

    })

    //let finalCopy = copyTitle.slice(0, 20);
    let finalCopy = copyTitle.map( (eachArray)=>{
        return eachArray.title;
    })

    finalCopy.splice(20);
    return finalCopy;

}





//function orderAlphabetically(anArray) {

  // copyTitle.sort( (a, b) =>{

       // if (a.title < b.title){
           // return -1}
        ///if (a.title > b.title){
           // return 1;
       // } 
       // else if (b.title < a.title) {
        //    return 1;
       // } 
       // else if (b.title > a.title) {
       //     return -1;}
        // else {
        //    return 0;}

   // })

   // let finalCopy = copyTitle.slice(0, 20);
   // let finalCopy = copyTitle.map( (eachArray)=>{
   //     return eachArray.title;
   // })

   // finalCopy.splice(20);
   // return finalCopy;

//};

//i keep on trying this and its giving me an error i have no idea why





// Iteration 4: All rates average - Get the average of all rates with 2 decimals

//this is fustrating rn

//functtion ratesAverage((a,b))
/*function ratesAverage(anArray){
    let finalValue = anArray.reduce((total, current)=>{
        return total + Number(current.rate);
    }, 0/anArray.length;
    return Number(finalValue.toFixed(2));
}*/
function ratesAverage(anArray){
    let finalValue = anArray.reduce((total, current)=>{
        return total + Number(current.rate);
        }, 0)/anArray.length;
        return Number(finalValue.toFixed(2));
        if (a.rate = undefined){
            return  null;
        }
       
 }



// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let dramas = array.filter((each)=>{
        for(i = 0; i < each.genre.length; i++){
          if(each.genre[i] === 'Drama'){
            return true;
          }
        }
      });
      if(dramas.length == 0){
          return 0;
      }else {
          return ratesAverage(dramas);
      }
   }





// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//function turnHoursToMinutes(anArray){
//}
function turnHoursToMinutes(anArray) {
    copyDuration = [...anArray]
var num = anArray;
var duration = (num / 60);
var rhours = Math.floor(duration);
var duration = (duration - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " duration(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));


// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearavg(){
    uuuu
}
// object destructuring

const band = {
    bandName : "Led Zeppelin",
    famousSong : "Stairway to heaven",
    year:1968,
    anotherFamousSong:"Kashmir"
}

// if i want to store these values from objects in the variables:

// 1) OLD School way : 
// const bandName = band.bandName;
// const famousSong = band.famousSong;

// 2) if we want the var names to be as same as the keyname:
const {bandName, famousSong} = band;
console.log(bandName, famousSong)

// if we want variable names to be of different name than that of the keynames:
const {bandName:var1, famousSong:famSong} = band;
console.log(var1 , famSong);

// 3) If we want rest of the things to be stored in array : 
const {bandName:var2, ...restParamsArray} = band;
console.log(restParamsArray)
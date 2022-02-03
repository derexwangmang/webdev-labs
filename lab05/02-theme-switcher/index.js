/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

// let currentFontSize = 1.4;

// const makeBigger = () => {
//    currentFontSize += 0.2;
//    document.querySelector(".content").style.fontSize = `${currentFontSize}em`;
//    document.querySelector("h1").style.fontSize = `${currentFontSize+1}em`;
// };

// const makeSmaller = () => {
//    currentFontSize -= 0.2;
//    document.querySelector(".content").style.fontSize = `${currentFontSize}em`;
//    document.querySelector("h1").style.fontSize = `${currentFontSize+1}em`;
// };

const toDefaultTheme = () => {
   document.querySelector("body").className = "";
};

const toOceanTheme = () => {
   document.querySelector("body").className = "ocean";
};

const toDesertTheme = () => {
   document.querySelector("body").className = "desert";
};

const toHighContrastTheme = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener('click', toDefaultTheme);
document.querySelector("#desert").addEventListener('click', toDesertTheme);
document.querySelector("#ocean").addEventListener('click', toOceanTheme);
document.querySelector("#high-contrast").addEventListener('click', toHighContrastTheme);


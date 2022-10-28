//Part One - Querying DOM Elements
// Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
// Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
function addStrikethrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = 'line-through';
}

addStrikethrough();

// Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
// Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

function setImage(id, url){

    let image = document.querySelector(`#${id}`);
    image.src = url;
}
setImage('image-1', 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg');
setImage('image-2', 'https://en.most-famous-paintings.com/Art.nsf/O/9CW6ZG/$File/John+Linnell-Landscape+With+A+Wood+And+A+Windmill+Under+Storm+Clouds.JPG');
setImage('image-3', 'https://c1.wallpaperflare.com/preview/442/618/508/night-view-city-light-sea.jpg' );

// This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
// Now use it to remove the first two items from that list. You'll need to call it twice!

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();


}
removeArgument();  //removes first item on list
removeArgument();  //removes second item on list

// Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
// Try using it to change the size of any text on the page

function changeFont(size, id){

    let getID = document.querySelector(`#${id}`);
    
    getID.style.fontSize = size;
}

changeFont('50spx', 'heading');
changeFont('50px', 'thing-2');
changeFont('200px', 'image-Area');

// Write a function that takes in a DOM element and appends it to the Arguments <ul>.
// Let's use it! Create an image element in Javascript and pass it into your function.

//element = Any DOM Element
function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}
let newImage = document.createElement('img');
newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj56ZMj8MLFTB01zmQsm4x8-HlwPvY9d5i8shtjrg2R2TjNNIoL3eOPNRtcqqzMLF8qV0&usqp=CAU';

addElementToList(newImage);

// Write a function that takes in an image element and modifies its height to be 30 pixels.
// Let's use it. Query an image element and then pass it into the function.

// function modifyImage(img){
//     let resizeImage = document.querySelector(`img`);
//     resizeImage.style.height = '480px';
// }

// modifyImage('img');

// function makeInvisible(element){
// //     let elem1  = document.querySelector(element);
// //     elem1.style.visibility = 'hidden';
// // }

function makeInvisible(element){
    element = document.querySelector(element);
    element.className = 'invisible'
}

// makeInvisible('h3');
// makeInvisible('h1');


// let newElement = '';
function createElement(text){
    let newItemLi = document.createElement('li');
    newItemLi.innerText = text;
    // newElement = newItemLi;
    // console.log(newElement);
    return newItemLi;
    
}  

let newVariable = createElement('Thank goodness for beer Thursday!');
addElementToList(newVariable);


function newHeader(size, text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    // headerItem = newHeader;
    // console.log(headerItem);
    return newHeader;
}

let newHeaderVariable = newHeader(3, 'This is my new header!');
addElementToList(newHeaderVariable);


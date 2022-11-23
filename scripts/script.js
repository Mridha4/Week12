// const clickButton = document.querySelector('.click-me');
//     // console.log(clickButton);
//     function clickHandler()
//     {
//         alert('You clicked me!')
//     }
//     clickButton.addEventListener('click', clickHandler);
// // above is a function that alerts user a message when button is clicked



// const clickButton = document.querySelector('.click-me');
//     // console.log(clickButton);
//     function clickHandler()
//     {
//         alert('You clicked me!')
//         clickButton.removeEventListener('click', clickHandler);
//     }
//     clickButton.addEventListener('click', clickHandler);
// // above only clicks one time because of removeEventListener inside the function.


const clickButton = document.querySelector('.click-me');
    // console.log(clickButton);
    function clickHandler()
    {
        alert('You clicked me!')
    }
    clickButton.addEventListener('click', clickHandler, {once:true});
// above does the same thing as the second one but uses a boolean. 

function changeBGPink()
{
    document.body.style.backgroundColor = 'pink';
    document.body.classList.add('pinkBG');
    // the second one uses css to change the background color
}
clickButton.addEventListener('click', changeBGPink);
// above changes the background color to pink

function changeText()
{
    if (clickButton.textContent === "Click Me!")
    {
        clickButton.textContent = "Clicked!";
    } else if (clickButton.textContent === "Clicked!") {
        clickButton.textContent = "Click Me!";
    }
}
clickButton.addEventListener('click', changeText);
// above changes thew buttons text



function updateImage(event)
{
    const image = document.querySelector("#cart");
    image.src = "images/cart.png";
    image.alt = 'Picture of Cart';
    image.width = '100';
    image.height = '100';

}
clickButton.addEventListener('click', updateImage);
// above is a function that spawns an image after button clicked



const buttonContainer = document.querySelector(".div-container");
buttonContainer.addEventListener('mouseover', changeBGGreen);

function changeBGGreen(e)
{
    e.target.style.backgroundColor = "green";
}

buttonContainer.addEventListener('click', changeButtonTextColor);
function changeButtonTextColor(e)
{
    e.target.style.color = "red";
}

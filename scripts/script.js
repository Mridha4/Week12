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


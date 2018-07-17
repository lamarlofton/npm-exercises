const $ = require('jquery');
let sayHello = () => {
    console.log('Hello');
}


sayHello();


$('body').html("This is me, modifiying the DOM");
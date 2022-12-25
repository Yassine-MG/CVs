let app = document.getElementById('app');
let progress = document.querySelector(".progress-bar")
let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>Web </strong>')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('<strong>Mobile</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start();

    let x = document.querySelectorAll(".progress-bar") ;
    let n;

     anime({
        targets: '.progress-bar',
        width: `100%`, // -> from '28px' to '100%',
        easing: 'easeInQuad',
        direction: 'alternate',
        loop: false
    });

    // anime({
    //     targets: '.progress-bar',
    //     width: "100%", // -> from '28px' to '100%',
    //     easing: 'easeInOutQuad',
    //     direction: 'alternate',
    //     loop: false
    //   });

// anime({
//   targets: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 1000 },
//     { value: 0, duration: 1000, delay:500 }
//   ],
//   rotate:{
//     value:'1turn', easing: 'easeInOutSine', delay:200},
//   loop: true
// });

var svgAttributes = anime({
  targets: '.st1',
d:[
  {value:'M184,534.8l270-11c0,0,37,3,37-29s14-358,14-358s-2-25-34-25s-298-6-298-6s-28,0-28,38s13,367,13,367S163,534.8,184,534.8z'},
],
fill: '#951b80',
  easing: 'easeInOutSine',
  direction:'alternate',
    duration: 1500,
    loop: true,
});
var svgAttributes = anime({
  targets: '.st4',
x1:'453', y1:'142.6', x2:'466.7', y2:'159.8',

  easing: 'easeInOutSine',
  direction:'alternate',
    duration: 1500,
    loop: true,
});
var svgAttributes = anime({
  targets: '.st5',
x1:'468.4', y1:'144.3', x2:'451.2', y2:'158.1',
  easing: 'easeInOutSine',
  direction:'alternate',
    duration: 1500,
    loop: true,
});

var svgAttributes = anime({
  targets: '.st2',
  cx:'459.3',
   cy:'152',
  r:'17.3',
fill: '#DE73FF',
  easing: 'easeInOutSine',
  direction:'alternate',
    duration: 1500,
    loop: true,
});




var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 1000},
    { value: 0, duration: 1000}
  ],
  rotate:{
    value:'1turn', easing: 'easeInOutSine'},
//Function parameter
    delay: function(el, i, l){return i * 1000},
    loop: false,
  //playOnLoad
  autoplay:false,
  complete: function() {
var complete = true;},
});

document.querySelector('#boxes .play').onclick = myFunction2();


function myFunction2(){
  playPause.restart;
};

document.querySelector('#boxes .pause').onclick =
playPause.play;

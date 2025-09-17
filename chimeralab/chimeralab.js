var body= [
  "image/body-badger.png",
  "image/body-cat.png",
  "image/body-crocodile.png",
  "image/body-goat.png",
  "image/body-monkey.png",
  "image/body-seal.png",
  "image/body-tiger.png",
  "image/body-wolf.png",
  "image/body-female.png",
  "image/body-male.png",
  "image/body-lion.png",
  "image/body-manticore.png",
  "image/body-horse.png"
]
var nameofbody = [
  "adge",
  "eow",
  "ocodi",
  "oa",
  "onk",
  "eal",
  "igri",
  "upu",
  "emina",
  "mascu",
  "eoion",
  "antic",
  "ava"
]

var head= [
  "image/head-cat.png",
  "image/head-crocodile.png",
  "image/head-goat.png",
  "image/head-monkey.png",
  "image/head-seal.png",
  "image/head-wolf.png",
  "image/head-male.png",
  "image/head-lion.png",
  "image/torso-male.png",
  "image/torso-female.png",
  "image/head-fish.png",
  "image/torso-snake.png",
  "image/head-horse.png"
]
var nameofhead = [
  "[Kitt",
  "[Croc",
  "[Capr",
  "[Monk",
  "[Seal",
  "[Wol",
  "[Mr.",
  "[Leo",
  "[Kent",
  "[Kent",
  "[Viss",
  "[Amph",
  "[Hipp"
]

var legs= [
  "image/legs-cat.png",
  "image/legs-crocodile.png",
  "image/legs-goat.png",
  "image/legs-tiger.png",
  "image/legs-male.png",
  "image/legs-lion.png",
  "image/legs-horse.png"
]
var nameoflegs = [
  "ttus",
  "dil",
  "pra",
  "ris",
  "et",
  "onn",
  "erd"
]

var tail= [
  "image/tail-cat.png",
  "image/tail-coatis.png",
  "image/tail-crocodile.png",
  "image/tail-snake.png",
  "image/tail-wolf.png",
  "image/tail-lion.png",
  "image/tail-spider.png",
  "image/downbody-snake2.png"
]
var nameoftail = [
  "élin]",
  "tis]",
  "ly]",
  "serp]",
  "up]",
  "lnn]",
  "ium]",
  "ena]"
];

var index = 0;

showImageofBody();
showImageofHead();
showImageofLegs();
showImageofTail();

var index = 0;
$(".bt_body").on("click",function(){
  showImageofBody();
});
$(".bt_head").on("click",function(){
  showImageofHead();
});
$(".bt_legs").on("click",function(){
  showImageofLegs();
});
$(".bt_tail").on("click",function(){
  showImageofTail();
});
$(".bt_all").on("click",function(){
  showImageofBody();
  showImageofHead();
  showImageofLegs();
  showImageofTail();
});

// var t = setInterval(showImageofBody,4000);
// var t = setInterval(showImageofHead,4000);
// var t = setInterval(showImageofLegs,4000);
// var t = setInterval(showImageofTail,4000);


function showImageofBody() {
  var index = Math.floor(Math.random() * body.length);
  // index = index + 1;
  var new_image_body = body[index];
  $("#body").attr("src",new_image_body);
  $(".tx_body").text( nameofbody[index] );
}

function showImageofHead() {
  var index = Math.floor(Math.random() * head.length);
  // index = index + 1;
  var new_image_head = head[index];
  $("#head").attr("src",new_image_head);
  $(".tx_head").text( nameofhead[index] );
}

function showImageofLegs() {
  var index = Math.floor(Math.random() * legs.length);
  // index = index + 1;
  var new_image_legs = legs[index];
  $("#legs").attr("src",new_image_legs);
  $(".tx_legs").text( nameoflegs[index] );
}

function showImageofTail() {
  var index = Math.floor(Math.random() * tail.length);
  // index = index + 1;
  var new_image_tail = tail[index];
  $("#tail").attr("src",new_image_tail);
  $(".tx_tail").text( nameoftail[index] );
}

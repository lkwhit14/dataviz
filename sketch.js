// An Array of Bubble objects
var bubbles;
// A Table object
var table;
var a = 0;
var bugs = [];

function preload() {
  table = loadTable("data.csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (var i=0; i<200; i++) {
    bugs.push(new Jitter());
  }
  loadData();
  img = loadImage("black.jpg");
  img1 = loadImage("time.jpg");
  img2 = loadImage("guns.jpg");
  img3 = loadImage("heart.jpg");
  img4 = loadImage("cancer.jpg");
  img5 = loadImage("war.jpg");
  img6 = loadImage("selfie.jpg");
  img7 = loadImage("elephant.jpg");
  img8 = loadImage("lawnmower.jpg");
  img9 = loadImage("mosquito.jpg");
  img10 = loadImage("airlines.jpg");
  img11 = loadImage("weather.jpg");
  img12 = loadImage("vendingmachines.jpg");
  img13 = loadImage("rollercoasters.jpg");
  img14 = loadImage("aliens.jpg");
  img15 = loadImage("sex.jpg");
  pic1 = loadImage("ctime.jpg");
  pic2 = loadImage("cguns.jpg");
  pic3 = loadImage("cheart.jpg");
  pic4 = loadImage("ccancer.jpg");
  pic5 = loadImage("cwar.jpg");
  pic6 = loadImage("cselfies.jpg");
  pic7 = loadImage("celephants.jpg");
  pic8 = loadImage("clawnmower.jpg");
  pic9 = loadImage("cmosquitos.jpg");
  pic10 = loadImage("cairlines.jpg");
  pic11 = loadImage("cweather.jpg");
  pic12 = loadImage("crollercoasters.jpg");
  pic13 = loadImage("clefty.jpg");
  pic14 = loadImage("caliens.jpg");
  pic15 = loadImage("csex.jpg");
}

function draw() {
  background(250);
  orbitControl();
  DrawChaos();
  pictures();
  // Display all bubbles
  for (var q=a; q < bubbles.length; q++) {
    bubbles[q].display();
  }
}

function keyPressed() {
  a=(a+1);
}

function DrawChaos() {
  push();
  if(a==0) {
    texture(img);
  } else if(a==1) {
    texture(img1);
  } else if(a==2) {
    texture(img2);
  } else if(a==3) {
    texture(img3);
  } else if(a==4) {
    texture(img4);
  } else if(a==5) {
    texture(img5);
  } else if(a==6) {
    texture(img6);
  } else if(a==7) {
    texture(img7);
  } else if(a==8) {
    texture(img8);
  } else if(a==9) {
    texture(img9);
  } else if(a==10) {
    texture(img10);
  } else if(a==11) {
    texture(img11);
  } else if(a==12) {
    texture(img12);
  } else if(a==13) {
    texture(img13);
  } else if(a==14) {
    texture(img14);
  } else if(a==15) {
    texture(img15);
  }
  translate(0,0,-150);
  plane(1600, 1000);
  translate(0,0,150);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].display();
  }
  pop();
}

function Jitter() {
  this.x = random(10, 50);
  this.y = random(10, 50);
  this.z = random(10, 50);
  this.leftright = random(-850,850);
  this.updown = random(-500,500);
  this.inout = random(-50,-150);
  this.spin = random(.01,.015)

  this.display = function() {
    push();
    translate(this.leftright, this.updown, this.inout)
    rotateZ(frameCount * this.spin);
    rotateX(frameCount * this.spin);
    rotateY(frameCount * this.spin);
    box(this.x, this.y, this.z);
    pop();
  }
}

function pictures() {
  translate(-400,-200);
  push();
  texture(img1);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(400,200);

  translate(-200,-200);
  push();
  texture(img2);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  translate(200,200);

  translate(0,-200);
  push();
  texture(img3);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(0,200);

  translate(200,-200);
  push();
  texture(img4);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-200,200);

  translate(400,-200);
  push();
  texture(img5);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-400,200);

  translate(-400,0);
  push();
  texture(img6);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(400,0);

  translate(-200,0);
  push();
  texture(img7);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(200,0);

  push();
  texture(img8);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();

  translate(200,0);
  push();
  texture(img9);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-200,0);


  translate(400,0);
  push();
  texture(img10);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-400,0);

  translate(-400,200);
  push();
  texture(img11);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(400,-200);

  translate(-200,200);
  push();
  texture(img12);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(200,-200);

  translate(0,200);
  push();
  texture(img13);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(0,-200);

  translate(200,200);
  push();
  texture(img14);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-200,-200);

  translate(400,200);
  push();
  texture(img15);
  plane(125, 125);
  translate(0,0,-30);
  push();
  fill(0);
  rotateZ(frameCount * -.4);
  plane(160,160);
  pop();
  pop();
  translate(-400,-200);
}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var x = row.get("x");
    var y = row.get("y");
    var z = row.get("z");
    var w = row.get("width");
    var h = row.get("height");
    var d = row.get("depth");
    var p = row.get("pin");
    var spin = random(.01,.015);
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(x, y, z, w, h, d, p, spin);
  }
}

class Bubble {
  constructor(x, y, z, w, h, d, p) {
    this.x = Number(x);
    this.y = Number(y);
    this.z = Number(z);
    this.width = Number(w);
    this.height = Number(h);
    this.depth = Number(d);
    this.pin = Number(p);
    this.spin = random(.01,.015);
  }

  // Display the Bubble
  display() {
    translate(this.x, this.y, this.z);
    push();
    rotateZ(frameCount * this.spin);
    rotateX(frameCount * this.spin);
    rotateY(frameCount * this.spin);
    if(this.pin==1) {
      texture(pic1);
    } else if(this.pin==2) {
      texture(pic2);
    } else if(this.pin==3) {
      texture(pic3);
    } else if(this.pin==4) {
      texture(pic4);
    } else if(this.pin==5) {
      texture(pic5);
    } else if(this.pin==6) {
      texture(pic6);
    } else if(this.pin==7) {
      texture(pic7);
    } else if(this.pin==8) {
      texture(pic8);
    } else if(this.pin==9) {
      texture(pic9);
    } else if(this.pin==10) {
      texture(pic10);
    } else if(this.pin==11) {
      texture(pic11);
    } else if(this.pin==12) {
      texture(pic12);
    } else if(this.pin==13) {
      texture(pic13);
    } else if(this.pin==14) {
      texture(pic14);
    } else if(this.pin==15) {
      texture(pic15);
    }

    box(this.width, this.height, this.depth);
    pop();
    translate(-(this.x),-(this.y),-(this.z));
  }
}
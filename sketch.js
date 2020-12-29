// Examples on different data types in JavaScript:

// 1) String:
// String: These are sequences of characters stored inside quotes.  
var string = "Greetings!"
console.log(string);

// 2) Number: Any mathematical number. 
var num = 28;
console.log(num);

//'Boolean values: True and false values.
var boolean = true;
console.log(boolean);

// Undefined: It means that no value has been assigned to a variable.
var object;
console.log(object);

// Null: It means nothing or empty.
var object = null;
console.log(object);

// An Array holding same data type: 
var arr1 = [1,2,3,4,5,6,7];
console.log(arr1);

// An array holding different data types:
var arr2 = ["Bhargavi",28,true];
console.log(arr2);

// An array storing list of arrays:
var arr3 = [[2000,1986],["Bhargavi","Shinde"],[true,false],[1,3,5,7,9]];
console.log(arr3[0][1]);

// Pushing a new value in an array = array.push();
// Removing the last values from an array = array.pop();

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];

var engine, world;

function preload(){
    bimg = loadImage("Galaxy.jpg");
}


function setup(){
    canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,787,480,20);

    division1 = new Divisions(80,626,5,300);
    division2 = new Divisions(160,626,5,300);
    division3 = new Divisions(240,626,5,300);
    division4 = new Divisions(320,626,5,300);
    division5 = new Divisions(400,626,5,300);
    division6 = new Divisions(475,626,5,800);
    division7 = new Divisions(4,626,5,800);

    plinko1 = new Plinko(50,50,10);
    plinko2 = new Plinko(100,50,10);
    plinko3 = new Plinko(150,50,10);
    plinko4 = new Plinko(200,50,10);
    plinko5 = new Plinko(250,50,10);
    plinko6 = new Plinko(300,50,10);
    plinko7 = new Plinko(350,50,10);
    plinko8 = new Plinko(400,50,10);
    plinko9 = new Plinko(450,50,10);
    
    plinko10 = new Plinko(50,100,10);
    plinko11 = new Plinko(100,100,10);
    plinko12 = new Plinko(150,100,10);
    plinko13 = new Plinko(200,100,10);
    plinko14 = new Plinko(250,100,10);
    plinko15 = new Plinko(300,100,10);
    plinko16 = new Plinko(350,100,10);
    plinko17 = new Plinko(400,100,10);
    plinko18 = new Plinko(450,100,10);

    plinko19 = new Plinko(50,150,10);
    plinko20 = new Plinko(100,150,10);
    plinko21 = new Plinko(150,150,10);
    plinko22 = new Plinko(200,150,10);
    plinko23 = new Plinko(250,150,10);
    plinko24 = new Plinko(300,150,10);
    plinko25 = new Plinko(350,150,10);
    plinko26 = new Plinko(400,150,10);
    plinko27 = new Plinko(450,150,10);
    
    plinko28 = new Plinko(50,200,10);
    plinko29 = new Plinko(100,200,10);
    plinko30 = new Plinko(150,200,10);
    plinko31 = new Plinko(200,200,10);
    plinko32 = new Plinko(250,200,10);
    plinko33 = new Plinko(300,200,10);
    plinko34 = new Plinko(350,200,10);
    plinko35 = new Plinko(400,200,10);
    plinko36 = new Plinko(450,200,10);

    plinko37 = new Plinko(50,250,10);
    plinko38 = new Plinko(100,250,10);
    plinko39 = new Plinko(150,250,10);
    plinko40 = new Plinko(200,250,10);
    plinko41 = new Plinko(250,250,10);
    plinko42 = new Plinko(300,250,10);
    plinko43 = new Plinko(350,250,10);
    plinko44 = new Plinko(400,250,10);
    plinko45 = new Plinko(450,250,10);

    plinko46 = new Plinko(50,300,10);
    plinko47 = new Plinko(100,300,10);
    plinko48 = new Plinko(150,300,10);
    plinko49 = new Plinko(200,300,10);
    plinko50 = new Plinko(250,300,10);
    plinko51 = new Plinko(300,300,10);
    plinko52 = new Plinko(350,300,10);
    plinko53 = new Plinko(400,300,10);
    plinko54 = new Plinko(450,300,10);

    plinko55 = new Plinko(250,350,10);
    plinko56 = new Plinko(300,350,10);
    plinko57 = new Plinko(350,350,10);
    plinko58 = new Plinko(400,350,10);
    plinko59 = new Plinko(450,350,10);
    plinko60 = new Plinko(50,350,10);
    plinko61 = new Plinko(100,350,10);
    plinko62 = new Plinko(150,350,10);
    plinko63 = new Plinko(200,350,10);
    

}

function draw(){ 
    background(bimg);
    Engine.update(engine);

    textSize(50);
    fill(105,105,105);
    text("Plinko!",170,450);

    if(frameCount % 60 === 0){
        particles.push(new Particle(random(10,470),0,10));
    }

    ground.display();

    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();

    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();
    plinko9.display();

    plinko10.display();
    plinko11.display();
    plinko12.display();
    plinko13.display();
    plinko14.display();
    plinko15.display();
    plinko16.display();
    plinko17.display();
    plinko18.display();

    plinko19.display();
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();
    plinko26.display();
    plinko27.display();
    
    plinko28.display();
    plinko29.display();
    plinko30.display();
    plinko31.display();
    plinko32.display();
    plinko33.display();
    plinko34.display();
    plinko35.display();
    plinko36.display();
    plinko37.display();
    plinko38.display();
    plinko39.display();
    plinko40.display();

    plinko41.display();
    plinko42.display();
    plinko43.display();
    plinko44.display();
    plinko45.display();
    plinko46.display();
    plinko47.display();
    plinko48.display();
    plinko49.display();
    
    plinko50.display();
    plinko51.display();
    plinko52.display();
    plinko53.display();
    plinko54.display();
    plinko55.display();
    plinko56.display();
    plinko57.display();
    plinko58.display();
    plinko59.display();

    plinko60.display();
    plinko61.display();
    plinko62.display();
    plinko63.display();


    for(var j = 0; j<particles.length;j++){
        particles[j].display();
    } 
    
}
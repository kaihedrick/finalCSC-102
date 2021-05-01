function start(){
    document.getElementById("data").rows["seconds"].innerHTML = "READING data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true; 
    document.getElementById("stopButton").disabled = false;    
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false; 
    document.getElementById("stopButton").disabled = true; 
    
}

function getData(){
    var loadedData = loadData();
    return loadedData;

}
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
function checkCreds() {
    //first the fName input into first name var
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    document.getElementById("loginStatus").innerHTML = fullName;
    //name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name String has too many characters!";
    }
    else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Please Enter Name!";
    }
    //badge name validation
    if (badgeNum > 999 || badgeNum < 1) {
        document.getElementById("loginStatus").innerHTML = "Badge  number is not applicable!";
    }
    if (fullName.length < 20 && fullName.length > 1 && badgeNum < 1000 && badgeNum > 0) {
        alert("Access Granted, welcome " + fullName);
        location.replace("index.html");
    }

}


function countdownTimer() {
    var timer = 50;

    //start at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 000);


    //change to 45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 15000);

    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 16000);

    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 17000);

    setTimeout(function () {
        document.write(numb);
        timer = timer - 1;
    }, 18000);

    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Malfunction!!";
    }, 19000);
}
//random number gen using math libraries to create a positive integer between the values 1-6
//math ceil() function rounds up the number to the next largest integer
function ranNumGen() {
    var numb = Math.ceil(Math.random() * 7);
    document.getElementById("RndNum").innerHTML = numb;
}

//play craps function from https://synchronic.uat.edu/courses/3843/assignments/137165?return_to=https%3A%2F%2Fsynchronic.uat.edu%2Fcalendar%23view_name%3Dmonth%26view_start%3D2021-02-14
function play() {
    //create a die1 variable and assigns 1-6
    var die1 = Math.ceil(Math.random() * 6);

    var die2 = Math.ceil(Math.random() * 6);
    //sum is the addition of die 1 and 2
    var sum = die1 + die2;
    //printing out die1 results
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    //printing out die 2 results
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    //printing the sum (die 1+ die 2)
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;

    //if and then statements which clarify each die's numbers
    //sum of dice not equal to 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "Craps you lose!";
    }
    //if the dice are equal to each other then you win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    //else you need to try again
    else {
        document.getElementById("finalRes").innerHTML = "push, please try again";
    }

}

//efficient countdown timer function using a for loop
function betterCtdnTimer() {
    //build countdown timer using for loop, I am going 20-0 by 2's 
    var countDn = 20;
    for (var j = 0; i <= 10; j++) {
        setTimeout(function () {
            if (countDn == 0)
            {
                document.getElementById("ctdnTimer").innerHTML = "BlastOff!!!!";
            } else if (countDn < 10){
                document.getElementById("ctdnTimer").innerHTML = 
                "Warning Less than 1/2 way to laaunch, time left = " + countDn;
            } else{
                document.getElementById("ctdnTimer").innerHTML = countDn;
            }
            countDn = countDn - 2;
        }, i * 2000);
    }

}

function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        cssTemp_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.cssTemp_temp = cssTemp_temp
        this.bmpSensor_temp = bmpSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX= accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    } 
}



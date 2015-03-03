//Initialize Stopwatch Variables - Need to be global
var myStopwatch, time, clocktimer, stopwatchRunning;

//On Document-Load
$(document).ready(function(){
    //Load Sets and Cases and then do other stuff
    $.getScript("./js/obj_store.js", function(){    
        //Loop through Set-Names to populate thesetSelect Element
        var setSelect = document.getElementById("setSelect");
        Object.keys(sets).forEach(function(setkey){
            var set = sets[setkey];
            var setOption = document.createElement("option");
            setOption.text = set.name;
            setOption.value = set.name;
            setSelect.appendChild(setOption);
        });

        //Update selected set
        setInfo.name = $("#setSelect").val();

        //Initiate FancySelect
        $("#setSelect").fancySelect();
        $("#caseSelect").fancySelect();
        
        //Initiate Sidr
        $("#settingsBtn").sidr({
            source: "#settingsSidr"
        });
        
        //Call setSelectChange to populate Case-Select-Box
        setSelectChange();
        
        //On Timer-Checkbox change, activate or deactivate timer
        $("#timerCheckbox").change(function(){
            alert("123");
            if(this.is(":checked")){
                $("#timer").css("display", "block");
                myStopwatch = new stopwatch();
                time = document.getElementById("time");
            }
        });
    });
    
    
});

//Object to store set info
var setInfo = {
    name: ""
}

//Object to store case info
var caseInfo = {
    src : "",
    name: "",
    algs: [],
    auf: ""
}

//Boolvar for Case-Infobox Opened||Closed
var caseInfoOpened = false;

//Handle Keypresses - Trigger functions
$(window).keydown(function(e){
    //Enable Space-Triggered Case-Call
    if(e.keyCode==32 || e.which==32){
        getCase(); 
    }
    else if(e.ctrlKey){
        if(stopwatchRunning){
            stopStopwatch();
            stopwatchRunning = false;
        }
        else{
            startStopwatch();
            stopwatchRunning = true;
        }
        
    }
});

//Function to get a random Case
//Triggered on "Get Random Case" Button Click
function getCase(){
    //Get Selected Set
    var setSelect = setInfo.name;
    
    //Get Selected Case
    var caseSelect = document.getElementById("caseSelect");
    var selected = caseSelect.options[caseSelect.selectedIndex].value;
    
    //If any case could be displayed select random case-set
    if(selected == "any"){
        var keys = Object.keys(cases[setSelect]);
        
        //Generate weighted array of sets for fair probability based on number of cases
        var weightedSets = [];
        var setLoopCount = 0;
        while(setLoopCount<keys.length){
            for(var i=0; i<Object.keys(cases[setSelect][Object.keys(cases[setSelect])[setLoopCount]]).length;i++){
                weightedSets.push(Object.keys(cases[setSelect])[setLoopCount]);
            }
            setLoopCount++;
        }
        
        //Select random entry of weighted array
        selected = weightedSets[Math.floor(weightedSets.length*Math.random())];
    }
    
    //Generate random Case Number
    var numCases = Object.keys(cases[setSelect][selected]).length;
    var rand = Math.floor(Math.random()*numCases+1);
    
    //Evaluate final case data
    var finalCaseSrc = cases[setSelect][selected][rand]["src"];
    var finalCaseName = setSelect + "#" + selected + rand;
    var finalCaseAlgs = cases[setSelect][selected][rand]["alg"];
    var finalCaseAUF = "none";
    
   //Add AUF if option selected
    if($("#sidr-id-aufCheckbox").is(":checked")){
        //Generate AUF-scramble
        var rand = Math.floor(Math.random()*4);
        var aufs = rand==0?0:rand==1?"U":rand==2?"U2":rand==3?"U'":0;
        
        //Implement AUF-scramble to img
        finalCaseSrc += "&alg="+aufs;
        
        //Generate AUF Solution by inversing the AUF-Scramble
        var auf = aufs==0?"none":aufs=="U"?"U'":aufs=="U2"?"U2":aufs=="U'"?"U":0;
        finalCaseAUF = auf;
    }
    
    //if-else to prevent displaying the same case twice
    if(finalCaseSrc == caseInfo["src"]){
        getCase();
    }
    else{    
        //Display final case image
        document.getElementById("caseImg").src = finalCaseSrc;

        //Assign final case data to caseInfo Object
        caseInfo["src"] = finalCaseSrc;
        caseInfo["name"] = finalCaseName;
        caseInfo["algs"] = finalCaseAlgs;
        caseInfo["auf"] = finalCaseAUF;

        //Call getCaseInfo to update case info
        if(caseInfoOpened) getCaseInfo(true);
    }
}

//Function to display information about current case
//Triggered on "Get Case Info" Button Click
function getCaseInfo(stay){
    if(caseInfoOpened == true && stay!=true){
        caseInfoOpened = false;
        document.getElementById("getCaseInfoContainer").style.display = "none";
    }
    
    else{    
        document.getElementById("getCaseInfoName").innerHTML = caseInfo["name"];
        
        document.getElementById("getCaseInfoAlgs").innerHTML = caseInfo["algs"].join("<br>");
        
        document.getElementById("getCaseInfoAUF").innerHTML = caseInfo["auf"];
        document.getElementById("getCaseInfoContainer").style.display = "inline-block";
        caseInfoOpened = true;
    }
}

//Function to update caseSelect Element
//Triggered on setSelect change
function setSelectChange(){
    //Delete Fancy-Select Element and create a new Select Element
    $("#caseSelect").parent().remove();
    $("#setSelect").parent().after('<select class="basic selectBig" name="caseSelect" id="caseSelect"></select>');
    
    //Update setInfo
    setInfo.name = $("#setSelect").val();
    
    //Iterate through each caseset and add them to the select object
    Object.keys(sets).forEach(function(setkey){
        if(sets[setkey].name == setInfo.name){
            Object.keys(sets[setkey].cases).forEach(function(casekey){
                var setcase = sets[setkey].cases[casekey];
                var caseOption = document.createElement("option");
                caseOption.text = setcase[0];
                caseOption.value = setcase[1];
                $("#caseSelect").append(caseOption);
                
            });
        }
    });
    
    //Apply Fancy-Select to the caseSelect Element
    $("#caseSelect").fancySelect();
}

//Main Stopwatch Object-Function
var	stopwatch = function() {
    // Private vars
    var	startAt = 0; // Time of last start / resume. (0 if not running)
    var	lapTime = 0; // Time on the clock when last stopped in milliseconds

    var	now	= function() {
    return (new Date()).getTime();
    };
    // Public methods
    // Start or resume
    this.start = function() {
    startAt = startAt ? startAt : now();
    };

    // Stop or pause
    this.stop = function() {
    // If running, update elapsed time otherwise keep it
    lapTime = startAt ? lapTime + now() - startAt : lapTime;
    startAt = 0; // Paused
    };

    // Reset
    this.reset = function() {
    lapTime = startAt = 0;
    };

    // Duration
    this.time = function() {
        return lapTime + (startAt ? now() - startAt : 0);
    };
}; 

//Function to trim the time correctly
function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
} 

//Function to format the time from just miliseconds to hours, minutes and seconds
function formatTime(time) {
    var h = m = s = ms = 0;
    var newTime = '';

    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );
    ms = time % 1000;

    newTime = pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
} 

//Update the time of the stopwatch
function updateStopwatch(){
    time.innerHTML = formatTime(myStopwatch.time());
}

//Start the Stopwatch
function startStopwatch(){
    clocktimer = setInterval("updateStopwatch()", 1);
    myStopwatch.start();
}

//Stop the Stopwatch
function stopStopwatch(){
    myStopwatch.stop();
    clearInterval(clocktimer);
}

//Reset the time of the stopwatch to 0
function resetStopwatch(){
    stopStopwatch();
    myStopwatch.reset();
    updateStopwatch();
}
//Initiate Fancy-Select
$('.basic').fancySelect();

$("#settingsBtn").sidr({
    source: "#settingsSidr"
});

//Objects with Case-Infos
var cases = {
    s: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20U%20R%20U2%20R%27",
            alg: "R U R' U R U2 R'"
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R2%20F%27%20R%20U2%20R%27%20U%27%20R2",
            alg: "y' R' F R2 F' R U2 R' U' R2"
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%27%20F%27%20R%20U2%20R%20U2%20R%27",
            alg: " F R' F' R U2 R U2 R'"
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%20L%27%20U%27%20L",
            alg: " R U' R' F L' U' L"
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R%20U%27%20R%27%20U%20R%27%20U%27%20y%20R%20U%27%20R%27",
            alg: "y2 R U' R U' R' U R' U' y R U' R'"
        },
        
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=L%27%20U2%20L%20U2%20L%20F%27%20L%27%20F",
            alg: "L' U2 L U2 L F' L' F"
        }
    },
    
    as: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%27%20R%20U%27%20R%27%20U2%20R",
            alg: "R' U' R U' R' U2 R"
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20U%27%20R%20U%27%20R%27%20U%20R%27%20F%20R%20F%27%20U%20R",
            alg: "R U2 R' F R' F' R U' R U' R'"
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%27%20L%20F%20L%27%20U2%20L%27%20U2%20L",
            alg: "y2 F' L F L' U2 L' U2 L"
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20L%20U%27%20R%20U%20L%27",
            alg: "y2 L' U L F' R U R'"
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R%27%20D%20R%20U%27%20R%20U%20R%27%20U%20R%27",
            alg: "y R U R' D R U' R U R' U R'"
        },
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U2%20R%27%20U2%20R%27%20F%20R%20F%27",
            alg: "y2 R U2 R' U2 R' F R F'"
        }
    },
    
    pi: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%20U%20R%27%20U%27%20R%20U%20R%27%20U%27%20F%27",
            alg: "F R U R' U' R U R' U' F'"
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20U%27%20R%27%20F%20R%20F%27%20R%20U%27%20R%27%20U2%20R",
            alg: "y' R' U' R' F R F' R U' R' U2 R"
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%20R%27%20F%20R%20U%20R%27%20F%20R",
            alg: "R U' R' F R' F R U R' F R"
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%27%20R%20U%27%20R%27%20U%20R%27%20F%20R2%20F%27",
            alg: "y' R U' R U' R' U R' F R2 F'"
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U2%20R%27%20U%27%20R%20U%20R%27%20U2%20R%27%20F%20R%20F%27",
            alg: "R U2 R' U' R U R' U2 R' F R F'"
        },
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F2%20R%20F%27%20U2%20R%20U%27%20R%27%20U%27%20F",
            alg: "R' F2 R F' U2 R U' R' U' F"
        }
    },
    
    u: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%20U%20R%27%20U%27%20F%27",
            alg: "y' F R U R' U' F'"
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%27%20L%20F%27%20L%27%20F2%20U%27%20R%20U%20R%27",
            alg: "y R U' R U' R U' R' U R' U R'"
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20z%27%20U2%20R%27%20U%27%20R2%20U%27%20R%27%20U%27%20R%20U%27%20R%27%20U%27%20x2",
            alg: "y' z' U2 R' U' R2 U' R' U' R U' R' U' x2"
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=x%20R%20U%27%20R%20U%27%20R%27%20U%20L%27%20U%27%20L%20x2",
            alg: "x R U' R U' R' U L' U' L x2"
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U2%20R%27%20U%20R%27%20F2%20R%20F%27%20R%27%20F2%20R",
            alg: "y2 R U2 R' U R' F2 R F' R' F2 R"
        },
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20R%27%20F%20R%20F%27%20R%20U2%20R%27%20U%20R",
            alg: "y2 R2 U R' U' R2 U' y L' U2 L"
        }
},
    
    l: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%27%20R%20U%20R%27%20U%27%20R%27%20F%20R",
            alg: "y2 F' R U R' U' R' F R"
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20F%20R%27%20F%27%20R%20U%20R%20U%27%20R%27",
            alg: "y F R' F' R U R U' R'"
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20L%27%20U2%20L%20F%27%20R%27%20F2%20R2%20U%27%20R%27",
            alg: "y' L' U2 L F' R' F2 R2 U' R'"
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%27%20U%20R%27%20U2%20R%20U%27%20R%27%20U%20R%20U%27%20R2",
            alg: "y2 R' U R' U2 R U' R' U R U' R2"
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20x%27%20R%27%20U2%20R%27%20U%27%20R%20U2%20R%27%20F%20R2%20x",
            alg: "y R U2 R' U' y' R2 U' R' U R2"
        },
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F%27%20R%20U%20R%27%20U%27%20R%27%20F%20R2%20U%27%20R%27%20U2%20R",
            alg: "R' F' R U R' U' R' F R2 U' R' U2 R"
        }
    },
    
    t: {
        1: {
            alg: "y' R U R' U' R' F R F'",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20U%27%20R%27%20F%20R%20F%27"
        },
        
        2: {
            alg: "y' F R F' R U R' U' R'",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%20F%27%20R%20U%20R%27%20U%27%20R%27",
        },
        
        3: {
            alg: "F U' R U2 R' U' F2 R U R'",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20U%27%20R%20U2%20R%27%20U%27%20F2%20R%20U%20R%27"
        },
        
        4: {
            alg: "y R' U R' F U' R U F2 R2",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20U%20R%27%20F%20U%27%20R%20U%20F2%20R2"
        },
        
        5: {
            alg: "y2 F R U R' U' R U' R' U' R U R' F'",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%20R%20U%20R%27%20U%27%20R%20U%27%20R%27%20U%27%20R%20U%20R%27%20F%27"
        },
        
        6: {
            alg: "R' U R U2 R2 F R F' R",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20R%20U2%20R2%20F%20R%20F%27%20R"
        }
},
    
    h: {
        1: {
            alg: "y R2 U2 R U2' R2'",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R2%20U2%20R%20U2%27%20R2%27"
        },
        
        2: {
            alg: "y x' U2 R U2 R2 F2 R U2 x",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20x%27%20U2%20R%20U2%20R2%20F2%20R%20U2%20x"
        },
        
        3: {
            alg: "R U R' U R U R' F R' F' R",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20U%20R%20U%20R%27%20F%20R%27%20F%27%20R"
        },
        
        4: {
            alg: "y' R' U2 R y R' U R' U' R U' R",
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=100&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R2%20U%27%20R2%27%20U%27%20R2%20U%20R2%27%20F%27"
        }
    }
};

//Object to store case info
var caseInfo = {
    src : "",
    name: "",
    alg: "",
    auf: ""
}

//Boolvar for Case-Infobox Opened||Closed
var caseInfoOpened = false;

//Enable Space-Triggered Case-Call
$(window).keypress(function(e){
    if(e.keyCode==32 || e.which==32){
        getCase(); 
    }
});

//Function to get a random Case
//Triggered on "Get Random Case" Button Click
function getCase(){
    //Get Selected Case
    var caseSelect = document.getElementById("setSelect");
    var selected = caseSelect.options[caseSelect.selectedIndex].value;
    
    //If any case could be displayed select random case-set
    if(selected == "any"){
        var keys = Object.keys(cases);
        selected = keys[Math.floor(keys.length*Math.random())];
    }

    //Generate random Case Number
    var numCases = selected=="h"?4:6;
    var rand = Math.floor(Math.random()*numCases+1);
    
    //Evaluate final case data
    var finalCaseSrc = cases[selected][rand]["src"];
    var finalCaseName = selected + rand;
    var finalCaseAlg = cases[selected][rand]["alg"];
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
        caseInfo["alg"] = finalCaseAlg;
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
        document.getElementById("getCaseInfoAlg").innerHTML = caseInfo["alg"];
        document.getElementById("getCaseInfoAUF").innerHTML = caseInfo["auf"];
        document.getElementById("getCaseInfoContainer").style.display = "block";
        caseInfoOpened = true;
    }
}
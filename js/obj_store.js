//Object with Set-Info
var sets = {
    cll:{
        name: "cll",
        cases: {
            1: ["sune", "s"],
            2: ["anti-sune", "as"],
            3: ["pi", "pi"],
            4: ["u", "u"],
            5: ["l", "l"],
            6: ["t", "t"],
            7: ["h", "h"],
            8: ["any case", "any"]
        }
    },
    
    eg1:{
        name: "eg1",
        cases: {
            1: ["sune", "s"],
            2: ["anti-sune", "as"],
            3: ["pi", "pi"],
            4: ["u", "u"],
            5: ["l", "l"],
            6: ["t", "t"],
            7: ["h", "h"],
            8: ["any case", "any"]
        }
    },
    
    eg2:{
        name: "eg2",
        cases: {
            1: ["sune", "s"],
            2: ["anti-sune", "as"],
            3: ["pi", "pi"],
            4: ["u", "u"],
            5: ["l", "l"],
            6: ["t", "t"],
            7: ["h", "h"],
            8: ["any case", "any"]
        }
    },
    
    wv: {
        name: "wv",
        cases: {
            1: ["3 Corners Correct","ThreeCorners"],
            2: ["2 Corners Correct","TwoCorners"],
            3: ["1 Corner Correct","OneCorner"],
            4: ["0 Corners Correct","ZeroCorners"],
            5: ["Any Case", "any"]
        }
    }
}

//Object with Case-Infos
var cases = {
    cll: {
        s: {
        1: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20U%20R%20U2%20R%27",
            alg: ["R U R' U R U2 R'"]
        },
        
        2: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R2%20F%27%20R%20U2%20R%27%20U%27%20R2",
            alg: ["y' R' F R2 F' R U2 R' U' R2"]
        },
        
        3: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%27%20F%27%20R%20U2%20R%20U2%20R%27",
            alg: ["F R' F' R U2 R U2 R'"]
        },
        
        4: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%20L%27%20U%27%20L",
            alg: ["R U' R' F L' U' L", "R U' L' U R' U' L"]
        },
        
        5: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R%20U%27%20R%27%20U%20R%27%20U%27%20y%20R%20U%27%20R%27",
            alg: ["y2 R U' R U' R' U R' U' y R U' R'", "y' R' U' R D' R' U R' U' R U' R"]
        },
        
        
        6: {
            src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=L%27%20U2%20L%20U2%20L%20F%27%20L%27%20F",
            alg: ["L' U2 L U2 L F' L' F"]
        }
    },
    
        as: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%27%20R%20U%27%20R%27%20U2%20R",
                alg: ["R' U' R U' R' U2 R"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20U%27%20R%20U%27%20R%27%20U%20R%27%20F%20R%20F%27%20U%20R",
                alg: ["R U2 R' F R' F' R U' R U' R'", "y' R' U' R U' R' U R' F R F' U R"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%27%20L%20F%20L%27%20U2%20L%27%20U2%20L",
                alg: ["y2 F' L F L' U2 L' U2 L"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20L%20U%27%20R%20U%20L%27",
                alg: ["y2 L' U L F' R U R'", "R' U L U' R U L'"]
            },
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U2%20R%27%20U2%20R%27%20F%20R%20F%27",
                alg: ["y2 R U2 R' U2 R' F R F'", "y2 L' U2 L F' R' F2 R U' R' F R F'"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R%27%20D%20R%20U%27%20R%20U%20R%27%20U%20R%27",
                alg: ["y R U R' D R U' R U R' U R'"]
            }
},

        pi: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%20U%20R%27%20U%27%20R%20U%20R%27%20U%27%20F%27",
                alg: ["F R U R' U' R U R' U' F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20U%27%20R%27%20F%20R%20F%27%20R%20U%27%20R%27%20U2%20R",
                alg: ["y' R' U' R' F R F' R U' R' U2 R","R2 U R' U' F R F' R U' R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%20R%27%20F%20R%20U%20R%27%20F%20R",
                alg: ["R U' R' F R' F R U R' F R", "R U' R' U' R U R' U' L R U' R' U R'", "R U' R' U' R U R' U' x' R2 U' R' U R'", "y2 L U' R' U L' U R U R' U R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%27%20R%20U%27%20R%27%20U%20R%27%20F%20R2%20F%27",
                alg: ["y' R U' R U' R' U R' F R2 F'", "y' R' F R U F U' R U R' U' F'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U2%20R%27%20U%27%20R%20U%20R%27%20U2%20R%27%20F%20R%20F%27",
                alg: ["R U2 R' U' R U R' U2 R' F R F'", "R U R' U' R' F R2 U R' U' R U R' U' F'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F2%20R%20F%27%20U2%20R%20U%27%20R%27%20U%27%20F",
                alg: ["R' F2 R F' U2 R U' R' U' F", "L' U2 L F' U2 L F' L' U' F"]
            }
        },

        u: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%20U%20R%27%20U%27%20F%27",
                alg: ["y' F R U R' U' F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%27%20L%20F%27%20L%27%20F2%20U%27%20R%20U%20R%27",
                alg: ["y R U' R U' R U' R' U R' U R'", "R U' R' F' L F' L' F2 U' R U R'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20z%27%20U2%20R%27%20U%27%20R2%20U%27%20R%27%20U%27%20R%20U%27%20R%27%20U%27%20x2",
                alg: ["y' z' U2 R' U' R2 U' R' U' R U' R' U' x2", "y' L U2 R' U F' R U2 R' U R' F R", "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=x%20R%20U%27%20R%20U%27%20R%27%20U%20L%27%20U%27%20L%20x2",
                alg: ["x R U' R U' R' U L' U' L x2", "R2 F R F' R' F2 R U R' F R2", "y' F U' R U R' U' y' R' U2 R U' R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U2%20R%27%20U%20R%27%20F2%20R%20F%27%20R%27%20F2%20R",
                alg: ["y2 R U2 R' U R' F2 R F' R' F2 R"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20R%27%20F%20R%20F%27%20R%20U2%20R%27%20U%20R",
                alg: ["y2 R2 U R' U' R2 U' y L' U2 L", "R' U R' F R F' R U2 R' U R"]
            }
},

        l: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%27%20R%20U%20R%27%20U%27%20R%27%20F%20R",
                alg: ["y2 F' R U R' U' R' F R", "R U R U' L' U R' U'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20F%20R%27%20F%27%20R%20U%20R%20U%27%20R%27",
                alg: ["y F R' F' R U R U' R'", "y x U R' U' L U R U' R'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20L%27%20U2%20L%20F%27%20R%27%20F2%20R2%20U%27%20R%27",
                alg: ["y' L' U2 L F' R' F2 R2 U' R'", "y' L' U2 R U' R' U2 L R U' R'", "y R U2 R2' F R F' R U2' R'"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%27%20U%20R%27%20U2%20R%20U%27%20R%27%20U%20R%20U%27%20R2",
                alg: ["y2 R' U R' U2 R U' R' U R U' R2"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20x%27%20R%27%20U2%20R%27%20U%27%20R%20U2%20R%27%20F%20R2%20x",
                alg: ["y R U2 R' U' y' R2 U' R' U R2", "y2 x' R' U2 R' U' R U2 R' F R2 x"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F%27%20R%20U%20R%27%20U%27%20R%27%20F%20R2%20U%27%20R%27%20U2%20R",
                alg: ["R' F' R U R' U' R' F R2 U' R' U2 R", "y R' U' R U2 R' F R' F' R U' R"]
            }
        },

        t: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20U%27%20R%27%20F%20R%20F%27",
                alg: ["y' R U R' U' R' F R F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%20F%27%20R%20U%20R%27%20U%27%20R%27",
                alg: ["y' F R F' R U R' U' R'", "y L' U' L U L F' L' F"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20U%27%20R%20U2%20R%27%20U%27%20F2%20R%20U%20R%27",
                alg: ["F U' R U2 R' U' F2 R U R'"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20U%20R%27%20F%20U%27%20R%20U%20F2%20R2",
                alg: ["y R' U R' F U' R U F2 R2", "R U' R U' R U R' U R' U R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%20R%20U%20R%27%20U%27%20R%20U%27%20R%27%20U%27%20R%20U%20R%27%20F%27",
                alg: ["y2 F R U R' U' R U' R' U' R U R' F'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%20R%20U2%20R2%20F%20R%20F%27%20R",
                alg: ["R' U R U2 R2 F R F' R"]
            }
        },

        h: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R2%20U2%20R%20U2%27%20R2%27",
                alg: ["y R2 U2 R U2' R2'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20x%27%20U2%20R%20U2%20R2%20F2%20R%20U2%20x",
                alg: ["y x' U2 R U2 R2 F2 R U2 x", "y F2 R' F2 R2 U2 R' F2", "y F R U R' U' R U R' U' R U R' U' F'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20U%20R%20U%20R%27%20F%20R%27%20F%27%20R",
                alg: ["R U R' U R U R' F R' F' R", "y R U' R' F U2 R2 F R U' R", "R U R' U R U L' U R' U' L"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R2%20U%27%20R2%27%20U%27%20R2%20U%20R2%27%20F%27",
                alg: ["y' R' U2 R y R' U R' U' R U' R", "F R2 U' R2' U' R2 U R2' F'", "F' L2 U L2 U L2 U' L2 F"]
            }
}
    },
    
    eg1: {
        s: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=z%27%20R%27%20U%27%20R%20U2%20x%27%20U2%20R%20U%27%20z",
                alg: ["y' F' L U2 F2 R U' x'","z' R' U' R U2 x' U2 R U' z"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20F2%20U%20F%20R%20U%20R%27",
                alg: ["y' R' F R2 F' R U2 R' U' R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R%20U2%20R%20U%27%20R2%20F2%20R%20F%27",
                alg: ["y' R' F R U2 R U' R2 F2 R F'", "y2 F R' F' R U R' F' R2 U R'"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%20U%27%20R%20U2%20R%27%20F2%20R%27%20F%20R",
                alg: ["F' U R U' R' U F R U R'", "y2 F U' R U2 R' F2 R' F R"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20U%20R%20U%27%20R%27%20U%20F%20R%20U%27%20R%27",
                alg: ["y R U' R' U R U' R' U F R U' R'"]
            },


            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F%20R2%20U%27%20R%27%20U%20L%20F%27%20L%27%20F",
                alg: ["R' F R2 U' R' U L F' L' F"]
            }
    },
    
        as: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20B%20U%27%20R2%20F2%20U%27%20F%20x2",
                alg: ["y' B U' R2 F2 U' F x2", "y R' F R2 U R' F' U' R U' R'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20F%27%20U%27%20F2%20R%20U%27%20R%27",
                alg: ["y R U' R' F' U' F2 R U' R'", "R U' F2 R U2 R U' F"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20L%20F%20L%27%20U%27%20R%20U%20R%27%20L%27%20U%27%20L",
                alg: ["F' L F L' U' R U R' L' U' L", "y' R U' R' U2 R' F R2 U2 R' F"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%27%20U%27%20R%20U%20R%27%20U%27%20F",
                alg: ["R U' R' F' U' R U R' U' F"]
            },
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20F%27%20U%27%20R%20U%20R%27%20U%27%20R%20U%20R%27",
                alg: ["y' R U R' F' U' R U R' U' R U R'"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R2%20F%20R%20U%27%20R%27%20F%20R%20F%27",
                alg: ["y2 R U' R2 F R U' R' F R F'"]
            }
},

        pi: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R2%20B2%20R%27%20U%20R%27%20U%27%20R%20U2%20R%20U%27%20R2",
                alg: ["y2 R2 B2 R' U R' U' R U2 R U' R2", "y2 F2 R U R' U2 R U R' U' F"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R2%20U%27%20R2%20F%20R",
                alg: ["y' R' F R2 U' R2 F R"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%27%20F%20U%27%20F2%20R%20U%20R",
                alg: ["y' F R' F U' F2 R U R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%27%20R%27%20U%20R%20U%27%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y' R U' R' U R U' R' F R U' R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R2%20F%20R%20U%20R%20U%27%20R%27%20U%27%20R%27%20F%20R%20F%27",
                alg: ["R U' R2 F R U R U' R' U' R' F R F'", "y F U' R U2 R' F' R U R' F'", "R' U' R' F2 U' R U2 F2 R"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%20U%27%20R%27%20F%20R%20U2%20R%27%20U%20F%27",
                alg: ["F R U' R' F R U2 R' U F'", "y2 L U L F2 U L' U2 F2 L'"]
            }
        },

        u: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20U%20R%20U%20R2%20F%20R2%20U%27%20R%27",
                alg: ["y' R U R' U R U R2 F R2 U' R'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20x%20U%27%20R%27%20U%20R%20U%27%20F%20R%20U%20R%20U%27%20x%27",
                alg: ["y x U' R' U R U' F R U R U' x'", "y' F R U' R' F U' F' R' F' R", "y x U' R2 U' R2 U' x' U' F2 R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20U2%20R%20U2%20R%27%20U2%20F",
                alg: ["F' U2 R U2 R' U2 F"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R%20F%27%20R%27%20F%20R2%20U%27%20R%27",
                alg: ["y R' F R F' R' F R2 U' R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R%20F%27%20U%20R%20U%27%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y R' F R F' U R U' R' F R U' R'", "y2 R U' R' U R U' R' U' F R U' R'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%27%20F%20R2%20U%27%20R%27%20U%20y%27%20R%20U%20R%27",
                alg: ["y2 R' F R2 U' R' U y' R U R'"]
            }
},

        l: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20U%20R%20U%27%20R2%20F%27%20R%20F",
                alg: ["y R U' R' U R U' R2 F' R F", "y2 R U R' F' R U2 R' U2 R U R'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20L%27%20U%20L%20U%27%20L%27%20U%20L2%20F%20L%27%20F%27",
                alg: ["y2 L' U L U' L' U L2 F L' F'", "y' R' F R F' R' F R U R U2 R'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20U%20R2%20U%27%20R2%20U%27%20F%20R2%20U%27%20R%27",
                alg: ["y R' U R2 U' R2 U' F R2 U' R'"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R2%20U%20R%27%20F%27%20R%20U2%20R%27",
                alg: ["y R' F R2 U R' F' R U2 R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%20R%27%20F%27%20R%20U%20R%27%20U%27%20F%20R%27%20F%27%20R",
                alg: ["y2 R U R' F' R U R' U' F R' F' R", "y2 L' U L y' R U2 R U' R2"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R%20F%27%20U2%20R%20U2%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y R U' R' y' R' U2 R' U R2", "y' R' F R F' U2 R U2 R' F R U' R'"]
            }
        },

        t: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R2%20U%20R%20U%27%20R2%20F%20R%20U2%20R%27%20F",
                alg: ["y R2 U R U' R2 F R U2 R' F", "y' L' U L U2 R' F2 R F' L' U L"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20R%27%20F%20R2%20U%20R%27%20U%27%20R%20U%20R%27",
                alg: ["F' R' F R2 U R' U' R U R'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R2%20F%20R%20U%20R%20U2%20R%27",
                alg: ["y R U' R2 F R U R U2 R'", "y' L' U L2 F' L' U' L' U2 L"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R2%20B2%20U%27%20R%27%20U%27%20R%20U%27%20R%27%20U%20R%27",
                alg: ["y' R2 B2 U' R' U' R U' R' U R'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R2%20x%20U%27%20R%20U%20R%27%20U%27%20R%20x%27",
                alg: ["y R U R2 x U' R U R' U' R x'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R%27%20U2%20F%20R%20U2%20R%27%20F",
                alg: ["y' R U R' F R U R' F U' R U' R'", "y2 R U' R' U2 F R U2 R' F"]
            }
        },

        h: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R2%20U%27%20R%27%20F%20R%20U%20R%27%20F%27",
                alg: ["y R' F R2 U' R' F R U R' F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20F%27%20U%20R%20U%27%20R2%20F2%20R%20U%27%20F",
                alg: ["y F' U R U' R2 F2 R U' F"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%27%20R%27%20F2%20U%20F%27%20R%20F%27",
                alg: ["R' U' R' F2 U F' R F'"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R%27%20F%27%20R%20U%20R%27%20U%27%20R%20U%20R%27%20U%27",
                alg: ["y R U R' F' R U R' U' R U R' U'"]
            }
}
    },
    
    eg2: {
        s: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=z%27%20R%27%20U%27%20R%20U2%20x%27%20U2%20R%20U%27%20z",
                alg: ["y' F U' R2 U' R' U2 R U' R2 F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%20R%27%20F2%20U%20F%20R%20U%20R%27",
                alg: ["R U R' U R U2 R B2 R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R%20U2%20R%20U%27%20R2%20F2%20R%20F%27",
                alg: ["R U' R' F2 R2 F' L' U' L"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20F%20U%27%20R%20U2%20R%27%20F2%20R%27%20F%20R",
                alg: ["y F R2 F' R2 F' R U' R"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20U%20R%20U%27%20R%27%20U%20F%20R%20U%27%20R%27",
                alg: ["y2 R' F R' F2 R U R U R' U R"]
            },


            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20F%20R2%20U%27%20R%27%20U%20L%20F%27%20L%27%20F",
                alg: ["R2 B2 R' U' L' U R' U' L"]
            }
    },
    
        as: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20B%20U%27%20R2%20F2%20U%27%20F%20x2",
                alg: ["x U' R2 F R2 F' U R' U2 R' U x'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20F%27%20U%27%20F2%20R%20U%27%20R%27",
                alg: ["R' U' R U' R' U2 R' F2 R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20L%20F%20L%27%20U%27%20R%20U%20R%27%20L%27%20U%27%20L",
                alg: ["y2 L' U L F' R U R B2 R2"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R%27%20F%27%20U%27%20R%20U%20R%27%20U%27%20F",
                alg: ["y' R' U R' F R2 F R2 F'"]
            },
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20F%27%20U%27%20R%20U%20R%27%20U%27%20R%20U%20R%27",
                alg: ["R' U' R U' R' U' R' F2 R F' R"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R2%20F%20R%20U%27%20R%27%20F%20R%20F%27",
                alg: ["R2 F2 R U L U' R U L'"]
            }
},

        pi: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R2%20B2%20R%27%20U%20R%27%20U%27%20R%20U2%20R%20U%27%20R2",
                alg: ["F U' R U2 R U' R' U R' F'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R2%20U%27%20R2%20F%20R",
                alg: ["R' U2 R2 U' R' F2 R2 F'", "R U' R2 U R2 U R2 U' R' F2 R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20F%20R%27%20F%20U%27%20F2%20R%20U%20R",
                alg: ["y2 R' F' U R' F R2 U2’ R' U R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%27%20R%27%20U%20R%20U%27%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y R' F U' R U R' F2 U2 R"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%20U%27%20R2%20F%20R%20U%20R%20U%27%20R%27%20U%27%20R%27%20F%20R%20F%27",
                alg: ["y R' U' R' F2 R2 U R' F2 R", "y' R U2 R F2 R2 U' R U' R'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%20R%20U%27%20R%27%20F%20R%20U2%20R%27%20U%20F%27",
                alg: ["y' R U R F2 R2 U' R U2 R'"]
            }
        },

        u: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%20U%20R%27%20U%20R%20U%20R2%20F%20R2%20U%27%20R%27",
                alg: ["y' F U' R U2 R U' R' U2 R' U' F'", "y' R' U R' F U' R U' R' U2 R2"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20x%20U%27%20R%27%20U%20R%20U%27%20F%20R%20U%20R%20U%27%20x%27",
                alg: ["y F U R U' R' F R2 F2", "y' F R U R' U' F R2 F2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20U2%20R%20U2%20R%27%20U2%20F",
                alg: ["y2 R' U' R U R' F2 R U' R' U R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R%20F%27%20R%27%20F%20R2%20U%27%20R%27",
                alg: ["R' F' U' F U2 L' U2 R U' L"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R%20F%27%20U%20R%20U%27%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y2 R2 B2 R' U R' U' R' F R F'"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%27%20F%20R2%20U%27%20R%27%20U%20y%27%20R%20U%20R%27",
                alg: ["y2 R2 F2 R F' R U L F' L' F"]
            }
},

        l: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R%27%20U%20R%20U%27%20R2%20F%27%20R%20F",
                alg: ["y R' U' R' F' R U' R U' R' F R"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20L%27%20U%20L%20U%27%20L%27%20U%20L2%20F%20L%27%20F%27",
                alg: ["y2 F2 R2' F R U R' U' R' F R"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20U%20R2%20U%27%20R2%20U%27%20F%20R2%20U%27%20R%27",
                alg: ["y2 R2 F2 R U R' U2 R U' R' U R U' R2", "y2 R2 U' R U2 R' U2 R U' F2 R2"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R2%20U%20R%27%20F%27%20R%20U2%20R%27",
                alg: ["y' R' U L' U2 R' F R U' R' U' F' x2"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%20R%27%20F%27%20R%20U%20R%27%20U%27%20F%20R%27%20F%27%20R",
                alg: ["y F R' F' R U R U' R B2 R2"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R%27%20F%20R%20F%27%20U2%20R%20U2%20R%27%20F%20R%20U%27%20R%27",
                alg: ["y2 F' R U R' U' R' F R' F2 R2"]
            }
        },

        t: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R2%20U%20R%20U%27%20R2%20F%20R%20U2%20R%27%20F",
                alg: ["y' F R F' R U R' U' R B2 R2'"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=F%27%20R%27%20F%20R2%20U%20R%27%20U%27%20R%20U%20R%27",
                alg: ["y F R' U2 R' U' R U2 F'"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%27%20R2%20F%20R%20U%20R%20U2%20R%27",
                alg: ["y R' U R' F U' R U R2"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%27%20R2%20B2%20U%27%20R%27%20U%27%20R%20U%27%20R%27%20U%20R%27",
                alg: ["F2 R2 F U' R' F R F", "F2 R2 F' R U R' U' F'"]
            },

            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R2%20x%20U%27%20R%20U%20R%27%20U%27%20R%20x%27",
                alg: ["y R' F2 R U' R' U R' F R U' R"]
            },

            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y2%20R%20U%27%20R%27%20U2%20F%20R%20U2%20R%27%20F",
                alg: ["y R' U2 R' F2 R F2 R", "y z' U' R2 U' R2 U R2 U R2 z"]
            }
        },

        h: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%27%20F%20R2%20U%27%20R%27%20F%20R%20U%20R%27%20F%27",
                alg: ["y F2 R U2 R2 F2 R' F2", "R2 F U2 F2 R2 F' R2"]
            },

            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20F%27%20U%20R%20U%27%20R2%20F2%20R%20U%27%20F",
                alg: ["y R2 U2 R U2 B2 R2"]
            },

            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=R%27%20U%27%20R%27%20F2%20U%20F%27%20R%20F%27",
                alg: ["R U' R2 U' F U' F U' R2 F R"]
            },

            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=cll&view=plan&size=250&pzl=2&case=y%20R%20U%20R%27%20F%27%20R%20U%20R%27%20U%27%20R%20U%20R%27%20U%27",
                alg: ["y R U' R' F U2 R2 F' R F' R", "y' R U2 B2 R' U R U' F U' x'"]
            }
}
    },
    
    wv : {
        ThreeCorners:{
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%27%20L%27%20U2%20R%20U%27%20R%27%20U2%20L",
                alg: ["U' L' U2 R U' R' U2 L","U L' U2 R U R' U2 L", "y2 L F L' U' L U L F' L2", "l' U2 R U2 r' U2 L"]
            }
        },
        
        TwoCorners:{
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%27%20R%27",
                alg: ["U R U' R'"]
            },
            
            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R%27%20F%20R%20U%20R%20U%27%20R%27%20F%27",
                alg: ["R' F R U R U' R' F'", "U' L U' R U L' U R'"]
            },
            
            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R2%20D%20R%27%20U%27%20R%20D%27%20R2",
                alg: ["U R2 D R' U' R D' R2"]
            },
            
            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%27%20R%27%20U%20R%27%20U%27%20R%20U%27%20R%27%20U2%20R",
                alg: ["U R U' R' U2 R U2 R' U' R U' R'", "U R U' R' U R' U' R U' R' U2 R"]
            },
            
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R%20U%27%20R%27%20U2%20R%20U%27%20R%27%20U2%20R%20U%20R%27",
                alg: ["R U' R' U2 R U' R' U2 R U R'"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%20R%27%20U%27%20R%20U%27%20R%27",
                alg: ["U R U R' U' R U' R'"]
            }
        },
        
        OneCorner: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%20U%27%20R%27%20U%20R%20U2%20R%27",
                alg: ["U2 R U' R' U R U2 R'"]
            },
            
            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20F%27%20R%20U2%20R%27%20U2%20R%27%20F%20R",
                alg: ["U2 F' R U2 R' U2 R' F R", "U L' U2 R U L U' L' U R' U2 L"]
            },
            
            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R%27%20F%20R2%20U%20R%27%20U%27%20R%20U%20R%27%20U%27%20F%27",
                alg: ["R' F R2 U R' U' R U R' U' F'", "U R U R2 U' R2 U' R2 U2 R"]
            },
            
            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%27%20U%27%20R2%20U%27%20R2%20U2%20R",
                alg: ["U2 R' U' R2 U' R2 U2 R"]
            },
            
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U2%20L%20U%20L%27%20R%27%20U2%20L%20U%20L%27",
                alg: ["U R U2 L U L' R' U2 L U L'", "R' F2 R F2 U L' U L"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%20U2%20R2%20U%27%20R%20U%27%20R%27%20U2%20R",
                alg: ["U2 R U2 R2 U' R U' R' U2 R"]
            },
            
            7: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20L%27%20U%20R%20U%27%20L%20U2%20R%27",
                alg: ["U2 L' U R U' L U2 R'", "U2 R2 D R' U2 R D' R2"]
            },
            
            8: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=L%27%20U%20R%20U%27%20R%27%20L",
                alg: ["L' U R U' R' L", "L' U R U' M' x'"]
            },
            
            9: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20L%27%20R%20U%20R%27%20U%27%20L%20R%20U2%20R%27",
                alg: ["U2 L' R U R' U' L R U2 R'"]
            },
            
            10: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%20U2%20R%27",
                alg: ["U2 R U2 R'"]
            },
            
            11: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R%27%20F%27%20R%20U2%20R%20U2%20R%27%20F",
                alg: ["R' F' R U2 R U2 R' F", "U L' U2 R U' R' U2 L U R U' R'"]
            },
            
            12: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R%27%20F2%20R2%20U%27%20R%27%20U%27%20R%20U%20R%27%20F2",
                alg: ["R' F2 R2 U' R' U' R U R' F2", "U2 L' U R U' R' L U' R U' R'"]
            }            
        },
        
        ZeroCorners: {
            1: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%27%20R%27%20U%27%20R%20U%20R%27%20U%20R%20U2%20R%27",
                alg: ["U R U' R' U' R U R' U R U2 R'", "U L' U2 L R U R' U L' U L"]
            },
            
            2: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%27%20R2%20U2%20R%20U%20R%27%20U%20R",
                alg: ["U R U' R2 U2 R U R' U R"]
            },
            
            3: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R2%20D%20R%27%20U%20R%20D%27%20R%27%20U2%20R%27",
                alg: ["U R2 D R' U R D' R' U2 R'"]
            },
            
            4: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=R2%20U%20R%27%20U%20R%27%20U%27%20R%20U%20R%20U2%20R2",
                alg: ["R2 U R' U R' U' R U R U2 R2", "U2 R' U L U' R2 U L' U R'"]
            },
            
            5: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%20U%27%20R%27%20U%20R%20U%27%20R%27%20U%20R%20U2%20R%27",
                alg: ["U2 R U' R' U R U' R' U R U2 R'"]
            },
            
            6: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U2%20R%20U2%20R2%20U2%20R%20U%20R%27%20U%20R",
                alg: ["U2 R U2 R2 U2 R U R' U R"]
            },
            
            7: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%27%20R2%20U%27%20R%20U%27%20R%27%20U2%20R",
                alg: ["U R U' R2 U' R U' R' U2 R"]
            },
            
            8: {
                src: "http://cube.crider.co.uk/visualcube.php?fmt=png&size=250&bg=t&stage=wv&case=U%20R%20U%20R%27%20U%27%20R%20U%20R%27%20U%27%20R%20U%27%20R%27",
                alg: ["U R U R' U' R U R' U' R U' R'"]
            },
            
            
        }
    }
};
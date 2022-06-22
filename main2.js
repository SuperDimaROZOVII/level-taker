if (Number(localStorage.getItem("xp")) === "") {
        localStorage.setItem("xp",0)
    }

    if (Number(localStorage.getItem("level")) > 20) {
        document.getElementById("Snake").hidden = false
    }
    if (Number(localStorage.getItem("level")) > 40) {
        document.getElementById("Fast snake").hidden = false
    }
    if (Number(localStorage.getItem("level")) > 70) {
        document.getElementById("unF").hidden = false
    }
    //localStorage.setItem("level",1);
//localStorage.clear()
function setLevel() {
    if (localStorage.getItem("level") == null) {
        localStorage.setItem("level",1);
    };
    // console.log(localStorage.getItem("xp"))
    // console.log(Number(localStorage.getItem("level")) / 5 * (Number(localStorage.getItem("level"))) + 15)
    if (Number(localStorage.getItem("xp")) >= (Number(localStorage.getItem("level")) / 5 * (Number(localStorage.getItem("level")))) + 15) {
        localStorage.setItem("level",Number(localStorage.getItem("level")) + 1);
        localStorage.setItem("xp",0);
    }
}
setLevel()
function load() {
    
    if (localStorage.getItem("rank") == null) {
        localStorage.setItem("rank","new player");
    };
    if (localStorage.getItem("level") > 150) {
        localStorage.setItem("rank","The best");
    } else if (localStorage.getItem("level") > 100) {
        localStorage.setItem("rank","proffecional");
    } else if (localStorage.getItem("level") > 80) {
        localStorage.setItem("rank","almost proffecional");
    } else if (localStorage.getItem("level") > 60) {
        localStorage.setItem("rank","good");
    } else if (localStorage.getItem("level") > 40) {
        localStorage.setItem("rank","average");
    } else if (localStorage.getItem("level") > 20) {
        localStorage.setItem("rank","less than average");
    }else {
        localStorage.setItem("rank","starter");
    }

    







}




document.getElementById("level").innerHTML = localStorage.getItem("level");
document.getElementById("rank").innerHTML = localStorage.getItem("rank");
document.getElementById("xp").innerHTML = localStorage.getItem("xp");
document.getElementById("xpNeeded").innerHTML = Number(localStorage.getItem("level")) / 5 * (Number(localStorage.getItem("level"))) + 15
load()
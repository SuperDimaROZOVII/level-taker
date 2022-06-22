let marginY = 0;
let marginX = 0;
let dots = []
let xp = 0;
let difficulty = 0;

function gainXP(secondsInGame) {
    let xp1 = 0;
    xp1 = (secondsInGame / 1000) * ((secondsInGame / 25) / 1000)
    if (localStorage.getItem("xp") != Number) {
        localStorage.setItem("xp",0)
    }
    localStorage.setItem("xp",Number(localStorage.getItem("xp")) + xp1)
}



// player








function move(x,y) {
    marginX = marginX + x
    marginY = marginY + y
if (marginX < 0) {
    marginX = 0;
};
if (marginY < 0) {
    marginY = 0;
};
if (marginX > 450) {
    marginX = 450;
};
if (marginY > 450) {
    marginY = 450;
};
document.getElementById("player").style.marginLeft = `${marginX}px`
document.getElementById("player").style.marginTop = `${marginY}px`






for (let i = 0; i < dots.length; i = i) {



    if (marginX + 25 == dots[i]) {
        if (marginY + 25 == dots[i + 1]) {
        document.writeln("you lost")
        const node11 = document.createElement("a");
    const textnode11 = document.createTextNode(`back in the menu, score:${xp}`);
    node11.appendChild(textnode11);
    node11.href = "./index.html"
    document.body.appendChild(node11)
    MX = 999999999
    marginX = 1867865434567654
    gainXP(xp)
        stop()
}}
i = i + 2


}
};


// point







function enemy() {
function point() {
    const node = document.createElement("div");
const textnode = document.createTextNode("  ");
node.appendChild(textnode);
document.getElementById("box").appendChild(node);
node.style.width = "25px";
node.style.height = "25px";
node.style.backgroundColor = "red";
node.style.borderRadius = "50%";
node.style.zIndex = "1"
node.style.border = "5px solid black"
node.style.position = "absolute"
let MX = Math.floor(Math.random() * 9 + 1) * 50 + 25
let MY = Math.floor(Math.random() * 9 + 1) * 50 + 25
dots.push(MX,MY)
node.style.marginLeft = `${MX}px`;
node.style.marginTop = `${MY}px`;
var delay = 0
    for (var i = 0; i < 500; i++) {
        setTimeout(check,1250 + (((1250 - difficulty) * i) + delay));
        //console.log(1250 + (1250 - difficulty) * i + delay);
        delay = 1250 - difficulty + delay;
        difficulty = difficulty + 25;
        if (difficulty > 1000) {
            difficulty = difficulty - 20;
        } else {
            if (difficulty > 800) {
                difficulty = difficulty - 15;
            };
        };
     if (difficulty > 1199) {
        difficulty = 1200;
     };
    
    }
    //
//
//
//

function check() {
     //console.log(1250/difficulty);
     xp = xp + 1000
     let node1 = document.createElement("div");
let textnode1 = document.createTextNode("  ");
node.appendChild(textnode1);
document.getElementById("box").appendChild(node1);
node1.style.width = "25px";
node1.style.height = "25px";
node1.style.backgroundColor = "green";
node1.style.borderRadius = "50%";
node1.style.zIndex = "1"
node1.style.border = "2px solid black"
node1.style.position = "absolute"
node1.style.marginLeft = `${MX}px`;
node1.style.marginTop = `${MY}px`;
dots.push(MX,MY)






    if (MX - 25 > marginX) { 
        MX = MX - 50;
    } else if (MX - 25 < marginX) {
        MX = MX + 50;
    }else{
        MX = MX;
    };


    if (MY - 25 > marginY) { 
        MY = MY - 50;
    } else if (MY - 25 < marginY) {
        MY = MY + 50;
    }else {
        MY = MY
    }



    if (MX < 0) {
        MX = 25;
    };
    if (MY < 0) {
        MY = 25;
    };
    if (MX > 450) {
        MX = 475;
    };
    if (MY > 450) {
        MY = 475;
    };
    
if (marginX + 25 == MX) {
    if (marginY + 25 == MY) {
    document.writeln("you lost")
    const node11 = document.createElement("a");
const textnode11 = document.createTextNode(`back in the menu, score:${Number(xp) / 1000}`);
node11.appendChild(textnode11);
node11.href = "./index.html"
document.body.appendChild(node11)
MX = 999999999
marginX = 1867865434567654
gainXP(xp)
    stop()
    }
}

    node.style.marginTop = `${MY}px`
    node.style.marginLeft = `${MX}px`
    
}
    }
    // for (let i = 0; i < 9999; i++) {
    //     setTimeout(point1(),(1000 * i) / difficulty)
    // }
    point();
}



enemy();


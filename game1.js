let marginY = 0;
let marginX = 0;
let xp = 0
let MX = 0
let MY = 0
// let timer = new Date()
// let sec = timer.getSeconds()
// let min = timer.getMinutes()

function gainXP(secondsInGame) {
    let xp1 = 0;
    xp1 = secondsInGame * (secondsInGame / 3000)
    // if (localStorage.getItem("xp") != Number) {
    //     localStorage.setItem("xp",0)
    // }
    // localStorage.setItem("xp",localStorage.getItem("xp") + xp1)
    //console.log(xp1)
    // if (localStorage.getItem("xp") != Number) {
    //     localStorage.setItem("xp",0)
    // }
    console.log(localStorage.getItem("xp"))
    console.log(xp1)
    let xpGiven = Number(localStorage.getItem("xp")) + xp1
    localStorage.setItem("xp",xpGiven)
}

function update() {
    if (marginX + 25 == MX) {
        if (marginY + 25 == MY) {
        document.writeln("you lost")
        const node1 = document.createElement("a");
    const textnode1 = document.createTextNode(`back in the menu, score: ${xp}`);
    node1.appendChild(textnode1);
    node1.href = "./index.html"
    document.body.appendChild(node1)
    MX = 999999999
    marginX = 1867865434567654
    console.log(xp)

    gainXP(xp)
        stop()
        }
    }
}










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

update()

document.getElementById("player").style.marginLeft = `${marginX}px`
document.getElementById("player").style.marginTop = `${marginY}px`
};
let difficulty = 0
function enemy() {
function point() {
    const node = document.createElement("div");
const textnode = document.createTextNode(" ");
node.appendChild(textnode);
document.getElementById("box").appendChild(node);
node.style.width = "25px";
node.style.height = "25px";
node.style.backgroundColor = "royalblue";
node.style.borderRadius = "50%";
node.style.zIndex = "1"
node.style.border = "2px solid black";
node.style.position = "absolute"
MX = Math.floor(Math.random() * 9 + 1) * 50 + 25
MY = Math.floor(Math.random() * 9 + 1) * 50 + 25
node.style.marginLeft = `${MX}px`;
node.style.marginTop = `${MY}px`;






    for (var i = 0; i < 500; i++) {
        setTimeout(check,800 * i/* + (((1250 - difficulty) * i) + delay)*/);
        //console.log(1250 + (1250 - difficulty) * i + delay);
    //     delay = 1250 - difficulty + delay;
    //     difficulty = difficulty + 25;
    //     if (difficulty > 1000) {
    //         difficulty = difficulty - 20;
    //     } else {
    //         if (difficulty > 800) {
    //             difficulty = difficulty - 15;
    //         };
    //     };
    //  if (difficulty > 1199) {
    //     difficulty = 1200;
    //  };
    
    }
    //setInterval(check,1250 / difficulty)
    //
//
//
//
function check() {
     //console.log(1250/difficulty); 
     //xp = 1250 + ((1250 - difficulty) * i) + delay;


     if (Math.random() > 0.5) { 
         MX = MX - 50;
     } else{
         MX = MX + 50;
     }


    if (Math.random() > 0.5) { 
        MY = MY - 50;
    } else {
        MY = MY + 50;
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

    xp++

update()

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
for (let i = 0; i < 101; i++) {
    setTimeout(enemy,3000 * i)
    
}


// enemy();
// enemy();
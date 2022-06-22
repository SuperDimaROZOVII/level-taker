function gainXP(secondsInGame) {
    let xp = 0;
    xp = secondsInGame * (secondsInGame / 25)
    if (localStorage.getItem("xp") != Number) {
        localStorage.setItem("xp",0)
    }
    localStorage.setItem("xp",localStorage.getItem("xp") + xp)
}

gainXP(19)
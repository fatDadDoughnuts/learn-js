//closures
function dragon(){
    const food = 'waffle'
    const breath = 'fire'
    let damage = 10
    function levelUp(){
        damage +=20
    }
    function preference(){
        return  `I like ${food}`
    }
    function attack(){
        return  `I attack you with ${breath} for 
         ${damage} damage` 
    }
    return{ preference, attack, levelUp }

}

//class
class Dragon{
    constructor(){
        this.food = 'waffle'
    }
    preference(){
        return `I like ${this.food}`
    }
}
const fluffyKinsFromClass = new Dragon()
const fn = fluffyKinsFromClass.preference //?


const fluffykins = dragon() //?
fluffykins.preference()  //?
const fn2 = fluffykins.preference
fn2() //?
fluffykins.attack() //?
fluffykins.levelUp()
fluffykins.attack() //?

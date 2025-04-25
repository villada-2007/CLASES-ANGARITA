class baseinstrumental{
    tocar(){

    }
}

class Bateria extends baseinstrumental{
    tocar(){
        console.log(`la bateria esta sonando durisimo`);
    }
}

class Piano extends baseinstrumental{
    tocar(){
        console.log(`el piano tiene una lirica remela`);
    }
}

class Saxofon extends baseinstrumental{
    tocar(){
        console.log(`el saxofon suena bacano, chevere`);
    }
}



const bateria = new Bateria ();
const piano = new Piano();
const saxofon = new Saxofon();

bateria.tocar();
piano.tocar();
saxofon.tocar();

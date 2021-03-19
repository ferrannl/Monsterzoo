import { Monsterconfig } from "./monsterconfig";
import { Monster } from "./Monster";

export class Zoo {
    // https://www.flaticon.com/packs/nature-91
    // https://www.iconfinder.com/Kidaha
    // https://www.weatherbit.io/api/weather-current
    constructor() {
        this.CHEAT = false;
        this.DEBUG = true;
        this.monsterCollection = [];
        this.localStorage = window.localStorage;
        localStorage.clear();
        this.jsongrid = [{

                "name": "Jungle",

                "climate": "bear grylls approved temperature",

                "referencecity": "Rio%20de%20Janeiro",

                "grid": [

                    { "name": "Row1", "Columns": ["0", "1", "1", "1", "0", "0", "1", "0", "0", "0"] },

                    { "name": "Row2", "Columns": ["1", "1", "1", "0", "1", "0", "1", "0", "0", "0"] },

                    { "name": "Row3", "Columns": ["0", "0", "0", "0", "1", "0", "0", "0", "0", "0"] },

                    { "name": "Row4", "Columns": ["1", "0", "0", "0", "1", "0", "0", "0", "1", "1"] },

                    { "name": "Row5", "Columns": ["0", "0", "0", "1", "0", "0", "0", "1", "1", "0"] },

                    { "name": "Row6", "Columns": ["0", "1", "0", "1", "0", "1", "0", "1", "0", "0"] },

                    { "name": "Row7", "Columns": ["1", "0", "1", "1", "0", "0", "0", "0", "1", "1"] },

                    { "name": "Row8", "Columns": ["1", "0", "0", "0", "0", "0", "1", "0", "0", "0"] },

                    { "name": "Row9", "Columns": ["0", "0", "0", "1", "0", "1", "1", "1", "0", "1"] },

                    { "name": "Row10", "Columns": ["1", "0", "1", "0", "1", "0", "1", "1", "0", "0"] }
                ]

            },

            {

                "name": "Pole",

                "climate": "sub-zero cold",

                "referencecity": "Amsterdam",

                "grid": [

                    { "name": "Row1", "Columns": ["0", "1", "0", "0", "0", "1", "0", "1", "0", "0"] },

                    { "name": "Row2", "Columns": ["1", "1", "0", "1", "0", "0", "1", "1", "0", "0"] },

                    { "name": "Row3", "Columns": ["0", "1", "1", "1", "1", "1", "0", "0", "0", "0"] },

                    { "name": "Row4", "Columns": ["0", "1", "0", "1", "0", "1", "0", "0", "1", "1"] },

                    { "name": "Row5", "Columns": ["0", "0", "1", "0", "0", "0", "0", "1", "1", "0"] },

                    { "name": "Row6", "Columns": ["0", "0", "1", "0", "1", "0", "1", "0", "0", "0"] },

                    { "name": "Row7", "Columns": ["0", "0", "0", "1", "0", "0", "1", "0", "1", "1"] },

                    { "name": "Row8", "Columns": ["0", "1", "0", "0", "0", "1", "0", "0", "1", "0"] },

                    { "name": "Row9", "Columns": ["0", "0", "0", "0", "0", "1", "0", "0", "1", "0"] },

                    { "name": "Row10", "Columns": ["0", "1", "0", "0", "0", "1", "1", "1", "0", "1"] }
                ]

            },

            {

                "name": "Sahara",

                "climate": "burning hot",

                "referencecity": "Marrakech",

                "grid": [

                    { "name": "Row1", "Columns": ["0", "1", "0", "1", "0", "0", "1", "0", "1", "0"] },

                    { "name": "Row2", "Columns": ["0", "0", "0", "0", "0", "1", "0", "0", "0", "0"] },

                    { "name": "Row3", "Columns": ["0", "1", "0", "1", "0", "0", "1", "1", "1", "0"] },

                    { "name": "Row4", "Columns": ["0", "0", "1", "0", "0", "0", "1", "1", "1", "0"] },

                    { "name": "Row5", "Columns": ["0", "0", "1", "1", "0", "0", "1", "0", "0", "1"] },

                    { "name": "Row6", "Columns": ["0", "0", "1", "0", "0", "1", "1", "0", "0", "0"] },

                    { "name": "Row7", "Columns": ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"] },

                    { "name": "Row8", "Columns": ["0", "0", "0", "1", "1", "0", "1", "0", "1", "1"] },

                    { "name": "Row9", "Columns": ["0", "1", "0", "0", "1", "1", "0", "0", "1", "0"] },

                    { "name": "Row10", "Columns": ["0", "0", "0", "0", "0", "1", "0", "0", "1", "0"] }
                ]

            },

            {
                "name": "Ocean",

                "climate": "tropical",

                "referencecity": "Honolulu",

                "grid": [

                    { "name": "Row1", "Columns": ["1", "0", "0", "0", "1", "1", "1", "0", "0", "0"] },

                    { "name": "Row2", "Columns": ["1", "0", "0", "0", "0", "1", "1", "0", "1", "0"] },

                    { "name": "Row3", "Columns": ["1", "0", "0", "0", "1", "1", "1", "0", "0", "0"] },

                    { "name": "Row4", "Columns": ["0", "0", "0", "1", "1", "0", "0", "1", "1", "0"] },

                    { "name": "Row5", "Columns": ["0", "1", "1", "0", "0", "1", "0", "1", "1", "0"] },

                    { "name": "Row6", "Columns": ["0", "1", "0", "1", "0", "0", "0", "1", "0", "0"] },

                    { "name": "Row7", "Columns": ["1", "0", "1", "1", "0", "1", "0", "0", "0", "1"] },

                    { "name": "Row8", "Columns": ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"] },

                    { "name": "Row9", "Columns": ["1", "0", "0", "1", "1", "0", "0", "0", "1", "0"] },

                    { "name": "Row10", "Columns": ["0", "1", "1", "1", "1", "0", "0", "1", "0", "1"] }
                ]

            },

        ]
        this.createGrid();
        this.weather = "day";
        this.region = "Jungle";
        let regionid = 0;
        this.drawGrid();
    }

    // creates the grid and legenda and weather
    drawGrid() {
        let _self = this;
        
        this.getWeather();

        // clears current grid and legenda and weather
        if (document.getElementById('maingrid') != null) {
            let main = document.getElementById('maingrid');
            main.parentElement.removeChild(main);
        }
        if (document.getElementById('legenda') != null) {
            let leg = document.getElementById('legenda');
            leg.parentElement.removeChild(leg);
        }
        if (document.getElementById('weather') != null) {
            let weather = document.getElementById('weather');
            weather.parentElement.removeChild(weather);
        }

        let junglegrid = this.jsongrid[0].grid;
        let polegrid = this.jsongrid[1].grid;
        let saharagrid = this.jsongrid[2].grid;
        let oceangrid = this.jsongrid[3].grid;

        //creates the grid
        let maingrid = document.createElement('table');
        maingrid.className = "maingrid";
        maingrid.id = "maingrid";
        for (let i = 0; i < this.jsongrid[0].grid.length; i++) {

            let tr = document.createElement('tr');
            maingrid.append(tr);

            for (let j = 0; j < this.jsongrid[0].grid[0].Columns.length; j++) {
                let td = document.createElement('td');
                td.className = `r${i} c${j}`
                td.addEventListener('dragover', function(ev) {
                    ev.preventDefault();
                });
                let innaccesible = false;
                switch (this.region) {

                    case "Jungle":
                        if (junglegrid[i].Columns[j] == 1) {
                            innaccesible = true;
                        }
                        break;
                    case "Pole":
                        if (polegrid[i].Columns[j] == 1) {
                            innaccesible = true;
                        }
                        break;
                    case "Sahara":
                        if (saharagrid[i].Columns[j] == 1) {
                            innaccesible = true;
                        }
                        break;
                   case "Ocean":
                        if (oceangrid[i].Columns[j] == 1) {
                            innaccesible = true;
                        }
                        break;
                }
                let audios;

                // if the tile is innaccesible i does not need a drop listener
                if (!innaccesible) {
                    let _self = this;
                    td.addEventListener('drop', function(ev) {
                            if (ev.currentTarget.childElementCount == 0) {
                                ev.preventDefault();
                                audios = [];
                                let id = ev.dataTransfer.getData("id");
                                let oldimg = 1;
                                let img = document.createElement("img");

                                // if first monster enters the grid 
                                if (id.charAt(0) != "m") {
                                    oldimg = document.getElementById(`stockmonster${id}`);
                                    if(oldimg != null){
                                        img.id = `monster${id}`;

                                        let elementType = document.getElementById("elementType").value;
                                        let armType = document.getElementById("armType").value;
                                        let arms = document.getElementById("arms").value;
                                        let legs = document.getElementById("legs").value;
                                        let eyes = document.getElementById("eyes").value;
                                        let furType = document.getElementById("furType").value;
                                        let canFly = document.getElementById("canFly").value;
                                        if (canFly == "on") canFly = "true"
                                        else canFly = "false";
                                        let canSwim = document.getElementById("canSwim").value;
                                        if (canSwim == "on") canSwim = "true"
                                        else canSwim = "false";
                                        let color = document.getElementById("color").value;
                                        let specialPower = document.getElementById("specialPower").innerText;
                                        specialPower = specialPower.split(": ", 2).pop(-1);
                                        let monsterTitle = document.getElementById("monsterTitle").value;

                                        let powerLevel = document.getElementById("powerLevel").value;
                                        switch(elementType){
                                                case "water":
                                                    if(_self.region == "Sahara") powerLevel = powerLevel*.9;
                                                    if(_self.region == "Ocean") powerLevel = powerLevel*1.1;
                                                    if(_self.weather == "sun") powerLevel = powerLevel*.8;
                                                    if(_self.weather == "rain") powerLevel = powerLevel*1.2;
                                                break;
                                                case "fire":
                                                    if(_self.region == "Ocean") powerLevel = powerLevel*.9;
                                                    if(_self.region == "Sahara") powerLevel = powerLevel*1.1;
                                                    if(_self.weather == "rain") powerLevel = powerLevel*.8;
                                                    if(_self.weather == "thunder") powerLevel = powerLevel*1.2;
                                                break;
                                                case "air":
                                                    if(_self.region == "Jungle") powerLevel = powerLevel*.9;
                                                    if(_self.region == "Pole") powerLevel = powerLevel*1.1;
                                                    if(_self.weather == "thunder") powerLevel = powerLevel*.8;
                                                    if(_self.weather == "wind") powerLevel = powerLevel*1.2;
                                                break;
                                                case "earth":
                                                    if(_self.region == "Pole") powerLevel = powerLevel*.9;
                                                    if(_self.region == "Jungle") powerLevel = powerLevel*1.1;
                                                    if(_self.weather == "wind") powerLevel = powerLevel*.8;
                                                    if(_self.weather == "sun") powerLevel = powerLevel*1.2;
                                                break;
                                                
                                            }
                                        let monster = new Monster(img.id, elementType, armType, arms, legs, eyes, furType, canFly, canSwim, color, specialPower, powerLevel, monsterTitle, "/resources/monster_water_blue.png");
                                        _self.monsterCollection.push(monster);

                                        

                                        audios.push('/resources/create.mp3');
                                    }
                                } else {
                                    oldimg = document.getElementById(id);
                                    img.id = id;
                                }
                                if(oldimg != null){
                                    img.src = oldimg.src;
                                    img.height = 65;
                                    img.className = "monster";
                                    img.addEventListener('dragstart', function(ev) {
                                        ev.dataTransfer.setData("id", img.id);
                                    })
                                    ev.target.append(img);

                                    // if droped image is not the stock image, delete droped image from its parrent
                                    if (oldimg.className != "stockmonster" && ev.target != oldimg) {
                                        oldimg.parentElement.removeChild(oldimg);
                                    }

                                    let classname = img.parentElement.className;
                                    let rownr = classname[1];
                                    let columnnr = classname[4];
                                    let region = classname.split(" ", 3).pop(-2);

                                    // get tiles around itself
                                    rownr--;
                                    let tdup = document.getElementsByClassName(`r${rownr} c${columnnr} ${region}`);
                                    rownr++;
                                    columnnr++;
                                    let tdright = document.getElementsByClassName(`r${rownr} c${columnnr} ${region}`);
                                    columnnr--;
                                    rownr++;
                                    let tddown = document.getElementsByClassName(`r${rownr} c${columnnr} ${region}`);
                                    rownr--;
                                    columnnr--;
                                    let tdleft = document.getElementsByClassName(`r${rownr} c${columnnr} ${region}`);
                                    columnnr++;

                                    let tds = [tdup, tdright, tddown, tdleft];

                                    // checks if tiles around him have monster, ifso get audioresource into audios array
                                    for (let i = 0; i < tds.length; i++) {
                                        let tdtemp = tds[i];
                                        if (tdtemp[0] != null) {
                                            tdtemp = tdtemp[0];
                                            if (tdtemp.childElementCount > 0) {
                                                if (tdtemp.firstChild.className == "monster") {
                                                    let monsterup;
                                                    for (let i = 0; i < _self.monsterCollection.length; i++) {
                                                        if (_self.monsterCollection[i].id == tdtemp.firstChild.id) {
                                                            monsterup = _self.monsterCollection[i];
                                                        }
                                                    }
                                                    audios.push(`/resources/move_${monsterup.elementType}.mp3`);
                                                }
                                            }
                                        }
                                    }
                                    _self.playAudio(audios);
                                }
                            }
                        })
                        // if tile is innaccesible give it a img 
                } else {

                    let img = document.createElement("img");
                    img.className = `obstacle ${this.region.toLowerCase()}`
                    img.src = `/resources/obstacle_${this.region.toLowerCase()}.png`
                    img.width = 70;
                    img.height = 70;
                    img.draggable = false;
                    td.appendChild(img);
                }

                // the hover function for displaying the monster data
                td.addEventListener("mouseover", function() {
                    if (td.firstChild != null) {
                        if (td.firstChild.className == "monster") {
                            let tempMonster = "monster";
                            for (let i = 0; i < _self.monsterCollection.length; i++) {
                                if (_self.monsterCollection[i].id == td.firstChild.id) {
                                    tempMonster = _self.monsterCollection[i];
                                }
                            }
                            td.firstChild.title = `Name: ${tempMonster.monsterTitle} - Type: ${tempMonster.elementType} - Arm type: ${tempMonster.armType} - Arms: ${tempMonster.arms} - Legs: ${tempMonster.legs} - Eyes: ${tempMonster.eyes} - Fur type: ${tempMonster.furType} - Can fly: ${tempMonster.canFly} - Can swim: ${tempMonster.canSwim} - Special power: ${tempMonster.specialPower} - Power level: ${tempMonster.powerLevel}`;
                        }
                    }
                });
                let audio = new Audio();
                td.addEventListener("click", function(){
                        if (td.firstChild != null) {
                                if (td.firstChild.className == "monster") {
                                        let tempMonster;
                                        for (let i = 0; i < _self.monsterCollection.length; i++) {
                                                if (_self.monsterCollection[i].id == td.firstChild.id) {
                                                tempMonster = _self.monsterCollection[i];
                                                }
                                        }
                                        if(audio.currentSrc == ""){
                                                audio = new Audio(`/resources/cry_${tempMonster.elementType}.mp3`);
                                                audio.volume = 0.2;
                                                audio.play();
                                        } else if(audio.ended != false){
                                                audio = new Audio(`/resources/cry_${tempMonster.elementType}.mp3`); 
                                                audio.volume = 0.2;   
                                                audio.play();
                                        }
                                        
                                }
                        }
                })

                switch (this.region) {
                    case "Jungle":
                        td.className += " jungle";
                        break;
                    case "Pole":
                        td.className += " pole";
                        break;
                    case "Sahara":
                        td.className += " sahara";
                        break;
                    case "Ocean":
                        td.className += " ocean";
                        break;
                }

                tr.append(td);
            }
        }

        // makes the legenda
        let flexdiv3 = document.createElement("div");

        let legenda = document.createElement('div');
        legenda.className = "legenda";
        legenda.id = "legenda";

        let legendalabel = document.createElement('h1');
        legendalabel.innerText = "Legenda";

        let legendaflex = document.createElement('div');
        legendaflex.className = "flex";

        // checks which region it currently is and changes the legenda accordingly
        if (this.region == "Jungle") {
            let junglediv = document.createElement('div');
            junglediv.className = "spacing";

            let jungleflexdiv = document.createElement('div');
            jungleflexdiv.className = "flex";
            let jungleicon = document.createElement('div');
            jungleicon.className = "jungle box";
            let junglelabel = document.createElement('h2');
            junglelabel.innerText = "Jungle";

            jungleflexdiv.appendChild(jungleicon);
            jungleflexdiv.appendChild(junglelabel);

            let junglenaflexdiv = document.createElement('div');
            junglenaflexdiv.className = "flex";
            let junglenaicon = document.createElement('div');
            junglenaicon.className = "jungle box";
            let junglenalabel = document.createElement('h2');
            junglenalabel.innerText = "Jungle Innaccesible";

            let img = document.createElement("img");
            img.className = `obstacle jungle `
            img.src = `/resources/obstacle_jungle.png `
            img.width = 70;
            img.height = 70;
            img.draggable = false;
            junglenaicon.appendChild(img);

            junglenaflexdiv.appendChild(junglenaicon);
            junglenaflexdiv.appendChild(junglenalabel);

            junglediv.appendChild(jungleflexdiv);
            junglediv.appendChild(junglenaflexdiv);

            legendaflex.appendChild(junglediv);
        }

        if (this.region == "Pole") {
            let polediv = document.createElement('div');
            polediv.className = "spacing";

            let poleflexdiv = document.createElement('div');
            poleflexdiv.className = "flex";
            let poleicon = document.createElement('div');
            poleicon.className = "pole box";
            let polelabel = document.createElement('h2');
            polelabel.innerText = "Pole";

            poleflexdiv.appendChild(poleicon);
            poleflexdiv.appendChild(polelabel);

            let polenaflexdiv = document.createElement('div');
            polenaflexdiv.className = "flex";
            let polenaicon = document.createElement('div');
            polenaicon.className = "pole box";
            let polenalabel = document.createElement('h2');
            polenalabel.innerText = "Pole Innaccesible";

            let img = document.createElement("img");
            img.className = `obstacle pole `
            img.src = `/resources/obstacle_pole.png `
            img.width = 70;
            img.height = 70;
            img.draggable = false;
            polenaicon.appendChild(img);

            polenaflexdiv.appendChild(polenaicon);
            polenaflexdiv.appendChild(polenalabel);

            polediv.appendChild(poleflexdiv);
            polediv.appendChild(polenaflexdiv);

            legendaflex.appendChild(polediv);
        }

        if (this.region == "Sahara") {
            let saharadiv = document.createElement('div');
            saharadiv.className = "spacing";

            let saharaflexdiv = document.createElement('div');
            saharaflexdiv.className = "flex";
            let saharaicon = document.createElement('div');
            saharaicon.className = "sahara box";
            let saharalabel = document.createElement('h2');
            saharalabel.innerText = "Sahara";

            saharaflexdiv.appendChild(saharaicon);
            saharaflexdiv.appendChild(saharalabel);

            let saharanaflexdiv = document.createElement('div');
            saharanaflexdiv.className = "flex";
            let saharanaicon = document.createElement('div');
            saharanaicon.className = "sahara box";
            let saharanalabel = document.createElement('h2');
            saharanalabel.innerText = "Sahara Innaccesible";

            let img = document.createElement("img");
            img.className = `obstacle sahara `
            img.src = `/resources/obstacle_sahara.png `
            img.width = 70;
            img.height = 70;
            img.draggable = false;
            saharanaicon.appendChild(img);

            saharanaflexdiv.appendChild(saharanaicon);
            saharanaflexdiv.appendChild(saharanalabel);

            saharadiv.appendChild(saharaflexdiv);
            saharadiv.appendChild(saharanaflexdiv);

            legendaflex.appendChild(saharadiv);
        }

        if (this.region == "Ocean") {
                let oceandiv = document.createElement('div');
                oceandiv.className = "spacing";
    
                let oceanflexdiv = document.createElement('div');
                oceanflexdiv.className = "flex";
                let oceanicon = document.createElement('div');
                oceanicon.className = "ocean box";
                let oceanlabel = document.createElement('h2');
                oceanlabel.innerText = "Ocean";
    
                oceanflexdiv.appendChild(oceanicon);
                oceanflexdiv.appendChild(oceanlabel);
    
                let oceannaflexdiv = document.createElement('div');
                oceannaflexdiv.className = "flex";
                let oceannaicon = document.createElement('div');
                oceannaicon.className = "ocean box";
                let oceannalabel = document.createElement('h2');
                oceannalabel.innerText = "Ocean Innaccesible";
    
                let img = document.createElement("img");
                img.className = `obstacle ocean `
                img.src = `/resources/obstacle_ocean.png `
                img.width = 70;
                img.height = 70;
                img.draggable = false;
                oceannaicon.appendChild(img);
    
                oceannaflexdiv.appendChild(oceannaicon);
                oceannaflexdiv.appendChild(oceannalabel);
    
                oceandiv.appendChild(oceanflexdiv);
                oceandiv.appendChild(oceannaflexdiv);
    
                legendaflex.appendChild(oceandiv);
            }

        legenda.appendChild(legendalabel);
        legenda.appendChild(legendaflex);

        // make the weather div
        let weatherdiv = document.createElement("div");
        weatherdiv.className = "weather";
        weatherdiv.id = "weather";

        let weathertitlediv = document.createElement("div");
        weathertitlediv.className = "weatherdiv flex-row";

        let weathertitle = document.createElement("h1");
        weathertitle.id = "weathertitle";
        weathertitle.innerText = "Weather";

        let weatherimg = document.createElement("img");
        weatherimg.id = "weatherimg";
        weatherimg.width = 60;
        weatherimg.height = 60;
        weatherimg.draggable = false;
        weatherimg.src = "/resources/day.png";

        let weathercity = document.createElement("h2");
        weathercity.id = "weathercity";
        weathercity.innerText = "City: X";

        let weatherlabel = document.createElement("h2");
        weatherlabel.id = "weatherlabel";
        weatherlabel.innerText = "Weather: X";

        

        weathertitlediv.appendChild(weathertitle);
        weathertitlediv.appendChild(weatherimg);

        weatherdiv.appendChild(weathertitlediv);
        weatherdiv.appendChild(weathercity);
        weatherdiv.appendChild(weatherlabel);

        if(this.CHEAT){
            let weathercheat = document.createElement("select");
            weathercheat.id = "weathercheat";
            weathercheat.options[weathercheat.options.length] = new Option(`Thunder`, `thunder`);
            weathercheat.options[weathercheat.options.length] = new Option(`Rain`, `rain`);
            weathercheat.options[weathercheat.options.length] = new Option(`Sun`, `sun`);
            weathercheat.options[weathercheat.options.length] = new Option(`Wind`, `wind`);
            weathercheat.options[weathercheat.options.length] = new Option(`Night`, `night`);
            weathercheat.options[weathercheat.options.length] = new Option(`Day`, `day`);
            weathercheat.addEventListener("change", function(ev){
                ev.preventDefault();
                console.log(_self.weather);
                _self.weather = weathercheat.value;
                weatherimg.src = `/resources/${_self.weather}.png`;
                switch(_self.weather){
                    case "thunder":      
                        document.getElementById("weatherlabel").innerText = `Weather: Thunder`;
                    break;
                    case "rain":      
                        document.getElementById("weatherlabel").innerText = `Weather: Rain`;
                    break;
                    case "sun":      
                        document.getElementById("weatherlabel").innerText = `Weather: Sun`;
                    break;
                    case "wind":      
                        document.getElementById("weatherlabel").innerText = `Weather: Wind`;
                    break;
                    case "night":      
                        document.getElementById("weatherlabel").innerText = `Weather: Night`;
                    break;
                    case "day":      
                        document.getElementById("weatherlabel").innerText = `Weather: Day`;
                    break;
                }
            })
            weatherdiv.appendChild(weathercheat);
        }

        flexdiv3.appendChild(legenda);
        flexdiv3.appendChild(weatherdiv);

        flexdiv.appendChild(flexdiv3);

        flexdiv2.appendChild(maingrid);

        this.loadGrid();
    }

    //creates the base grid and the region buttons.
    createGrid() {
        let _self = this;

        let flexdiv = document.createElement('div');
        flexdiv.className = "flex-row";
        flexdiv.id = "flexdiv";

        let flexdiv2 = document.createElement('div');
        flexdiv2.className = "flex-column";
        flexdiv2.id = "flexdiv2";

        let flexdiv4 = document.createElement('div');
        flexdiv4.className = "flex-row";
        flexdiv4.id = "flexdiv4";

        let regions = document.createElement('div');
        regions.className = "regions flex";

        let regionslabel = document.createElement('h1');
        regionslabel.innerText = "Select region:"

        let junglebutton = document.createElement('button');
        junglebutton.className = "jungle button";
        junglebutton.innerText = "Jungle"
        junglebutton.addEventListener('click', function() {
            if (this.region != "Jungle") {
                _self.saveGrid();
                _self.region = "Jungle";
                _self.drawGrid();
            }
        })

        let polebutton = document.createElement('button');
        polebutton.className = "pole button";
        polebutton.innerText = "Pole"
        polebutton.addEventListener('click', function() {
            if (this.region != "Pole") {
                _self.saveGrid();
                _self.region = "Pole";
                _self.drawGrid();
            }
        })

        let saharabutton = document.createElement('button');
        saharabutton.className = "sahara button";
        saharabutton.innerText = "Sahara"
        saharabutton.addEventListener('click', function() {
            if (this.region != "Sahara") {
                _self.saveGrid();
                _self.region = "Sahara";
                _self.drawGrid();
            }
        })

        let oceanbutton = document.createElement('button');
        oceanbutton.className = "ocean button";
        oceanbutton.innerText = "Ocean"
        oceanbutton.addEventListener('click', function() {
            if (this.region != "Ocean") {
                _self.saveGrid();
                _self.region = "Ocean";
                _self.drawGrid();
            }
        })

        let deleteDiv = document.createElement('div');
        deleteDiv.className = "delete box";
        deleteDiv.id = "delete";
        deleteDiv.innerText = "X"
        deleteDiv.addEventListener("dragover", function(ev) {
            ev.preventDefault();
        })
        deleteDiv.addEventListener("drop", function(ev) {
            ev.preventDefault();
            let id = ev.dataTransfer.getData("id");
            let img = document.getElementById(id);
            if(img != null){
                if (img.className == "monster") {
                    for (let i = 0; i < _self.monsterCollection.length; i++) {
                        if (_self.monsterCollection[i].id == img.id) {
                            _self.monsterCollection.splice(i,1);
                            img.parentElement.removeChild(img);
                            new Audio('/resources/delete.mp3').play();
                        }
                    }
                }
            }
        })

        regions.appendChild(regionslabel);
        regions.appendChild(junglebutton);
        regions.appendChild(polebutton);
        regions.appendChild(saharabutton);
        regions.appendChild(oceanbutton);

        flexdiv4.appendChild(regions);
        flexdiv4.appendChild(deleteDiv);

        flexdiv2.appendChild(flexdiv4);

        flexdiv.appendChild(flexdiv2);

        zoo.appendChild(flexdiv);
    }

    // saves monsters to local storage
    saveGrid() {
        let monstersJungle = [];
        let monstersPole = [];
        let monstersSahara = [];
        let monstersOcean = [];
        let monsters = document.getElementsByClassName("monster");
        if (monsters != null) {
            for (let i = 0; i < monsters.length; i++) {
                let monster = monsters[i];
                let string = "" + monster.parentElement.className + "," + monster.id + "," + monster.src;
                switch (this.region) {
                    case "Jungle":
                        monstersJungle.push(string);
                        break;
                    case "Pole":
                        monstersPole.push(string);
                        break;
                    case "Sahara":
                        monstersSahara.push(string);
                        break;
                    case "Ocean":
                        monstersOcean.push(string);
                        break;
                }
            }
            switch (this.region) {
                case "Jungle":
                    this.localStorage.setItem("Jungle", JSON.stringify(monstersJungle));
                    break;
                case "Pole":
                    this.localStorage.setItem("Pole", JSON.stringify(monstersPole));
                    break;
                case "Sahara":
                    this.localStorage.setItem("Sahara", JSON.stringify(monstersSahara));
                    break;
                case "Ocean":
                    this.localStorage.setItem("Ocean", JSON.stringify(monstersOcean));
                    break;
            }
        }
    }

    // load monster from local storage
    loadGrid() {
        let monstersjson = this.localStorage.getItem(`${this.region}`);
        if (monstersjson) {
            let monsters = JSON.parse(monstersjson);
            for (let i = 0; i < monsters.length; i++) {
                // make new class for monster 
                let string = monsters[i];
                let img = document.createElement("img");
                img.id = string.split(",", 2).pop(-1);
                img.src = string.split(",", 3).pop(-2);
                img.width = 65;
                img.className = "monster";
                img.addEventListener('dragstart', function(ev) {
                    ev.dataTransfer.setData("id", img.id);
                })
                let tds = document.getElementsByClassName(string.split(",", 1));
                tds[0].append(img);
            }
        }
    }

    // gets the weather from the api and sets the data in the page accordingly
    getWeather() {
        if(!this.DEBUG){
                let _self = this;
                switch (this.region) {
                        case "Jungle":
                        this.regionid = 0;
                        break;
                        case "Pole":
                        this.regionid = 1;
                        break;
                        case "Sahara":
                        this.regionid = 2;
                        break;
                }
                fetch(`https://api.weatherbit.io/v2.0/current?city=${this.jsongrid[this.regionid].referencecity}&key=60889527553b4136b8efa42939a93548`)
                        .then(function(response) {
                        return response.json();
                        })
                        .then(function(myJson) {
                        document.getElementById("weathercity").innerText = `City: ${myJson.data[0].city_name}`;
                        document.getElementById("weatherlabel").innerText = `Weather: ${myJson.data[0].weather.description}`;
                        let date = new Date();
                        let now = `${date.getHours()}:${date.getMinutes()}`
                        let sunset = myJson.data[0].sunset;
                        let sunrise = myJson.data[0].sunrise;
                        let weathercode = myJson.data[0].weather.code;
                        let windspeed = myJson.data[0].wind_spd;
                        let weatherimg = document.getElementById("weatherimg");
                        if (weathercode >= 200 && weathercode < 300) {
                                weatherimg.src = "/resources/thunder.png";
                                _self.weather = "thunder";
                        } else if (weathercode >= 500 && weathercode < 600) {
                                weatherimg.src = "/resources/rain.png";
                                _self.weather = "rain";
                        } else if (weathercode == 800) {
                                weatherimg.src = "/resources/sun.png";
                                _self.weather = "sun";
                        } else if (windspeed > 3) {
                                weatherimg.src = "/resources/wind.png";
                                _self.weather = "wind";
                        } else if (now > sunset && now < sunrise) {
                                weatherimg.src = "/resources/night.png";
                                _self.weather = "night";
                        } else {
                                weatherimg.src = "/resources/day.png";
                                _self.weather = "day";
                        }
                })
        }
    }

    // starts audio loop
    playAudio(audios) {
        let audiocounter = 0;
        this.play(audiocounter, audios, this.play);
    }

    // play audio and goes on to next audio
    play(audiocounter, audios, callback) {
        if (audiocounter < audios.length) {
            let audio = new Audio(audios[audiocounter]);
            audio.play();
            audio.onended = function() {
                audiocounter++;
                callback(audiocounter, audios, callback);
            }
        }
    }
}
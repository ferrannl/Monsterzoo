import { Zoo } from './zoo.js';
export class Monsterconfig {
    constructor(data) {
        this.zoo = data;
        this.create();
    }

    // Creates the monster config and al its settings
    create() {
        let _self = this;
        const monsterConfig = document.getElementById("monsterconfig");

        const configTitle = document.createElement("h2");
        configTitle.innerText = "Monster Configurator";

        const form = document.createElement("form");

        // Element Type 
        const elementType = document.createElement(`select`)
        elementType.id = "elementType"
        elementType.options[elementType.options.length] = new Option(`Water`, `water`)
        elementType.options[elementType.options.length] = new Option(`Fire`, `fire`)
        elementType.options[elementType.options.length] = new Option(`Earth`, `earth`)
        elementType.options[elementType.options.length] = new Option(`Air`, `air`)
        elementType.addEventListener("change", function() {
            _self.changeElement();
            _self.setMonsterImage();
        })

        let valueArms;
        let valueLegs;
        let valueEyes;
        let valuePower;
        let keydown = 0;

        // Arms Amount
        const arms = document.createElement("input");
        arms.id = "arms";
        arms.placeholder = "Amount of arms"
        arms.type = "number";
        arms.onkeypress = "return false;"
        arms.addEventListener("change", function() {
            _self.changeLegs();
        })
        arms.addEventListener("keydown", function() {
            if (keydown == 0) {
                valueArms = arms.value;
            }
            keydown++;
        })
        arms.addEventListener("keyup", function() {
            arms.value = valueArms;
            keydown--;
        })
        arms.addEventListener("drop", function(ev) {
            ev.preventDefault();
        });

        // Arms Type
        const armType = document.createElement("select");
        armType.id = "armType";


        // Legs Amount
        const legs = document.createElement("input");
        legs.id = "legs"
        legs.type = "number";
        legs.placeholder = "Amount of legs"
        legs.onkeypress = "return false;"
        legs.addEventListener("keydown", function() {
            if (keydown == 0) {
                valueLegs = legs.value;
            }
            keydown++;
        })
        legs.addEventListener("keyup", function() {
            legs.value = valueLegs;
            keydown--;
        })
        legs.addEventListener("drop", function(ev) {
            ev.preventDefault();
        });

        // Eyes Amount
        const eyes = document.createElement("input");
        eyes.id = "eyes";
        eyes.type = "number";
        eyes.placeholder = "Amount of eyes"
        eyes.onkeypress = "return false;"
        eyes.addEventListener("keydown", function() {
            if (keydown == 0) {
                valueEyes = eyes.value;
            }
            keydown++;
        })
        eyes.addEventListener("keyup", function() {
            eyes.value = valueEyes;
            keydown--;
        })
        eyes.addEventListener("drop", function(ev) {
            ev.preventDefault();
        });

        // Fur Type
        const furType = document.createElement("select");
        furType.id = "furType";
        furType.addEventListener("change", function() {
            _self.changeFly();
            _self.changeSwim();
        });

        // Fly
        const flyDiv = document.createElement("div");
        const canFly = document.createElement("input");
        const flyLabel = document.createElement("label");
        canFly.type = "checkbox";
        canFly.id = "canFly";
        canFly.disabled = true;
        flyLabel.innerText = "Can fly";

        // Swim
        const swimDiv = document.createElement("div");
        const canSwim = document.createElement("input");
        const swimLabel = document.createElement("label");
        canSwim.type = "checkbox";
        canSwim.id = "canSwim";
        canSwim.disabled = true;
        swimLabel.innerText = "Can swim"

        // Color Type
        const color = document.createElement("select");
        color.id = "color";
        color.addEventListener("change", function() {
            _self.setMonsterImage();
        });

        // Special power
        const specialPower = document.createElement("label");
        specialPower.id = "specialPower";

        // Power level
        const powerLevel = document.createElement("input");
        powerLevel.id = "powerLevel";
        powerLevel.type = "number";
        powerLevel.placeholder = "Power level"
        powerLevel.min = "0"
        powerLevel.max = "10000";
        powerLevel.addEventListener("keydown", function() {
            if (keydown == 0) {
                valuePower = powerLevel.value;
            }
            keydown++;
        })
        powerLevel.addEventListener("keyup", function() {
            powerLevel.value = valuePower;
            keydown--;
        })
        powerLevel.addEventListener("drop", function(ev) {
            ev.preventDefault();
        });


        // Monster Name
        const createdMonsterTitle = document.createElement("input");
        createdMonsterTitle.innerText = "Created Monster";
        createdMonsterTitle.placeholder = `name your monster here!`;
        createdMonsterTitle.id = 'monsterTitle';
        createdMonsterTitle.draggable = false;
        createdMonsterTitle.addEventListener("drop", function(ev) {
            ev.preventDefault();
        });

        // Monster Image
        let counter = 1;
        let monsterImage = document.createElement("img");
        monsterImage.width = "150";
        monsterImage.draggable = false;
        monsterImage.className = "stockmonster";
        monsterImage.id = `stockmonster${counter}`;
        monsterImage.addEventListener('dragstart', function(ev) {
            monsterImage.id = `stockmonster${counter}`;
            ev.dataTransfer.setData("id", counter);
            counter++;
        });

        monsterImage.addEventListener("dragover", function(ev) {
            ev.preventDefault();
        })
        monsterImage.addEventListener("drop", function(ev) {
            ev.preventDefault();
            let id = ev.dataTransfer.getData("id");
            let img = document.getElementById(id);
            if(img != null){
                if (img.className == "monster") {
                    let tempMonster;
                    for (let i = 0; i < _self.zoo.monsterCollection.length; i++) {
                        if (_self.zoo.monsterCollection[i].id == img.id) {
                            tempMonster = _self.zoo.monsterCollection[i];

                            document.getElementById("elementType").value = tempMonster.elementType;
                            _self.changeElement();
                            document.getElementById("armType").value = tempMonster.armType;
                            document.getElementById("arms").value = tempMonster.arms;
                            document.getElementById("legs").value = tempMonster.legs;
                            document.getElementById("eyes").value = tempMonster.eyes;
                            document.getElementById("furType").value = tempMonster.furType;
                            document.getElementById("canFly").value = tempMonster.canFly;
                            document.getElementById("canSwim").value = tempMonster.canSwim;
                            document.getElementById("color").value = tempMonster.color;
                            document.getElementById("specialPower").innerText = `Special power: ${tempMonster.specialPower}`;
                            document.getElementById("powerLevel").value = tempMonster.powerLevel;
                            document.getElementById("monsterTitle").value = tempMonster.monsterTitle;
                            img.parentElement.removeChild(img);
                            _self.setMonsterImage();
                            _self.zoo.monsterCollection.splice(i,1);

                            new Audio('/resources/delete.mp3').play();

                        }
                    }
                }
            }
        })

        // Checks if everything is filled in before the monster is draggable
        monsterImage.addEventListener('mouseover', function() {
            if (arms.value != '' && legs.value != '' && eyes.value != '' && powerLevel.value != '' && createdMonsterTitle.value != '') {
                monsterImage.draggable = true;
            } else {
                monsterImage.draggable = false;
            }
        });
        monsterImage.draggable = true;
        monsterImage.src = "/resources/monster_water_blue.png"

        form.appendChild(elementType);
        form.appendChild(armType);
        form.appendChild(arms);
        form.appendChild(legs);
        form.appendChild(eyes);
        form.appendChild(furType);
        form.appendChild(flyDiv);
        flyDiv.appendChild(canFly)
        flyDiv.appendChild(flyLabel)
        form.appendChild(swimDiv);
        swimDiv.appendChild(canSwim)
        swimDiv.appendChild(swimLabel)
        form.appendChild(color);
        form.appendChild(specialPower);
        form.appendChild(powerLevel);
        form.appendChild(createdMonsterTitle);
        form.appendChild(monsterImage);
        monsterConfig.appendChild(configTitle);
        monsterConfig.appendChild(form);
        this.changeElement();
    }

    // Changes the configuratior based on the element type
    changeElement() {

        let armType = document.getElementById("armType")
        let furType = document.getElementById("furType");
        let color = document.getElementById("color");
        let arms = document.getElementById("arms");
        let eyes = document.getElementById("eyes");
        let legs = document.getElementById("legs");
        let elementType = document.getElementById("elementType");
        let canFly = document.getElementById("canFly");
        let canSwim = document.getElementById("canSwim");
        let specialPower = document.getElementById("specialPower");

        // Clears all current options from types
        armType.options.length = 0;
        furType.options.length = 0;
        color.options.length = 0;

        switch (elementType.value) {

            case "water":
                // Water

                // Arms
                armType.options[armType.options.length] = new Option(`Tentacles`, `tentacles`)
                armType.options[armType.options.length] = new Option(`Fins`, `fins`)
                arms.min = "0";
                arms.max = "8";

                // Fur
                furType.options[furType.options.length] = new Option(`Scales`, `scales`)
                furType.options[furType.options.length] = new Option(`Slime`, `slime`)

                // Eyes
                eyes.min = "0";
                eyes.max = "8"

                // Color
                color.options[color.options.length] = new Option(`Blue`, `blue`);
                color.options[color.options.length] = new Option(`Red`, `red`);
                color.options[color.options.length] = new Option(`Green`, `green`);

                // Fly
                canFly.checked = false

                // Swim
                canSwim.checked = true;

                // Special Power
                specialPower.innerText = "Special power: Hydro pump"
                break;

            case "fire":
                // Fire

                // Fur
                furType.options[furType.options.length] = new Option(`Scales`, `scales`)
                furType.options[furType.options.length] = new Option(`Feathers`, `feathers`)

                // Arms
                armType.options[armType.options.length] = new Option(`Tentacles`, `tentacles`)
                armType.options[armType.options.length] = new Option(`Claws`, `claws`)
                armType.options[armType.options.length] = new Option(`Clawed wings`, `clawed wings`)
                arms.min = "0";
                arms.max = "6";
                if (arms.value > 6) {
                    arms.value = "6";
                }

                // Eyes
                eyes.min = "0";
                eyes.max = "4";

                // Color
                color.options[color.options.length] = new Option(`Red`, `red`);
                color.options[color.options.length] = new Option(`Orange`, `orange`);
                color.options[color.options.length] = new Option(`Brown`, `brown`);

                // Fly
                canFly.checked = false

                // Swim
                canSwim.checked = false;

                // Special Power
                specialPower.innerText = "Special power: Fire blast"

                break;
            case "earth":
                // Earth

                // Fur
                furType.options[furType.options.length] = new Option(`Hair`, `hair`);
                furType.options[furType.options.length] = new Option(`Scales`, `scales`);
                furType.options[furType.options.length] = new Option(`Slime`, `slime`);

                // Arms
                armType.options[armType.options.length] = new Option(`Claws`, `claws`);
                arms.min = "2";
                arms.max = "2";
                arms.value = "2";

                // Eyes
                eyes.min = "2";
                eyes.max = "2";
                eyes.value = "2";

                // Color
                color.options[color.options.length] = new Option(`Purple`, `purple`);
                color.options[color.options.length] = new Option(`Orange`, `orange`);
                color.options[color.options.length] = new Option(`White`, `white`);

                // Fly
                canFly.checked = false

                // Swim
                canSwim.checked = false;

                // Special Power
                specialPower.innerText = "Special power: Earthquake"

                break;

            case "air":
                // Wind

                // Fur
                furType.options[furType.options.length] = new Option(`Feathers`, `feathers`);
                furType.options[furType.options.length] = new Option(`Hair`, `hair`);
                furType.options[furType.options.length] = new Option(`Scales`, `scales`);

                // Arms
                armType.options[armType.options.length] = new Option(`Wings`, `wings`);
                armType.options[armType.options.length] = new Option(`Clawed wings`, `clawed wings`);
                arms.min = "2";
                arms.max = "2";
                if (arms.value != 2) {
                    arms.value = "2";
                }

                // Eyes
                eyes.min = "2";
                eyes.max = "2";
                eyes.value = "2";

                // Color
                color.options[color.options.length] = new Option(`White`, `white`);
                color.options[color.options.length] = new Option(`Blue`, `blue`);
                color.options[color.options.length] = new Option(`Purple`, `purple`);

                // Fly
                canFly.checked = true;

                // Swim
                canSwim.checked = false;

                // Special Power
                specialPower.innerText = "Special power: Aerial Ace"

                break;
        }

        this.changeLegs()
    }

    // Changes the settings of the configurator based on current values
    changeLegs() {
        //legs
        let arms = document.getElementById("arms");
        let legs = document.getElementById("legs");
        let elementType = document.getElementById("elementType")
        switch (elementType.value) {

            case "water":
                // Water
                if (arms.value <= 4) {
                    legs.min = "0";
                    legs.max = "4";
                } else {
                    legs.value = "0"
                    legs.min = "0";
                    legs.max = "0";
                }
                break;

            case "fire":
                // Fire
                if (arms.value <= 2) {
                    legs.min = "2";
                    legs.max = "2";
                    legs.value = "2";
                } else {
                    legs.value = "0"
                }
                break;
            case "earth":
                // Earth
                legs.min = "2";
                legs.max = "6";
                legs.step = "2";
                break;

            case "air":
                // Wind
                legs.min = "0";
                legs.max = "2";
                legs.value = "0";
                legs.step = "2";
                break;
        }
    }

    // Changes canfly based on element en furtype
    changeFly() {
        let furType = document.getElementById("furType");
        let canFly = document.getElementById("canFly");
        let elementType = document.getElementById("elementType")
        if (elementType.value == "fire" && furType.value == "feathers") {
            canFly.checked = true;
        } else if (elementType.value == "fire") {
            canFly.checked = false;
        }
    }

    // Changes canswim based on element en furtype
    changeSwim() {
        let furType = document.getElementById("furType");
        let canSwim = document.getElementById("canSwim");
        let elementType = document.getElementById("elementType")
        if (elementType.value == "air" && (furType.value == "scales" || furType.value == "hair")) {
            canSwim.checked = true;
        } else if (elementType.value == "air") {
            canSwim.checked = false;
        }
    }

    // Set the monster image based on element and colortype
    setMonsterImage() {
        let elementType = document.getElementById("elementType");
        let color = document.getElementById("color");
        let monsterImage = document.getElementsByClassName("stockmonster")[0];
        monsterImage.src = `/resources/monster_${elementType.value}_${color.value}.png`
    }

}
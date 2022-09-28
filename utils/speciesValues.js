const speciesValues = (() => {
    const setSpeciesLogo = (characterSpecies) => {
        if (characterSpecies === "Human") {
            return require("../assets/human3.png");
        } else if (characterSpecies === "Alien") {
            return require("../assets/robot2.png");
        } else if (characterSpecies === "Humanoid") {
            return require("../assets/question2.png");
        } else if (characterSpecies === "unknown") {
            return require("../assets/question2.png");
        } else if (characterSpecies === "Poopybutthole") {
            return require("../assets/poop.png");
        } else if (characterSpecies === "Mythological Creature") {
            return require("../assets/dragon-mythological.png");
        } else if (characterSpecies === "Animal") {
            return require("../assets/paw.png");
        } else if (characterSpecies === "Robot") {
            return require("../assets/robot3.png");
        } else if (characterSpecies === "Disease") {
            return require("../assets/virus.png");
        } else {
            return require("../assets/question2.png");
        }
    };

    return {
        setSpeciesLogo,
    };
})();

export default speciesValues;

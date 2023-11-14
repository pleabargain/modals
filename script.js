const arrays = {
    pronoun: ["He", "She", "They", "It", "I", "You", "We"],
    modal: ["can", "should", "will", "must", "might", "ought to", "can't", "couldn't", "won't", "wouldn't", "shouldn't", "mustn't", "might not", "ought not to"],
    phrase: ["go to the park.", "read a book.", "play a game.", "write a letter.", "go to the park.",
    "read a book.",
    "write a letter.",
    "eat dinner.",
    "take a walk.",
    "see a movie.",
    "go to the park.",
    "read a book.",
    "write a letter.",
    "eat dinner.",
    "take a walk.",
    "see a movie.",
    "give a gift.",
    "come home early.",
    "drive carefully.",
    "lie on the beach.",
    "sit on the bench.",
    "stand in line.",
    "win a prize.",
    "lose time.",
    "draw a picture.",
    "swim in the pool.",
    "choose a path.",
    "wear a coat.",
    "tear a page.",
    "fly a kite.",
    "sing a song.",
    "run a marathon.",
    "speak loudly.",
    "throw a ball.",
    "bring a gift.",
    "give a gift.",
    "come home early.",
    "drive carefully.",
    "send the report.",
    "meet with clients.",
    "build a presentation.",
    "lead the team meeting.",
    "set up a conference call.",
    "spread the latest news.",
    "deal with customer inquiries.",
    "shoot a promotional video.",
    "split tasks among team members.",
    "shut down the computer.",
    "make breakfast.",
    "wake up early.",
    "sleep in late.",
    "choose a movie.",
    "hang pictures.",
    "freeze leftovers.",
    "sweep the floor.",
    "feed the pets.",
    "mow the lawn.",
    "shake out the rugs.",
    "catch a train.",
    "cycle through the city.",
    "jog in the park.",
    "browse a local market.",
    "cook a traditional dish.",
    "explore historical sites.",
    "attend a football match.",
    "paint a landscape.",
    "travel to a neighboring country.",
    "celebrate local festivals.",
"sign a contract.",
    "negotiate with clients.",
    "present sales figures.",
    "organize client meetings.",
    "calculate quarterly profits.",
    "finalize a deal.",
    "update the CRM database.",
    "follow up on leads.",
    "forecast sales trends.",
    "collaborate with the marketing team.",
    "close a successful transaction.",
    "check in for a flight.",

    "adjust the seatbelt.",
    "watch an in-flight movie.",
    "listen to the captain's announcement.",
    "enjoy an in-flight meal.",
    "read the safety instructions.",
    "look out the window.",
    "use the overhead bin.",
    "talk to a flight attendant.",
    "navigate the aisle.",
    "rest during the flight.",
    "land at the destination.",

    "press the floor button.",
    "hold the door open.",
    "exit at the correct floor.",
    "stand clear of the doors.",
    "ride up to the top floor.",
    "descend to the lobby.",
    "select multiple floors.",
    "greet other passengers.",
    "comment on the elevator music.",
    "watch the floor indicators.",


    "slice bread.",
    "fry eggs.",
    "boil pasta.",
    "toast bagels.",
    "whisk eggs for an omelette.",
    "grind coffee beans.",
    "simmer a stew.",
    "roast vegetables.",
    "blend a smoothie.",
    "measure ingredients.",





    "board the airplane.",
    "claim baggage.",
    "pass through security.",
    "scan boarding passes.",
    "announce flight delays.",
    "navigate through terminals.",
    "assist passengers with inquiries.",
    "load luggage onto the aircraft.",
    "prepare for takeoff.",
    "ride the subway.",
    "drive through traffic.",
    "walk to the bus stop.",
    "purchase a transit pass.",
    "wait at the train station.",
    "bike along the cycle path.",
    "hail a taxi.",
    "commute during rush hour.",
    "listen to a podcast on the way.",
    "read a book during the commute.",
    "order a meal.",
    "taste a new cuisine.",
    "serve customers.",
    "mix cocktails.",
    "book a table.",
    "review a wine list.",
    "grill a steak.",
    "toast with friends.",
    "split the bill.",
    "savor a dessert.",

    "check into a room.",
    "request extra towels.",
    "enjoy room service.",
    "explore hotel amenities.",
    "swim in the pool.",
    "book a spa appointment.",
    "ask for a wake-up call.",
    "leave luggage with the concierge.",
    "fill out a feedback form.",
    "check out at the front desk.",
    "attend a conference.",
    "network with colleagues.",
    "give a presentation.",
    "take notes.",
    "ask a question.",


    "admit a patient.",
    "take a patient's medical history.",
    "perform a physical exam.",
    "order diagnostic tests.",
    "interpret test results.",
    "prescribe medication.",
    "administer medication.",
    
    "conduct a medical examination.",
    "administer medication.",
    "perform surgery.",
    "monitor vital signs.",
    "diagnose an illness.",
    "treat injuries.",
    "schedule follow-up appointments.",
    "discharge a patient.",
    "sanitize medical equipment.",

    "clean it off",
    "shake it off",
    "present a passport.",
    "declare items at customs.",
    "undergo a security check.",
    "answer questions from officials.",
    "obtain a visa stamp.",
    "verify travel documents.",
    "inspect luggage for prohibited items.",
    "fill out customs forms.",
    "pass through immigration control.",
    "report lost or stolen items.",
    "reclaim baggage.",
    "go through customs.",
    "check into a hotel.",
    "book a room.",
    "request a wake-up call.",
    "pay for a room.",
    "order room service.",
    "check out of a hotel.",
    "confirm a reservation.",
    "change a reservation.",
    "cancel a reservation.",
    "upgrade a room.",
    "request extra towels.",
    "use hotel amenities.",
    "swim in the pool.",
    "book a spa appointment.",
    "ask for a wake-up call.",
    "leave luggage with the concierge.",
    


    "explore a new city.",
    "relax on the beach.",
    "hike in the mountains.",
    "take photos.",
    "visit museums.",
    "dine at local restaurants.",
    "shop for souvenirs.",
    "watch a sunset.",
    "attend cultural events.",
    "enjoy leisure activities.",
    "go sightseeing.",
    "take a guided tour.",
    "visit historical sites.",
    

    "type a document.",
    "browse the internet.",
    "download software.",
    "upload files.",
    "edit a video.",
    "send an email.",
    "organize digital folders.",
    "play a computer game.",
    "install updates.",
    "backup important data.",


    "lift weights.",
    "run on the treadmill.",
    "join a fitness class.",
    "stretch before exercising.",
    "use the rowing machine.",
    "swim laps in the pool.",
    "track workout progress.",
    "hydrate during breaks.",
    "cool down after a workout.",
    "clean the equipment after use.",
    

    "brush teeth.",
    "take a shower.",
    "comb hair.",
    "apply makeup.",
    "shave with a razor.",
    "fill the bathtub.",
    "hang towels.",
    "use the toilet.",
    "clean the mirror.",
    "rinse the sink.",

    "seat customers.",
    "order from the menu.",
    "cook gourmet dishes.",
    "serve food to tables.",
    "clear empty plates.",
    "pour wine for guests.",
    "recommend a special dish.",
    "prepare a dessert.",
    "fold napkins.",
    "handle the bill and payment.",

    "purchase a ticket.",
    "stand behind the yellow line.",
    "board the train.",
    "hold onto the handrail.",
    "exit at the right stop.",
    "use the escalator.",
    "read the metro map.",
    "wait for the next train.",
    "listen to announcements.",
    "cross the platform.",



]
};

const usedItems = {
    pronoun: [],
    modal: [],
    phrase: []
};

function next(type) {
    if (arrays[type].length === 0) {
        arrays[type] = usedItems[type].slice();
        usedItems[type] = [];
    }

    const index = Math.floor(Math.random() * arrays[type].length);
    const item = arrays[type].splice(index, 1)[0];
    usedItems[type].push(item);

    document.getElementById(`${type}Area`).value = item;
}

function concatenate() {
    const pronoun = document.getElementById("pronounArea").value;
    const modal = document.getElementById("modalArea").value;
    const phrase = document.getElementById("phraseArea").value;

    const concatenatedText = [pronoun, modal, phrase].join(" ");
    const currentText = document.getElementById("concatenatedArea").value;

    // Prepending the new concatenated text to the existing content
    document.getElementById("concatenatedArea").value = concatenatedText + "\n" + currentText;
}

// Initialize with random texts
next('pronoun');
next('modal');
next('phrase');



// const arrays = {
//     pronoun: ["he", "she", "they", "it"],
//     modal: ["can", "should", "will", "must"],
//     phrase: ["go to the park", "read a book", "play a game", "write a letter"]
// };

// const usedItems = {
//     pronoun: [],
//     modal: [],
//     phrase: []
// };

// function next(type) {
//     if (arrays[type].length === 0) {
//         arrays[type] = usedItems[type].slice();
//         usedItems[type] = [];
//     }

//     const index = Math.floor(Math.random() * arrays[type].length);
//     const item = arrays[type].splice(index, 1)[0];
//     usedItems[type].push(item);

//     document.getElementById(`${type}Area`).value = item;
// }

// // Initialize with random texts
// next('pronoun');
// next('modal');
// next('phrase');

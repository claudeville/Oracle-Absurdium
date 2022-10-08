// Create array
var fortunesArray = [
    "Someone significant will bring you a cart load of humbugs",
    "Pink is your colour everyday of the week next week",
    "You will grow a pair of elf ears if you continue eating mushrooms on toast",
    "Never turn left on Fanglung Lane",
    "A mystery stranger will hand you a mystery gift made of bubblegum",
    "For 5 nights, you will dream about fish and chips",
    "Beware the half moon on Mondays, you could develop hairy elbows",
    "The situation calls for you to be vigilant in regards to what socks you put on this Friday",
    "A phone call made in 7 days time will be a good omen",
    "The next time you see 11 cows cross the road, take it as a sign your wish will be granted",
    "A man with green hair offers you sage advice in a moon's turn",
    "Look out for a lady with blue shoes and spring in her step, it means your coming into money",
    "Eat more crisps and less salad for longer legs",
    "This year you'll be more psychic than last",
    "Walk backwards to bed tonight and you'll be lucky if your don't trip over anything",
    "This time in a fortnight bodes well for a trip to the seaside. Except a day trip on a neon dinghy once there",
    "When you next come across a black cat say hello to it and you'll have great fortune at 6pm in 10 Tuesdays time",
    "Brush your hair to the right side tomorrow and you'll meet a charismatic individual with golden teeth",
    "A new potion shop is opening soon...accept the discount on 'Eyeball of Giant Elixir', it will give you xray vision",
    "The next full moon you may develop a hairy back. Chew on the rind of a lemon if that proves problematic (the hair)",
    "The song you hear on the radio this afternoon at exactly 3pm will be about your future spouse",
    "The chances of you getting a ridiculously absurd nonsensical answer from this oracle is 100%"
    ];

function getFortune() {

    // Get random item from array
    var randomFortune = fortunesArray[ Math.floor(
        Math.random()*fortunesArray.length )
    ];

    // Log random item to the console
    console.log(randomFortune);

    // Create a variable for the fortune-holder element in the html
    var fortuneHolder = document.getElementById("fortune-holder");

    // Put the randomFortune value into the fortune-holder element
    fortuneHolder.innerHTML = randomFortune;

    // Remove animation class (if it has it)
    fortuneHolder.classList.remove("fade-animation");

    // Trigger reflow
    void fortuneHolder.offsetWidth;

    // Re-add the animation class
    fortuneHolder.classList.add("fade-animation");
}

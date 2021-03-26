let poemFragments = {
  noun: [
    "a mountain",
    "Leaf",
    "a grandma",
    "a field",
    "a cup",
    "a horse",
    "an ocean",
    "a walnut",
    "a desert",
    "a cat",
    "a branch",
    "a diaper",
    "socks",
    "a cupcake",
    "a pillow",
    "a coffee",
    "cat",
    "girl",
    "a cherry"
  ],
  adjective: [
    "Tiring",
    "rotund",
    "hideous",
    "breakable",
    "sparkly",
    "smooth",
    "fluffy",
    "fragile",
    "delicious",
    "lovely",
    "hot",
    "strange",
    "smooth",
    "ample",
    "warm",
    "colossal",
    "rough",
    "tiny",
    "dark"
  ],
  verb: [
    "Overthinking",
    "thinking of",
    "bouncing on",
    "sculpting",
    "waiting for",
    "wanting",
    "napping",
    "thinking",
    "hoping for",
    "wanting",
    "dancing",
    "sleeping",
    "frustra",
    "brightening",
    "skipping",
    "looking for",
    "swimming",
    "thinking of",
    "making"
  ],
  emotion: [
    "sorrowful",
    "Anxious",
    "confused",
    "yearning",
    "angry",
    "frustrated",
    "melancholy",
    "overwhelm",
    "anxious",
    "excited ",
    "sleepy",
    "triggered",
    "excited",
    "tired",
    "joyful",
    "disturbed",
    "happy",
    "delighted",
    "upset"
  ]
};

function swapText(event) {
  let itemClass = event.target.className;
  console.log(itemClass);

  if (itemClass == "adjective") {
    event.target.innerText =
      poemFragments["djective"][
        Math.floor(Math.random() * poemFragments["djective"].length)
      ];
  }
  if (itemClass == "verb") {
    event.target.innerText =
      poemFragments["verb"][
        Math.floor(Math.random() * poemFragments["verb"].length)
      ];
  }
  if (itemClass == "emotion") {
    event.target.innerText =
      poemFragments["emotion"][
        Math.floor(Math.random() * poemFragments["emotion"].length)
      ];
  }
}

let poem = document.querySelector("#poem");
poem.addEventListener("mouseover", swapText);

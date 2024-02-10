function getRandomPetFact() {
    const facts = [
      "A cat has been the mayor of Talkeetna, Alaska, for 15 years.",
      "A cat's brain is 90% similar to a human's — more similar than to a dog's.",
      "A cat's nose is as unique as a human's fingerprint.",
      "A cat's whiskers are roughly as wide as its body, helping it to determine if it can fit through spaces.",
      "A dog's sense of smell is 10,000 to 100,000 times more acute than humans.",
      "A group of cats is called a clowder.",
      "A group of ferrets is called a business.",
      "A group of pugs is called a grumble.",
      "A rabbit's teeth never stop growing throughout its life.",
      "A single pair of cats and their kittens can produce as many as 420,000 kittens in just 7 years.",
      "African Grey Parrots have the reputation for being the best talkers of the parrot kingdom.",
      "Birds are the only animals that can produce their own vitamin C.",
      "Birds can learn to recognize their own names and respond when called.",
      "Birds need gravity to swallow; they can't swallow in zero-gravity conditions.",
      "Birds require sleep in order to maintain their health, much like humans and other animals.",
      "Cats can change their meow to manipulate a human. They often imitate a baby crying when they need food.",
      "Cats can make over 100 different sounds.",
      "Cats can rotate their ears 180 degrees.",
      "Cats have a third eyelid called a haw that helps protect their eyes.",
      "Cats have five toes on their front paws but only four toes on their back paws.",
      "Cats only meow to communicate with humans, not each other.",
      "Dogs can hear frequencies up to 60,000 Hz, while humans can only hear up to 20,000 Hz.",
      "Dogs can make about 100 different facial expressions.",
      "Dogs can see in the dark much better than humans can.",
      "Dogs can understand up to 250 words and gestures.",
      "Dogs do not sweat by salivating. They sweat through the pads of their feet.",
      "Dogs have a sense of time and can get upset when their routine is changed.",
      "Dogs have about 1,700 taste buds. Humans have approximately 9,000.",
      "Dogs' nose prints are as unique as human fingerprints and can be used to identify them.",
      "Dogs' sense of smell is so precise, they can smell diseases like cancer and diabetes.",
      "Ferrets sleep for about 18 hours a day.",
      "Fish can drown in water if there isn't enough oxygen.",
      "Goldfish can recognize their owners and even learn tricks.",
      "Greyhounds are the fastest dog breed and can run up to 45 miles per hour.",
      "Guinea pigs are born with their eyes open and can start running within hours of birth.",
      "Guinea pigs are social animals and will get lonely without interaction.",
      "Guinea pigs can learn complex paths to food, and remember them for months.",
      "Hamsters can store food in their cheeks to eat later.",
      "Hamsters' teeth grow continuously throughout their life.",
      "Horses can sleep both lying down and standing up.",
      "Parrots can mimic human speech and other sounds they hear frequently.",
      "Parrots have the cognitive ability of a 4-6 year old child.",
      "Puppies are born blind, deaf, and toothless.",
      "Rabbits can see behind them without turning their heads.",
      "Rabbits have a blind spot right in front of their nose.",
      "Rabbits have a peripheral vision of nearly 360 degrees.",
      "Rabbits perform a jump called a 'binky' when they're happy, involving twisting and kicking in the air.",
      "Some cats are allergic to humans.",
      "The average cat can jump up to six times its body length in one leap.",
      "The Basenji dog is known as the 'barkless dog' because it doesn't bark like other dogs.",
      "The Basenji dog yodels instead of barks.",
      "The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
      "The nose pad of each cat and dog has a unique pattern, much like human fingerprints.",
      "The Saluki is the oldest dog breed, dating back to ancient Egypt.",
      "The world record for the largest goldfish is over 4 pounds.",
      "The world's oldest goldfish lived to be 43 years old.",
      "The world's oldest known pet cat was found in a 9,500-year-old grave on the Mediterranean island of Cyprus.",
      "Tortoises have one of the longest lifespans of any animal, with some living over 150 years.",
      "Turtles can breathe through their butts.",
      "Turtles have existed for over 200 million years.",
    ];
  

  
    // Generate a random index based on the length of the facts array
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Return the fact at the randomly generated index
    return facts[randomIndex];
  }
  
  module.exports = getRandomPetFact;

# hexbot color game
This project is a tiny game about sorting colors! It was built as part of the [Noops Challenge](https://noopschallenge.com/) & uses [Hexbot](https://noopschallenge.com/challenges/hexbot) to pick colors.

## how to play
Drag and drop the color squares in the right order. When you think you have it right, press the check button! Any squares that aren't in the right position will shake.

As you progress through each level, you're asked to sort more colors at a time!

## ideas for the future
This is a super simple game, and some of the design is kind of funky because my main goal was to practice working with Node.js and APIs. I have a few ideas for improvement if I ever decide to keep working on this:

* make it mobile friendly
* find a better way to ramp up the difficulty rather than just `numColors = level * 3;`
* sort colors based on different characteristics, rather than just hue (saturation, luminosity, etc.)
* build a scoring system based on how many tries it takes the player to find the correct order (someone who got it right on the first try gets more points than someone who checks it 100 times before solving it)
* other misc improvements & code cleanup, etc.
# Bomberilium
This is a Phaser 3 Skeleton/boilerplate however you like to call it.

It leverages native ES2015 modules support in UWP Apps so you can either use ES5 Syntax to port any existing games, or continue
with a module based workflow for your phaser apps for the windows store.

No Webpack, No toolchain, Just `HTML/CSS/JS`

# Run
Just open the solution in visual studio and press <kbd>F5<kbd> and the game will run inside an UWP App

# Caveats
If you're using ES2015 modules, pay attention on how they are called: `import GameScene from '/js/scenes/game.scene.js';` you have to import them from the root of your project and addd the `.js` extension at the end or else it won't load the module, you can't use `./` to load a file in the same directory

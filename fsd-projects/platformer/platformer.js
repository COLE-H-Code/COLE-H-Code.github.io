$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
      createPlatform(250, 600, 100, 15, "maroon");
      createPlatform(500, 510, 150, 15, "maroon");
      createPlatform(250, 400, 100, 15, "maroon");
      createPlatform(150, 300, 25, 15, "maroon");
      createPlatform(375, 175, 200, 15, "gold");
      createPlatform(880, 400, 25, 15, "maroon");
      createPlatform(1100, 275, 300, 75, "gold");
      createPlatform(1100, 275, 25, 125, "black");
      createPlatform(880, 590, 25, 15, "maroon");
      createPlatform(1100, 500, 300, 15, "gold");
       createPlatform(0, 700, 300, 75, "maroon");

    // TODO 3 - Create Collectables
    createCollectable("max", 480, 125, 0.5, 0.7);
    createCollectable("steve", 1230, 450, 0.5, 0.7);
    createCollectable("kennedi", 1230, 225, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("bottom", 835, 4000)
    createCannon("bottom", 325, 1000)
    createCannon("top", 1050, 1500)
    createCannon("right", 800, 0)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

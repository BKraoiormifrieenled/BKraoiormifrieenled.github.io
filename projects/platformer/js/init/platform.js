(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    createPlatform(200, 630, 0.5, 1.5) // Desk Platform
    createPlatform(590, 600, 0.23, 5) // Box Platform 1 (Small)
    createPlatform(500, 590, 0.33, 5) // Box Platform 2 (Normal)
    createPlatform(540, 520, 0.25, 5) // Box Platform 3 (Large)
    createPlatform(640, 320, 0.33, 1.5) // Desk Platform 2 (Normal)
    createPlatform(850, 620, 0.3, 0.5) //Save Platform
    createPlatform(250, 410, 0.5, 0.85) //Shelf Platform
    createPlatform(10, 310, 0.5, 0.85) //Shelf Platform 2
    createPlatform(350, 200, 0.5, 0.85) // Shelf Platform 3
    createPlatform(850, 200, 0.1, 0.85) //Win Platform
    createPlatform(550, 250, 0.45, 0.01) // Invisible Platform

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);

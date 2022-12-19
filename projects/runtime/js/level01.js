var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade (posx, posy) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        sawBladeHitZone.x = posx;
        sawBladeHitZone.y = posy;
        game.addGameItem(sawBladeHitZone);

        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);

        obstacleImage.x = -25
        obstacleImage.y = -25
        }

        createSawBlade (400, 200)
        createSawBlade (200, 400)
        createSawBlade (550, 490)

        function createWindow (posx, posy) {
            var hitZoneSize = 50;
            var damageFromObstacle = 20;
            var windowHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            windowHitZone.x = posx;
            windowHitZone.y = posy;
            game.addGameItem(windowHitZone);
    
            var obstacleImage = draw.bitmap("img/assets/errorblock.png");
            windowHitZone.addChild(obstacleImage);
    
            obstacleImage.x = -57.5
            obstacleImage.y = -57.5
            obstacleImage.scaleX = 0.5
            obstacleImage.scaleY = 0.5
          }
        createWindow(400,400)

        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
    
            enemy.x = x;
            enemy.y = groundY - y;

            game.addGameItem(enemy);

            enemy.velocityX = 10
            enemy.rotationalVelocity = 15
           
            enemy.onPlayerCollision = function () {game.changeIntegrity(-10)};
            enemy.onProjectileCollision = function2 ();{
                game.increaseScore(50); 
                enemy.fadeOut();};
          }

          createEnemy(400, groundY - 10);
          createEnemy(800, groundY - 100);
          createEnemy(1200, groundY - 50);

          function createReward(x, y) {
            var reward = game.createGameItem("reward", 25);
            var blueCircle = draw.circle(50, "blue", "blue", 50);
            blueCircle.x = -25;
            blueCircle.y = -25;
            reward.addChild(blueCircle);

            reward.x = x;
            reward.y = y;

            game.addGameItem(reward);

            reward.velocityX = 10
            reward.rotationalVelocity = 15
            
            reward.onPlayerCollision = function3 () ;{;game.changeIntegrity(10)};
            reward.onPlayerCollision = function2();{
                game.increaseScore(50)
                reward.fadeOut();}
            }
          }

          createReward(800, -200)
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

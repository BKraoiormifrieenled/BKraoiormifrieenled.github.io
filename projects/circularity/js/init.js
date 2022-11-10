var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle () {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
             physikz.addRandomVelocity(circle, canvas);
             view.addChild(circle);
             circles.push(circle);
            }            

         // TODO 3 / 7 : Call the drawCircle() function <-- tested and it works
             /* Your Function Calls HERE */
             for (var circleamount = 0; circleamount < 100; circleamount++) {
                drawCircle ()
            }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position <-- issue originally located here (ref 11/9/22 ver.) //
            function update() {
                for (var i = 0; i < circles.length; i++) {
                    physikz.updatePosition(circles[i])
                  game.checkCirclePosition(circles[i])
                 }
            }
            // Code above for TODO 4, 5 & 8 was replaced with a for loop in TODO 9

            // TODO 5 / 8 : Call game.checkCirclePosition() on your circles.

            // TODO 9 : Iterate over the array
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
           
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            var leftEdge = circle.x - circle.radius
            var rightEdge = circle.x + circle.radius
            var upperEdge = circle.y - circle.radius
            var lowerEdge = circle.y + circle.radius

            if(leftEdge > canvas.width) {
                circle.x = canvas.width - circle.radius;
            }

            if(rightEdge < 0) {
                circle.x = canvas.width + circle.radius;
            }

            if(lowerEdge > canvas.height) {
                circle.y = canvas.height + circle.radius;
            }

            if(upperEdge < 0) {
                circle.y = canvas.height - circle.radius;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
} }

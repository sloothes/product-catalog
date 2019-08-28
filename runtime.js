//  runtime.js

    var $renders = $("input[type=hidden].render");
    var $updates = $("input[type=hidden].update");

    var clock = new THREE.Clock();

    function animate(){

        windowAnimationFrameRequestID = requestAnimationFrame( animate );

        for (var i = 0; i < $renders.length; i++){
            $renders[i].render();
        }

    }

    function updates(){

        windowAnimationFrameRequestID = requestAnimationFrame( updates );
        
        var dt = clock.getDelta();
        var time = clock.getElapsedTime();

        for ( var i = 0; i < $updates.length; i++ ){
            $updates[i].update( dt );
        }

    }

//  Settings.

    keyInputControls.On();
    cameraControls.radius = 42;
    cameraControls.offset.y = 15;
    cameraControls.minRadius = 18;
    cameraControls.maxRadius = 54;

//  Runtime.

    updates();
    animate();


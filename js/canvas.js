	var container, stats;
			var camera, scene, renderer;
		
			var raycaster;
			var mouse;
		
			var PI2 = Math.PI * 2;
		
			var programFill = function ( context ) {
				context.fillStyle = "#FF0000";
				context.beginPath();
				context.arc( 0, 0, 0.5, 0, PI2, true );
				context.fill();
		
			};
		
			var programStroke = function ( context ) {
		
				context.lineWidth = 1;
				context.beginPath();
				context.arc( 0, 0, 0.5, 0, PI2, true );
				context.stroke();
		
			};
		
			var INTERSECTED;
		
			init();
			animate();
		
			function init() {
		
				container = document.createElement( 'div' );
				document.body.appendChild( container );
		
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.z = 1000;
		
				scene = new THREE.Scene();
		
				for ( var i = 0; i < 2000; i ++ ) {
		
					var particle = new THREE.Sprite( new THREE.SpriteCanvasMaterial( { color: '#FFFFFF', program: programStroke } ) );
					particle.position.x = 0;
					particle.position.y = 0;
					particle.position.z = 0;
					particle.scale.x = particle.scale.y = 4;
					scene.add( particle );
					
					var delay = ( i * i ) * 0.0005;
					
					var length = Math.floor(Math.random() * (520 - 190)) + 190;
					var speed = 3000;
					
					if ( i % 4 === 0 ) {
						length = Math.floor(Math.random() * (280 - 190)) + 190;
						speed = 1500;
					}
					if ( i % 4 === 1 ) {
						length = Math.floor(Math.random() * (360 - 190)) + 190;
						speed = 1500;
					}
					if ( i % 4 === 2 ) {
						length = Math.floor(Math.random() * (240 - 190)) + 190;
						speed = 1500;
					}
					
					
					var angle = PI2 * Math.random();
					var y_pos = Math.sin(angle) * length;
					var x_pos = Math.cos(angle) * length;					
					
					var tween = new TWEEN.Tween( particle.position )
						.delay( delay )
						.to( { x: x_pos, y: y_pos, z: 0 }, speed )
						.start()
						.easing(TWEEN.Easing.Cubic.Out);

				}
				
				//
				
				raycaster = new THREE.Raycaster();
				mouse = new THREE.Vector2();
		
				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( 0x000000 );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
		
				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				container.appendChild( stats.domElement );
		
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
		
				//
		
				window.addEventListener( 'resize', onWindowResize, false );
		
			}
		
			function onWindowResize() {
		
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
		
				renderer.setSize( window.innerWidth, window.innerHeight );
		
			}
		
			function onDocumentMouseMove( event ) {
		
				event.preventDefault();
				
				var mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
				var mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
				
				moveSalt(mouseX, mouseY);
				
			}
		

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					var mouseX = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
					var mouseY = - ( event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;
					
					moveSalt(mouseX, mouseY);

				}

			}
			
			function moveSalt(x,y) {
					
				var vector = new THREE.Vector3();
				
				vector.set( x, y, 0.5 );
				
				vector.unproject( camera );
				
				var dir = vector.sub( camera.position ).normalize();
				
				var distance = - camera.position.z / dir.z;
				
				var mouse = camera.position.clone().add( dir.multiplyScalar( distance ) );				
				var mouse_x = mouse.x;
				var mouse_y = mouse.y;
				
				for ( var i = 0; i < scene.children.length; i++ ) {
					var particle = scene.children[i];
					var pos_x = particle.position.x; 
					var pos_y = particle.position.y;				
					var dist = Math.sqrt( Math.pow((pos_x-mouse_x), 2) + Math.pow((pos_y-mouse_y), 2) );
					
					if ( dist < 20 ) {
						
						// distance past which the force is zero
						var maxDistance = 50;
						var force = (maxDistance - dist) / maxDistance;
						if (force < 0) force = 0;
						
						var to_x = pos_x + ( ( ( ( pos_x - mouse_x ) / dist ) * force ) * 5 );
						var to_y = pos_y + ( ( ( ( pos_y - mouse_y ) / dist ) * force ) * 5 );	
						
						particle.position.x = to_x;
						particle.position.y = to_y;
						
						// Trigger point on path away from mouse cursor
						/*
						var tween = new TWEEN.Tween( particle.position )
							.to( { 
								x: to_x, 
								y: to_y,
							 	z: 0 
							 }, 300 )
							.start()
							.easing(TWEEN.Easing.Cubic.Out);
						*/
						
					}
	
				}
					
			}
			
			//
		
			function animate() {
		
				requestAnimationFrame( animate );
		
				render();
				stats.update();
		
			}
		
			function render() {

				TWEEN.update();
		
				camera.lookAt( scene.position );
		
				camera.updateMatrixWorld();
		
				// find intersections
				/*
				raycaster.setFromCamera( mouse, camera );
		
				var intersects = raycaster.intersectObjects( scene.children );
		
				if ( intersects.length > 0 ) {
		
					if ( INTERSECTED != intersects[ 0 ].object ) {
		
						if ( INTERSECTED ) INTERSECTED.material.program = programStroke;
		
						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.material.program = programFill;
		
					}
		
				} else {
		
					if ( INTERSECTED ) INTERSECTED.material.program = programStroke;
		
					INTERSECTED = null;
		
				}
				*/
		
				renderer.render( scene, camera );
		
			}
		





<!--
	External Dependencies: 
	1> Baffle.js library. 
	2> A hash randomizer to implement randomCSSid(32) on the window object
	which just needs to create unique hashes without collisions. 
	This needs to be redone at some point with DOM traversals.

	My current implementation:

	window.randomCSSid = function(length) {
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}

	To Do:
	1> Im not sure the timing is working correctly in baffle tag.  I think I need to  test if the variable
	is defined instead of the simple ||.
	2> fix the random hash generator to a more dom centric way of getting the node.
-->


<!-- This text is slowly revealed baffle style.  
Can tinker with the settings using reveal_time and delay_to_reveal -->
<baffle-tag>

		<span id="{ uniq_id }">░▒▒▒░░</span>

	<script>

	this.uniq_id = randomCSSid(32);
	this.reveal_time = parseInt(opts.time) || 3000;
	this.delay_to_reveal= parseInt(opts.delay) || 1000;
	this.style = opts.style

	s=["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"]

	this.final_text = opts.text

    this.on('mount', function(){
      var x = baffle("#" + this.uniq_id).start().set({
        characters: s,
        speed: 150
        });

      x.text(currentText => this.final_text).reveal(this.reveal_time, this.delay_to_reveal);
    })

    </script>
</baffle-tag>


<!-- This simply adds a class to a span with a delay -->
<delayed-class>
	<span id="{ uniq_id }"></span>

	<script>
		this.uniq_id = randomCSSid(32);
		this.delay = opts.delay
		this.add_class = opts.addclass

		this.on('mount', function(){
			this.node=document.getElementById(this.uniq_id);

			setTimeout(function(node, add_class){
				node.className = add_class
			}, this.delay, this.node, this.add_class);

		})


		
	</script>
</delayed-class>


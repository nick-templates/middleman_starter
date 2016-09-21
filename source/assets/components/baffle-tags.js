<!-- This text is slowly revealed baffle style.  
Can tinker with the settings using reveal_time and delay_to_reveal -->
<baffle-tag>
	<span id="{ uniq_id }">░▒▒▒░░</span>

	<script>

	this.uniq_id = randomCSSid(32);
	this.reveal_time = 9000;
	this.delay_to_reveal=2000;

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


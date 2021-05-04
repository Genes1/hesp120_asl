<template>
	

		<div class="container">
			
			<center>
				<button @click="toggleMode()"
					style="width:300px; height:50px;"
				>
					Toggle mode: 
					<b id='mode'> {{mode}} </b>
				</button>
			</center>



			<!-- display content for table -->
			<div v-if="mode == 'table'" id="tablecontainer" class="center"></div>
			


			<!-- display content for live transcription -->
			<div v-else-if="mode == 'live'" class="center">

				<center>
					<img id="letter" ref="sign_show" :class="letterClass" src="static/alphabet/a.gif" width=500 height=500/>
				</center>

				<p id="sign_meaning" ref="text_in">{{typed_string}}</p>
				<p id="sign_meaning_out" ref="text_out">{{test_out_string}}</p>

			</div>


		</div>


</template>





<script>

  export default {



    data() {
      return {
		letterClass: 'letter',
		letterSrc: "../static/alphabet/a.png",
		typed_string: '',
		test_out_string: '',
        mode: 'live',
        interval: {},
		time_show: 0,
      };
    },


    mounted() {
		document.addEventListener('keydown', this.logKey);

		this.interval = setInterval(() => {
			console.log(this.time_show)
			if (this.time_show <= 0) {
				this.clearMeaning()
			} else {
				this.time_show--
			}
		}, 1000)

    },


    methods: {

      	logKey(e) {
			  

			const key = e.key.toLowerCase();
			console.log(key)

			if (String(key).length == 1) {

				this.resetAnim("sign_show");

				if (this.mode == 'live') {
					if (key == "j") {
						// special animation for j
						this.letterClass = "letter_j";
						this.$refs.sign_show.src = "../static/alphabet/j_noarrow.png";
					} else if (key == "z") {
						// special animation for z
						this.letterClass = "letter_z";
						this.$refs['sign_show'].src = "../static/alphabet/z_noarrow.png";
					} else if (key.charCodeAt(0) >= 97  &&  key.charCodeAt(0) <= 122) {
						// the char is a letter
						this.letterClass = "letter";
						this.$refs['sign_show'].src = "../static/alphabet/" + key + ".gif";
					}

					
				}

				this.typed_string += key;

			} else { // the input is backspace, control, shift, etc

				if (key == 'backspace') {

					if (this.mode == 'live') {
						this.typed_string = this.typed_string.slice(0, -1);
					} else {
						this.typed_string = this.typed_string.slice(0, -1)
					}

				} else {

					if (this.mode == 'live') {
						this.clearMeaning()
					} else {
						this.typed_string = ''
					}


				}

			}

			
			if (this.mode == 'live') {
				this.time_show = 2
			} else {
				document.getElementById('tablecontainer').innerHTML = makeTable(this.typed_string)
			}

        },



		/*
			Reset the animation class for a particlar element
		*/
		resetAnim(el) {
			this.letterClass = "";
			this.$refs[el].style.animation = 'none';
			this.$refs[el].offsetHeight; /* trigger reflow */
			this.$refs[el].style.animation = null; 
		},



		/*
			Clear the meaning subline.
		*/
		clearMeaning(){
			this.test_out_string = this.typed_string
			//this.$refs.sign_show
			this.resetAnim('text_out');
			this.typed_string = ''
		},



		toggleMode() {
			//mode = mode == 'live' ? 'table' : 'live'
			if (this.mode == 'live') {

				clearInterval(this.interval)
				this.typed_string = ''
				//this.$refs.sign_show.style.display = 'none';
				this.mode = 'table'


			} else if (this.mode == 'table'){

				document.getElementById('tablecontainer').innerHTML = ''

				//el.style.display = "inline-block"
				this.mode = 'live'
				this.interval = setInterval(function(){
					console.log('time')
					if (this.time_show <= 0) {
						this.clearMeaning()
					} else {
						this.time_show--
					}
				}, 1000)

			} else {

			}

			
		},



    }


  }


</script>








<style>


	body, head {
		  justify-content: center;
	}




	#sign_meaning {
		margin:auto;
		font-size: 50px;
		font-family: Calibri;
		text-decoration: bold;
		text-align: center;
	}



	#sign_meaning_out {
		margin:auto;
		font-size: 50px;
		font-family: Calibri;
		text-decoration: bold;
		text-align: center;
		animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}



	@keyframes slide-bottom {
	  0% {
	            transform: translateY(0);
	            opacity: 1;
	  }
	  100% {
	            transform: translateY(100px);
	            opacity:0;
	  }
	}





	.container {
	  width: 100%;
	  height:100%;
	}

	.center {
	  margin: 0;
	  position: absolute;
	  top: 40%;
	  left: 50%;
	  -ms-transform: translate(-50%, -50%);
	  transform: translate(-50%, -50%);
	}






	.letter {
		animation: scale-up-center 0.2s;
	}

	@keyframes scale-up-center {
	  0% {
	            transform: scale(0.8);
	  }
	  100% {
	            transform: scale(1);
	  }
	}



	.letter_j {
		margin-left: -50px;
		margin-top: 100px;
		offset-path: path('M235,258 C312,402 340,202 326,143');
		offset-rotate: 0deg;
		animation: move 0.3s ease-in-out;
		animation-fill-mode: forwards;
	}




	.letter_z {
		margin-left: -100px;
		margin-top: 130px;
		offset-path: path('M 140 88    400 88   140 175    400 175');
		offset-rotate: 0deg;
		animation: move 0.8s;
		animation-fill-mode: forwards;
	}




	@keyframes move {
		0% {
	        transform: scale(0.8);
		}

		100% { 
			offset-distance: 100%;
	        transform: scale(1);
		}
	}


</style>
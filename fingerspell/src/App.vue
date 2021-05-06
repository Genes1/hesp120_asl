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
			<div v-if="mode == 'table'" id="tablecontainer" class="center" >
				<table>
					<tr>
						<td v-for="c in typed_string" :key="c">
							<img :src="`static/alphabet/${c}.gif`" width=100 height=100/>
						</td>
					</tr>
					<tr>
						<td v-for="c in typed_string" :key="c" style='text-align: center;'> {{c}} </td>
					</tr>
				</table>
			</div>
			


			<!-- display content for live transcription -->
			<div v-else-if="mode == 'live' || mode == 'game'" class="center">

				

				<center>
					<button v-if="mode == 'game'" @click="showWord(wordList[0])"> Replay ({{display_interval}} ms)</button>
					<button v-if="mode == 'game'" @click="display_interval -= 50">🠔</button>
					<button v-if="mode == 'game'" @click="display_interval += 50">➝</button>
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

				// changing animation class based on letter
				letterClass: 'letter',

				// image source showing for the live display
				letterSrc: "../static/alphabet/a.png",

				// currently typed/displayed string
				typed_string: '',

				// fading string
				test_out_string: '',

				
				// live, table, game
				mode: 'game',
				
				// countdown for clearing text utils
				interval: {},
				time_show: 0,
				display_interval: 200,

				// game utils
				wordGen: {},
				wordList: [],
			
			};
		},



		mounted() {
			
			document.addEventListener('keydown', this.logKey);

			this.wordGen = require('random-words');
			this.wordList = this.wordGen(10);
			console.log(this.wordList[0]);

			this.showWord(this.wordList[0]);

		},





		methods: {


			showLetter(letter) {

				if (letter == "j") {
					// special animation for j
					this.letterClass = "letter_j";
					this.$refs.sign_show.src = "../static/alphabet/j_noarrow.png";
				} else if (letter == "z") {
					// special animation for z
					this.letterClass = "letter_z";
					this.$refs['sign_show'].src = "../static/alphabet/z_noarrow.png";
				} else if (letter.charCodeAt(0) >= 97  &&  letter.charCodeAt(0) <= 122) {
					// the char is a letter
					this.letterClass = "letter";
					this.$refs['sign_show'].src = "../static/alphabet/" + letter + ".gif";
				}

			},

			
			showWord(word) {

				if (this.mode == 'game') {

					for (var i = 0; i < word.length; i++) {
						setTimeout( 
							function(c) { 
								this.resetAnim("sign_show");
								this.showLetter(c) 
							}.bind(this),
							this.display_interval*i,
							word.charAt(i)
						);
					}
				} else if (this.mode == 'table') {
					this.typed_string = word;
				}

			},



			submitGuess() {
				if (this.typed_string == this.wordList[0]) {
					console.log('correct')
				} else {
					console.error('incorrect')
				}
			},



			// Handle a keyboard keypress. Will vary with mode

			logKey(e) {
				
				const key = e.key.toLowerCase();
				console.log(key)


				if (String(key).length == 1) { // input is a single letter
					
					if (this.mode == 'live') {
						this.resetAnim('sign_show');
						this.showLetter(key);
					}

					this.typed_string += key;

				} else {

					if (key == 'backspace') { // backspace

						if (this.mode == 'live') {
							this.typed_string = this.typed_string.slice(0, -1);
						} else {
							this.typed_string = this.typed_string.slice(0, -1)
						}

					} else if (this.mode == 'game' && key == 'enter') {

						this.submitGuess();
					
					} else { // all other keys (caps lock, shift, enter, etc.)

						if (this.mode == 'live' || this.mode == 'game') {
							this.clearMeaning();
						} else {
							this.typed_string = '';
						}

					}

				}

				
				if (this.mode == 'live') {
					this.time_show = 2
				}

			},



			/*
				Reset the animation class for a particlar element
			*/
			resetAnim(el) {
				//this.letterClass = "";
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
				//setTimeout( () => {this.test_out_string = ''}, 250 );
			},





			toggleMode() {

				if (this.mode == 'live') {

					clearInterval(this.interval)
					this.typed_string = ''
					this.mode = 'table'


				} else if (this.mode == 'table') {

					this.mode = 'game';
					this.showWord(this.wordList[0]);



				} else if (this.mode == 'game') {

					this.mode = 'live';
					this.interval = 0;
					this.interval = setInterval(() => {
						console.log(this.time_show)
						if (this.time_show <= 0) {
							this.clearMeaning()
						} else {
							this.time_show--
						}
					}, 1000)

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
		mix-blend-mode: multiply;
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
		mix-blend-mode: multiply;
		margin-left: -50px;
		margin-top: 100px;
		offset-path: path('M235,258 C312,402 340,202 326,143');
		offset-rotate: 0deg;
		animation: move 0.3s ease-in-out;
		animation-fill-mode: forwards;
	}




	.letter_z {
		mix-blend-mode: multiply;
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
<template>
	

	<div id="full_container">
		
		<h1 style='font-size: 100px;'> ASL </h1>

		<div class="neu_container" style="max-width: 50%; padding: 0 50px 20px 50px">
			<h2> Origins of ASL </h2> 
			<p> ASL originated around 200 years ago in New England, when French sign language, known as LSF or Langue des Signes Française, 
			merged with local sign languages in North America. This contact between local languages and LSF created a new language with similar 
			features to both the local sign languages and the french LSF. This new language was called American Sign Language, and still today 
			many similarities can be seen between LSF and ASL. Despite these similarities, they are distinct languages, and users of one language 
			cannot necessarily understand users of the other. </p>

			<q class="source">
				Source: U.S. Department of Health and Human Services. (2020, December 14). American Sign Language. 
				National Institute of Deafness and Other Communication Disorders. https://www.nidcd.nih.gov/health/american-sign-language. 
			</q>
		</div>


		<div class="neu_container" style="margin-top: 150px; max-width: 50%; padding: 0 50px 20px 50px">
			<h2> Variants of ASL </h2> 

			<p> 
				Much like any spoken language, ASL has lots of complex variation from one signer to another. These variations depend
				 on a multitude of factors, and have only recently begun being studied. While lexical variations in ASL were being 
				 studied in the 1960s, studies focusing on phonological variations only began to pop up in the mid 1970s. These 
				 studies found that phonological variation is apparent in ASL, with differences in the place, movement, handshape,
				  hand orientation, and facial expressions of signs. Some examples of these differences were found in a study by 
				  Woodward, Erting, and Oliver (1976), one example being that signers from New Orleans would produce signs on the 
				  face, whereas signers from Atlanta, signing the same signs, would produce these words on the hands. This study 
				  also found variation between northerners and southerners, old and young signers, and african american and 
				  caucasians signers. This study shows that just like spoken language, variation of ASL is subject to a vast array
				   of linguistic, social, and cultural factors. While the understanding of ASL variations has come a long way in 
				   the last 60 years, these variations are still less understood than similar variations in spoken languages.
			</p>

			<q class="source">
				LUCAS, C., BAYLEY, R., ROSE, M., & WULF, A. (2002). Location Variation in American Sign Language. Sign 
				Language Studies, 2(4), 407-440. Retrieved May 10, 2021, from http://www.jstor.org/stable/26204823 
			</q>
		</div>


	



		<div class="neu_container" style="margin: 150px 0 150px 0; max-width: 50%; padding: 0 50px 20px 50px">
			<h2> Fingerspelling </h2> 
			<hr>
			<p> 
				One major barrier that impedes the learning of sign language is the sheer amount of signs used. As mentioned,
				signs vary between dialects due to regional and cultural differences. This is further exacerbated when considering 
				that novice, non-sign speakers learning to sign will not always be able to recognize the intricacies of full sign languages. 
				The solution to this problem is <b>fingerspelling</b>. 

				Fingerspelling is a letter-based communication system within the sign community. 
			</p>


		</div>





		<div class="neu_container" style="margin: 100px 0 200px 0; padding: 50px; "
					    	@mouseover="hover = true"
				@mouseleave="hover = false"
		>
			<game 

			/>

			    <span v-if="hover">This is a secret message.</span>

			
		</div>

		<a href="https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/index.htm" style="color:#457B9D; font-size: 10px">Thank you to Dr. Bill Vicars for the ASL alphabet images!</a>




	</div>


</template>





<script>
    import game from "./Game.vue";
	export default {
		data() {
			return {
				hover: false,
			};
		},

        components: {
            game
        },
	}
</script>








<style>

/* e0e0e0 */

/* https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557 */

	body, head {
		  justify-content: center;
		  background-color: #a8dadc;
	}

	h1, h2 {
		color: #1d3557;
	}

	h2 {
		font-size: 35px;
		margin: 20px 0 0 0;
	}

	p {
		font-size: 18px;
		color: #1d3557;
	}


	hr { 
		width: 100%;
		margin-left: auto;
  		margin-right: auto;
		margin-left: 0;
		border: 1px solid #483A58;
	}


	.source {
		font-style: italic;
		font-size: 12px;
		color: #457b9d;
	}

	#full_container {
		display: grid;
		place-items: center;
	}

	
	.neu_container {

		display: grid;
		place-items: center;

		/* border-radius: 50px;
		background: #e0e0e0;
		box-shadow:  20px 20px 60px #bebebe,
					-20px -20px 60px #ffffff; */

		border-radius: 54px;
		background: #a8dadc;
		box-shadow:  36px 36px 35px #8fb9bb,
					-36px -36px 72px #c1fbfd;
	}


</style>
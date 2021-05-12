<template>
	

	<div id="full_container">
		
		<h1 style='font-size: 100px; white-space: nowrap;'> ASL: Myths & Fingerspelling</h1>

		<p style="width: 50%; font-size: 24px">
			Everybody knows about sign languages, but how much do they REALLY know? Here's a chance to test your knowledge 
			about ASL, to learn about its history and intricancies, and to pick up some of it on your own! Let's get started
			with some questions.
		</p>


		<table class="neu_container" style="margin: 75px 0 150px 0;   border-radius: 5px;   padding: 0 0 20px 0;    display: grid;   grid-template-columns: 100%;   justify-items: center; ">

			<tr> 
				<question   
					style="width:1000px"
					:question="'Lipreading is an effective form of communicating with most deaf people.'"
					:answer="false"
					:response="'According to a 2011 study, the mean score for visual only sentence lip reading was only 12.4%. Lip reading is an ineffective method of communication, and is why learning ASL is so important.'"
					:source="'Altieri, N. A., Pisoni, D. B., & Townsend, J. T. (2011). Some normative data on lip-reading skills (L). The Journal of the Acoustical Society of America, 130(1), 1–4. https://doi.org/10.1121/1.3593376'"
				> </question> 
			</tr>


			<tr> 
				<question   
					style="width:1000px"
					:question="'Most parents of deaf children can use ASL effectively.'"
					:answer="false"
					:response="'According to a 2010 survey from Gallaudet University in DC, only about 40% of families with deaf children use ASL at home, leaving 60% deprived of language. Again, this is another reason why knowing ASL can be so powerful.'"
					:source="'Dougherty, E. (2017, March 6). Studying Language Acquisition in Deaf Children: The Brink. Boston University. http://www.bu.edu/articles/2017/asl-language-acquisition/#:~:text=Approximately%2090%20to%2095%20percent,before%20their%20children%20enter%20school.'"
				> </question> 
			</tr>

		</table>







		<div class="neu_container" style="padding: 0 50px 20px 50px">
			<h2> Origins of ASL </h2> 
			<hr>

			<p> 
				ASL originated around 200 years ago in New England, when French sign language, known as LSF or Langue des Signes Française, 
				merged with local sign languages in North America. This contact between local languages and LSF created a new language with similar 
				features to both the local sign languages and the french LSF. This new language was called American Sign Language, and still today 
				many similarities can be seen between LSF and ASL. Despite these similarities, they are distinct languages, and users of one language 
				cannot necessarily understand users of the other.
			</p> 

			<q class="source">
				Source: U.S. Department of Health and Human Services. (2020, December 14). American Sign Language. 
				National Institute of Deafness and Other Communication Disorders. https://www.nidcd.nih.gov/health/american-sign-language. 
			</q>
		</div>


		<div class="neu_container" style="margin-top: 150px; padding: 0 50px 20px 50px">
			<h2> Variants of ASL </h2> 
			<hr>
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

		<img style="margin: 75px 0 50px 0;" :src="require('./assets/diffs_crop.png')">


		<!-- TODO SOURCE THIS IMG -->
		<!-- Brentari, D. (2019). Sign Language Phonological Variation and Change. In Sign Language Phonology (Key Topics in Phonology, pp. 241-268).
		Cambridge: Cambridge University Press. doi:10.1017/9781316286401.008 -->





		<div class="neu_container" style="margin: 100px 0 150px 0; padding: 0 50px 20px 50px">
			<h2> Fingerspelling </h2> 
			<hr>
			<p> 
				One major barrier that impedes the learning of sign language is the sheer amount of signs used. As mentioned,
				signs vary between dialects due to regional and cultural differences. This is further exacerbated when considering 
				that novice, non-sign speakers learning to sign will not always be able to recognize the intricacies of full sign languages. 
				The solution to this problem is <b>fingerspelling</b>. 
				
				<br><br>

				Fingerspelling is a letter-based signing system. The benefit to knowing the basic alphabet is that any message can then be 
				communicated between speakers regardless of sign vocabulary -- with just 26 signs. It is considered fundamental in learning 
				sign languages because of its versatility between fluent and non-fluent speakers. For this reason, it's important to start
				by learning it!

				<br><br>

				Use the following tool to help you learn the ASL alphabet!
			</p>

		</div>


		<div class="neu_container" style="margin: 100px 0 150px 0; padding: 50px;"> <game/> </div>

		<a href="https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/index.htm" style="color:#457B9D; font-size: 12px">Thank you to Dr. Bill Vicars for the ASL alphabet images!</a>




	</div>


</template>





<script>
    import game from "./Game.vue";
    import question from "./Question.vue";
	export default {
		data() {
			return {
				hover: false,
			};
		},

        components: {
            game, question
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
		font-size: 22px;
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

		max-width: 60%;

		border-radius: 54px;
		background: #a8dadc;
		box-shadow:  36px 36px 35px #8fb9bb,
					-36px -36px 72px #c1fbfd;
	}


</style>
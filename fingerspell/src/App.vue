<template>
	

	<div>
		

		<div class="neu_container" style="max-width: 50%; padding: 50px">
			<h2> Origins of ASL: </h2> 

			ASL originated around 200 years ago in New England, when French sign language, known as LSF or Langue des Signes Française, 
			merged with local sign languages in North America. This contact between local languages and LSF created a new language with similar 
			features to both the local sign languages and the french LSF. This new language was called American Sign Language, and still today 
			many similarities can be seen between LSF and ASL. Despite these similarities, they are distinct languages, and users of one language 
			cannot necessarily understand users of the other.
		</div>

		<div>
			<game style='padding-top: 50px'/>
		</div>

	</div>


</template>





<script>
    import game from "./Game.vue";
	export default {
		
        components: {
            game
        },
	}


</script>








<style>

	body, head {
		  justify-content: center;
	}

	
	.neu_container {
		border-radius: 50px;
		background: #e0e0e0;
		box-shadow:  20px 20px 60px #bebebe,
					-20px -20px 60px #ffffff;
	}


</style>
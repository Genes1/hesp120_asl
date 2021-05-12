<template>
	

		<div >

			<div style="display: grid; grid-template-columns: 50% 10% 10%;   grid-gap: 2%;  align-content: center;  justify-content: center;  padding: 10px 0 10px 0">
				<p style="font-size: 30px"> {{question}} </p>
				<input type="radio" v-model="choice" :value="true" style="margin-top:50%; margin-left:40%">
				<input type="radio" v-model="choice" :value="false" style="margin-top:50%; margin-left:40%"><br>
				<center> <label> True </label> </center>
				<center> <label> False </label> </center>
			</div>

			<center>
				<p v-if="showAnswer"
					style="padding: 10px 10px 10px 10px; width: 80%"
					:style="choice == answer ? 'background-color: #8fcf99' : 'background-color: #d9a5a6'"
				>
					<b>{{answer.toString().charAt(0).toUpperCase() + answer.toString().slice(1) }}:</b> {{response}}
					<br>
					<q class="source">{{source}}</q>
				</p>
			</center>

		</div>



</template>





<script>


	export default {


		props: {
                question: String,
				answer: Boolean,
				response: String,
				source: String
		},

		data() {
			return {
				showAnswer: false,
				choice: null
			};
			
		},

		watch: {
			choice(_, __) {
				this.showAnswer = true;
			}
		}



	}


</script>








<style>


	.source {
		font-style: italic;
		font-size: 12px;
		color: #457b9d;
		line-break: loose;
	}



</style>
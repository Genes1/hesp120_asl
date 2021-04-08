<template>
	<div id="app">
		<div class="container">

			<center>
				<button
					onclick="toggleMode()"
					style="width:300px; height:50px"
				>Toggle mode: <b id='mode'>live transcription</b></button>
			</center>
			<!-- display content for table -->
			<div
				id="tablecontainer"
				class="center"
			></div>

			<!-- display content for live transcription -->
			<div class="center">
				<center><img
						id="letter"
						src="static/alphabet/a.gif"
						width=500
						height=500
					></img></center>
				<p id="sign_meaning"></p>
				<p id="sign_meaning_out"></p>
			</div>

		</div>
	</div>
</template>




<script>
  export default {
    // https://rapidapi.com/dpventures/api/wordsapi?endpoint=54c00ec8e4b0ae089320058a

    data () {
      return {
        mode: 'live',
        interval: {},
        time_show: 0,
        typed_string: '',
      }
    },


    // saving components for ease of use
    document.addEventListener("keydown", logKey);
    var el = document.getElementById("letter");
    var el_meaning = document.getElementById("sign_meaning");
    var el_meaning_out = document.getElementById("sign_meaning_out");
    el_meaning.innerHTML = "";

    // create the interval initially
    interval = setInterval(function () {
      // console.log(time_show)

      if (time_show <= 0) {
        clearMeaning();
      } else {
        time_show--;
      }
    }, 1000);

    methods: {
      toggleMode() {
        //mode = mode == 'live' ? 'table' : 'live'
        if (mode == "live") {
          clearInterval(interval);
          typed_string = "";
          el_meaning.innerHTML = "";
          el.style.display = "none";
          mode = "table";
        } else if (mode == "table") {
          document.getElementById("tablecontainer").innerHTML = "";

          el.style.display = "inline-block";
          mode = "live";
          interval = setInterval(function () {
            if (time_show <= 0) {
              clearMeaning();
            } else {
              time_show--;
            }
          }, 1000);
        } else {
        }

        document.getElementById("mode").innerHTML = mode;
      },

      /*
          Reset the animation class for a particlar element
        */
      resetAnim(e) {
        e.className = "";
        e.style.animation = "none";
        e.offsetHeight; /* trigger reflow */
        e.style.animation = null;
      },

      /*
          Clear the meaning subline.
        */
      clearMeaning() {
        var el_meaning = document.getElementById("sign_meaning");
        var el_meaning_out = document.getElementById("sign_meaning_out");
        sign_meaning_out.innerHTML = el_meaning.innerHTML;
        resetAnim(sign_meaning_out);
        el_meaning.innerHTML = " ";
      },

      /*
          Make a table from a passed string.
          Outputs an HTML table as a string, so that it can be embedded.
        
          Tables look like this:
          <table>
            <tr> // table row
              <th> cell content </th>
            </tr>
          </table>

        */
      makeTable(s) {
        //grow the rows as we go along
        row_image = "<tr>";
        row_letter = "<tr>";

        // for every character, add an img tag with src=letter and
        for (var i = 0; i < s.length; i++) {
          c = s[i];

          // this may have to change, j and z are not pure hand symbols
          if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            row_image +=
              "<td><img id='letter' src='static/alphabet/" +
              c +
              ".gif' width=100 height=100></img></td>";
          } else {
            row_image += "<td style='min-width:100px'> </td>";
          }

          row_letter += "<td><p id='sign_meaning'>" + c + " </p></td>";
        }

        return "<table>" + row_image + "</tr>" + row_letter + "</tr></table>";
      },

      /*
          Occurs on every keypress.
        */
      logKey(e) {
        const key = e.key.toLowerCase();
        console.log(key);
        if (String(key).length == 1) {
          resetAnim(el);

          if (mode == "live") {
            if (key == "j") {
              // special animation for j
              el.className = "letter_j";
              el.src = "static/alphabet/j_noarrow.png";
            } else if (key == "z") {
              // special animation for z
              el.className = "letter_z";
              el.src = "static/alphabet/z_noarrow.png";
            } else if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
              // the char is a letter
              el.className = "letter";
              el.src = "static/alphabet/" + key + ".gif";
            }
            el_meaning.innerHTML += key;
          } else {
            typed_string += key;
          }
        } else {
          // the input is backspace, control, shift, etc

          if (key == "backspace") {
            if (mode == "live") {
              el_meaning.innerHTML = el_meaning.innerHTML.slice(0, -1);
            } else {
              typed_string = typed_string.slice(0, -1);
            }
          } else {
            if (mode == "live") {
              clearMeaning();
            } else {
              typed_string = "";
            }
          }
        }

        if (mode == "live") {
          time_show = 2;
        } else {
          document.getElementById("tablecontainer").innerHTML = makeTable(
            typed_string
          );
        }

        //console.log(key)
        //console.log(typed_string)
      },
    }
  }
</script>




<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>

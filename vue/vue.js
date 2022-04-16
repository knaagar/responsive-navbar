/*
Re-usable Vue component
*/
Vue.component('nav-bar', {
  props: {
    data: Array
  },
  template: `
<div>
	<div class="responsive-navbar" id="navbar">
		<a v-for="d in data" :href="d.url">{{d.title}}</a>
			<a href="javascript:void(0);" class="icon" onclick="nav()">
			<b>&#9776;</b>
  		</a>
	</div>
</div>
  `
});

/*
Styling
*/

let styling = `
 .responsive-navbar {
  overflow: hidden;
}

.responsive-navbar a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 1.1em;
}


.responsive-navbar .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .responsive-navbar a:not(:first-child) {display: none;}
  .responsive-navbar a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .responsive-navbar.responsive {position: relative;}
  .responsive-navbar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .responsive-navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
  `;

/*
Appending style tag
*/

let st = document.createElement('style');
st.innerText = styling;
document.head.appendChild(st);

/*
Vue app
*/

var app = new Vue({
  el: "#app"
});

/*
Responsive-ness function
*/

function nav() {
  var x = document.getElementById("navbar");
  if (x.className === "responsive-navbar") {
    x.className += " responsive";
  } else {
    x.className = "responsive-navbar";
  }
}

/*************************
  get the attribute value of d-style and d-float-right
  d-float-right: in progress
*************************/

let wantStyle = document.getElementById("navbar").getAttribute("d-style");
let wantFloat = document.getElementById("navbar").getAttribute("d-float-right");

/*************************
  Styling on value = true
*************************/

const styling = `
.responsive-navbar {
  overflow: hidden;
  font-family: sans-serif;
}

.responsive-navbar a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px;
  position: relative;
  text-decoration: none;
  font-size: 1.1em;
  color: #000;
}

.responsive-navbar a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  background: brown;
  transform: scaleX(0);
  visibility: hidden;
  transition: 300ms;
}
.responsive-navbar a:hover::before {
  visibility: visible;
  transform: scaleX(1);
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

/*************************
  Styling on value = false
*************************/

const styling2 = `
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

/*************************
  Append the style tag to the head according to the d-style value
*************************/

if (wantStyle === "true") {
  let st = document.createElement("style");
  st.innerText = styling;
  document.head.appendChild(st);
}
else if (wantStyle === "false" || wantStyle === null) {
  let st = document.createElement("style");
  st.innerText = styling2;
  document.head.appendChild(st);
}

/*************************
  Responsive-ness function
*************************/

function nav() {
  let el = document.getElementById("navbar");
  if (el.className === "responsive-navbar") {
    el.className += " responsive";
  } else {
    el.className = "responsive-navbar";
  }
}

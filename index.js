let stylea = document.getElementById("navbar").getAttribute("d-style");


let styling = `
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

let styling2 = `
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

if (stylea === 'true') {
  let st = document.createElement('style');
  st.innerText = styling;
  document.head.appendChild(st);

}
else if (stylea === 'false' || stylea === null) {
  let st = document.createElement('style');
  st.innerText = styling2;
  document.head.appendChild(st);
}



function nav() {
  var x = document.getElementById("navbar");
  if (x.className === "responsive-navbar") {
    x.className += " responsive";
  } else {
    x.className = "responsive-navbar";
  }
}

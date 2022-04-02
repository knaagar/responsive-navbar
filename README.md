# responsive-navbar (wihout dependency)
To create responsive navbars easily. [Using HTML and CSS only]

CDN (should be put in body tag below the navbar html):
```HTML
<script src = "https://cdn.jsdelivr.net/gh/knaagar/responsive-navbar/index.js"></script>
```

# Usage
```HTML
<!-- Add class as 'responsive-navbar' and id as 'navbar' -->
<div d-style="true" class="responsive-navbar" id="navbar">
		<!-- Add links (as many as you want) -->
		<a href="#">Home</a>
		<a href="#">News</a>
		<a href="#">Contact</a>
		<a href="#">About</a>
		<!-- Menu bar icon which will be visible on small screens -->
		<a href="javascript:void(0);" class="icon" onclick="nav()">
		<b>&#9776;</b>
  </a>
</div>
```

# Attributes
| Attribute     | Possible Values | Work |
| ------------- | ------------- | -------|
| `d-style`       | `true` or `false` | true - if you want a bit styled navbar |

# responsive-navbar vue

To create responsive navbars easily. [Using Vue.js]

CDN :
```HTML
<script src = "https://cdn.jsdelivr.net/gh/knaagar/responsive-navbar/vue/vue.js"></script>
```

# Usage
```HTML
<!-- wrap things inside app id element -->
<div id="app">
    <!-- add data in array of objects form in the format:
      {
        url: "site_url.com",
        title: "Heading"
      }
     -->
      <nav-bar :data="[{url: 'x.com', title: 'Home'},{url: 'x.com', title: 'About'},{url: 'x.com', title: 'Contact'}]"></nav-bar>
</div>
```

> This is in development.

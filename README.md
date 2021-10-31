# responsive-navbar
To create responsive navbars easily. 

CDN :
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

> This is in development and more attributes, flexibility and professionalism will be added in the future. More styling features will be added too to quickly create a navbar and get right started away with the website.

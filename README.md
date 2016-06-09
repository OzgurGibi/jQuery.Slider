# jQuery.Slider

[1]: <https://github.com/OzgurGibi/jQuery.Slider>
[https://github.com/OzgurGibi/jQuery.Slider](https://github.com/OzgurGibi/jQuery.Slider)

##### Using Example

Add a link to the css and js file in your `<head>`:
```html
<link rel="stylesheet" href="js/jquery.slider.css" />
<script src="js/jquery.slider.js"></script>

<!-- And and add a div as following -->

  <div id="slider1">
    <div class="tab-content">
      <div class="tab-pane" id="tab0">0</div>
      <div class="tab-pane" id="tab1">1</div>
      <div class="tab-pane" id="tab2">2</div>
    </div>
  </div>
```

#### Example

Initialize with:

```javascript
$(function ()
{
    $("#slider1").Slider();
});
```

Other methods:

```javascript
$("#previous").click(function ()
{
  $("#slider1").Slider("Prev");
});

$("#next").click(function ()
{
  $("#slider1").Slider("Next");
});
```

#### Dependencies

jQuery

#### License

Copyright (c) 2016 Yubis

Licensed under the MIT license.

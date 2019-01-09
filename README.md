# Vue.js simple pagination
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple pagination component for Vue.js

![Screenshot](https://www.dropbox.com/s/djak7kly656sip9/buttons2.png?dl=1)


![Screenshot](https://www.dropbox.com/s/dwkhxdat3hq2m21/buttons1.png?dl=1)

## About
It takes the number of pages (pages), current page (currentpage) and a function for page changing (@changePage)

## Install using npm
> npm i @celdotro/vue-simplepagination

OR

> yarn add @celdotro/vue-simplepagination 

## Usage
See "simple-pagination" tag from the example below:

```HTML
<link rel="stylesheet" href="./simple-pagination.css" type="text/css" />
<script src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="./simple-pagination.min.js?v=<?php echo time(); ?>"></script>
<div id="app">
  <p>{{ message }}</p>
  <simple-pagination :currentpage="3" :pages="12" @changePage="cb"></simple-pagination>
</div>
<script type="text/javascript">
  var vue =  new Vue({
  el: '#app',
  components: {
      'simple-pagination': SimplePagination.SimplePagination
  },
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    cb() {
        
    }
  }
})
</script>
```

## Style
The two main elements are vspbutton and vspbuttonselected. These properties default to "vspButton" and "vspButton-selected". Below is the tag used with the default values
```HTML
<simple-pagination :currentpage="3" :pages="12" @changePage="cb" vspbutton="vspButton" vspbuttonseelcted="vspButton-selected"></simple-pagination>
```
Below is the CSS code used for the screenshot
```CSS
<style>
	.vspButton {
		height: 22px;
		padding: 2px 7px;
		font-size: 12px;
		display: inline-block;
		margin-bottom: 0;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid;
		border-radius: 4px;
		background-color: transparent;
	}
	.vspButton-selected{
		background-color: #31b0d5;
	}
</style>
```

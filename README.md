# Vue.js simple pagination
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple pagination component for Vue.js

![Screenshot1](http://i67.tinypic.com/2cf4or4.jpg)

![Screenshot2](http://i66.tinypic.com/2411ir7.png)

## About
It takes the number of pages (pages), current page (currentpage) and a function for page changing (@changePage)

## Install using npm
> npm i @celdotro/vue-simplepagination

OR

> yarn add @celdotro/vue-simplepagination 

## Usage
See "simple-pagination" tag from the example below (all the CSS properties are omitted and get the default values, see Style section for more information):

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
The 3 main properties are:
  * **vspbutton** = the main button class (defaults to vspButton)
  * **vspbuttonselected** = the currently selected button (defaults to vspButton-selected) 
  * **vspbuttonfast** = first and last buttons (defaults to an empty string) 
  
Below is the code used for the first screenshot

```HTML
<simple-pagination :currentpage="5" :pages="20" @changePage="cb" vspbutton="vspButton" vspbuttonseelcted="vspButton-selected" vspbuttonfast="vspButtonFast"></simple-pagination>
```

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
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: transparent;
  }
  button[class="vspButton"]:hover{
    background-color: #ffeee7;
    border: 1px solid #ff5f2d;
  }
  .vspButton-selected{
    background-color: #ff5f2b;
    color: white;
    }
  .vspButtonFast{
    background-color: #f4f8fb;
    color: #b5b9bc;
  }
</style>
```

Below is the CSS code used for the second screenshot

```HTML
<simple-pagination :currentpage="3" :pages="12" @changePage="cb" vspbutton="vspButton" vspbuttonseelcted="vspButton-selected"></simple-pagination>
```

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

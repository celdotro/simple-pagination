# Vue.js simple pagination
Simple pagination component for Vue.js

## About
It takes the number of pages (pages), current page (currentpage) and a function for page changing (@changePage)

## Usage
See "simple-pagination" tag from the example below:

```
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

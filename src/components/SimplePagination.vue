<template>
  <div>
    <div v-if="pages < maxPages">
      <button class="vspButton" @click="changePage(1)"><<</button>
      <button v-for="item in pages">{{item}}</button>
      <button class="vspButton" @click="changePage(pages)">>></button>
    </div>
    <div v-else>
      <button class="vspButton" @click="changePage(1)"><<</button>

      <button v-for="item in leftPages" @click="changePage(item)" :class="'vspButton' + (item == currentPage ? ' vspButton-selected' : '')">{{item}}</button>
      ...
      <button v-for="item in [pages - 4, pages - 3, pages - 2, pages - 1, pages]" :class="'vspButton' + (item == currentPage ? ' vspButton-selected' : '')" @click="changePage(item)">{{item}}</button>

      <button class="vspButton" @click="changePage(pages)">>></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'simple-pagination',
    props:{
      pages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      changePageFunction: {
        required: true
      }
    },
    data () {
      return {
        maxPages: 10,
        leftPages: [],
        currPage: 0
      }
    },
    methods: {
      changePage(item){
        this.changePageFunction(item)
        this.currPage = item
        this.generateLeftPages()
      },
      generateLeftPages(){
        var start = (this.currPage - parseInt(this.maxPages/Math.pow(2,2)) > 1 ? this.currPage - parseInt(this.maxPages/Math.pow(2,2)) : 1);
        var stop = parseInt(this.maxPages/2) + this.currPage - parseInt(this.maxPages/Math.pow(2,2)) - 1;
        if(stop < parseInt(this.maxPages/2)) stop = parseInt(this.maxPages/2);
        if(stop >=  this.pages - parseInt(this.maxPages/2) + 1){
          stop =  this.pages - parseInt(this.maxPages/2);
          start = this.pages - parseInt(this.maxPages/2) - parseInt(this.maxPages/Math.pow(2,2)) - 2;
        }

        this.leftPages = []
        for(var i = start; i <= stop; i++){
          this.leftPages.push(i);
        }
      }
    },
    mounted(){
      this.currPage = this.currentPage
      this.generateLeftPages()
    }
  }
</script>

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

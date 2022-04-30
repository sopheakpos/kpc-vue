<template>
  <div class="tabs__light light">
    <horizontal-scroll>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in cateData"
        :key="index"
        @click="selectTab(index);"
        :class="{ tab__selected: index == selectedIndex }"
      >
        {{ tab.cateName }}
      </li>
    </ul>
    </horizontal-scroll>
    <slot></slot>
  </div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
    components:{
        HorizontalScroll
    },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      // tabs: []  ,
      cateData: [
        {
          cateId: "9999",
          cateName: "Frappe",
          cateStatus: 1,
        },
        {
          cateId: "001",
          cateName: "Coffee",
          cateStatus: 1,
        },
        {
          cateId: "002",
          cateName: "Tea",
          cateStatus: 1,
        },
                {
          cateId: "005",
          cateName: "Anchor",
          cateStatus: 1,
        },
                {
          cateId: "9999",
          cateName: "Frappe",
          cateStatus: 1,
        },
        {
          cateId: "001",
          cateName: "Coffee",
          cateStatus: 1,
        },
        {
          cateId: "002",
          cateName: "Tea",
          cateStatus: 1,
        },
                {
          cateId: "005",
          cateName: "Anchor",
          cateStatus: 1,
        },
                {
          cateId: "9999",
          cateName: "Frappe",
          cateStatus: 1,
        },
        {
          cateId: "001",
          cateName: "Coffee",
          cateStatus: 1,
        },
        {
          cateId: "002",
          cateName: "Tea",
          cateStatus: 1,
        },
                {
          cateId: "005",
          cateName: "Anchor",
          cateStatus: 1,
        },
      ], // all of
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style>
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs__header > li {
  padding: 15px 30px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}
/* .tab {
    display: inline-block;
    color: black;
    padding: 20px;
    width: 100%;
     min-width: 800px; 
    border-radius: 10px;
    min-height: 400px;
  } */
.tabs__light .tab {
  background-color: #fff;
}
.tabs__light li {
  background-color: #ddd;
  color: #aaa;
}
.tabs__light li.tab__selected {
  background-color: #fff;
  color: #83ffb3;
}
.tabs__dark .tab {
  background-color: #555;
  color: #eee;
}
.tabs__dark li {
  background-color: #ddd;
  color: #aaa;
}
.tabs__dark li.tab__selected {
  background-color: #555;
  color: white;
}
</style>
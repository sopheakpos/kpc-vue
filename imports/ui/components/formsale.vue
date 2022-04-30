<template>
  <div class="bg-dark p-3">
    <div class="row mx-0 py-3 bg-light">
      <div class="col-sm-8">
        <p>
          Order #88
          <small class="text-mute">Today, 20 Mar 2022, 02:34 PM</small>
        </p>
        <div class="catePanel">
          <div class="wrapper">
            <tabs>
              <tab />
            </tabs>
          </div>
        </div>
        <div style="height: 50px">
          <p style="padding: 15px">CATEGORY</p>
        </div>
        <div class="catePanel" style="height: 500px;">
          <button @click="handleInsert">Click me to insert</button>
          <button @click="handleFind">Click me to Find</button>
          <ul v-for="(myData, index) in myCustomer" :key="index">
            <li>
              
              {{myData.name}}
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import tab from "./tab.vue";
import tabs from "./tabs.vue";
export default {
  data(){
    return{
      myCustomer: [],
    }
  },
  components: {
    tab,
    tabs,
  },
  methods:{
    handleFind(){
      Meteor.call('customer.find', function(error, res){
        if(res){
            console.log('result success:', res);
            this.myCustomer = res;
        }else{
          console.log('result error:', error);
        }
      })
    },
    handleInsert(){
      let doc = {
        name: 'Burger',
        age: 30,
        tall: 1.85,
      }
      Meteor.call('customer.insert', doc, function(error, result){
        if(result){
          console.log('result success:', result);
        }else{
          console.log('error result: ', error)
        }
      })
    }
  }
};
</script>

<style>
.catePanel {
  box-sizing: 1px;
  border: none;
  border-radius: 20px;
  padding: 15px 15px 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* overflow-x: scroll; */
}
</style>
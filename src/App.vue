<template>
  <div id="app">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Amount</th>
        <th>Category</th>
        <th>Recurrent</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in cdata">
        <td>{{ project.development_expenditure_kshs | currency 'Ksh ' }}</td>
        <td>{{ project.expenditure_category }}</td>
        <td>{{ project.recurrent_expenditure_kshs}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {

  ready(){
      this.getJsonData();
  },
  data () {  
    return {
      msg: 'Hello Vue!',
      cdata:{
      }      
    }
  },
  methods:{    
    getJsonData: function() {
        this.$http.get('https://www.opendata.go.ke/resource/22vf-4ewz.json',{},{
      headers: {
            "X-App-Token": "q6bMYkyGOI4pV91gXWePb8PT3"
         }
      }).then(  (data) => this.$set('cdata',data.data))
        .catch( (error) => console.log('Got a problem'+error));
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

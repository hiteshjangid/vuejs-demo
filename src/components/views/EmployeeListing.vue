<template>
  <div>
  <b-row>
    <div class="col-md-12 text-right">
      <Button @click="addEmployee" buttonType="button">Add Employee</Button>
    </div>
  </b-row>
  <b-row>
    <div class="col-md-12">    
      <DataGrid :items="users" :fields="fields"></DataGrid>
    </div>
  </b-row>
  </div>
</template>

<script>
import { Button, DataGrid } from "../generic-components";

export default {
    name: "EmployeeListing",
    components: {Button, DataGrid},
    mixins: [],
    props: {},
    data() {
      return {}
    },
    methods: {
        addEmployee() {
            this.$router.push({
                name:'employee-add'
            });
        },
    },
    computed:{
        users(){
              return this.$store.state.users.data;
        },
        fields(){
              return this.$store.state.users.fields;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
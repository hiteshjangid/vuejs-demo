<template>
  <div>
  <b-row>
    <div class="col-md-12 text-right">
      <Button @click="addDepartment" buttonType="button">Add Department</Button>
    </div>
  </b-row>
  <b-row>
    <div class="col-md-12">    
      <DataGrid :items="departments" :fields="fields"></DataGrid>
    </div>
  </b-row>
  </div>
</template>

<script>
import { Button, DataGrid } from "../generic-components";

export default {
    name: "DepartmentListing",
    components: {Button, DataGrid},
    data() {
        return {}
    },
    methods: {
        addDepartment() {
            this.$router.push({
                name:'department-add'
            });
        },
    },
    computed:{
        departments(){
              return this.$store.state.departments.data;
        },
        fields(){
              return this.$store.state.departments.fields;
        }
    }
}
</script>

<style lang="scss" scoped>
$color: #b56969;
.Button {
  background: $color;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 10px 25px;
  text-transform: uppercase;
  transition: background .2s ease-in-out;
  &:hover {
    background: darken($color, 20);
  }
  &:disabled {
    opacity: 0.5;
  }
}
</style>
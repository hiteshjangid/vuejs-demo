<template>
    <div class="grid-container">
        <b-table striped hover :items="items" :fields="fieldsWithOptions"></b-table>
        <b-row>
            <div class="col-md-6 text-left">
                Total Record(s): {{rows}}
            </div>
            <div class="col-md-6">
                <b-pagination v-if="showPagination" v-model="currentPage" :total-rows="rows" :per-page="perPage" align="right" aria-controls="data-table">
                </b-pagination>
            </div>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "DataGrid",
    components: {},
    mixins: [],
    props: {
        items:{
            type: Array,
            default: function () {
                return [];
            },
            required: true
        },
        fields:{
            type: Array,
            default: function () {
                return [];
            },
            required: true
        },
        perPage: {
            type: Number,
            default: 10,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        showPagination:{
            type: Boolean,
            default: true,            
        },
    },
    data() {
        return {
            defaultOptions:{
                thClass:"item-heading",
                tdClass:"item-data"
            } 
        };
    },
    
    computed: {
      rows() {
        return this.items.length
      },
      fieldsWithOptions(){
            if(Array.isArray(this.fields)){
                return this.fields.map(field => {
                  /* if passing value is direct field name then combine the default classes */
                    if(typeof field == "string"){
                        return {
                            key:field,
                            ...this.defaultOptions
                        }
                    }else if(typeof field == "object"){
                        /* if passing value is object then merge the default options with field value then combine the default classes */
                        return {
                            ...this.defaultOptions,
                            ...field,
                        }
                    }else{
                        return field
                    }
                });
            }
            return this.fields;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
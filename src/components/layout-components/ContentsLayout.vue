<template>
    <div>
        <Header />
        <div class="container">
            <slot name="contents">
                No Content Provided
            </slot>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: "ContentsLayout",
    components: {
        Header
    },
    mixins: [],
    props: {
        gridSettingsKey: {
            type: String,
            default: "locations"
        }
    },
    data() {
        return {
            sort: [{
                field: "name",
                dir: "asc"
            }],
            showSidePanel: false,
            currentSelected: {},
            showEmailDialog: false,
            showDeleteDialog: false,
            //filterOptions: this.getFilterOptions(),
            //searchKeys: this.getSearchKeys(),
            showLocationInfo: false,
            selectedLocation: null,
            selectedLocationList: [],
            selectedLocationBox: false,
            allActiveVehicles: [],
            isdeleteProcess: false,
            tolerance: '',
        };
    },
    created() {},
    methods: {
        getColumns() {},
    }
};
</script>

<style lang="scss" scoped>
$color: #508eff;

.bg-info {
    background: $color !important;

    &:hover {
        background: darken($color, 20);
    }

    &:disabled {
        opacity: 0.5;
    }
}
</style>
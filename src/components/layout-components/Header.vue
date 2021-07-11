<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Veu Js Demo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{ name: 'employee-list'}" active-class="active">                        
                        Employee
                    </b-nav-item>
                    <b-nav-item :to="{ name: 'department-list'}" active-class="active">                        
                        Department
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>HiteshJangid</em>
                        </template>
                        <b-dropdown-item :to="{ name: 'profile'}">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Header",
    components: {},
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
<template>
    <div class="error-page">
       <h1>404 Page Not Found</h1>
       <Button @click="goBack" buttonType="button"> Go Back</Button>       
    </div>
</template>

<script>
import { Button} from "../generic-components";
export default {
    name: "ErrorComponent",
    components: {Button},
    mixins: [],
    props: {},
    data() {
        return {};
    },
    methods: {
        goBack() {
            this.$router.back()
        },
    }
};
</script>

<style lang="scss" scoped>
.error-page {
    margin: 20px 0;
    text-transform: uppercase;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
    padding: 40px 0;
    height: 200px;
}
</style>
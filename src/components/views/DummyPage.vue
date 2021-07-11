<template>
    <div class="dummy-page">
       <h1>This page yet to be develope</h1>
       <Button @click="goBack" buttonType="button"> Go Back</Button>       
    </div>
</template>

<script>
import { Button} from "../generic-components";
export default {
    name: "DummyPage",
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
.dummy-page {
    margin: 20px 0;
    text-transform: uppercase;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
    padding: 40px 0;
    height: 200px;
}
</style>
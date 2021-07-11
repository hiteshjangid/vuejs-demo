<template>
    <div class="btn-container">
        <b-button @click="clickEvent($event)" variant="outline-primary" :type="buttonType">
            <slot></slot>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "Button",
    components: {},
    mixins: [],
    props: {
        buttonType: {
            type: String,
            default: "button",
            validator: (value) => {
                if(!['button', 'submit', 'reset'].includes(value)){
                    console.error("[Custom Error] : The props buttonType must be button, submit or reset")
                }
                return true;
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        clickEvent($event) {
            this.$emit('click', $event);
        },
    }
};
</script>

<style lang="scss" scoped>
.btn-container {
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 0.75rem;
    margin: 20px 0;
    text-transform: uppercase;
    transition: background .2s ease-in-out;
}
</style>
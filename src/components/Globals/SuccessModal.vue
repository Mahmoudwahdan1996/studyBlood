<template>
    <div class="successModal">

        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal ref="mymodal" id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>

    </div>
</template>

<script>
export default {
    name: "Success Modal"
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div id="app" class="app">
        <b-modal
            class="app_modal"
            ref="myModal"
            centered
            hide-footer
            hide-header
        >
            <div class="flex-center m-5">
                <!-- <strong>Loading...</strong> -->
                <b-spinner type="grow"></b-spinner>
            </div>
        </b-modal>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    metaInfo: {
        meta: [
            { charset: "utf-8" },
            {
                name: "description",
                content:
                    "studyblood has provided quality online revision for medical exams since 2008 questions are written by practising doctors we have a strong ethos of only providing",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                name: "google-site-verification",
                content: "0EF_uEl2jtG_tP8laN_YZidI-qXvXNSp3pEC8RBsOLY",
            },
        ],
    },

    mounted() {
        window.scrollTo(0, 0);
        this.showAlert();
    },

    methods: {
        showAlert() {
            this.$refs["myModal"].show();
        },
        hideAlert() {
            this.$refs["myModal"].hide();
        },
    },
    mounted() {
        this.showAlert();

        setTimeout(() => {
            this.hideAlert();
        }, 2000);
    },
};
</script>

<style lang="scss" scoped>
::v-deep .modal-dialog-centered .modal-content {
    background: none !important;
    border: none;
    color: #fff;
    font-size: 30px;
}
</style>


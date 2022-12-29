<template>
    <div class="Footer">
        <div class="container">
            <div class="row">
                <div class="footer__info flex-center">
                    <div class="image">
                        <img :src="logoFooter" alt="footer img">
                    </div>
                    <ul>
                        <li><a href="#">
                                <router-link to="/">home</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="/about">about us</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="/work-with-us">work with us</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="contact">contact us</router-link>
                            </a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",

    data() {
        return {
            logoFooter: ''
        }
    },


    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {
        async getData() {
            try {

                this.axios.get('page/home/logos').then(response => {

                    this.logoFooter = response.data.data.footer_logo;

                }).catch(error => {

                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },
    }


}
</script>

<style lang="scss" scoped>

</style>
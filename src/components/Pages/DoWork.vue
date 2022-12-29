<template>
    <div id="doWork" class="work">
        <div class="container">


            <div class="row justify-content-between">

                <div class="col-lg-5 col-12">

                    <div class="content" data-aos="fade-right">
                        <h5 class="main_head">{{ howTittle }}</h5>
                        <p>{{ howDesc }}</p>
                    </div>

                </div>
                <div class="col-lg-5 col-12" v-for="(item, index) in items" :key="'p' + index">
                    <div class="content_image work__box flex-center text-center" data-aos="fade-up">
                        <div class="image">
                            <img :src="item.image" alt="Do work image">
                        </div>

                        <h6>{{ item.title }}</h6>
                        <p>{{ item.description }}</p>
                    </div>
                </div>

            </div>



            <div class="flex-center m-5" v-if="!loading">
                <!-- <strong>Loading...</strong> -->
                <b-spinner type="grow"></b-spinner>
            </div>


        </div>
    </div>
</template>

<script>

export default {
    name: "DoWork",

    data() {
        return {
            items: [],
            loading: false,

            howTittle: "",
            howDesc: ""

        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {

        // get do work section data from api

        async getData() {

            try {

                await this.axios.get('page/home/knowhow').then(response => {

                    this.items = response.data.data.knowhow;
                    this.howTittle = response.data.data.how.title;
                    this.howDesc = response.data.data.how.description;
                    this.loading = true;
                    // console.log(response.data.data.knowhow)

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log('try catch =>', error);
            }

        }

    },
}
</script>

<style lang="scss" scoped>

</style>
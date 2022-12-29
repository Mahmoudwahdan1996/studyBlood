<template>
    <div class="about__us">
        <div class="container">
            <div class="all_row" v-for="(item, index) in items" :key="'d' + index">
                <div class="row " :class="{ 'flex-row-reverse': index == 1 }">
                    <div class="col-lg-6 col-12">
                        <div class="about__info" data-aos="fade-right">
                            <h3 class="main_head">{{ item.title }}</h3>
                            <p class="desc" v-html="item.description"></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12" v-if="item.image">
                        <div class="about-image flex-center" data-aos="fade-left">
                            <img :src="item.image" alt="" srcset="">
                        </div>
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
    name: "About",

    data() {
        return {
            items: [],
            loading: false

        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {

        async getData() {

            try {
                await this.axios.get('page/about-us').then(response => {
                    this.items = response.data.data;
                    this.loading = true;
                    console.log(response.data.data)
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
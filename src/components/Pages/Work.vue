<template>
    <div class="work">

        <div class="container">
            <div class="row justify-content-between align-items-start">

                <div class="col-lg-8 col-12">

                    <div class="work_list" v-for="(item, index) in items" :key="'c' + index" data-aos="fade-down">
                        <h4 class="main_head">{{ item.title }}</h4>
                        <ul>
                            <li>
                                <span class="dot"></span>
                                <span class="desc" v-html="item.description"></span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="col-12">
                    <div class="flex-center m-5" v-if="!loading">
                        <!-- <strong>Loading...</strong> -->
                        <b-spinner type="grow"></b-spinner>
                    </div>
                </div>

            </div>
        </div>

        <img src="@/assets/images/ray.png" alt="man ray" class="ray" />

    </div>
</template>

<script>

export default {
    name: "Work",

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
                await this.axios.get('page/work-with-us').then(response => {
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

    }
}
</script>

<style lang="scss" scoped>

</style>


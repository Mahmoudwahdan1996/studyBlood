<template>
    <div class="packages about__us">
        <div class="container">
            <div class="all_row_package">
                <div class="row align-items-end">
                    <div class="col-lg-6 col-12">
                        <div class="package__content">
                            <h4>{{ structureTitle }}</h4>
                            <p>{{ topicDescription }}</p>

                            <div class="flex-center mt-5" v-if="!loading">
                                <b-spinner type="grow"></b-spinner>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-12">

                        <div class="packages__payment">
                            <div class="head flex-center">
                                <div class="icon_info">
                                    <div class="icon active">
                                        <img src="@/assets/images/selection.svg" alt="pay img" />
                                    </div>
                                    <span>Package</span>
                                </div>

                                <div class="icon_info">
                                    <div class="icon">
                                        <img src="@/assets/images/payment-card.svg" alt="pay img" />
                                    </div>
                                    <span>payment</span>
                                </div>
                            </div>

                            <form action="">
                                <!-- <h3>{{ radioValue }}</h3> -->
                                <h3>{{ topicName }}</h3>

                                <label class="containercheck" v-for="(plan, index) in plans" :key="('k' + index)">

                                    <input type="radio" name="packages" v-model="radioValue" :value="plan.id" />

                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>{{ plan.price }}</span>
                                        <div class="advantage">
                                            <span>{{ plan.duration }}</span>
                                            <span>Last Test Report</span>
                                        </div>
                                    </div>
                                    <span class="red"></span>
                                </label>

                                <!-- <label class="containercheck">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>25 $</span>
                                        <div class="advantage">
                                            <span>6 Months</span>
                                            <span>Last Test Report</span>
                                        </div>
                                    </div>
                                    <span class="red"></span>
                                </label> -->

                                <div class="form-group">
                                    <!-- to="/payment" -->
                                    <!-- <router-link> -->
                                    <button type="button" class="main--btn" @click="sendData()">SUBSCRIBE</button>
                                    <!-- </router-link> -->
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="all_row">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="about-image flex-center">
                            <img src="@/assets/images/blue.png" alt="about img">
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="about_content">
                            <h4 class="main_head">Medical Student Years 1-3 Subscription Options</h4>
                            <ul>
                                <li>
                                    <span class="dot"></span>
                                    <span>we will pay you! our rates are more generous than other publishers - we are
                                        obsessed with quality and relevance and are willing to pay for it</span>
                                </li>
                                <li>
                                    <span class="dot"></span>
                                    <span>it looks great on your cv/job application. writing questions/topics not only
                                        shows
                                        your teaching ability but also demonstrates communication skills. we will
                                        provide
                                        all authors with a certificate they can upload to their portfolio.</span>
                                </li>
                                <li>
                                    <span class="dot"></span>
                                    <span>we will pay you! our rates are more generous than other publishers - we are
                                        obsessed with quality and relevance and are willing to pay for it</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div> -->

            <!-- <div class="all_row">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <div class="about__info">
                            <h3 class="main_head">Main Tilt Here</h3>
                            <p>it is a long established fact that a reader will be distracted by the readable content of
                                a
                                page when looking at its layout. the point of using lorem ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'content here, content
                                here', making it look like readable english. many desktop publishing packages and web
                                page
                                editors now use lorem ipsum as their default model text, and a search for 'lorem ipsum'
                                will
                                uncover many web sites still in their infancy. various versions have evolved over the
                                years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="about-image flex-center">
                            <img src="@/assets/images/blue.png" alt="about img">
                        </div>
                    </div>

                </div>
            </div> -->


            <div class="all_row">
                <div v-html="detailed_description"></div>
            </div>


        </div>

        <div class="flex-center mt-5 mb-10" v-if="!loading">
            <b-spinner type="grow"></b-spinner>
        </div>
    </div>
</template>

<script>
export default {
    name: "Packages",

    data() {
        return {


            // data from api

            loading: false,
            detailed_description: '',
            structureTitle: '',
            topicDescription: '',
            topicName: '',
            topic_id: '',
            radioValue: '',
            plans: []
        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },


    methods: {
        async getData() {
            try {

                this.axios.get(`subscribe/topic/${this.$route.params.id}`).then(response => {
                    this.loading = true;
                    this.structureTitle = response.data.data.structure.title;
                    this.topicDescription = response.data.data.topic.description;
                    this.detailed_description = response.data.data.topic.detailed_description;
                    this.topicName = response.data.data.topic.name;
                    this.topic_id = response.data.data.topic.id;
                    this.plans = response.data.data.topic.plans;
                    // console.log(response.data.data.topic.detailed_description)
                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },
        async sendData() {
            try {

                this.axios.post('subscribe', { plan_id: this.radioValue, topic_id: this.$route.params.id }).then(response => {
                    console.log(response.data.message)

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    this.$router.push('/payment')

                }).catch(error => {
                    this.$swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                })

            } catch (error) {
                console.log("error=>", error)
            }
        }
    },



}
</script>

<style lang="scss" scoped>

</style>
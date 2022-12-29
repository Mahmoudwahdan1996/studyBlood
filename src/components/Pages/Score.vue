<template>
    <div class="score">
        <div class="container">
            <div class="head">
                <span>Your Score Is</span>
                <span class="result">{{ score }}</span>

            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="score_info" v-for="(answer, index) in questionsAnswers" :key="('z' + index)">
                        <div class="content">
                            <!-- <h5>Adult Advanced Life Support</h5> -->
                            <p>{{ answer.content }}</p>
                        </div>

                        <div class="icons">
                            <font-awesome-icon class="correct" icon="fa-solid fa-check"
                                v-if="(answer.is_correct == 1)" />
                            <font-awesome-icon class="close" icon="fa-solid fa-xmark"
                                v-else-if="(answer.is_correct == 0)" />
                            <font-awesome-icon icon="fa-solid fa-minus" v-else-if="(answer.is_correct == null)" />
                            <a href="#" @click="goToQuestion(answer.id)">REVIEW</a>
                        </div>
                    </div>

                </div>

                <div class="col-12">
                    <div class="flex-center mt-5 mb-10" v-if="!loading">
                        <b-spinner type="grow"></b-spinner>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "score",

    data() {
        return {

            loading: false,

            questionsAnswers: [],
            score: ''

        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData()
    },


    methods: {
        async getData() {
            try {

                this.axios.get(`exam/previous-exam/${this.$route.params.id}`).then(response => {
                    this.loading = true;

                    this.score = response.data.data.score;
                    this.questionsAnswers = response.data.data.questions;

                }).catch(error => {

                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async goToQuestion(question_id) {
            try {

                this.axios.get(`exam/perform/${this.$route.params.id}/${question_id}`).then(response => {

                    this.$router.push({ name: 'review', params: { exam_id: this.$route.params.id, question_id: question_id } })

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
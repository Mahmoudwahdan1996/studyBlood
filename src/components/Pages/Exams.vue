<template>
    <div class="examsPage mcqRevision correct_exam">

        <div class="container">

            <div class="all_questions">

                <div class="row">

                    <div class="col-lg-7 col-12">



                        <div class="question__tab">

                            <div class="row align-items-start">
                                <div class="col-12">

                                    <div class="question__tab--categories">


                                        <div class="info_checkboxes">

                                            <div class="head_top">

                                                <button class="previous flex-center" @click="goPrevious()"
                                                    :class="{ 'hidden': question_previous_id == null }">
                                                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                                    <span>Previous</span>
                                                </button>
                                                <span class="hide_sm">{{ numQuestion }}</span>
                                                <button class="previous flex-center next" @click="goNext()"
                                                    :class="{ 'hidden': question_next_id == null }">
                                                    <span>Next</span>
                                                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                                </button>

                                            </div>

                                            <div class="question_name">

                                                <p>{{ questionContent }}</p>

                                                <!-- <div class="table-responsive">
                                                    <table class="table table-bordered table-hover">

                                                        <tbody>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> -->


                                            </div>

                                            <div class="progress_head" v-if="is_answered">

                                                <div class="head_info">

                                                    <div class="correct">
                                                        <span>
                                                            <font-awesome-icon icon="fa-solid fa-check" />
                                                        </span>
                                                        <span>Correct Answer</span>
                                                    </div>
                                                    <div class="prev_sol">
                                                        <span>Previous Solutions</span>
                                                    </div>

                                                </div>

                                                <b-progress class="position-relative" max="100"
                                                    v-for="(answer, index) in All_Answers" :key="('v' + index)">

                                                    <div class="top_progress">
                                                        <span>{{ answer.content }}</span>
                                                        <span>{{ answer.people_choice_percentage }}</span>
                                                    </div>

                                                    <b-progress-bar
                                                        :class="{ 'red-back': (answer.is_chosen && !answer.is_correct), 'gray-back': (!answer.is_chosen && !answer.is_correct) }"
                                                        :value="answer.people_choice_percentage">

                                                    </b-progress-bar>
                                                </b-progress>

                                            </div>


                                            <label v-if="!is_answered" class="containercheck"
                                                v-for="(answer, index) in All_Answers" :key="('l' + index)">
                                                <input :disabled="(is_finished == 1)" type="radio" name="answer"
                                                    :value="answer.id" v-model="answerValue">
                                                <span class="checkmark"></span>
                                                <div class="words">
                                                    <span>{{ answer.content }}</span>
                                                </div>
                                                <span class="red"></span>
                                            </label>

                                            <div class="all_btns_exam flex-between" :class="{ 'hidden': is_finished }">
                                                <button class="main--btn answer_submit" @click="submitExamAnswer()"
                                                    v-if="!is_answered">

                                                    <span>Submit Answer</span>

                                                </button>

                                                <button class="main--btn answer_submit d-none" @click="endExam()"
                                                    :class="{ 'showEnd': question_next_id == null }">End Exam</button>
                                            </div>

                                        </div>

                                        <div class="under_question" v-if="is_answered">
                                            <p v-html="hint"></p>
                                        </div>

                                        <!-- <div class="defects">
                                            <h5>Visual field defects:</h5>
                                            <p>Hypocalcemia is associated with QT interval prolongation; Hypercalcemia
                                                is associated with QT interval shortening</p>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="main_points">
                                            <h5>The main points for the exam are:</h5>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>

                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover table_answer">
                                                    <thead class="">
                                                        <tr>
                                                            <th scope="col">Congenital</th>
                                                            <th scope="col">Drugs</th>
                                                            <th scope="col">Others</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                        <div class="answer_picture">
                                            <h5>answer pictures</h5>

                                            <div class="row">
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/blue.png" alt="answer image">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/header.webp" alt="answer image">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/cml.png" alt="answer image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="main_points">
                                            <h5>The main points for the exam are:</h5>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>
                                        </div> -->

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-lg-3 col-12">

                        <div class="ranges" v-if="!is_answered">
                            <h4 class="flex-center">
                                <img src="@/assets/images/literature.svg" alt="range" />
                                <span>Reference Ranges</span>
                            </h4>

                            <div class="all_ranges">
                                <div class="range_box">
                                    <div class="box_item">
                                        <!-- <h5>Haemoglobin</h5> -->
                                        <p v-html="references_table"></p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="ranges" v-if="is_answered">
                            <h4 class="d-flex justify-content-start">
                                <img src="@/assets/images/literature.svg" alt="range" />
                                <span>Links</span>
                            </h4>

                            <div class="all_ranges">
                                <div class="range_box">
                                    <div class="box_item" style="border:none">
                                        <p v-html="links"></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-lg-2 col-12">

                        <div class="ranges" v-if="(!is_finished && timeLeft)">
                            <h4 class="d-flex justify-content-start">
                                <font-awesome-icon style="color:#ff4d00" icon="fa-solid fa-file" />
                                <span>{{ exam_type }}</span>
                            </h4>

                            <div class="all_ranges">
                                <div class="range_box">
                                    <div class="box_item" style="border:none">
                                        <p class='time_left'>{{ timeLeftString }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="table-responsive score_table">
                            <table class="table text-center table-bordered table-hover">
                                <thead>
                                    <tr class="row_head">
                                        <th scope="col">
                                            <div class="cell_icon flex-center">
                                                <span>
                                                    <img src="@/assets/images/scoreboard.svg" alt="range"></span>
                                                <span>Score</span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <span style="color: #FFAE8B;">{{ score_percentage }}%</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="(question, index) in scoreQuestions" :key="('g' + index)">
                                    <tr @click="goToQuestion(question.id)" style="cursor:pointer">
                                        <td class="quest_number">{{ index + 1 }}</td>
                                        <td>
                                            <div class="correct" v-if="(question.is_correct == 1)">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </div>
                                            <div class="wrong" v-else-if="(question.is_correct == 0)">
                                                <font-awesome-icon icon="fa-solid fa-xmark" />
                                            </div>
                                            <div class="skip" v-else-if="(question.is_correct == null)">
                                                <font-awesome-icon icon="fa-solid fa-minus" />
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- <tr>
                                        <td class="quest_number">2</td>
                                        <td>
                                            <div class="wrong">
                                                <font-awesome-icon icon="fa-solid fa-xmark" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="quest_number">3</td>
                                        <td>
                                            <div class="skip">
                                                <font-awesome-icon icon="fa-solid fa-minus" />
                                            </div>
                                        </td>
                                    </tr> -->

                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>

            </div>


        </div>

    </div>
</template>

<script>

import moment from "moment";
export default {
    name: "exams",

    data() {
        return {

            loading: false,

            // numQuestion
            numQuestion: '',

            // exam info

            exam_type: '',
            questionContent: "",
            question_id: '',
            All_Answers: [],

            //v-model answer value

            answerValue: '',

            //score Percentage

            score_percentage: '',
            scoreQuestions: [],

            // references table

            references_table: "",


            // is answerd question

            is_answered: '',

            // submit answer exam

            links: '',
            hint: '',

            // progress bar

            value: 100,
            dataValue: "",

            // next navigation

            question_next_id: '',
            question_previous_id: '',

            // is_ended

            is_finished: '',

            // start timer counter

            timeLeft: '',
            timeLeftString: '',
            timer: null


        }
    },

    watch: {
        timeLeft: function (val) {
            const timeZero = moment("1900-01-01 00:00:00");
            this.timeLeftString = timeZero.add(val, 'seconds').format("HH:mm:ss")
        },
    },

    mounted() {

        window.scrollTo(0, 0);
        // this.getData();
        this.get_is_ended();

    },

    methods: {

        async get_is_ended() {
            try {

                this.axios.get(`exam/status/${this.$route.params.id}`).then(response => {
                    this.is_finished = response.data.data.is_ended;

                    if (this.is_finished == 1) {
                        console.log(this.is_finished)
                        console.log("goToQuestion")
                        this.goToQuestion(this.$route.params.question_id)


                    } else {
                        console.log("get data")
                        console.log(this.is_finished)
                        this.getData();
                    }

                }).catch(error => {

                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },



        async getData() {
            try {

                this.axios.get(`exam/perform/${this.$route.params.id}`).then(response => {
                    this.loading = true;

                    this.exam_type = response.data.data.exam_type;

                    this.questionContent = response.data.data.question.content;
                    this.question_id = response.data.data.question.id;
                    this.question_next_id = response.data.data.next_question_id;
                    this.question_previous_id = response.data.data.previous_question_id;

                    this.All_Answers = response.data.data.question.answers;

                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;

                    this.references_table = response.data.data.question.references;

                    this.is_answered = response.data.data.is_answered;

                    this.numQuestion = response.data.message;

                    // timer counter

                    this.timeLeft = response.data.data.time_left;

                    console.log(response.data.data.time_left)

                    // start timer

                    this.timer = setInterval(() => {
                        if (this.timeLeft <= 0) {

                            console.log(this.timeLeft)

                            clearInterval(this.timer);
                            this.endExam()
                            // alert('Done');
                        } else {
                            this.timeLeft--
                        }
                    }, 1000)

                    // this.exam_type = response.data.data.exam_type;

                    // console.log(response.data.data.categories)
                }).catch(error => {

                    this.$router.push('/')

                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // submit exam

        async submitExamAnswer() {
            try {

                this.axios.post("exam/answer", { exam_id: this.$route.params.id, question_id: this.question_id, user_answer_id: this.answerValue }).then(response => {

                    this.All_Answers = response.data.data.question.answers;
                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;
                    this.links = response.data.data.question.links;
                    this.hint = response.data.data.question.hint;
                    this.is_answered = response.data.data.is_answered;

                    // nav
                    this.question_next_id = response.data.data.next_question_id;
                    this.question_previous_id = response.data.data.previous_question_id;

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // progress bar

        getVariantType(value) {
            if (value > 50) {
                return 'success'
            }
            else if (value > 30) {
                return 'warning'
            }
            if (value > 10) {
                return 'danger'
            }

            return ''
        },


        async goNext() {
            try {

                this.axios.get(`exam/perform/${this.$route.params.id}/${this.question_next_id}`).then(response => {
                    this.loading = true;

                    this.questionContent = response.data.data.question.content;
                    this.question_id = response.data.data.question.id;

                    // nav

                    this.question_next_id = response.data.data.next_question_id;
                    this.question_previous_id = response.data.data.previous_question_id;

                    this.All_Answers = response.data.data.question.answers;

                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;

                    this.references_table = response.data.data.question.references;

                    this.is_answered = response.data.data.is_answered;

                    this.numQuestion = response.data.message;

                    this.links = response.data.data.question.links;
                    this.hint = response.data.data.question.hint;

                    // this.exam_type = response.data.data.exam_type;

                    // console.log(response.data.data.categories)
                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async goPrevious() {
            try {

                this.axios.get(`exam/perform/${this.$route.params.id}/${this.question_previous_id}`).then(response => {
                    this.loading = true;

                    this.questionContent = response.data.data.question.content;
                    this.question_id = response.data.data.question.id;


                    // nav

                    this.question_next_id = response.data.data.next_question_id;
                    this.question_previous_id = response.data.data.previous_question_id;

                    this.All_Answers = response.data.data.question.answers;

                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;

                    this.references_table = response.data.data.question.references;

                    this.is_answered = response.data.data.is_answered;

                    this.numQuestion = response.data.message;

                    this.links = response.data.data.question.links;
                    this.hint = response.data.data.question.hint;

                    // this.exam_type = response.data.data.exam_type;

                    // console.log(response.data.data.categories)
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
                    this.loading = true;

                    this.questionContent = response.data.data.question.content;
                    this.question_id = response.data.data.question.id;

                    // nav

                    this.question_next_id = response.data.data.next_question_id;
                    this.question_previous_id = response.data.data.previous_question_id;

                    this.All_Answers = response.data.data.question.answers;

                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;

                    this.references_table = response.data.data.question.references;

                    this.is_answered = response.data.data.is_answered;

                    this.numQuestion = response.data.message;

                    this.links = response.data.data.question.links;
                    this.hint = response.data.data.question.hint;

                    // this.exam_type = response.data.data.exam_type;

                    // console.log(response.data.data.categories)

                }).catch(error => {
                    this.$router.push('/')
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async endExam() {
            try {

                this.axios.post('exam/end', { exam_id: `${this.$route.params.id}` }).then(response => {
                    this.loading = true;

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    this.$router.push({ name: 'score', params: this.$route.params.id });


                }).catch(error => {
                    this.$router.push({ name: 'score', params: this.$route.params.id });
                    console.log(error.response.data.message)

                    // this.$swal.fire({
                    //     position: 'center',
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: `${error.response.data.message}`,
                    //     showConfirmButton: false,
                    //     timer: 3000
                    // })
                })

            } catch (error) {
                console.log("error=>", error)
            }
        }


    },


}
</script>

<style lang="scss" scoped>
.time_left {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
}

.showEnd {
    display: block !important;
}

.hidden {
    display: none
}

.top_progress {

    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 40px;
    font-size: 16px;
    font-family: "Calibri-Regular";


    span {
        width: 50%;
        display: block;
        padding-inline-start: 30px;

        &:last-child {
            font-family: "Calibri-Bold";

        }
    }
}

.red-back {
    background-color: red !important;
    border-left: 8px solid red !important;
    opacity: 0.5;
}


.gray-back {
    background-color: #DDD !important;
}
</style>
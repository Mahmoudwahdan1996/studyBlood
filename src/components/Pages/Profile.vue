<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <b-tabs pills card vertical>


                    <!-- time test tab -->

                    <b-tab title="PREVIOUS TIMED TESTS" active>
                        <b-card-text>
                            <div class="timed_test">
                                <div class="head">
                                    <span>PREVIOUS TIMED TESTS</span>
                                </div>

                                <div class="table-responsive">
                                    <!-- style="display: block;max-height: 400px;" -->
                                    <table class="table  table-hover">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Number Of Question</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Review /Contiune</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="previousExams.length">

                                            <tr v-for="(exam, index) in previousExams" :key="('k' + index)">
                                                <td>{{ exam.topic_name }}</td>
                                                <td>{{ exam.details }}</td>
                                                <td>{{ exam.status }}</td>
                                                <td>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Review')">
                                                        <button class="main--btn review"
                                                            @click="goToQuestionReview(exam.id, exam.first_question_id)">Review</button>
                                                    </div>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Continue')">
                                                        <button class="main--btn continue"
                                                            @click="goToQuestionContinue(exam.id)">continue</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>

                                        <tbody v-else-if="!previousExams">
                                            <h3 class="text-center">no data found</h3>
                                        </tbody>

                                        <tbody v-else="!loading">
                                            <div class="flex-center mt-5">
                                                <b-spinner type="grow"></b-spinner>
                                            </div>
                                        </tbody>

                                    </table>
                                </div>

                            </div>
                        </b-card-text>
                    </b-tab>

                    <!-- time test tab -->

                    <!-- questions tab -->

                    <b-tab title="Previous Questions TESTS">
                        <b-card-text>
                            <div class="timed_test">
                                <div class="head">
                                    <span>Previous Questions TESTS</span>
                                </div>

                                <div class="table-responsive">
                                    <!-- style="display: block;max-height: 400px;" -->
                                    <table class="table  table-hover">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Number Of Question</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Review /Contiune</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="(exam, index) in previousExamsQuestions" :key="('k' + index)">
                                                <td>{{ exam.topic_name }}</td>
                                                <td>{{ exam.details }}</td>
                                                <td>{{ exam.status }}</td>
                                                <td>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Review')">
                                                        <button class="main--btn review"
                                                            @click="goToQuestionReview(exam.id, exam.first_question_id)">Review</button>
                                                    </div>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Continue')">
                                                        <button class="main--btn continue"
                                                            @click="goToQuestionContinue(exam.id)">continue</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>

                                        <!-- <tbody v-else-if="!previousExamsQuestions">
                                            <h3 class="text-center">no data found</h3>
                                        </tbody>

                                        <tbody v-else="!loading">
                                            <div class="flex-center mt-5">
                                                <b-spinner type="grow"></b-spinner>
                                            </div>
                                        </tbody> -->

                                    </table>
                                </div>

                            </div>
                        </b-card-text>
                    </b-tab>

                    <!-- questions tab -->

                    <!-- mock tab -->

                    <b-tab title="Previous Mock TESTS">
                        <b-card-text>
                            <div class="timed_test">
                                <div class="head">
                                    <span>Previous Mock TESTS</span>
                                </div>

                                <div class="table-responsive">
                                    <!-- style="display: block;max-height: 400px;" -->
                                    <table class="table  table-hover">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Number Of Question</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Review /Contiune</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="previousExams.length">

                                            <tr v-for="(exam, index) in previousExamsMock" :key="('k' + index)">
                                                <td>{{ exam.topic_name }}</td>
                                                <td>{{ exam.details }}</td>
                                                <td>{{ exam.status }}</td>
                                                <td>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Review')">
                                                        <button class="main--btn review"
                                                            @click="goToQuestionReview(exam.id, exam.first_question_id)">Review</button>
                                                    </div>
                                                    <div class="btns flex-center flex-column"
                                                        v-if="(exam.operation == 'Continue')">
                                                        <button class="main--btn continue"
                                                            @click="goToQuestionContinue(exam.id)">continue</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>

                                        <tbody v-else-if="!previousExamsMock">
                                            <h3 class="text-center">no data found</h3>
                                        </tbody>

                                        <tbody v-else="!loading">
                                            <div class="flex-center mt-5">
                                                <b-spinner type="grow"></b-spinner>
                                            </div>
                                        </tbody>

                                    </table>
                                </div>

                            </div>
                        </b-card-text>
                    </b-tab>

                    <!-- mock tab -->

                    <!-- edit account tab -->
                    <b-tab title="Edit Account">
                        <b-card-text>
                            <div class="box_info">

                                <ValidationObserver v-slot="{ invalid, handleSubmit }" ref='observer'>

                                    <form action="" @submit.prevent="handleSubmit(sendData)">
                                        <h4>
                                            <span>Personal</span>
                                            <span class="word"> Information</span>
                                        </h4>

                                        <ValidationProvider name="name" rules="required|englishLettersOnly|min:3"
                                            v-slot="{ errors }">
                                            <div class="form-group">
                                                <label for="">Name:</label>
                                                <input type="text" v-model="formData.name" placeholder="Type Name"
                                                    required>
                                                <span class="error_validate">{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>


                                        <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                            <div class="form-group">
                                                <label for="">E-Mail:</label>
                                                <input type="email" v-model="formData.email"
                                                    placeholder="Hralryad@Gmail.Com">
                                                <span class="error_validate">{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <div class="form-group">
                                            <label for="">Mobil:</label>
                                            <input v-model.trim="formData.phone" type="text" placeholder="54 1234567">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" :disabled="invalid"
                                                :class="{ 'disabled': !formData.name || !formData.email || !formData.phone }"
                                                class="main--btn">Save</button>
                                        </div>
                                    </form>

                                </ValidationObserver>


                            </div>
                        </b-card-text>
                    </b-tab>
                    <!-- edit account tab -->

                    <!-- edit password tab -->

                    <b-tab title="Edit Password">
                        <b-card-text>
                            <div class="box_info">

                                <ValidationObserver v-slot="{ invalid, handleSubmit }" ref='observer'>

                                    <form action="" @submit.prevent="handleSubmit(updatePass)">
                                        <h4>
                                            <span>Edit </span>
                                            <span class="word"> Password</span>
                                        </h4>

                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <div class="form-group position-relative">
                                                <label for="">Current Password :</label>
                                                <input :type="[showPassword ? 'text' : 'password']"
                                                    placeholder="********" required
                                                    v-model="formData2.current_password">
                                                <span class="eye" @click="showPassword = !showPassword">
                                                    <font-awesome-icon :icon="icon" />
                                                </span>
                                            </div>
                                            <span class="error_validate">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <div class="form-group position-relative">
                                                <label for="">New Password :</label>
                                                <input :type="[showConfirmPassword ? 'text' : 'password']"
                                                    placeholder="********" required v-model="formData2.new_password">
                                                <span class="eye" @click="(showConfirmPassword = !showConfirmPassword)">
                                                    <font-awesome-icon :icon="icon2" />
                                                </span>
                                            </div>
                                            <span class="error_validate">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                        <div class="form-group">
                                            <button type="submit" :disabled="invalid" class="main--btn"
                                                :class="{ 'disabled': !formData2.current_password || !formData2.new_password }">Save</button>
                                        </div>
                                    </form>


                                </ValidationObserver>


                            </div>
                        </b-card-text>
                    </b-tab>
                    <!-- edit password tab -->


                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profile",
    data() {
        return {

            userName: localStorage.getItem('userName'),

            loading: false,

            showPassword: false,
            showConfirmPassword: false,

            formData2: {
                current_password: "",
                new_password: "",
            },

            // form input data

            formData: {
                name: "",
                email: "",
                phone: ""
            },


            previousExams: [],

            previousExamsQuestions: [],
            previousExamsMock: [],

            // get Auth data

            AuthName: '',
            AuthEmail: '',
            AuthPhone: ''


        }
    },
    computed: {

        icon() {
            if (this.showPassword) {
                return ["fa-regular", "fa-eye-slash"];
            } else {
                return ["fa-regular", "fa-eye"];
            }
        },

        icon2() {
            if (this.showConfirmPassword) {
                return ["fa-regular", "fa-eye-slash"];
            } else {
                return ["fa-regular", "fa-eye"];
            }
        },
    },


    mounted() {
        window.scrollTo(0, 0);
        this.getData();
        this.getDataQuestion();
        this.getDataMock();
        this.AuthData();
    },

    methods: {

        // get previous data timed test
        async getData() {
            try {

                this.axios.get('profile/previous-time').then(response => {
                    this.loading = true;
                    this.previousExams = response.data.data;
                    console.log('profile=>', response.data.data)

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // get previous data questions test

        async getDataQuestion() {
            try {

                this.axios.get('profile/previous-question').then(response => {
                    this.loading = true;
                    this.previousExamsQuestions = response.data.data;
                    console.log('profile=>', response.data.data)

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // get previous data mock test

        async getDataMock() {
            try {

                this.axios.get('profile/previous-mock').then(response => {
                    this.loading = true;
                    this.previousExamsMock = response.data.data;
                    console.log('profile=>', response.data.data)

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // update profile

        async sendData() {

            try {
                await this.axios.post('profile/update-profile', this.formData).then(response => {

                    this.formData.name = "";
                    this.formData.email = "";
                    this.formData.phone = "";


                    this.$refs.observer.reset();

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    localStorage.setItem("authToken", response.data.data.token)
                    localStorage.setItem("userName", response.data.data.name)
                    localStorage.setItem("userEmail", response.data.data.email)

                    window.location.reload()

                    this.$router.push('/');


                }).catch(error => {
                    console.log(error.response.data.message);

                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        confirmButtonColor: '#ff7400',
                        timer: 3000
                    })

                })
            } catch (error) {
                console.log('try catch =>', error);
            }

        },

        // update password

        async updatePass() {

            try {
                await this.axios.post('profile/update-password', this.formData2).then(response => {

                    this.loading = true;

                    this.formData2.current_password = "";
                    this.formData2.new_password = "";


                    this.$refs.observer.reset();

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    localStorage.setItem("authToken", response.data.data.token)
                    localStorage.setItem("userName", response.data.data.name)
                    localStorage.setItem("userEmail", response.data.data.email)

                    this.$router.push('/');


                }).catch(error => {
                    console.log(error.response.data.message);

                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        confirmButtonColor: '#ff7400',
                        timer: 3000
                    })

                })
            } catch (error) {
                console.log('try catch =>', error);
            }

        },

        // get user Auth data

        async AuthData() {
            try {
                await this.axios.get('user').then(response => {

                    this.formData.name = response.data.data.name;
                    this.formData.email = response.data.data.email;
                    this.formData.phone = response.data.data.phone;

                }).catch(error => {
                    console.log(error.response.data.message);

                })
            } catch (error) {
                console.log('try catch =>', error);
            }
        },

        // go to review exam

        async goToQuestionReview(exam_id, question_id) {
            try {

                this.$router.push({ name: 'review', params: { id: exam_id, question_id: question_id } })


            } catch (error) {
                console.log("error=>", error)
            }
        },

        // go to continue exam

        async goToQuestionContinue(exam_id) {
            try {

                this.$router.push({ name: 'exams', params: { id: exam_id } })


            } catch (error) {
                console.log("error=>", error)
            }
        },


    }
}
</script>

<style lang="scss" scoped>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
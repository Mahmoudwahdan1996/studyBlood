
<template>

    <div class="Signup forget_password">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12">

                    <div class="signup__box">

                        <form action="" @submit.prevent="sendData">

                            <router-link to="/login">
                                <div class="form_back">
                                    <span>
                                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                    </span>
                                    <span>Back</span>
                                </div>
                            </router-link>

                            <div class="form_head">
                                <h4>
                                    <span>NEW</span>
                                    <span class="up_word">PASSWORD</span>
                                </h4>
                            </div>

                            <div class="form-group position-relative">
                                <label for="">New Password:</label>
                                <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                                    v-model="formData.NewPassword">
                                <span class="eye" @click="showPassword = !showPassword">
                                    <font-awesome-icon :icon="icon" />
                                </span>
                            </div>

                            <div class="form-group position-relative">
                                <label for="">Confirm New Password:</label>
                                <input :type="[showPassword2 ? 'text' : 'password']" placeholder="********" required
                                    v-model="formData.confirmPassword">
                                <span class="eye" @click="showPassword2 = !showPassword2">
                                    <font-awesome-icon :icon="icon2" />
                                </span>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="main--btn">Send</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </div>

        <CopyRightComponent />

    </div>



</template>

<script>
import CopyRightComponent from '../Globals/CopyRightComponent.vue';
import Navbar from '../Globals/Navbar.vue';

export default {
    name: "forgetPassword",
    data() {
        return {
            showPassword: false,
            showPassword2: false,

            formData: {
                NewPassword: "",
                confirmPassword: ""
            }
        }
    },
    computed: {

        icon2() {
            if (this.showPassword2) {
                return ['fa-regular', 'fa-eye-slash']
            } else {
                return ['fa-regular', 'fa-eye']
            }
        },
        icon() {
            if (this.showPassword) {
                return ["fa-regular", "fa-eye-slash"];
            } else {
                return ["fa-regular", "fa-eye"];
            }
        },
    },
    methods: {
        async sendData() {

            try {
                await this.axios.post('forget-password', this.formData).then(res => {

                    this.formData.NewPassword = "";
                    this.formData.confirmPassword = "";

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });


                }).catch(error => {
                    console.log(error.response.data.msg)

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

        }
    },
    components: { Navbar, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
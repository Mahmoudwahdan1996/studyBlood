
<template>

    <div class="Signup forget_password">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12">

                    <div class="signup__box">

                        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref='observer'>

                            <form action="" @submit.prevent="handleSubmit(sendData)">

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
                                        <span>RECOVER</span>
                                        <span class="up_word">PASSWORD</span>
                                    </h4>
                                    <p>
                                        <span>To Recover Your Password, Enter The E-Mail</span>
                                    </p>
                                </div>

                                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">E-Mail:</label>
                                        <input type="email" v-model.trim="formData.email"
                                            placeholder="Hralryad@Gmail.Com">
                                        <span class="error_validate">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <div class="form-group">
                                    <button type="submit" :disabled="invalid" class="main--btn">Send E-Mail</button>
                                </div>

                            </form>

                        </ValidationObserver>

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

            // form input data forget password  

            formData: {
                email: "",
            }
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
    },
    methods: {

        // send form input data

        async sendData() {

            try {
                await this.axios.post('forget-password', this.formData).then(res => {

                    this.formData.email = "";

                    this.$refs.observer.reset();

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
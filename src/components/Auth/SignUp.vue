<template>



    <div class="Signup">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12">

                    <div class="signup__box" data-aos="fade-up">

                        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref='observer'>

                            <form action="" @submit.prevent="handleSubmit(sendData)">

                                <div class="form_head">
                                    <h4>
                                        <span>SIGN</span>
                                        <span class="up_word">UP</span>
                                    </h4>
                                    <p>
                                        <span>Already Have An Account ?</span>
                                        <router-link to="/login">
                                            <span class="login">
                                                Log In
                                            </span>
                                        </router-link>
                                    </p>
                                </div>

                                <ValidationProvider name="name" rules="required|englishLettersOnly|min:3"
                                    v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">Name:</label>
                                        <input type="text" v-model="formData.name" placeholder="Type Name" required>
                                        <span class="error_validate">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">E-Mail:</label>
                                        <input type="email" v-model="formData.email" placeholder="Hralryad@Gmail.Com">
                                        <span class="error_validate">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>


                                <label for="">Mobil:</label>
                                <div class="form-group form_tel">
                                    <vue-tel-input :dropdownOptions="dropdownOptions" :inputOptions="inputOptions"
                                        defaultCountry="sa" required v-model.trim="formData.phone"></vue-tel-input>
                                </div>

                                <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                    <div class="form-group position-relative">
                                        <label for="">Password :</label>
                                        <input :type="[showPassword ? 'text' : 'password']" placeholder="********"
                                            required v-model="formData.password">
                                        <span class="eye" @click="showPassword = !showPassword">
                                            <font-awesome-icon :icon="icon" />
                                        </span>
                                    </div>
                                    <span class="error_validate">{{ errors[0] }}</span>
                                </ValidationProvider>

                                <div class="form-group">
                                    <button :disabled="invalid" type="submit" class="main--btn">Sign Up</button>
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
    name: "signup",
    data() {
        return {

            // for icon show password

            showPassword: false,

            // form input data

            formData: {
                name: "",
                email: "",
                password: "",
                phone: ""
            },

            // vue tel input options

            dropdownOptions: {
                showDialCodeInSelection: true,
                showFlags: true,
                showDialCodeInList: true
            },
            inputOptions: {
                required: true,
                maxlength: 14,
                // showDialCode: true
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

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {

        // send form input signup data

        async sendData() {

            try {
                await this.axios.post('register', this.formData).then(res => {

                    this.formData.name = "";
                    this.formData.email = "";
                    this.formData.password = "";
                    this.formData.phone = "";


                    this.$refs.observer.reset();

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    localStorage.setItem("authToken", res.data.data.token)
                    localStorage.setItem("userName", res.data.data.name)
                    localStorage.setItem("userEmail", res.data.data.email)

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

        }
    },

    components: { Navbar, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
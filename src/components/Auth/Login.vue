<template>



    <div class="Signup login_page">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12 ">

                    <div class="signup__box">

                        <ValidationObserver v-slot="{ handleSubmit, invalid }" ref="observer">

                            <form action="" @submit.prevent="handleSubmit(sendData)">

                                <div class="form_head">
                                    <h4>
                                        <span>LOG</span>
                                        <span class="up_word">IN</span>
                                    </h4>
                                </div>

                                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">E-Mail:</label>
                                        <input type="email" v-model.trim="formData.email"
                                            placeholder="Hralryad@Gmail.Com">
                                        <span class="error_validate">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>


                                <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                    <div class="form-group position-relative">
                                        <label for="">Password :</label>
                                        <input :type="[showPassword ? 'text' : 'password']" placeholder="********"
                                            required v-model.trim="formData.password">
                                        <span class="eye" @click="showPassword = !showPassword">
                                            <font-awesome-icon :icon="icon" />
                                        </span>
                                    </div>
                                    <span class="error_validate">{{ errors[0] }}</span>
                                </ValidationProvider>

                                <div class="form-group remember_row">
                                    <div class="remember_me">
                                        <router-link to="/forgetPassword">
                                            <span>Forget Password</span>
                                        </router-link>
                                    </div>
                                    <div class="check_box">
                                        <label for="">Remember Me</label>
                                        <input type="checkbox">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" :disabled="invalid" class="main--btn">Log In</button>
                                </div>

                            </form>

                        </ValidationObserver>

                    </div>

                    <router-link to="/signup">
                        <h4 class="create">Creat An Account</h4>
                    </router-link>

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
    name: "login",

    data() {
        return {
            showPassword: false,

            // form input data 

            formData: {
                email: '',
                password: ''
            },

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

        //send form input data login

        async sendData() {

            try {
                await this.axios.post('login', this.formData).then(res => {

                    this.formData.email = "";
                    this.formData.password = "";

                    this.$refs.observer.reset();

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    // console.log(res.data.data.token)

                    window.localStorage.setItem("authToken", res.data.data.token)
                    window.localStorage.setItem("userName", res.data.data.name)
                    window.localStorage.setItem("userEmail", res.data.data.email)
                    // window.localStorage.setItem("userPass", res.data.data.password)

                    this.$router.push('/');


                }).catch(error => {
                    console.log(error.response.data.message)

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
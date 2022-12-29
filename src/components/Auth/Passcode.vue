
<template>

    <div class="Signup forget_password passCode">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-4 col-12">

                    <div class="signup__box">

                        <form action="">

                            <router-link to="/forgetPassword">
                                <div class="form_back">
                                    <span>
                                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                    </span>
                                    <span>Back</span>
                                </div>
                            </router-link>

                            <div class="form_head">
                                <h4>
                                    <span class="up_word">INSERT PASSCODE</span>
                                </h4>
                                <p>
                                    <span>Please Enter The Passcode Number From The Email</span>
                                </p>
                            </div>

                            <div class="form-group">
                                <div class="pass_numbers">
                                    <input type="text" maxlength="1"
                                        @input="this.value = this.value.replace(/[^0-9]/g, '')"
                                        @keyup.enter="$event.target.nextElementSibling.focus()" class="num" />
                                    <input type="text" maxlength="1"
                                        @input="this.value = this.value.replace(/[^0-9]/g, '')"
                                        @keyup.enter="$event.target.nextElementSibling.focus()" class="num" />
                                    <input type="text" maxlength="1"
                                        @input="this.value = this.value.replace(/[^0-9]/g, '')"
                                        @keyup.enter="$event.target.nextElementSibling.focus()" class="num" />
                                    <input type="text" maxlength="1"
                                        @input="this.value = this.value.replace(/[^0-9]/g, '')"
                                        @keyup.enter="$event.target.nextElementSibling.focus()" class="num" />
                                    <input type="text" maxlength="1"
                                        @input="this.value = this.value.replace(/[^0-9]/g, '')"
                                        @keyup.enter="$event.target.nextElementSibling.focus()" class="num" />
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <button type="button" class="main--btn">Send</button>

                                <a href="#" class="resend">Resend Number</a>
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
    name: "PassCode",
    data() {
        return {
            showPassword: false,
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
    components: { Navbar, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
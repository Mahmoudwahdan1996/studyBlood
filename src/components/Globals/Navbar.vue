<template>
    <div class="navbar">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-3 col-6" data-aos="fade-right">
                    <router-link to="/">
                        <div class="navbar__logo flex-center">
                            <img :src="logoHeader" alt="logo">
                        </div>
                    </router-link>
                </div>

                <div class="col-lg-6 hide_md">
                    <div class="navbar__links flex-center" data-aos="fade-up">
                        <ul>

                            <li>
                                <router-link :to="{ path: '/', hash: '#doWork' }">
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <!-- <font-awesome-icon class="house__icon" icon="fa-solid fa-house" /> -->
                                        <img src="@/assets/images/home.svg" width="22px" alt="home">
                                    </a>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/about">
                                    <a href="http://" target="_blank" rel="noopener noreferrer">About us</a>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/work-with-us">
                                    <a href="http://" target="_blank" rel="noopener noreferrer">Work with Us</a>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/contact">
                                    <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-6 hide_sm_md" data-aos="fade-left">
                    <div class="navbar__btns flex-center">
                        <router-link to="/signup" v-if="!authToken">
                            <button class="navbar__btns--sign main--btn">Sign Up</button>
                        </router-link>

                        <router-link to="/login" v-if="!authToken">
                            <button class="navbar__btns--login second--btn">Log In</button>
                        </router-link>

                        <router-link to="/profile" v-if="authToken">
                            <button class="navbar__btns--sign profile--btn main--btn ">My Profile</button>
                        </router-link>

                        <router-link to="/login" v-if="authToken">
                            <button class="navbar__btns--login second--btn" @click="logOut()">Log out</button>
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6 hide_large">
                    <div class="side_bar_content flex-end">
                        <b-button v-b-toggle.sidebar-backdrop>
                            <font-awesome-icon icon="fa-solid fa-list" />
                        </b-button>

                        <b-sidebar id="sidebar-backdrop" backdrop shadow>
                            <div class="info">
                                <ul>

                                    <li>
                                        <router-link to="/">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                                <font-awesome-icon class="house__icon" icon="fa-solid fa-house" />
                                            </a>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link to="/about">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">About us</a>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link to="/work-with-us">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">Work with Us</a>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link to="/contact">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
                                        </router-link>
                                    </li>

                                </ul>
                                <div class="navbar__btns flex-center">
                                    <router-link to="/signup">
                                        <button class="navbar__btns--sign main--btn">Sign Up</button>
                                    </router-link>

                                    <router-link to="/login">
                                        <button class="navbar__btns--login second--btn">Log In</button>
                                    </router-link>

                                    <router-link to="/profile">
                                        <button class="navbar__btns--sign profile--btn main--btn d-none">My
                                            Profile</button>
                                    </router-link>
                                </div>
                            </div>
                        </b-sidebar>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",

    data() {
        return {
            authToken: localStorage.getItem('authToken'),

            logoHeader: ''
        }
    },

    mounted() {
        this.getData();
    },

    methods: {
        logOut() {
            localStorage.clear();
            window.location.reload();
            this.$router.push("/");
        },


        async getData() {
            try {

                this.axios.get('page/home/logos').then(response => {

                    this.logoHeader = response.data.data.header_logo;

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
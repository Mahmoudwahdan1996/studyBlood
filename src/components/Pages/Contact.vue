<template>
    <div class="contact">
        <img src="@/assets/images/ray.png" class="ray" alt="ray" />
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12" data-aos="fade-right">
                    <h3 class="main_head">
                        <span>Contact</span>
                        <span class="word">Us</span>
                    </h3>

                    <p>{{ description }}</p>


                    <ValidationObserver v-slot="{ invalid, handleSubmit }" ref='observer'>

                        <form action="" @submit.prevent="handleSubmit(sendData)">
                            <h4>SEND MESSAGE</h4>

                            <ValidationProvider name="name" rules="required|englishLettersOnly|min:3"
                                v-slot="{ errors }">
                                <div class="form-group">
                                    <label for="">Name:</label>
                                    <input type="text" v-model.trim="formData.name" placeholder="Type Name" required>
                                    <span class="error_validate">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>

                            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                <div class="form-group">
                                    <label for="">E-Mail:</label>
                                    <input type="email" v-model.trim="formData.email" placeholder="Hralryad@Gmail.Com">
                                    <span class="error_validate">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>

                            <label for="">Mobil:</label>
                            <div class="form-group form_tel">
                                <vue-tel-input :inputOptions="inputOptions" :dropdownOptions="dropdownOptions"
                                    defaultCountry="sa" v-model.trim="formData.phone"></vue-tel-input>
                            </div>

                            <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
                                <div class="form-group">
                                    <label for="">Message:</label>
                                    <textarea type="text" v-model.trim="formData.message"
                                        placeholder="Your Message"></textarea>
                                    <span class="error_validate">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>

                            <div class="form-group">
                                <button type="submit" :disabled="invalid" class="main--btn">Send</button>
                            </div>
                        </form>

                    </ValidationObserver>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    data() {
        return {
            description: '',

            // form input data

            formData: {
                name: "",
                email: "",
                phone: "",
                message: ""
            },

            // vue tel input options

            dropdownOptions: {
                showDialCodeInSelection: true,
                showFlags: true
            },
            inputOptions: {
                required: true,
                maxlength: 18,
                showDialCode: true
            }

        }
    },
    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {

        //get data from api

        async getData() {

            await this.axios.get('page/contact-us').then(res => {
                this.description = res.data.data.description;
                // console.log(res.data.data.description)
            }).catch(error => {
                console.log(error)
            })

        },

        // send form data method

        async sendData() {

            try {
                await this.axios.post('contact', this.formData).then(res => {

                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.phone = '';
                    this.formData.message = '';

                    this.$refs.observer.reset();

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })


                }).catch(error => {
                    console.log(error.response.data.message)

                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        timer: 3000,
                        confirmButtonColor: '#ff7400',
                    })

                })
            } catch (error) {
                console.log('try catch =>', error);
            }

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
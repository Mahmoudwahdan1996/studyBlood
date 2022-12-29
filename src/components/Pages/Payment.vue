<template>
    <div class="payment packages">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-4 col-12">
                    <router-link to="/packages">
                        <div class="form_back">
                            <span>
                                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                            </span>
                            <span>Back</span>
                        </div>
                    </router-link>
                    <div class="payment__package">
                        <span class="price">25$</span>
                        <h4>Acute Myeloid Leukemia</h4>
                        <div class="advantage">
                            <span>6 Months</span>
                            <span>Last Test Report</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-12">
                    <div class="packages__payment">
                        <div class="head flex-center">
                            <div class="icon_info">
                                <div class="icon active">
                                    <img src="@/assets/images/selection.svg" alt="pay img" />
                                </div>
                                <span>Package</span>
                            </div>

                            <div class="icon_info">
                                <div class="icon">
                                    <img src="@/assets/images/payment-card.svg" alt="pay img" />
                                </div>
                                <span>payment</span>
                            </div>
                        </div>

                        <form action="" class="pay">
                            <h3>
                                <span>Pay With </span>
                                <span class="cardWord">Card</span>
                            </h3>
                            <div class="form-group">
                                <label for="">E-Mail:</label>
                                <input type="text" placeholder="Hralryad@Gmail.Com">
                            </div>
                            <div class="form-group">
                                <label for="">Name On Card</label>
                                <input type="text" placeholder="Hralryad@Gmail.Com">
                            </div>
                            <div class="form-group position-relative">
                                <label for="">Card Information</label>
                                <div class="images">
                                    <img src="@/assets/images/Mastercard-logo.svg.png" alt="mastercard">
                                    <img src="@/assets/images/visa.png" alt="mastercard">
                                </div>
                                <input type="text" class="no-margin" placeholder="1234 1234 1234 1234">
                                <div class="row">
                                    <div class="col-6" style="padding-right:0">
                                        <input type="text" placeholder="MM/YY">
                                    </div>
                                    <div class="col-6" style="padding-left:0">
                                        <input type="text" placeholder="CVC">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="">COUNTRY :</label>
                                <v-select multiple maxHeight="40px" :options="options"></v-select>
                            </div>

                            <div class="form-group">
                                <button class="main--btn">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <img src="@/assets/images/ray.png" class="ray" alt="header img" />
    </div>
</template>

<script>

export default {
    name: "payment",

    data() {
        return {
            options: [
                'foo',
                'bar',
                'baz'
            ]

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
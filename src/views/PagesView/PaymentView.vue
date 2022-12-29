<template>
    <div class="">
        <Navbar />
        <Payment />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import Payment from '@/components/Pages/Payment.vue';
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
export default {
    name: "paymentView",
    components: { Payment, Navbar, Footer, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
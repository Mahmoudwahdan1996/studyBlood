<template>
    <div>
        <Navbar />
        <Score />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import Score from '@/components/Pages/Score.vue';

export default {
    name: "scoreView",
    components: { Score, Navbar, Footer, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
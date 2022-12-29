<template>
    <div>
        <Navbar />
        <CorrectExam />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import CorrectExam from '@/components/Pages/CorrectExam.vue';
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';

export default {
    name: "CorrectExamsView",
    components: { Navbar, Footer, CopyRightComponent, CorrectExam }
}
</script>

<style lang="scss" scoped>

</style>
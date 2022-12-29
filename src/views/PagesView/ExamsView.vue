<template>
    <div>
        <Navbar />
        <Exams />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import Exams from '@/components/Pages/Exams.vue';
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';

export default {
    name: "ExamsView",
    components: { Navbar, Footer, CopyRightComponent, Exams }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <Navbar />
        <McqRevision />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import McqRevision from '@/components/Pages/McqRevision.vue';
export default {
    name: "mcqRevisionView",
    components: { Navbar, Footer, CopyRightComponent, McqRevision }
}
</script>

<style lang="scss" scoped>

</style>
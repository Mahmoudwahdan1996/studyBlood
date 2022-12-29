<template>
    <div>
        <Navbar />
        <ResourcesPage />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import ResourcesPage from '@/components/Pages/ResourcesPage.vue';
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';

export default {
    name: "resourceView",
    components: { ResourcesPage, Navbar, Footer, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>
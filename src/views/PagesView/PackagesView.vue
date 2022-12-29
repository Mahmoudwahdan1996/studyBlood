<template>
    <div>
        <Navbar />
        <Packages />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>

import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import Packages from '@/components/Pages/Packages.vue';

export default {
    name: "packagesView",

    components: { Navbar, Footer, CopyRightComponent, Packages }
}
</script>

<style lang="scss" scoped>

</style>
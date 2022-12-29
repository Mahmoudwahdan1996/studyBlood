<template>
    <div>
        <Navbar />
        <Profile />
        <Footer />
        <CopyRightComponent />
    </div>
</template>

<script>
import CopyRightComponent from '@/components/Globals/CopyRightComponent.vue';
import Footer from '@/components/Globals/Footer.vue';
import Navbar from '@/components/Globals/Navbar.vue';
import Profile from '@/components/Pages/Profile.vue';

export default {
    name: "profileView",
    components: { Navbar, Footer, CopyRightComponent, Profile }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="homeView">
        <NavbarView />
        <HeaderView />
        <DoWork />
        <TopicsView />
        <FooterView />
        <CopyView />
    </div>
</template>

<script>
import NavbarView from './NavbarView.vue';
import HeaderView from './HeaderView.vue';
import TopicsView from '../PagesView/TopicsView.vue';
import FooterView from './FooterView.vue';
import CopyView from '../PagesView/CopyView.vue';
import DoWork from '@/components/Pages/DoWork.vue';

export default {
    name: "homeView",

    mounted() {
        window.scrollTo(0, 0)
    },
    components: { FooterView, TopicsView, HeaderView, NavbarView, CopyView, DoWork }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <NavbarView />
        <Work />
        <FooterView />
        <CopyView />
    </div>
</template>

<script>
import Work from "@/components/Pages/Work.vue";
import FooterView from "../GlobalView/FooterView.vue";
import NavbarView from "../GlobalView/NavbarView.vue";
import CopyView from "./CopyView.vue";

export default {
    name: "workView",
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "studyblood has provided quality online revision for medical exams since 2008 questions are written by practising doctors we have a strong ethos of only providing",
            },
        ],
    },
    components: { Work, NavbarView, FooterView, CopyView },
};
</script>

<style lang="scss" scoped></style>


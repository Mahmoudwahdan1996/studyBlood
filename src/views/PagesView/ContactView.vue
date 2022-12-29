<template>
    <div>
        <NavbarView />
        <Contact />
        <FooterView />
        <CopyView />
    </div>
</template>

<script>
import FooterView from "../GlobalView/FooterView.vue";
import NavbarView from "../GlobalView/NavbarView.vue";
import CopyView from "./CopyView.vue";
import Contact from "@/components/Pages/Contact.vue";
export default {
    name: "contactView",
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "studyblood has provided quality online revision for medical exams since 2008 questions are written by practising doctors we have a strong ethos of only providing",
            },
        ],
    },
    components: { Contact, NavbarView, FooterView, CopyView },
};
</script>

<style lang="scss" scoped></style>


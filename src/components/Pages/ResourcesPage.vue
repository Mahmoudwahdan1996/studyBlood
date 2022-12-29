<template>
    <div class="resources">
        <div class="container">
            <h3 class="main_head">Resources</h3>

            <p class="desc">amer.bugnah@hotmail.com, please select the resource you'd like to use</p>
            <div class="row justify-content-start align-items-start">

                <div class="col-lg-6 col-12">

                    <div class="resouces__content">
                        <div class="box">

                            <div class="info">
                                <h3>Mcq Part 1</h3>
                                <span>Expire : 7Th Jan 23</span>
                            </div>

                            <button class="main--btn">Go To The Test</button>

                        </div>

                        <div class="box">

                            <div class="info">
                                <h3>Mcq Part 2 Written</h3>
                                <span>Expire : 7Th Jan 23</span>
                            </div>

                            <button class="main--btn">Go To The Test</button>

                        </div>

                        <div class="box">

                            <div class="info">
                                <h3>Mrcp Part 2 Written</h3>
                                <span>Expire : 7Th Jan 23</span>
                            </div>

                            <button class="main--btn">Go To The Test</button>

                        </div>

                    </div>

                </div>

                <div class="col-lg-4">

                    <button class="main--btn add_package" v-b-toggle.collapse-1>
                        <font-awesome-icon icon="fa-solid fa-plus" />
                        <span>Add Package</span>
                    </button>

                    <b-collapse id="collapse-1" class="mt-2">
                        <p class="card-text">please select the type of resource you would like to add:</p>
                        <b-button v-b-toggle.collapse-1-inner class="button_collapse_two ">
                            <span>Applied Knowledge Test</span>
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </b-button>
                        <b-collapse id="collapse-1-inner" class="mt-2">
                            <b-card class="inner_collapse">

                                <label class="containercheck">
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>Cardiology</span>
                                    </div>
                                    <span class="red"></span>
                                </label>

                                <label class="containercheck">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>Cardiology</span>
                                    </div>
                                    <span class="red"></span>
                                </label>

                            </b-card>

                            <button class="main--btn add">Add</button>
                        </b-collapse>
                    </b-collapse>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "resources"
}
</script>

<style lang="scss" scoped>

</style>
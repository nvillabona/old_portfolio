<template>
    <div class="mb-4">
        <h5 class="ml-5">{{title}}</h5>
        <div class="row text-center justify-content-center">
            <b-col cols="3" sm="1" v-for="(item, index) in data" :key="index">
            <img v-b-tooltip.hover.top :title="item.title" :src="item.img_link" />
            </b-col>
        </div>

    </div>
</template>

<script>
export default {
  props: ["data", "title"],
};
</script>

<style>
</style>
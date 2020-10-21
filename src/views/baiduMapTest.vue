<template>
    <div>
        123
        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view" ak="your key">
        </baidu-map>
    </div>
</template>

<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    export default {
        data() {
            return {
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        components: {
            BaiduMap
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 116.404
                this.center.lat = 39.915
                this.zoom = 15
            }
        }
    }
</script>

<style>
    .bm-view {
        width: 100%;
        height: 300px;
    }
</style>

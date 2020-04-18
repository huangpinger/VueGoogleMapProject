<template>
    <div class="map-view-container">
        <div id="allmap"></div>
    </div>
</template>

<script>
    import google from 'google'
    export default {
        data() {
            return {
                maps: {},
            }
        },
        mounted() {
            this.initMaps()
        },
        methods: {
            initMaps() {
                this.maps = new google.maps.Map(document.getElementById("allmap"), {
                    zoom: 8,
                    //设置地图中心点
                    center: { lng: 107.3951, lat: 34.491 },
                    //为了关闭默认控件集,设置地图的disableDefaultUI的属性为true
                    disableDefaultUI: true,
                    // 启用缩放和平移
                    gestureHandling: "greedy",
                    // hybrid包含卫星和地名
                    mapTypeId: "hybrid",
                    //语言可选值：en，zh_en, zh_cn
                    language: "zh_cn"
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .map-view-container{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        #allmap{
            width: 300px;
            height: 300px;
        }
    }
</style>

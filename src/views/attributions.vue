<template>
    <div id="map" style="width: 100%; height: 500px;"></div>
</template>

<script>
    import 'ol/ol.css'
    import Map from 'ol/Map'
    import TileLayer from 'ol/layer/Tile'
    import OSM from 'ol/source/OSM'
    import View from 'ol/View'
    import { Attribution, defaults as defaultControls } from 'ol/control'
    export default {
        data() {
            return {
                map: null,
                attribution: null,
            }
        },
        mounted() {
            this.initAttr()
            this.init()
            this.checkSize()
            window.onresize = () => {
                this.checkSize()
            }
        },
        methods: {
            initAttr() {
                //显示在右下角的控件
                this.attribution = new Attribution({
                    collapsible: true,  //是否可折叠
                    collapsed: true,   //初始化是否折叠
                    tipLabel: '我是提示文本',
                    label: 'E',         // 默认i
                    collapseLabel: 'dd' //默认>>
                });

            },
            init() {
                this.map = new Map({
                    layers: [
                        new TileLayer({
                            source: new OSM()
                        })
                    ],
                    controls: defaultControls({
                        attribution: false
                    }).extend([this.attribution]),
                    target: 'map',
                    view: new View({
                        //center: [103.93817, 30.57634],
                        center: [30.57634, 103.93817],
                        zoom: 2
                    })
                })
            },
            checkSize() {
                let small = this.map.getSize()[0] < 600;
                this.attribution.setCollapsible(small);
                this.attribution.setCollapsed(small);
            }

        }
    }
</script>

<style scoped>

</style>

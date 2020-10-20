<template>
    <div>

        <div id="map" style="width: 100%; height: 500px;"></div>
    </div>
</template>

<script>
    import Map from 'ol/Map'
    import OSM from 'ol/source/OSM'
    import TitleLayer from 'ol/layer/Tile'
    import View from 'ol/View'
    import ImageLayer from 'ol/layer/Image'
    import Projection from 'ol/proj/Projection'
    import Static from 'ol/source/ImageStatic'
    import { getCenter } from 'ol/extent'

    let extent = [0, 0, 338, 600];
    let projection = new Projection({
        code: 'xkcd-image',
        units: "pixels",
        extent: extent
    })
    export default {
        data() {
            return {
                map: {},
            }
        },
        mounted() {
            this.initMap()
        },
        methods: {
            initMap() {
                new Map({
                    layers: [
                        new TitleLayer({
                            source: new OSM()
                        }),
                        // new ImageLayer({
                        //     source: new Static({
                        //         attributions: `© <a href="http://xkcd.com/license.html">xkcd</a>`,
                        //         url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1602660352&di=ebcd407f77492fa034a7c5ec1d075c20&src=http://a3.att.hudong.com/02/38/01300000237560123245382609951.jpg',
                        //         projection: projection,
                        //         imageExtent: extent
                        //     })
                        // })
                    ],
                    target: "map",
                    view: new View({
                        center: [0, 0],
                        zoom: 1
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="map-view-container">
        <div>
            <GmapMap
                    ref="mapRef"
                    :center="centerPostion"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 1200px; height: 800px"
                    @click="handleClick"
            >
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                maps: {},
                markers:[],
                centerPostion: {
                    lat: 30.67, lng: 104.07
                }
            }
        },
        mounted() {
        },
        methods: {
            handleClick(e) {
                this.$refs.mapRef.$mapPromise.then((map) => {
                    map.panTo(e.latLng)
                    this.markers.push(e.latLng)
                    console.log(this.markers)
                })
            },
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

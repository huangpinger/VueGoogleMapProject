<template>
    <div class="map-view-container">
        <div>
            <GmapMap
                    ref="mapRef"
                    :center="centerPostion"
                    :zoom="7"
                    map-type-id="roadmap"
                    @click="handleAddMarker"
                    @rightclick="handleClearMarker"
            >
            </GmapMap>
        </div>
        <el-button ref="changeColor" class="change-color" @click="handleChangeBackgroundColor">改变颜色</el-button>
    </div>
</template>

<script>
    import { map, cloneDeep, extend, flatten, compact, get } from 'lodash'
    export default {
        props: ['geometryList'],
        data() {
            return {
                maps: {},
                markers:[],
                centerPostion: {
                    lat: 30.67, lng: 104.07
                },
                markerList:[],
                fillColor: '#0000FF',
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                infoWindowPos: null,
                infoWinOpen: true,
                cacheMarkers: [],
            }
        },
        watch: {
            geometryList(val){
                this.handleDrawPolygon(val)
            }
        },
        mounted() {
            this.$refs.mapRef.$mapPromise.then((map) => {
                this.maps = map
                let centerControlDiv = this.$refs.changeColor.$el;
                map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
            })
        },
        methods: {
            handleDrawPolygon(val) {
                val.map(geometry => {
                    let coords = {}, coordinates = [];
                    if (geometry.geometry.type === 'MultiPolygon') {
                        coordinates = flatten(geometry.geometry.coordinates);
                    }else {
                        coordinates = geometry.geometry.coordinates;
                    }
                    coords = coordinates.map(coordinate => {
                        return compact(coordinate.map(position => {
                            let obj = {lat: position[1], lng: position[0]}
                            if (typeof get(obj, 'lat', '') == "number" && typeof get(obj, 'lng', '') == "number") {
                                return obj;
                            }else {
                                return null;
                            }
                        }))
                    })
                    this.maps.data.add({
                        geometry: new google.maps.Data.Polygon(coords)
                    });
                })
            },
            handleClearMarker(e) {
                if (this.markers.length <= 0) {
                    return
                }
                this.markers.push(this.markers[0])
                this.cacheMarkers = cloneDeep(this.markers);
                this.$refs.mapRef.$mapPromise.then((map) => {
                    let polylineOptions = {
                        path: this.markers,
                        geodesic: true, // 可测量的
                        strokeColor: "12", // 线条颜色 黑色
                        strokeWeight: 1, // 宽度 1像素
                        fillColor: this.fillColor,
                    };
                    let polygon = new google.maps.Polygon(polylineOptions);
                    polygon.setMap(map);
                    this.markers = []
                    for (var i = 0; i < this.markerList.length; i++) {
                        this.markerList[i].setMap(null);
                    }
                    this.$emit('clickMap', this.markers);
                });

            },
            handleAddMarker(e) {
                this.$refs.mapRef.$mapPromise.then((map) => {
                    this.placeMarker(map, e.latLng)
                    // map.panTo(e.latLng)
                    let lat = e.latLng.lat(), lng = e.latLng.lng()
                    this.markers.push({lat: lat, lng: lng})
                    this.$emit('clickMap', this.markers);
                })
            },
            placeMarker(map, location) {
                let marker = new google.maps.Marker({
                    position: location,
                    map: map,
                });
                this.markerList.push(marker);
                map.setCenter(location);
            },
            handleChangeBackgroundColor() {
                let color = '#D67373';
                let polylineOptions = {
                    path: this.cacheMarkers,
                    fillColor: color,
                };
                let polygon = new google.maps.Polygon(polylineOptions);
                polygon.setMap(this.maps);
            }
        },
    }
</script>

<style scoped lang="scss">
    .map-view-container{
        position: relative;
        .vue-map-container{
            height: 915px;
        }
        .change-color{
            margin-top: 10px;
        }
    }
</style>

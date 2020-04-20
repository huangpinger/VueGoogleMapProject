<template>
    <div class="main-page-container">
        <div>
            <div>
                <mapView @clickMap="handleSyncList" :geometry-list="geometryList"/>
            </div>
            <div>
                <markerList :marker-list="markerList" @syncParsedList="handleSyncParsedList" />
            </div>
        </div>
    </div>
</template>

<script>
    import mapView from '../components/mapView';
    import markerList from '../components/markerList'
    export default {
        data() {
            return {
                markerList: [],
                geometryList: [],
            }
        },
        methods: {
            handleSyncList(val) {
                this.markerList = val;
            },
            handleSyncParsedList(val) {
                this.geometryList = val
            }
        },
        components:{
            mapView,
            markerList
        }
    }
</script>

<style scoped lang="scss">
    .main-page-container{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        & > div {
            display: flex;
            flex-direction: row;
            height: 100%;
            & > div:first-child{
                flex-grow: 1;
            }
            & > div:last-child{
                width: 300px;
                flex-grow: 0;
                height: 100%;
                overflow-y: scroll;
            }
        }
    }
</style>

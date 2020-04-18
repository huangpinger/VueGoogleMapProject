<template>
    <div class="main-page-container">
        <div>
            <div>
                <mapView @clickMap="handleSyncList"/>
            </div>
            <div>
                <markerList :marker-list="markerList" />
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
                markerList: []
            }
        },
        methods: {
            handleSyncList(val) {
                this.markerList = val;
                console.log('ddd',val)
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
            & > div:first-child{
                flex-grow: 1;
            }
            & > div:last-child{
                width: 200px;
                flex-grow: 0;
            }
        }
    }
</style>

<template>
    <div class="marker-list-container">
        <el-card shadow="never">
            <div v-for="(item, index) in markerList"
                 :key="`${item.lat}${item.lat}${index}`">
                <label>经度${item.lng}</label>
                <label>纬度${item.lat}</label>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        props: {
            markerList: {
                type: Array,
                default: () => {
                    return []
                }
            },
        },
        data() {
            return {

            }
        },
        mounted() {
            console.log('list', this.markerList)
        },
    }
</script>

<style scoped lang="scss">
    .marker-list-container{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        .el-card__body{
            & > div{
                font-size: 12px;
                height: 30px;
                line-height: 30px;
            }
        }
    }
</style>

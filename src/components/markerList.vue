<template>
    <div class="marker-list-container">
        <el-upload
                drag
                :auto-upload=false
                action=""
                accept="shp"
                :limit="1"
                :show-file-list="false"
                :on-change="handleChange"
                :on-success="handleFinishUpload"
        >
            <i class="el-icon-upload"></i>

            <div class="el-upload__tip" slot="tip">必须是shp文件</div>
        </el-upload>
        <el-card shadow="never">
            <div v-for="(item, index) in markerList"
                 :key="`${item.lat}${item.lat}${index}`">
                <label>经度{{item.lng}}</label>
                <label>纬度{{item.lat}}</label>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {open} from 'shapefile'
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
                fileList: [],
                shpFile: {},
                geometryList: [],
            }
        },
        methods: {
            handleFinishUpload() {
                console.log('list#', this.geometryList);
            },
            handleChange(file) {
                this.shpFile=file;
                console.log('error', this.shpFile, file)
                const name=this.shpFile.name
                const extension=name.split('.')[1];
                let that = this;
                if('shp'!==extension){
                    // this.$alert('文件不是shp文件！请重新选择文件', {
                    //     confirmButtonText: '确定'
                    // })
                }else {
                    this.geometryList = [];
                    const reader=new FileReader()
                    const  fileData=this.shpFile.raw
                    reader.readAsArrayBuffer(fileData)
                    reader.onload = function(e){
                        open(this.result)
                            .then(source => source.read()
                                .then(function log(result) {
                                    if (result.done) {
                                        console.log('list#', that.geometryList)
                                        that.$emit('syncParsedList', that.geometryList);
                                        return
                                    };
                                    that.geometryList.push(result.value);
                                    return source.read().then(log);
                                }))
                            .catch(error => console.error(error.stack));
                    }
                }
            }
        },
        mounted() {
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
                & > label{
                    font-size: 12px;
                    height: 30px;
                    line-height: 30px;
                    display: block;
                }
                & > label:first-child{
                    color: #66b1ff;
                }
                & > label:last-child{
                    color: #D67373;
                }
            }
        }
    }
</style>

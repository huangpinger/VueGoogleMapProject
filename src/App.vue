<template>
    <div id="app">
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        methods: {
            test() {
                this.$axios({
                    url: 'http://127.0.0.1:24010/ZKIDROnline/ScanReadIdCardInfo?OP-DEV=1&CMD-URL=4&REPEAT=1&READTYPE=1',
                    method: 'get'
                }).then(res => {

                })
            }
        },
        beforeMount() {
            this.test()
        }
    }
</script>

<style scoped>

</style>

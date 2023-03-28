<template>
    <!-- <div>
        <el-container>
            <el-header>
                <Hearder/>
            </el-header>
            <el-container>
                <el-aside widt="200px" >
                    <AppMain/>
                </el-aside>
                <el-main>
                    <SliderBar/>
                </el-main>
            </el-container>
        </el-container>
    </div> -->
    <div class="app-wrapper">
		<div class="layout-aside" :class="{collapse:isCollapse}">
			<div class="layout-logo">
				<router-link to="/">
					<img src="@/assets/umeizn.png" alt="logo"/>
					<span v-show="!isCollapse">结构测试系统</span>
				</router-link>
			</div>
			<SliderBar :collapse="isCollapse" />
		</div>
		<div class="layout-container" :class="{collapse:isCollapse}">
			<div class="layout-header" :class="{collapse:isCollapse}">
				<Hearder/>
			</div>
			<div class="layout-main">
				<AppMain />
			</div>
		</div>
	</div>
</template>

<script>
    import Hearder from './components/head/Header.vue'
    import AppMain from './components/main/Main.vue'
    import SliderBar from './components/sliderBar/SliderBar.vue'
    export default {
        name: 'DemoAppLayout',
        components:{Hearder,AppMain,SliderBar},
        data() {
            return {
                isCollapse:false
            };
        },

        mounted() {
            
        },

        methods: {
            
        },
    };
</script>

<style lang="scss" scoped>
    .app-wrapper{
	    position:relative;
    }
    .layout-aside{
        position:fixed;
        left:0;
        top:0;
        height:100wh;
        width:200px;
        transition:all 0.3s;
        background-color:#ffffff;
        height: 100%;
        .layout-logo{
            height:60px;
            background-color:#00ccff;
            a{
                display:flex;
                width:100%;
                height:60px;
                justify-content:center;
                align-items:center;
            }
            img{
                width:50px;
                height:30px;
            }
            span{
                font-size:14px;
                line-height:60px;
                color:#0971b6;
                margin-left:12px;
            }
        }
    }
    .layout-aside.collapse{
        width:64px;
    }
    .layout-container{
        margin-left:210px;
        height:100%;
        overflow:hidden;
    }
    .layout-container.collapse{
        margin-left:64px;
        transition:all 0.1s;
    }
    .layout-header{
        position:fixed;
        z-index:1;
        top:0;
        right:0;
        width:calc(100% - 200px);
        height:60px;
        box-shadow:0 1px 3px rgba(0,21,41,0.08);
        background-color:#fff;
    }
    .layout-header.collapse{
        width:calc(100% - 64px);
        transition:all 0.1s;
    }
    .layout-main{
        min-height:calc(100vh - 100px);
        margin:70px 15px 10px 10px;
        background-color:#fff;
    }
</style>
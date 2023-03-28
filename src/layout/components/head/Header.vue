<template>
    <div class="header-wrapper">
		<div class="header-left">
			<div class="open-icon" @click="handleCollapse">
				<i class="el-icon-s-fold" v-show="!isMenuOpen"></i>
				<i class="el-icon-s-unfoldd" v-show="isMenuOpen"></i>
			</div>
			<el-breadcrumb separator="/">
				<template v-for="(item,index) in breadcrumbList">
					<el-breadcrumb-item :key="index" v-if="item.meta.title" :to="{path:item.path}">
					</el-breadcrumb-item>
				</template>
			</el-breadcrumb>
		</div>
		<div class="header-right">
			<span class="header-user">{{currentName}},欢迎回来</span>
			<el-dropdown  trigger="click">
				<span class="el-dropdown-line">
					<img src="@/assets/header.jpg" alt="avatar"/>
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-menu icon="el-icon-plus">修改密码</el-dropdown-menu>
					<el-dropdown-menu icon="el-icon-circle-plus" @click.native="handleLogout">退出登录</el-dropdown-menu>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';

    export default {
        name: 'DemoAppHeader',
        data() {
            return {
                isMenuOpen:false,
                breadcrumbList:[],
                currentName:'管理员'
            };
        },
        watch:{
			$route(to,from){
				this.updateBreadcrumb(to.matched);
			}
		},
		mounted(){
			// this.updateBreadcrumb(this.$route.matched);
			// this.handleChangeName();
		},
		methods:{
			...mapMutations(['changeCollapse']),
			updateBreadcrumb(list=[]){
				this.breadcrumbList = list;
			},
			handleChangeName(){
				applicationConfiguration().then(res=>{
					this.currentName = res.currentUser.userName;
				})
			},
			handleCollapse(){
				this.isMenuOpen= !this.isMenuOpen;
				this.$store.commit('changeCollapse',this.isMenuOpen);
			},
			handleLogout(){
				this.$confirm('确认退出?','提示',{
					confirmButtonTextt:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(()=>{
					logout();
					this.$router.push('/login');
				}).catch(()=>{})
			}
		}
    };
</script>

<style lang="scss" scoped>
    .header-wrapper{
        display:flex;
        justify-content:space-between;
        align-content:center;
        padding:0 15px;
        height:60px;
        .header-left{
            display:flex;
            align-items:center;
            .open-icon{
                font-size:20px;
                margin-right:15px;
                cursor:pointer;
            }
        }
        .header-right{
            display:flex;
            align-items:center;
            .header-user{
                margin-right:15px;
            }
        }
    }
    .el-dropdown-link{
        cursor:pointer;
        color:#409eff;
        img{
            width:40px;
            height:40px;
            border-radius:5px;
        }
    }
    .el-icon-arrow-down{
        font-size:12px;
    }
    .demostration{
        display:block;
        color:#8492a6;
        font-size:14px;
        margin-bottom:20px;
    }
	.el-dropdown-line img{
		width: 50px;
		height: 50px;
	}
</style>
<template>
<footer>
    <ul>
        <router-link to='/films' custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive? 'lqactive':''">
            <i class="iconfont icon-film"> </i>
                <span>电影</span>

        </li>
        </router-link>
        <router-link to='/cinemas' custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive? 'lqactive':''">
            <i class="iconfont icon-training"></i>
                <span>影院</span>
            </li>
        </router-link>
        <router-link to='/center' custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive? 'lqactive':''">
            <i class="iconfont icon-user-filling"></i>
                <span>我的</span>

            </li>
        </router-link>
    </ul>
</footer>
</template>

<style lang="scss" scoped>
footer{
position: fixed;
bottom: 0;
left:0;
width: 100%;
height:3.2778rem;
background:white;
z-index: 100;
ul{
    display: flex;
    li{
        flex:1;
        line-height: 1.6667rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        i{
            font-size: 15px;
        }
        span{
            font-size: 15px;
        }
    }

}

}
.lqactive{
    color:red;
}
</style>

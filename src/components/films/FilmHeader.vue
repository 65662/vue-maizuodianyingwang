<template>
    <ul>
         <router-link to='/films/nowplaying' custom v-slot="{navigate,isActive}">
        <li @click="navigate" >
            <span :class="isActive? 'lqactive':''">正在热映</span>
        </li>
        </router-link>
         <router-link to='/films/commingsoon' custom v-slot="{navigate,isActive}">
        <li @click="navigate" >
            <span :class="isActive? 'lqactive':''">即将上映</span>
        </li>
        </router-link>
    </ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    li{
        flex:1;
        text-align: center;
        }
}
.lqactive{
    color: red;
    padding: 4px;
    border-bottom: 3px solid red;
}
</style>

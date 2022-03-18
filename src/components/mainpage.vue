<template>
    <div>
        <h1>main page</h1>
        <!-- <button type="button" v-on:click="$router.push('/first-page')">go to 1st</button> -->
        <button type="button" v-on:click="$router.push({name: 'first-set'})">go to 1st</button><br>
        <button type="button" v-on:click="$router.push({name: 'second-set'})">go to 2st</button>

    </div>
</template>
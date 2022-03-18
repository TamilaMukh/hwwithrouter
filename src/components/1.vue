<template>
    <div>
        <h1>1 page</h1>
        <button type="button" v-on:click="$router.push({name: 'second-set'})">go to 2st</button><br>
        <button type="button" v-on:click="$router.push({name: 'back-to-main'})">go back</button>
    </div>
</template>
<template>
    <div>
        <h1>2 page</h1>
        <button type="button" v-on:click="$router.push({name: 'first-set'})">go to 1st</button><br>
        <button type="button" v-on:click="$router.push({name: 'back-to-main'})">go back</button>
    </div>
</template>
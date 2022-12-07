<template>
    <div class="lang">
        <nuxt-link :to="switchLocalePath('ar')" class="ar" v-if="$i18n.locale == 'en'">
            العربية</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')" class="en" v-if="$i18n.locale == 'ar'">
            English</nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
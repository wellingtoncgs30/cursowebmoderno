<template>
    <div class="footer">
        Copyright <strong>Cod3r</strong> © 2015-2018
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #333;

        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
    }
</style>
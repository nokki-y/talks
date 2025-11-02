<template>
    <div class="slidev-layout lm-cover-layout">
        <slot />
    </div>
</template>

<script setup>
</script>

<style>
.lm-cover-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.lm-cover-layout h1 {
    font-size: 80px;
    line-height: 1.2;
}

.lm-cover-layout * {
    font-size: 80px;
}
</style>

<template>
    <div class="slidev-layout lm-cover">
        <img src="./lm-cover/background.png" alt="background" class="lm-cover-bg" />

        <!-- 左上のロゴエリア -->
        <div class="lm-cover-logo">
            <img src="./lm-cover/logo.png" alt="logo" class="lm-cover-logo-image" />
        </div>

        <!-- 中央のコンテンツエリア -->
        <div class="lm-cover-content font-main">
            <div class="lm-cover-title">
                <slot name="title" />
            </div>

            <div class="lm-cover-subtitle">
                <slot name="subtitle" />
            </div>

            <div class="lm-cover-author">
                <slot name="author" />
            </div>
        </div>

        <!-- 左下のコピーライト -->
        <div class="lm-cover-footer">
            © Link and Motivation Group
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.lm-cover {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 60px 80px;
}

.lm-cover-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

/* 左上のロゴ */
.lm-cover-logo {
    position: absolute;
    top: 60px;
    left: 80px;
    z-index: 10;
    color: white;
}

.lm-logo-text {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 1;
    margin-bottom: 8px;
}

.lm-logo-subtext {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
}

/* 中央のコンテンツ */
.lm-cover-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 900px;
    margin-left: 100px;
}

.lm-cover-title {
    font-size: 64px;
    font-weight: bold;
    line-height: 1.4;
    color: white;
    margin-bottom: 40px;
    text-align: left;
}

.lm-cover-subtitle {
    font-size: 20px;
    line-height: 1.6;
    color: white;
    margin-bottom: 60px;
    text-align: left;
}

.lm-cover-author {
    font-size: 32px;
    font-weight: 500;
    color: white;
    text-align: left;
}

/* 左下のフッター */
.lm-cover-footer {
    position: absolute;
    bottom: 30px;
    left: 80px;
    z-index: 10;
    color: white;
    font-size: 12px;
}
</style>

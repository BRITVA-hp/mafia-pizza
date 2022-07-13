<template>
        <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__inner">
                    <picture class="header__logo">
                        <source srcset="../assets/img/header/header-logo-mobile.png" media="(max-width: 991px)">
                        <img src="../assets/img/header/header-logo.png" alt="header-logo">
                    </picture>
                    <div class="header__selection">
                        <div class="header__sity-delivery" data-city>Город доставки</div>
                        <span class="header__city">Апрелевка</span>
                    </div>
                    <div class="header__phone">
                        <a class="header__phone-link" href="tel:+79779337797">+7 (977) 933-77-97</a>
                        <div class="header__operating-time">С 10:00 до 23:00</div>
                    </div>
                </div>
                <button class="header__button">Корзина<span class="header__button-price">0</span></button>
                <div class="header__block">
                    <div class="header__mobile-inner">
                        <button data-city class="header__button-mobile">
                            <img src="../assets/icons/header/header-button-mobile.svg" alt="header-button-mobile">
                        </button>
                        <a href="tel:+79779337797" class=" header__mobile-icon">
                            <img src="../assets/icons/header/header-mobile-icon.svg" alt="header-mobile-icon">
                        </a>
                    </div>
                    <div class="humburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <button class="mobile-button">
            <img src="../assets/icons/button-card/mobile-button.png" alt="mobile-button">
            <div class="mobile-button__count">
                <span>3</span>
            </div>
        </button>
    </header>
    <!-- .header -->
</template>

<script>

export default {
    name: 'Header',
}

</script>
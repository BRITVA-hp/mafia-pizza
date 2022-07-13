<template>
    <main>
        <nav class="nav">
            <div class="container container__menu">
                <ul class="nav__menu">
                    <li class="nav__menu-item">
                        <a href="#">Новинки</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#pizza">Пицца</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#set">Сеты</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#burgers">Бургеры</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#combo">Комбо</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#">Десертные пироги</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#snacks">Закуски</a>
                    </li>
                    <li class="nav__menu-item">
                        <a href="#drinks">Напитки</a>
                    </li>
                </ul>
                <div class="nav__divider"></div>
                <div class="nav__city">
                    <div class="nav__city-text">Апрелевка</div>
                </div>
                <div class="nav__divider"></div>
                <div class="nav__contacts-title">Наши контакты</div>
                <a href="tel:+79779337797" class="nav__contacts-phone">+7 (977) 933-77-97</a>
                <div class="nav__contacts-work">С 10:00 до 23:00</div>
                <div class="nav__image-absolute">
                    <img src="../assets/img/modal/menu-image-absolute.png" alt="menu-image-absolute">
                </div>
                <div class="nav__image-icon">
                    <img src="../assets/img/modal/menu-image-icon.png" alt="menu-image-icon">
                </div>
                <div class="nav__close-icon">
                    <img src="../assets/icons/modal/menu-close-icon.svg" alt="menu-close-icon">
                </div>
            </div>
        </nav>
        <!-- .nav -->

        <div class="promo">
            <div class="promo__image-absolute">
                <img src="../assets/img/promo/promo-image-absolute.png" alt="promo-image-absolute">
            </div>
            <div class="container__wrap">
                <div class="container promo-slider swiper">
                    <div class="promo-slider__wrapper swiper-wrapper">
                        <div class="promo-slider__slide swiper-slide">
                            <picture class="promo-slider__image">
                                <source srcset="../assets/img/promo/11-mobile.png" media="(max-width: 350px)">
                                <img src="../assets/img/promo/1.jpg" alt="1">
                            </picture>
                        </div>
                        <div class="promo-slider__slide swiper-slide">
                            <picture class="promo-slider__image">
                                <source srcset="../assets/img/promo/2-mobile.jpg" media="(max-width: 350px)">
                                <img src="../assets/img/promo/2.jpg" alt="2">
                            </picture>
                        </div>
                        <div class="promo-slider__slide swiper-slide">
                            <picture class="promo-slider__image">
                                <source srcset="../assets/img/promo/3-mobile.jpg" media="(max-width: 350px)">
                                <img src="../assets/img/promo/3.jpg" alt="3">
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="swiper-navigation">
                    <img class="promo__arrow-prev" src="../assets/icons/icon-prev.svg">
                    <img class="promo__arrow-next" src="../assets/icons/icon-next.svg">
                </div>
            </div>
        </div>
        <!-- .promo -->

        <section class="slider">
            <div class="slider__inner">
                <div class="slider__image-absolute">
                    <picture>
                        <source srcset="../assets/img/slider/slider-image-absolute-mobile.png" media="(max-width: 576px)">
                        <img src="../assets/img/slider/slider-image-absolute.png" alt="slider-image-absolute">
                    </picture>
                </div>
                <div class="container sliders swiper">
                    <h4 class="slider__title">Часто заказывают</h4>
                    <div class="slider__items swiper-wrapper">
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-one.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-one.png" alt="slider-image-one">
                                </picture>
                                <div class="slider__item-text">
                                    Картошка фри <br>
                                    <span>99 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-two.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-two.png" alt="slider-image-two">
                                </picture>
                                <div class="slider__item-text">
                                    Пицца Мафиози <br>
                                    <span>от 480 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-three.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-three.png" alt="slider-image-three">
                                </picture>
                                <div class="slider__item-text">
                                    Пицца <br>
                                    Чёрная метка <br>
                                    <span>от 390 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-four.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-four.png" alt="slider-image-four">
                                </picture>
                                <div class="slider__item-text">
                                    Пицца Пепперони <br>
                                    <span>от 390 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-five.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-five.png" alt="slider-image-five">
                                </picture>
                                <div class="slider__item-text">
                                    Наггетсы <br>
                                    <span>160 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-six.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-six.png" alt="slider-image-six">
                                </picture>
                                <div class="slider__item-text">
                                    Cет Бонни и Клайд <br>
                                    <span>850 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-seven.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-seven.png" alt="slider-image-seven">
                                </picture>
                                <div class="slider__item-text">
                                    Cет Чикаго <br>
                                    <span>1100 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-eight.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-eight.png" alt="slider-image-one">
                                </picture>
                                <div class="slider__item-text">
                                    Пицца Мама мия <br>
                                    <span>От 530 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-nine.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-nine.png" alt="slider-image-one">
                                </picture>
                                <div class="slider__item-text">
                                    Пицца <br>
                                    Деревенская <br>
                                    <span>От 490 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="slider__item swiper-slide">
                            <div class="slider__item-wrapper">
                                <picture class="slider__image">
                                    <source srcset="../assets/img/slider/slider-mobile-ten.png" media="(max-width: 576px)">
                                    <img src="../assets/img/slider/slider-image-ten.png" alt="slider-image-one">
                                </picture>
                                <div class="slider__item-text">
                                    Картошка <br>
                                    по-деревенски <br>
                                    <span>99 ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-navigation">
                    <img class="slider__arrow-next" src="../assets/icons/icon-next.svg" alt="slider-arrow-next">
                    <img src="../assets/icons/icon-prev.svg" alt="slider-arrow-prev" class="slider__arrow-prev">
                </div>
            </div>
        </section>
        <!-- .slider -->

        <section id="pizza" class="pizza">
            <div class="pizza__absolute-mafia">
                <img src="../assets/img/pizza/pizza-absolute-mafia.png" alt="pizza-absolute-mafia">
            </div>
            <div class="pizza__absolute-bottom">
                <img src="../assets/img/pizza/pizza-absolute-before.png" alt="pizza-absolute-before">
            </div>
            <div class="pizza__absolute-right">
                <img src="../assets/img/pizza/pizza-absolute-after.png" alt="pizza-absolute-after">
            </div>
            <div class="pizza__cheeses-absolute">
                <img src="../assets/img/pizza/pizza-cheeses-absolute.png" alt="pizza-cheeses-absolute">
            </div>
            <div class="pizza__michigan-image">
                <img src="../assets/img/pizza/pizza-michigan-absolute.png" alt="pizza-michigan-absolute">
            </div>
            <div class="pizza__mafia-image">
                <img src="../assets/img/pizza/pizza-mafia-absolute.png" alt="pizza-mafia-absolute">
            </div>
            <div class="pizza__corleone-image">
                <img src="../assets/img/pizza/corleone-image-absolute.png" alt="corleone-image-absolute">
            </div>
            <div class="container">
                <h2 class="title title_mb75">Пицца</h2>
                <div class="pizza__wrapper">
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/mexican-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/mexican.png" alt="mexican">
                            </picture>
                            <h4 class="item-title item__title">Мексиканская</h4>
                            <p class="pizza-item__descr">
                                Соус томатный, соус кимчи, куриное филе, салями, перец болгарский, грибы шампиньоны, лук
                                красный,
                                орегано, сыр моцарелла, сыр паулина.
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/carbonara-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/carbonara.png" alt="carbonara">
                            </picture>
                            <h4 class="item-title item__title">КАРБОНАРА</h4>
                            <p class="pizza-item__descr">
                                Соус тар-тар, соус моцарелла, сыр паулина, бекон, яйцо куриное
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">420₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/juliet-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/juliet.png" alt="mexican">
                            </picture>
                            <h4 class="item-title item__title">ДЖУЛЬЕТА</h4>
                            <p class="pizza-item__descr">
                                Соус тар-тар, сыр моцарелла, сыр паулина, куриное филе, грибы шампиньоны, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">390₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/village-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/village.png" alt="village">
                            </picture>
                            <h4 class="item-title item__title">ДЕРЕВЕНСКАЯ</h4>
                            <p class="pizza-item__descr">
                                Соус горчичный, сыр моцарелла, сыр паулина, салями, бекон, огурцы маринованные, картофельные
                                дольки по-дерев., лук красный, соус барбекю, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item pizza-item__four-cheeses">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/four-cheeses-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/four-cheeses.png" alt="four-cheeses">
                            </picture>
                            <h4 class="item-title item__title">ЧЕТЫРЕ СЫРА</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, чеддер, сиртаки, гауда, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">390₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/black-label-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/black-label.png" alt="black-label">
                            </picture>
                            <h4 class="item-title item__title">ЧЕРНАЯ МЕТКА</h4>
                            <p class="pizza-item__descr">
                                Соус сливочный, сыр моцарелла, пепперони, бекон, шампиньоны, помидоры
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">390₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/tony-montana-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/tony-montana.png" alt="tony-montana">
                            </picture>
                            <h4 class="item-title item__title">ТОНИ МОНТАНА</h4>
                            <p class="pizza-item__descr">
                                Соус томатный, сыр моцарелла, колбаски охотничьи, говядина, шампиньоны, перец болгарский
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">520₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/sicilian-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/sicilian.png" alt="sicilian">
                            </picture>
                            <h4 class="item-title item__title">СИЦИЛИЙСКАЯ</h4>
                            <p class="pizza-item__descr">
                                Сливочный соус, моцарелла, курица, ананас, чеснок, орегано, сырный соус
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">480₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/russiano-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/russiano.png" alt="russiano">
                            </picture>
                            <h4 class="item-title item__title">РУССИАНО</h4>
                            <p class="pizza-item__descr">
                                Сливочный соус, моцарелла, чеснок, огурцы соленые, красный лук, зелень, орегано, колбаски
                                охотничьи, помидоры
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">480₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/pepperoni-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/pepperoni.png" alt="pepperoni">
                            </picture>
                            <h4 class="item-title item__title">ПЕППЕРОНИ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, пепперони, перец сладкий, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">390₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/sea-tony-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/sea-tony.png" alt="sea-tony">
                            </picture>
                            <h4 class="item-title item__title">МОРСКОЙ ТОНИ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, креветка, лосось, сыр сиртаки, маслины, помидоры,
                                орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">550₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item pizza-item__michigan">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/michigan-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/michigan.png" alt="michigan">
                            </picture>
                            <h4 class="item-title item__title">МИЧИГАН</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, бекон, моцарелла, говядина, соус барбекю, салями, сиртаки, красный
                                лук, перец халапенью
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">530₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item pizza-item__mafia">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/mafia-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/mafia.png" alt="mafia">
                            </picture>
                            <h4 class="item-title item__title">МАФИОЗИ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, пепперони, ветчина, куриные колбаски, шампиньоны, лук
                                красный, маслины, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">520₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/margaret-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/margaret.png" alt="margaret">
                            </picture>
                            <h4 class="item-title item__title">МАРГАРИТА</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, помидоры, сушеный базилик
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">300₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/mia-mom-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/mia-mom.png" alt="mia's-mom">
                            </picture>
                            <h4 class="item-title item__title">МАМА MIA</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, говядина, ветчина, курица, бекон, лук порей, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">530₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/lucky-luciano-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/lucky-luciano.png" alt="lucky-luciano">
                            </picture>
                            <h4 class="item-title item__title">ЛАКИ ЛУЧИАНО</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, курица, бекон, чеснок, помидор, шампиньоны, перец
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/consiglieri-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/consiglieri.png" alt="consiglieri">
                            </picture>
                            <h4 class="item-title item__title">КОНСИЛЬЕРИ</h4>
                            <p class="pizza-item__descr">
                                Соус сливочный, сыр моцарелла, ветчина, шампиньоны, бекон
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">530₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/california-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/california.png" alt="california">
                            </picture>
                            <h4 class="item-title item__title">КАЛИФОРНИЯ</h4>
                            <p class="pizza-item__descr">
                                Соус томатный, сыр моцарелла тертый, говядина, куриное филе, помидоры, маслины, перец
                                халапеньо
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">550₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/dyabola-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/dyabola.png" alt="dyabola">
                            </picture>
                            <h4 class="item-title item__title">ДЬЯБОЛА</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, ветчина, моцарелла, салями, огурец зеленый, помидоры, лук красный,
                                перец
                                халапенью, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">470₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/don-pizza-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/don-pizza.png" alt="don-pizza">
                            </picture>
                            <h4 class="item-title item__title">ДОН ПИЦЦА</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, мидии, моцарелла, креветка, кальмар, лосось, лимон, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">550₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item pizza-item__don-corleone">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/don-corleone-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/don-corleone.png" alt="don-corleone">
                            </picture>
                            <h4 class="item-title item__title">ДОН КОРЛЕОНЕ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, ветчина, моцарелла, пепперони, маслины, говядина, перец зеленый,
                                красный лук, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/joni-bbq-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/joni-bbq.png" alt="joni-bbq">
                            </picture>
                            <h4 class="item-title item__title">ДЖОНИ BBQ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, бекон, моцарелла, курица, соус барбекю
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/grand-carne-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/grand-carne.png" alt="grand-carne">
                            </picture>
                            <h4 class="item-title item__title">ГРАНД КАРНЕ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, бекон, моцарелла, говядина, курица, салями, перец зеленый, лук
                                красный,
                                орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">490₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/vegan-frankie-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/vegan-frankie.png" alt="vegan-frankie">
                            </picture>
                            <h4 class="item-title item__title">ВЕГАН ФРЕНКИ</h4>
                            <p class="pizza-item__descr">
                                Фирменный томатный соус, моцарелла, шампиньоны, помидоры, маслины, лук красный, перец
                                зеленый,
                                орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">390₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="pizza-item pizza-item--last">
                        <div>
                            <picture class="pizza-item__image">
                                <source srcset="../assets/img/pizza/al-capone-mobile.png" media="(max-width: 576px)">
                                <img class="pizza-item__image" src="../assets/img/pizza/al-capone.png" alt="al-capone">
                            </picture>
                            <h4 class="item-title item__title">АЛЬ КАПОНЕ</h4>
                            <p class="pizza-item__descr">
                                Соус сливочный, сыр моцарелла, помидоры, ветчина, куриное филе, маслины, орегано
                            </p>
                        </div>
                        <div>
                            <div class="pizza__inner">
                                <label class="checkbox-green">
                                    <input type="checkbox">
                                    <span class="checkbox-green-switch" data-label-on="40см" data-label-off="32см"></span>
                                </label>
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="pizza-item__inner">
                                <button class="button-card">
                                    <span>В корзину</span>
                                    <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                                </button>
                                <span class="pizza__price">785₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .pizza -->

        <section id="set" class="set">
            <div class="set__one-image">
                <img src="../assets/img/set/set-one-absolute.png" alt="set-one-absolute">
            </div>
            <div class="container">
                <h2 class="title title_mb75">Сеты</h2>
                <div class="set__wrapper">
                    <div class="set-item set-item__one">
                        <div>
                            <picture class="set-item__image">
                                <source srcset="../assets/img/set/set-1-mobile.png" media="(max-width: 576px)">
                                <img class="set-item__image" src="../assets/img/set/set-1.png" alt="set-1">
                            </picture>
                            <h4 class="item-title item__title">БОНИ И КЛАЙД</h4>
                            <p class="set-item__descr set-item__descr--first">
                                Джони BBQ, Лаки Лучано <br>
                                (32см)
                            </p>
                        </div>
                        <div>
                            <div class="set__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="set__price">850₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="set-item">
                        <div>
                            <picture class="set-item__image">
                                <source srcset="../assets/img/set/set-2-mobile.png" media="(max-width: 576px)">
                                <img class="set-item__image" src="../assets/img/set/set-2.png" alt="set-2">
                            </picture>
                            <h4 class="item-title item__title">ЧИКАГО</h4>
                            <p class="set-item__descr">
                                Пепперони, Аль Капоне, <br>
                                Четыре сыра <br>
                                (32см)
                            </p>
                        </div>
                        <div>
                            <div class="set__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="set__price">1100₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="set-item">
                        <div>
                            <picture class="set-item__image">
                                <source srcset="../assets/img/set/set-3-mobile.png" media="(max-width: 576px)">
                                <img class="set-item__image" src="../assets/img/set/set-3.png" alt="set-3">
                            </picture>
                            <h4 class="item-title item__title">ГРАНД</h4>
                            <p class="set-item__descr">
                                Маргарита, Морской Тони, Лаки <br> Лучано, Руссиано <br>
                                (32см)
                            </p>
                        </div>
                        <div>
                            <div class="set__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="set__price">1400₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="set-item">
                        <div>
                            <picture class="set-item__image">
                                <source srcset="../assets/img/set/set-4-mobile.png" media="(max-width: 576px)">
                                <img class="set-item__image" src="../assets/img/set/set-4.png" alt="set-4">
                            </picture>
                            <h4 class="item-title item__title">КОЗА НОСТРА</h4>
                            <p class="set-item__descr">
                                Гранд Карне, Джони BBQ, <br>
                                Дон Карлеоне <br>
                                (32см)
                            </p>
                        </div>
                        <div>
                            <div class="set__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="set__price">1230₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .set -->

        <section id="burgers" class="burgers">
            <div class="burgers__ben-image">
                <img src="../assets/img/burgers/burgers-image-right.png" alt="burgers-image-right">
            </div>
            <div class="burgers__royal-image">
                <img src="../assets/img/burgers/burgers-image-left.png" alt="burgers-image-left">
            </div>
            <div class="burgers__chicken-image">
                <img src="../assets/img/burgers/burgers-chicken-image.png" alt="burgers-chicken-image">
            </div>
            <div class="container">
                <h2 class="title title_mb75 title__absolute-burgers">Бургеры</h2>
                <div class="burgers__wrapper">
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/john-gotti-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/john-gotti.png" alt="john-gotti">
                            </picture>
                            <h4 class="item-title item__title">ДЖОН ГОТТИ</h4>
                            <p class="burgers-item__descr">
                                Котлета свиная, яйцо жареное, лук карамелизированный, соус дабл-бургер, огурец маринованный,
                                помидор, сыр чеддер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">249₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/mashroom-louis-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/mushroom-louis.png" alt="mushroom-louis">
                            </picture>
                            <h4 class="item-title item__title">ГРИБНОЙ ЛУИ</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья большая, двойной сыр чеддер, жареные шампиньоны, огурец маринованный,
                                помидор,
                                салат айсберг, соус гамбургер, соус горчичный
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">349₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/crazy-frank-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/crazy-frank.png" alt="crazy-frank">
                            </picture>
                            <h4 class="item-title item__title">БЕЗУМНЫЙ ФРЭНК</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья большая, сыр чеддер, шампиньоны жареные, помидор, карамелизированный лук,
                                салат
                                айсберг, соус гамбургер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">329₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/blackjack-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/blackjack.png" alt="blackjack">
                            </picture>
                            <h4 class="item-title item__title">БЛЭКДЖЕК</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья большая, сыр чеддер, помидор, огурец маринованный, салат айсберг, лук
                                красный,
                                лук карамелизированный, соус барбекю, соус дабл-бургер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">279₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item burgers-item__royal">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/royal-burger-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/royal-burger.png" alt="royal-burger">
                            </picture>
                            <h4 class="item-title item__title">РОЯЛЛ БУРГЕР</h4>
                            <p class="burgers-item__descr">
                                Котлета куриная двойная, огурец маринованный, помидор, соус томатный, соус барбекю, сыр
                                эмменталь
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">239₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/cheeseburger-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/cheeseburger.png" alt="cheeseburger">
                            </picture>
                            <h4 class="item-title item__title">ЧИЗБУРГЕР</h4>
                            <p class="burgers-item__descr">
                                Соус дабл-бургер, соус гамбургер, помидор, лук красный, сыр чеддер, котлета говяжья
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">109₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/cheese-mario-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/cheese-mario.png" alt="cheese-mario">
                            </picture>
                            <h4 class="item-title item__title">CЫРНЫЙ МАРИО</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья, двойной сыр чеддер, соус гамбургер, соус томатный, лук красный
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">239₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item burgers-item__ben">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/big-ben-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/big-ben.png" alt="big-ben">
                            </picture>
                            <h4 class="item-title item__title">БОЛЬШОЙ БЭН</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья большая, перец халапеньо, помидор свежий, соус гамбургер, салат айсберг,
                                соус
                                томатный, сыр чеддер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">249₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/uncle-sam-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/uncle-sam.png" alt="uncle-sam">
                            </picture>
                            <h4 class="item-title item__title">ДЯДЯ СЭМ</h4>
                            <p class="burgers-item__descr">
                                Котлета свиная, соус дабл-бургер, сыр эмменталь, помидор, лук красный, сыр чеддер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">149₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/spicy-burger-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/spicy-burger.png" alt="spicy-burger">
                            </picture>
                            <h4 class="item-title item__title">СПАЙСИ БУРГЕР</h4>
                            <p class="burgers-item__descr">
                                Соус спайси, помидор, огурец маринованный, лук красный, сыр чеддер, салат айсберг, котлета
                                говяжья большая.
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">269₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/well-fed-mike-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/well-fed-mike.png" alt="well-fed-mike">
                            </picture>
                            <h4 class="item-title item__title">СЫТЫЙ МАЙК</h4>
                            <p class="burgers-item__descr">
                                Бекон, котлета куриная, помидор, лук красный, огурец маринованный, соус тар-тар, салат
                                айсберг,
                                сыр эмменталь
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">299₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/mafburger-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/mafburger.png" alt="mafburger">
                            </picture>
                            <h4 class="item-title item__title">МАФБУРГЕР</h4>
                            <p class="burgers-item__descr">
                                Бекон, помидор, огурец маринованный, салат айсберг, соус томатный, соус дабл бургер, котлета
                                говяжья большая, сыр чеддер, лук красный
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">299₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/ronnie-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/burgers/ronnie.png" alt="ronnie">
                            </picture>
                            <h4 class="item-title item__title">РОННИ</h4>
                            <p class="burgers-item__descr">
                                Котлета говяжья, соус горчичный, соус томатный, майонез, огурец маринованный, помидор, лук
                                красный, сыр чеддер
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">109₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="burgers-item burgers-item__chicken">
                        <div>
                            <picture class="burgers-item__image">
                                <source srcset="../assets/img/burgers/cheekenburger-mobile.png" media="(max-width: 576px)">
                                <img class="burgers-item__image" src="../assets/img/burgers/chickenburger.png" alt="chickenburger">
                            </picture>
                            <h4 class="item-title item__title">ЧИКЕНБУРГЕР</h4>
                            <p class="burgers-item__descr">
                                Томатный соус, майонез, котлета куриная, огурцы маринованные, лук красный, сыр эмменталь,
                                помидор
                            </p>
                        </div>
                        <div>
                            <div class="burgers__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="burgers__price">99₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .burgers -->

        <section id="combo" class="combo">
            <div class="combo__image-right">
                <img src="../assets/img/combo/combo-image-right.png" alt="combo-image-right">
            </div>
            <div class="combo__one-image">
                <img src="../assets/img/combo/combo-image-left.png" alt="combo-image-left">
            </div>
            <div class="container">
                <h2 class="title title_mb75 title__absolute-combo">Комбо</h2>
                <div class="combo__wrapper">
                    <div class="combo-item combo-item__one">
                        <div>
                            <picture class="combo-item__image">
                                <source srcset="../assets/img/combo/combo-1-mobile.png" media="(max-width: 576px)">
                                <img class="combo-item__image" src="../assets/img/combo/combo-1.png" alt="combo-1">
                            </picture>
                            <h4 class="item-title item__title">КОМБО #1</h4>
                            <p class="combo-item__descr">
                                Чизбургер, сытый майк, <br>
                                картофель фри, <br>
                                2 морса Клюквенных по 0,5
                            </p>
                        </div>
                        <div>
                            <div class="combo__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="combo__price">549₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="combo-item">
                        <div>
                            <picture class="combo-item__image">
                                <source srcset="../assets/img/combo/combo-2-mobile.png" media="(max-width: 576px)">
                                <img class="combo-item__image" src="../assets/img/combo/combo-2.png" alt="combo-2">
                            </picture>
                            <h4 class="item-title item__title">КОМБО #2</h4>
                            <p class="combo-item__descr">
                                Дядя сэм, большой Бэн, <br>
                                наггетсы, 2 морса клубничных <br>
                                по 0,5
                            </p>
                        </div>
                        <div>
                            <div class="combo__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="combo__price">599₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="combo-item">
                        <div>
                            <picture class="combo-item__image">
                                <source srcset="../assets/img/combo/combo-3-mobile.png" media="(max-width: 576px)">
                                <img class="combo-item__image" src="../assets/img/combo/combo-3.png" alt="combo-3">
                            </picture>
                            <h4 class="item-title item__title">КОМБО #3</h4>
                            <p class="combo-item__descr">
                                Блэк джек, мафбургер, <br>
                                картошка по-деревенски, <br>
                                2 морса: клубничный 0,5 и клюквенный 0,5
                            </p>
                        </div>
                        <div>
                            <div class="combo__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="combo__price">679₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .combo -->

        <section id="snacks" class="snacks">
            <div class="snacks__image-right">
                <img src="../assets/img/snacks/snacks-image-right.png" alt="snacks-image-right">
            </div>
            <div class="snacks__image-middle">
                <img src="../assets/img/snacks/snacks-image-middle.png" alt="snacks-image-middle">
            </div>
            <div class="snacks__image-bottom">
                <img src="../assets/img/snacks/snacks-image-bottom.png" alt="snacks-image-bottom">
            </div>
            <div class="container">
                <h2 class="title title_mb75 title__absolute-snacks">ЗАКУСКИ</h2>
                <div class="snacks__wrapper">
                    <div class="snacks-item">
                        <div>
                            <picture class="snacks-item__image">
                                <source srcset="../assets/img/snacks/squid-mobile.png" media="(max-width: 576px)">
                                <img class="snacks-item__image" src="../assets/img/snacks/squid.png" alt="squid">
                            </picture>
                            <h4 class="item-title item__title">КАЛЬМАР ТЕМПУРА</h4>
                            <p class="snacks-item__descr">
                                Кальмары, панировка
                            </p>
                        </div>
                        <div>
                            <div class="snacks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="snacks__price">210₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="snacks-item">
                        <div>
                            <picture class="snacks-item__image">
                                <source srcset="../assets/img/snacks/rustic-potatoes-mobile.png" media="(max-width: 576px)">
                                <img class="snacks-item__image" src="../assets/img/snacks/rustic-potatoes.png"
                                    alt="rustic-potatoes">
                            </picture>
                            <h4 class="item-title item__title">КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ</h4>
                            <p class="snacks-item__descr">
                                Картофель
                            </p>
                        </div>
                        <div>
                            <div class="snacks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="snacks__price">99₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="snacks-item">
                        <div>
                            <picture class="snacks-item__image">
                                <source srcset="../assets/img/snacks/shrimp-mobile.png" media="(max-width: 576px)">
                                <img src="../assets/img/snacks/shrimp.png" alt="shrimp">
                            </picture>
                            <h4 class="item-title item__title">КРЕВЕТКИ ТЕМПУРА</h4>
                            <p class="snacks-item__descr">
                                Креветки, панировка
                            </p>
                        </div>
                        <div>
                            <div class="snacks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="snacks__price">300₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="snacks-item">
                        <div>
                            <picture class="snacks-item__image">
                                <source srcset="../assets/img/snacks/french-fries-mobile.png" media="(max-width: 576px)">
                                <img class="snacks-item__image" src="../assets/img/snacks/french-fries.png" alt="french-fries">
                            </picture>
                            <h4 class="item-title item__title">КАРТОФЕЛЬ ФРИ</h4>
                            <p class="snacks-item__descr">
                                Картофель
                            </p>
                        </div>
                        <div>
                            <div class="snacks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="snacks__price">99₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="snacks-item">
                        <div>
                            <picture class="snacks-item__image">
                                <source srcset="../assets/img/snacks/nuggets-mobile.png" media="(max-width: 576px)">
                                <img class="snacks-item__image" src="../assets/img/snacks/nuggets.png" alt="nuggets">
                            </picture>
                            <h4 class="item-title item__title">КУРИНЫЕ НАГГЕТСЫ</h4>
                            <p class="snacks-item__descr">
                                Курица, панировка
                            </p>
                        </div>
                        <div>
                            <div class="snacks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="snacks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .snaks -->

        <section id="drinks" class="drinks">
            <div class="drinks__image-right">
                <img src="../assets/img/drinks/drinks-image-absolute.png" alt="drinks-image-absolute">
            </div>
            <div class="drinks__image-one">
                <img src="../assets/img/drinks/drinks-image-left.png" alt="drinks-image-left">
            </div>
            <div class="drinks__strawberry-image">
                <img src="../assets/img/drinks/drinks-strawberry-right.png" alt="drinks-strawberry-right">
            </div>
            <div class="container">
                <h2 class="title title_mb75 title__absolute-drinks">НАПИТКИ</h2>
                <div class="drinks__wrapper">
                    <div class="drinks-item drinks-item__one">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/pepsi-cola-500-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/pepsi-cola-500.png" alt="pepsi-cola-500">
                        </picture>
                        <h4 class="item-title item__title">Pepsi - Cola</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,5 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/pepsi-cola-1000-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/pepsi-cola-1000.png" alt="pepsi-cola-1000">
                        </picture>
                        <h4 class="item-title item__title">Pepsi - Cola</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">1 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <div>
                            <picture class="drinks-item__image">
                                <source srcset="../assets/img/drinks/aqua-minerale-mobile.png" media="(max-width: 576px)">
                                <img class="drinks-item__image" src="../assets/img/drinks/aqua-minerale.png" alt="aqua-minerale">
                            </picture>
                            <h4 class="item-title item__title">Aqua Minerale</h4>
                            <p class="drinks-item__descr">
                                В ассортименте
                            </p>
                            <div class="drinks__volume">
                                <div class="drinks__volume-text">0,5 л</div>
                            </div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/mirinda-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/mirinda.png" alt="mirinda">
                        </picture>
                        <h4 class="item-title item__title">Mirinda</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,5 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/7up-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/7up.png" alt="7up">
                        </picture>
                        <h4 class="item-title item__title">7up</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,5 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/adrenaline-rush-250-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/adrenaline-rush-250.png"
                                alt="adrenaline-rush-250">
                        </picture>
                        <h4 class="item-title item__title">Adrenaline Rush</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,25 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/adrenaline-rush-449-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/adrenalin-rush-449.png"
                                alt="adrenalin-rush-449">
                        </picture>
                        <h4 class="item-title item__title">Adrenaline Rush</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,449 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <div>
                            <picture class="drinks-item__image">
                                <source srcset="../assets/img/drinks/lipton-mobile.png" media="(max-width: 576px)">
                                <img class="drinks-item__image" src="../assets/img/drinks/lipton.png" alt="lipton">
                            </picture>
                            <h4 class="item-title item__title">Чай Lipton</h4>
                            <p class="drinks-item__descr">
                                В ассортименте
                            </p>
                            <div class="drinks__volume">
                                <div class="drinks__volume-text">0,5 л</div>
                            </div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/cranberry-juice-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/cranberry-juice.png" alt="cranberry-juice">
                        </picture>
                        <h4 class="item-title item__title">Морс клюквенный</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,5 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="drinks-item drinks-item__strawberry">
                        <picture class="drinks-item__image">
                            <source srcset="../assets/img/drinks/strawberry-juice-mobile.png" media="(max-width: 576px)">
                            <img class="drinks-item__image" src="../assets/img/drinks/strawberry-juice.png" alt="strawberry-juice">
                        </picture>
                        <h4 class="item-title item__title">Морс клубничный</h4>
                        <div class="drinks__volume">
                            <div class="drinks__volume-text">0,5 л</div>
                        </div>
                        <div>
                            <div class="drinks__inner">
                                <div class="items counter__wrapper">
                                    <div class="items__control items__control-minus" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control items__control-plus" data-action="plus">+</div>
                                </div>
                                <span class="drinks__price">160₽</span>
                            </div>
                            <button class="button-card">
                                <span>В корзину</span>
                                <img src="../assets/icons/button-card/button-card-icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- .drinks -->
    </main>
</template>

<script>

export default {
    name: 'Main',
}

</script>
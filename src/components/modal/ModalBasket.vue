<template>
    <div class="overlay overlay-basket">
        <div class="modal-basket">
            <div class="modal-basket__close" data-closesd-basket>
                <img src="../../assets/icons/modal/modal-closesd.svg" alt="modal-closesd">
            </div>
            <button class="modal-registration__mobile-back" data-closesd-basket>
                Вернуться на главную
                <img class="modal-registration__back-arrow" src="../../assets/icons/modal/mobile-back-arrow.svg"
                    alt="mobile-back-arrow">
            </button>
            <h3 class="modal-basket__title">Ваша корзина</h3>
            <p class="modal-basket__descr">В корзине 3 товара</p>
            <div class="modal-basket__product">
                <picture class="modal-basket__image">
                    <source srcset="../../assets/img/modal/basket-1-mobile.png" media="(max-width: 576px)">
                    <img src="../../assets/img/modal/modal-basket-1.png" alt="modal-basket-1">
                </picture>
                <div class="modal-basket__name">
                    <div class="modal-basket__name-title">Чёрная метка</div>
                    <p class="modal-basket__name-text">32 см</p>
                </div>
                <div class="modal-basket__items items counter__wrapper">
                    <div class="items__control items__control-minus" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control items__control-plus" data-action="plus">+</div>
                </div>
                <div class="modal-basket__price">390 ₽</div>
                <img src="../../assets/icons/modal/modal-basket-delete.svg" alt="modal-basket-delete" class="modal-basket__delete">
            </div>
            <div class="modal-basket__product">
                <picture class="modal-basket__image">
                    <source srcset="../../assets/img/modal/basket-2-mobile.png" media="(max-width: 576px)">
                    <img src="../../assets/img/modal/modal-basket-2.png" alt="modal-basket-2">
                </picture>
                <div class="modal-basket__name">
                    <div class="modal-basket__name-title">Мафиози</div>
                    <p class="modal-basket__name-text">40 см</p>
                </div>
                <div class="modal-basket__items modal-basket__items--two items counter__wrapper">
                    <div class="items__control items__control-minus" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control items__control-plus" data-action="plus">+</div>
                </div>
                <div class="modal-basket__price">620 ₽</div>
                <img src="../../assets/icons/modal/modal-basket-delete.svg" alt="modal-basket-delete" class="modal-basket__delete">
            </div>
            <div class="modal-basket__product">
                <picture class="modal-basket__image">
                    <source srcset="../../assets/img/modal/basket-3-mobile.png" media="(max-width: 576px)">
                    <img src="../../assets/img/modal/modal-basket-3.png" alt="modal-basket-3">
                </picture>
                <div class="modal-basket__name">
                    <div class="modal-basket__name-title">Картошка фри</div>
                </div>
                <div class="modal-basket__items modal-basket__items--three items counter__wrapper">
                    <div class="items__control items__control-minus" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control items__control-plus" data-action="plus">+</div>
                </div>
                <div class="modal-basket__price">99 ₽</div>
                <img src="../../assets/icons/modal/modal-basket-delete.svg" alt="modal-basket-delete" class="modal-basket__delete">
            </div>
            <div class="modal-basket__inner">
                <button data-closesd-basket class="modal-basket__button">Перейти к оформлению заказа</button>
                <div class="modal-basket__block">
                    <div class="modal-basket__block-text">Сумма заказа</div>
                    <div class="modal-basket__block-price">1109,00 ₽</div>
                </div>
            </div>
        </div>
    </div>
</template>
<template>
    <div class="overlay">
        <div class="modal-registration">
            <div class="modal-registration__close" data-closesd>
                <img src="../../assets/icons/modal/modal-closesd.svg" alt="modal-closesd">
            </div>
            <button class="modal-registration__mobile-back" data-closesd>
                Вернуться на главную
                <img class="modal-registration__back-arrow" src="../../assets/icons/modal/mobile-back-arrow.svg"
                    alt="mobile-back-arrow">
            </button>
            <h3 class="modal-registration__title">Оформление заказа</h3>
            <ul class="modal-registration__tabs">
                <li class="modal-registration__tab active">Доставка</li>
                <li class="modal-registration__tab">Самовывоз</li>
            </ul>
            <div class="modal-registration__divider"></div>
            <div class="modal-registration__content">
                <div class="modal-registration__inner">
                    <div class="modal-registration__data">
                        <div class="modal-registration__content-address">
                            <img src="../../assets/icons//modal/modal-icon-address.svg" alt="modal-icon-address">
                            Укажите адрес доставки
                        </div>
                        <form action="#" class="modal-registration__form">
                            <div class="modal-registration__input-row">
                                <div class="wrap">
                                    <input class="modal-registration__form-input modal-registration__input" type="text"
                                        placeholder="Улица">
                                    <input class="modal-registration__form-input modal-registration__input-small"
                                        type="text" placeholder="Дом №">
                                    <input class="modal-registration__form-input modal-registration__input-flat"
                                        type="text" placeholder="Квартира">
                                    <input class="modal-registration__form-input modal-registration__input-entrance"
                                        type="text" placeholder="Подъезд">
                                    <input class="modal-registration__form-input modal-registration__input-code"
                                        type="text" placeholder="Код двери">
                                    <input class="modal-registration__form-input modal-registration__input-floor"
                                        type="text" placeholder="Этаж">
                                </div>
                                <div class="modal-registration__item">
                                    <div class="modal-registration__item-clock">Время доставки</div>
                                    <img src="../../assets/icons/modal/modal-icon-clock.svg" alt="modal-icon-clock">
                                </div>
                                <div class="wrap">
                                    <label class="custom-input modal-registration__choice" for="val1">
                                        <input type="radio" name="demo" id="val1" value="val1" checked>
                                        <div class="custom-radio"></div>
                                        09.00 - 12.00
                                    </label>

                                    <label class="custom-input modal-registration__choice" for="val2">
                                        <input type="radio" name="demo" id="val2" value="val2">
                                        <div class="custom-radio"></div>
                                        12.00 - 15.00
                                    </label>

                                    <label class="custom-input modal-registration__choice" for="val3">
                                        <input type="radio" name="demo" id="val3" value="val3">
                                        <div class="custom-radio"></div>
                                        15.00 - 19.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val4">
                                        <input type="radio" name="demo" id="val4" value="val4">
                                        <div class="custom-radio"></div>
                                        19.00 - 23.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val5">
                                        <input type="radio" name="demo" id="val5" value="val5">
                                        <div class="custom-radio"></div>
                                        Как можно быстрее
                                    </label>
                                </div>
                            </div>
                            <div class="modal-registration__content-сomment">
                                <img src="../../assets/icons//modal/modal-icon-comment.svg" alt="modal-icon-address">
                                Напишите при необходимости комментарий
                            </div>
                            <textarea class="modal-registration__textarea"></textarea>
                            <div class="modal-registration__buttons">
                                <button class="modal-registration__button-back">Назад в корзину</button>
                                <button class="modal-registration__button-order">Оформить заказ на 1109 ₽</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-registration__way">
                        <div class="modal-registration__content-way">
                            <img src="../../assets/icons/modal/pay-icon.svg" alt="modal-icon-address">
                            Выберите способ оплаты
                        </div>
                        <form action="#" class="modal-registration__form modal-registration__form-two">
                            <label class="custom-input modal-registration__way-payment" for="contactChoice6">
                                <div class="modal-registration__way-block">
                                    Онлайн на сайте
                                    <div class="modal-registration__way-icons">
                                        <img src="../../assets/icons/modal/icon-viza.svg" alt="icon-viza">
                                        <img src="../../assets/icons/modal/icon-mastercard.svg" alt="icon-mastercard">
                                        <img src="../../assets/icons/modal/icon-qiwi.svg" alt="icon-qiwi">
                                        <img src="../../assets/icons/modal/icon-sber.svg" alt="icon-sber">
                                    </div>
                                </div>
                                <input type="radio" id="contactChoice6" name="demo" value="val6">
                                <div class="custom-radio"></div>
                            </label>
                            <input class="modal-registration__input-number" type="text" placeholder="Номер карты">
                            <input type="text" class="modal-registration__input-term" placeholder="Срок действия">
                            <input type="text" class="modal-registration__input-cvc" placeholder="CVC">
                            <p class="modal-registration__form-descr">
                                Платеж безопасен. Мы не храним данные карт, все операции проводит CloudPayments -
                                платежная система, сертифицированная по международному стандарту безопасности PCI
                                DSS.
                            </p>
                            <label class="custom-input modal-registration__choice modal-registration__choice-one"
                                for="contactChoice7">
                                <input type="radio" id="contactChoice7" name="demo" value="val7">
                                <div class="custom-radio"></div>
                                Оплатой картой курьеру
                            </label>
                            <label class="custom-input modal-registration__choice modal-registration__choice-one"
                                for="contactChoice8">
                                <input type="radio" id="contactChoice8" name="demo" value="val8">
                                <div class="custom-radio"></div>
                                Наличными
                            </label>
                        </form>
                        <form action="#">
                            <label
                                class="custom-input modal-registration__choice modal-registration__choice-small modal-registration__choice-three"
                                for="contactChoice9">
                                <input type="radio" id="contactChoice9" name="demo" value="val9">
                                <div class="custom-radio"></div>
                                Сдача с 1000 ₽
                            </label>
                            <label
                                class="custom-input modal-registration__choice modal-registration__choice-small modal-registration__choice-three"
                                for="contactChoice10">
                                <input type="radio" id="contactChoice10" name="demo" value="val10">
                                <div class="custom-radio"></div>
                                Без сдачи
                            </label>
                        </form>
                        <div class="modal-registration__buttons-mobile">
                            <button class="modal-registration__back-mobile">Назад в корзину</button>
                            <button class="modal-registration__order-mobile">Оформить заказ на 1109 ₽</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-registration__content">
                <div class="modal-registration__inner">
                    <div class="modal-registration__data">
                        <div class="modal-registration__content-address">
                            <img src="../../assets/icons//modal/modal-icon-address.svg" alt="modal-icon-address">
                            Укажите адрес ресторана
                        </div>
                        <form action="#" class="modal-registration__form">
                            <div class="modal-registration__input-row">
                                <div class="wrap">
                                    <input class="modal-registration__form-input modal-registration__input" type="text"
                                        placeholder="Улица">
                                    <input class="modal-registration__form-input modal-registration__input-small"
                                        type="text" placeholder="Дом №">
                                    <div class="modal-registration__item">
                                        <div class="modal-registration__item-clock">Время самовывоза</div>
                                        <img src="../../assets/icons/modal/modal-icon-clock.svg" alt="modal-icon-clock">
                                    </div>
                                </div>
                                <div class="wrap">
                                    <label class="custom-input modal-registration__choice" for="val11">
                                        <input type="radio" name="demo" id="val1" value="val11" checked>
                                        <div class="custom-radio"></div>
                                        09.00 - 12.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val12">
                                        <input type="radio" name="demo" id="val12" value="val12">
                                        <div class="custom-radio"></div>
                                        12.00 - 15.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val13">
                                        <input type="radio" name="demo" id="val13" value="val13">
                                        <div class="custom-radio"></div>
                                        15.00 - 19.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val14">
                                        <input type="radio" name="demo" id="val14" value="val14">
                                        <div class="custom-radio"></div>
                                        19.00 - 23.00
                                    </label>
                                    <label class="custom-input modal-registration__choice" for="val15">
                                        <input type="radio" name="demo" id="val15" value="val15">
                                        <div class="custom-radio"></div>
                                        Как можно быстрее
                                    </label>
                                </div>
                            </div>
                            <div class="modal-registration__content-сomment">
                                <img src="../../assets/icons//modal/modal-icon-comment.svg" alt="modal-icon-address">
                                Напишите при необходимости комментарий
                            </div>
                            <textarea class="modal-registration__textarea"></textarea>
                            <div class="modal-registration__buttons">
                                <button class="modal-registration__button-back">Назад в корзину</button>
                                <button class="modal-registration__button-order">Оформить заказ на 1109 ₽</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-registration__way">
                        <div class="modal-registration__content-way">
                            <img src="../../assets/icons/modal/pay-icon.svg" alt="modal-icon-address">
                            Выберите способ оплаты
                        </div>
                        <form action="#" class="modal-registration__form">
                            <label class="custom-input modal-registration__way-payment" for="contactChoice16">
                                <div class="modal-registration__way-block">
                                    Онлайн на сайте
                                    <div class="modal-registration__way-icons">
                                        <img src="../../assets/icons/modal/icon-viza.svg" alt="icon-viza">
                                        <img src="../../assets/icons/modal/icon-mastercard.svg" alt="icon-mastercard">
                                        <img src="../../assets/icons/modal/icon-qiwi.svg" alt="icon-qiwi">
                                        <img src="../../assets/icons/modal/icon-sber.svg" alt="icon-sber">
                                    </div>
                                </div>
                                <input type="radio" id="contactChoice16" name="demo" value="val16">
                                <div class="custom-radio"></div>
                            </label>
                            <input class="modal-registration__input-number" type="text" placeholder="Номер карты">
                            <input type="text" class="modal-registration__input-term" placeholder="Срок действия">
                            <input type="text" class="modal-registration__input-cvc" placeholder="CVC">
                            <p class="modal-registration__form-descr">
                                Платеж безопасен. Мы не храним данные карт, все операции проводит CloudPayments -
                                платежная система, сертифицированная по международному стандарту безопасности PCI
                                DSS.
                            </p>
                            <label class="custom-input modal-registration__choice" for="contactChoice17">
                                <input type="radio" id="contactChoice17" name="demo" value="val17">
                                <div class="custom-radio"></div>
                                Наличными
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
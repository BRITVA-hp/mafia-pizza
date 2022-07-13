<template>
    <div class="overlay">
        <div class="modal-empty">
            <div class="modal-empty__close" data-closesd>
                <img src="../../assets/icons/modal/modal-closesd.svg" alt="modal-closesd">
            </div>
            <button class="modal-registration__mobile-back" data-closesd>
                Вернуться на главную
                <img class="modal-registration__back-arrow" src="../../assets/icons/modal/mobile-back-arrow.svg"
                    alt="mobile-back-arrow">
            </button>
            <div class="modal-empty__content">
                <h3 class="modal-empty__title">Ой, пусто!</h3>
                <p class="modal-empty__descr">
                    Ваша корзина пуста. <br>
                    Выберите “Меню” и добавьте понравившийся товар
                </p>
                <img src="../../assets/img/modal/modal-empty-image.png" alt="modal-empty-image" class="modal-empty__image">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ModalEmpty'
}

</script>

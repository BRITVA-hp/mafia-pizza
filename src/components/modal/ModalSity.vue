<template>
    <div class="overlay-sity hide">
        <div class="modal-sity">
            <div class="modal-sity__close">
                <img data-close src="../../assets/icons/modal/modal-close.svg" alt="modal-close">
            </div>
            <div class="modal-sity__title">
                Выберите город доставки
            </div>
            <div class="modal-sity__divider"></div>
            <ul class="modal-sity__sity-menu">
                <li class="modal-sity__sity-item modal-sity__sity-item--active">Апрелевка</li>
                <li class="modal-sity__sity-item">Балабанова</li>
                <li class="modal-sity__sity-item">Малоярославец</li>
                <li class="modal-sity__sity-item">Жуков</li>
            </ul>
        </div>
        <!-- /.modal -->
    </div>
</template>

<script>

export default {
    name: 'ModalSity',
}

</script>
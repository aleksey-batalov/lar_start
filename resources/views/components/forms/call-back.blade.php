<div class="popup">
    <div class="popup__title">Добрый день!</div>
    <div class="popup__title-descr">Спасибо за обращение. Перезвоним в ближайшее время.</div>

    <form class="popup__form check" method="POST" action="/send" >

        @csrf

        <div class="popup__inputs">
            <x-forms-items.input name="title" type="hidden" value="callback"/>
            <x-forms-items.input title="* Ваше Имя:" class="input" name="first-name" type="text" value="Не заполнено"/>
            <x-forms-items.input title="* Ваш телефон:" class="input phone-mask" name="tel" type="text" value="Не заполнено"/>

            <x-forms-items.input class="submit-btn input" name="submit" type="submit" value="Отправить"/>
        </div>

        <div class="check-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-check"/>
            <label class="checkline" for="checkbox-check"></label>
            <p>Настоящим я принимаю <a id="agreement" class="agreement modal modal-second" target="_blank" href="#">Пользовательское соглашение о&nbsp;конфиденциальности</a></p>
        </div>

    </form>
</div>



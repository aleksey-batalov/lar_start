<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item has-treeview"> {{--menu-open--}}
            <a href="#" class="nav-link"> {{--active--}}
                <i class="nav-icon fas fa-columns"></i>
                <p>
                    Страницы сайта
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="far nav-icon"></i>
                        <p>Список страниц</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="far nav-icon"></i>
                        <p>Добавить страницу</p>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item has-treeview"> {{--menu-open--}}
            <a href="#" class="nav-link"> {{--active--}}
                <i class="nav-icon fas fa-exclamation-circle"></i>
                <p>
                    Настройки сайта
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="far nav-icon"></i>
                        <p>Редактировать</p>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>

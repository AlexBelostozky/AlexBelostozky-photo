<template>
	<header class="header">
    <div class="container">
      <div class="header__container">
        <img class="header__logo" src="img/logo.png" width="240px" height=""  alt="Логотип">

        <nav class="header__navigation" id="top">
          <ul class="header__navigation-list" type="none">
            <li class="header__navigation-item">
              <a class="header__navigation-link" href="#about">Обо мне</a>
            </li>

            <li class="header__navigation-item">
              <a class="header__navigation-link" href="#works">Мои работы</a>
            </li>

            <li class="header__navigation-item">
              <a class="header__navigation-link" href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ABHeader',
  props: {

  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(50px);
  z-index: 1;
  margin: 0;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.header__logo {
  width: 240px;
  height: auto;
}

.header__navigation-list {
  display: flex;
  justify-content: flex-end;
  gap: min(20px, 1.3vw);
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__navigation-item {
  margin: 0;
  padding: 0;
}

.header__navigation-link {
  display: block;
  font-weight: 100;
  font-size: 18px;
  margin: 0;
  padding: 15px;
  border-radius: 2px;
}

.header__navigation-link {
  color: $white;

  &:hover {
    background-color: rgba(128, 128, 128, 0.7);
    color: $white;
  }
}
</style>
<template>
	<header class="page-header">
      <div class="header-container">
        <img src="img/logo.png" width="240px" height="" class="logo" alt="Логотип">

        <nav id="top">
          <ul class="navigation" type="none">
            <li class="navigation-item">
              <a class="navigation-link" href="#about">Обо мне</a>
            </li>

            <li class="navigation-item">
              <a class="navigation-link" href="#works">Мои работы</a>
            </li>

            <li class="navigation-item">
              <a class="navigation-link" href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
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

<style>
header {
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: auto;
}

.page-header {
  margin: 0px;
  background-color: rgba(0,0,0, 1);
}

.safari-page-header {
  margin: 0px;
  background-color: rgba(0,0,0, 0.75);
  backdrop-filter: blur(50px);
}

.header-container {
  display: grid;
  grid-template-columns:  1fr 2fr;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.logo {
  margin: auto;
  margin-left: 0px;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;

}

.navigation-item {
  margin: 0px;
  margin-left: 72px;
  padding: 0px;
}

.navigation-link {
  display: block;
  font-weight: 100;
  font-size: 18px;
  margin: 0px;
  padding: 15px;
  border-radius: 2px;
}

.navigation-link,
.navigation-link:visited {
  color: #fff;
}

.navigation-link:hover {
  background-color: rgba(128, 128, 128, 0.7);
}
</style>
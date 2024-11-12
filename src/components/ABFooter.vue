<template>
  <footer id="contacts" class="contacts-section">
    <div class="contacts-container">
      <a href="https://www.instagram.com/alexbelostozky/" target="_blank" class="contacts-link">
        <img src="img/inst-icon.svg">
      </a>

      <a href="https://www.behance.net/alexbelostozky" target="_blank" class="contacts-link">
        <img src="img/behance-icon.svg">
      </a>

      <a href="tel:+79996269606" class="tel-link">+7 999 626 96 06</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ABFooter',
  props: {

  }
}
</script>

<style>
.contacts-section {
  margin: 0px;
  padding: 0px;
  height: 180px;
  background-image: url('../../public/img/footer-bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

.contacts-container {
  display: flex;
  width: 1000px;
  height: inherit;
  margin: auto;
  align-items: center;
  justify-content: space-between;
}

.tel-link {
  margin-left: auto;
  color: #fff;
  font-weight: 100;
  font-size: 28px;
  line-height: 33px;
}

.contacts-link {
  margin-right: 30px;
}
</style>
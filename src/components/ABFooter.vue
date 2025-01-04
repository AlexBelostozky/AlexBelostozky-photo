<template>
  <footer class="footer" id="contacts">
    <div class="container">
      <div class="footer__container">
        <ul class="footer__social-list">
          <li class="footer__social-item">
            <a
              class="footer__social-link"
              href="https://www.instagram.com/alexbelostozky/"
              :style="`mask-image: url(${instagramIcon})`"
              target="_blank"
            ></a>
          </li>

          <li class="footer__social-item">
            <a
              class="footer__social-link"
              href="https://www.behance.net/alexbelostozky"
              :style="`mask-image: url(${behanceIcon})`"
              target="_blank"
            ></a>
          </li>
        </ul>

        <a class="footer__tel-link" href="tel:+79996269606" >+7 999 626 96 06</a>
      </div>
    </div>
  </footer>
</template>

<script>
import instagramIcon from '@images/icons/inst-icon.svg';
import behanceIcon from '@images/icons/behance-icon.svg';

export default {
  name: 'ABFooter',
  props: {

  },

  data() {
    return {
      instagramIcon,
      behanceIcon
    };
  },
}
</script>

<style lang="sass">
@use "@styles/variables" as *

.footer
  margin: 0
  padding: 0
  background-image: url('@images/footer-bg.jpg')
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: center

.footer__container
  display: flex
  justify-content: space-between
  align-items: center
  height: inherit
  margin: auto
  padding: 60px 0

.footer__social-list
  display: flex
  justify-content: space-between
  align-items: center
  gap: 30px
  list-style: none
  margin: 0
  padding: 0

.footer__social-link
  display: block
  width: 35px
  height: 35px
  background-color: $white-light
  mask-repeat: no-repeat
  mask-position: center
  mask-size: contain

.footer__tel-link
  font-weight: 100
  font-size: 28px
  line-height: 33px
  color: $white
</style>
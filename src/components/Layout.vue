<script lang="tsx">
import {defineComponent} from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
        <div>
          <router-view />
          <footer class="nav">
            footer
            <Icon name="bills" />
          </footer>
        </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.nav {
  border: solid 1px red;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>


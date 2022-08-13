<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
  setup() {
    return () => (
        <div class="app">
          <router-view />
        </div>
    );
  }
});
</script>
<style lang="scss" scoped>
.app {
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--white);
}
</style>

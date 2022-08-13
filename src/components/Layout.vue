<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
        <div>
          <router-view />
          <footer>footer</footer>
        </div>
    );
  }
});
</script>

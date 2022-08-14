<script lang="tsx">
import {defineComponent} from 'vue';
import '../assets/icons/bills.svg';

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => (
        <svg class="icon" aria-hidden="true">
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
  }
});
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>

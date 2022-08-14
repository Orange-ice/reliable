<script lang="tsx">
import {defineComponent} from 'vue';
import Icon from './Icon.vue';
import {RouterLink, RouterView} from 'vue-router';

export default defineComponent({
  name: 'Layout',
  setup() {
    const navList = [
      {title: '账单', icon: 'bills', path: '/bills/list'},
      {title: '记账', icon: 'input', path: '/bills/create'},
      {title: '统计', icon: 'report', path: '/bills/report'},
      {title: '设置', icon: 'settings', path: '/bills/settings'}
    ];
    return () => (
        <div>
          <RouterView />
          <footer class="nav">
            {navList.map(item => (
                <RouterLink to={item.path} class="nav-item" key={item.icon}>
                  <Icon name={item.icon} />
                  <span>{item.title}</span>
                </RouterLink>
            ))}
          </footer>
        </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.nav {
  border: solid 1px #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  color: var(--primary);
  padding: 8px 0 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &-item {
    padding: 6px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span {font-size: 12px;margin-top: 4px}
    > svg {
      width: 24px;
      height: 24px;
    }

    &.router-link-active {
      color: var(--main);
    }
  }
}
</style>


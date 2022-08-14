<script lang="tsx">
import {computed, defineComponent, ref} from 'vue';
import Icon from '../../components/Icon.vue';

export default defineComponent({
  name: 'BillsCreate',
  setup() {
    const category = ref('');
    const lineClass = computed(() => {
      if (category.value === '') {
        return 'after';
      } else if (category.value === 'income') {
        return 'before';
      } else {
        return '';
      }
    });
    const getSelectedClass = (type: string) => {
      return type === category.value ? 'selected' : '';
    };
    const toggleCategory = (type: string) => {
      category.value = type;
    };
    return () => (
        <div class="bills-create">
          <h2>有谱记账</h2>

          <div class="toggle">
            <button><Icon name="left" /></button>
            <span>2022年08月14日（周日）</span>
            <button><Icon name="right" /></button>
          </div>
          <div class="total">
            <div class="total-item">
              <span class="label">净收入</span>
              <span class="current">￥40,230.00</span>
            </div>
            <div class="total-item">
              <span class="label">收入</span>
              <span class="amount">￥118,150.00</span>
            </div>
            <div class="total-item">
              <span class="label">支出</span>
              <span class="amount">-￥40,230.00</span>
            </div>
          </div>

          <div class="category">
            <span class={getSelectedClass('')} onClick={() => {toggleCategory('');}}>全部</span>
            <span class={`${lineClass.value} ${getSelectedClass('expense')}`}
                  onClick={() => {toggleCategory('expense');}}>支出</span>
            <span class={getSelectedClass('income')} onClick={() => {toggleCategory('income');}}>收入</span>
          </div>
        </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.bills-create {
  padding: 16px;

  > h2 {
    font-size: 16px;
    color: var(--primary);
    text-align: center;
    margin-bottom: 12px;
  }

  .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background);
    border-radius: 24px;
    padding: 4px;
    > button {
      width: 40px;
      height: 40px;
      color: var(--secondary);
      border: solid 1px var(--secondary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {font-size: 20px}
    }
    > span {
      color: var(--primary);
    }
  }

  .total {
    margin-top: 24px;
    padding: 12px 16px;
    border: solid 1px var(--gray);
    border-radius: 8px;
    &-item {
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      .label {
        color: var(--secondary)
      }
      .amount {
        color: var(--primary)
      }
      .current {
        color: var(--main)
      }
    }
  }

  .category {
    margin-top: 40px;
    border-bottom: solid 1px var(--gray);
    > span {
      display: inline-block;
      padding: 12px 24px;
      color: var(--secondary);
      position: relative;
      &:first-child {
        border-radius: 8px 0 0 0;
        border-left: solid 1px var(--gray);
        border-top: solid 1px var(--gray);
      }
      &:nth-child(2) {border-top: solid 1px var(--gray);}
      &:last-child {
        border-radius: 0 8px 0 0;
        border-top: solid 1px var(--gray);
        border-right: solid 1px var(--gray);
      }

      &.selected {
        background: var(--background);
        color: var(--primary);
      }
      &.after::after, &.before::after {
        content: '';
        display: block;
        height: 24px;
        width: 1px;
        background: var(--gray);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &.after::after {right: -1px;}
      &.before::after {left: -1px;}
    }
  }
}
</style>

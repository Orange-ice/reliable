<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Welcome',
  setup() {
    return () => (
        <div class="welcome">
          <div class="top">
            <span>1/3</span>
            <button>skip</button>
          </div>
          <div class="image">
            <img src="../../src/assets/images/welcome1.png" alt="" />
          </div>
          <div class="description">
            <h3>Easy to add new transaction</h3>
            <p>We always try to bring the best experience to users. Your transactions are recorded as quickly as
              possible. You will not have any difficulties when you first use MoNo.</p>
          </div>
          <div class="action">
            <button>继续</button>
          </div>
        </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.welcome {
  height: 100%;
  padding: 20px 16px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: var(--primary);
    > button {
      height: 40px;
      padding: 8px 24px;
      border: solid 1px var(--gray);
      border-radius: 20px;
    }
  }
  .image {
    margin-top: 40px;
    height: 382px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
  .description {
    margin-top: 24px;
    margin-bottom: 100px;
    text-align: center;
    > h3 {
      color: var(--primary);
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 4px;
      line-height: 36px;
    }
    > p {
      color: var(--secondary);
      font-size: 16px;
      line-height: 24px;
    }
  }
  .action {
    text-align: center;
    > button {
      width: 100%;
      background: var(--main);
      height: 48px;
      color: var(--white);
      border-radius: 24px;
    }
  }
}
</style>

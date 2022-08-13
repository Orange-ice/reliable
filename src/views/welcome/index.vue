<script lang="tsx">
import {defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Welcome',
  setup() {
    const contentList = [
      {
        title: 'Easy to add new transaction',
        content: 'We always try to bring the best experience to users. Your transactions are recorded as quickly as possible. You will not have any difficulties when you first use MoNo.',
        img: 'welcome1'
      },
      {
        title: 'Track income and expenses',
        content: 'details tracking transactions visually with the adding images features bills',
        img: 'welcome2'
      },
      {
        title: 'Comprehensive Report',
        content: 'Supports viewing your balance for monthly, income and expenses, debts, loans as well as reports with category.',
        img: 'welcome3'
      }
    ];

    const refStep = ref(0);
    const router = useRouter();
    const nextStep = () => {
      if (refStep.value < contentList.length - 1) {
        refStep.value++;
      } else {
        router.push('/bills/list');
      }
    };
    const skip = () => {
      router.push('/bills/list');
    };
    return () => (

        <div class="welcome">
          <div class="top">
            <span>{refStep.value + 1}/{contentList.length}</span>
            {refStep.value !== contentList.length - 1 && <button onClick={skip}>skip</button>}
          </div>
          <div class="transform-wrapper">
            {contentList.map(item => <div class="transform-item"
                                          style={{transform: `translateX(-${refStep.value}00%)`}}>
              <div class="image">
                <img src={`../../src/assets/images/${item.img}.png`} alt="" />
              </div>
              <div class="description">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>)}
          </div>


          <div class="action">
            <button onClick={nextStep}>{refStep.value === contentList.length - 1 ? 'Get Started' : 'Continue'}</button>
          </div>
        </div>
    );
  }
});
</script>

<style lang="scss" scoped>
.transform-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  .transform-item {
    width: 100%;
    flex-shrink: 0;
    transition: transform .5s;
  }
}

.welcome {
  height: 100%;
  padding: 20px 16px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: var(--primary);
    min-height: 40px;
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
      min-height: 96px;
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

import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        个人 <GradientText>爱好</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="干饭"
        description="虽然好干饭，但本人肥而不腻~"
        link="/"
        img={{
          src: '/assets/images/foods.svg',
          alt: 'Foods',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>火锅</Tags>
            <Tags color={ColorTags.LIME}>江湖菜</Tags>
            <Tags color={ColorTags.SKY}>烧烤</Tags>
            <Tags color={ColorTags.ROSE}>奶茶</Tags>
          </>
        }
      />
      <Project
        name="购物"
        description="喜欢购物是我与生俱来的天赋， 一天一个小礼物， 一天一个小惊喜~"
        link="/"
        img={{ src: '/assets/images/shopping.svg', alt: 'Shopping' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>衣服</Tags>
            <Tags color={ColorTags.EMERALD}>化妆品</Tags>
            <Tags color={ColorTags.YELLOW}>小玩具</Tags>
          </>
        }
      />
      <Project
        name="拍照"
        description="我就是集性感与可爱于一身的女人，咋啦～"
        link="/"
        img={{ src: '/assets/images/fashions.svg', alt: 'Fashions' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>性感</Tags>
            <Tags color={ColorTags.INDIGO}>可爱</Tags>
            <Tags color={ColorTags.ROSE}>做作</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

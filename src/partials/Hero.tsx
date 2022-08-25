import {
  GradientText,
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          This Is HuLuCat ' <GradientText>Life</GradientText> 🐱
        </>
      }
      description={
        <>
          The Best designer of ChongQiong{' '}
          <a className="text-cyan-400">
            Designer Artist 🎨
          </a>{' '}
          <br />
          {/* <a>
            我也有全世界最好的老公 -{' '}
            <a className="text-cyan-400 hover:underline" href="/">
              刘靖靖{' '}
            </a>{' '}
          </a> */}
        </>
      }
      avatar={
        <img
          className="w-120 h-80"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      // socialButtons={
      //   <>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/twitter-icon.png"
      //         alt="Twitter icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/facebook-icon.png"
      //         alt="Facebook icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/linkedin-icon.png"
      //         alt="Linkedin icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/youtube-icon.png"
      //         alt="Youtube icon"
      //       />
      //     </a>
      //   </>
      // }
    />
  </Section>
);

export { Hero };

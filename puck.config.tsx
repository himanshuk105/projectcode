// puck.config.ts
import HeroBackground from '@/components/PuckBlocks/HeroBlocks/HeroBackground'
import HeroSplit from '@/components/PuckBlocks/HeroBlocks/HeroSplit'
import { HeroBlock } from '@/Typesafe/HeroBlockTypes'
import { TwoColumnLayoutProps } from '@/Typesafe/Layout'
import { type Config } from '@measured/puck'

type Props = {
  HeroBlock: HeroBlock
  HeroBlockBackGround: HeroBlock
}

export const config: Config<Props> = {
  categories: {
    Blocks: {
      components: ['HeroBlock', 'HeroBlockBackGround'],
      defaultExpanded: false,
    },
  },
  components: {
    HeroBlock: {
      fields: {
        heading: { type: 'text' },
        subheading: { type: 'text' },
        buttontext: { type: 'text' },
        imageurl: { type: 'text' },
        buttonOther: { type: 'text' },
        backgroundType: {
          type: 'radio',
          options: [
            { label: 'Right Side', value: 'right' },
            {
              label: 'Parent',
              value: 'Complete',
            },
          ],
        },
      },
      defaultProps: {
        heading: 'Build Website with Us',
        subheading: 'Wow',
        buttontext: 'Visit Us',
        imageurl:
          'https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?q=80&w=1031&auto=format&fit=crop',
        buttonOther: 'Learn More',
        backgroundType: 'right',
      },
      render: (props) => {
        return <HeroSplit {...props} />
      },
    },
    HeroBlockBackGround: {
      fields: {
        heading: { type: 'text' },
        subheading: { type: 'text' },
        buttontext: { type: 'text' },
        highlightText: { type: 'text' },
      },
      defaultProps: {
        heading: 'Experience the Future of ',
        subheading: 'Join us in creating next-generation applications with blazing speed.',
        buttontext: 'Get Started',
        highlightText: ' Technology',
      },
      render: (props) => {
        return <HeroBackground {...props} />
      },
    },
  },
}

export default config

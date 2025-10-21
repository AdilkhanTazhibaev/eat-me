import ArrowRight from '@/assets/icons/arrow-right-black.svg?react'

import { CardWrapper, Container, FlexWrap, Grid } from '@/components/snippets'
import { raw } from '@theme/tokens.ts'
import Text from '@ui/typography/Text.tsx'

interface Props {
  title: string
  caption: string
  remainingDaysText?: string
}

export function OrderWidget({ title, caption, remainingDaysText }: Props) {
  const padding = remainingDaysText ? '12px 16px 0 16px' : '12px 16px'

  return (
    <>
      <CardWrapper $color={0} $padding={0} style={{ padding: 0 }}>
        <Grid $gap={0} style={{ padding: padding, marginBottom: 12 }}>
          <FlexWrap style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
              <Text size={12} color={raw.colors.neutral['700']} weight={'medium'}>
                {caption}
              </Text>
              <Text size={12} weight={'medium'}>
                {title}
              </Text>
            </div>
            <ArrowRight />
          </FlexWrap>
        </Grid>
        <Container
          $bg={400}
          style={{ padding: '8px 16px', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
          $colorKey={'error'}
        >
          <Text size={12} color={raw.colors.error['700']} weight={'medium'}>
            {remainingDaysText}
          </Text>
        </Container>
      </CardWrapper>
    </>
  )
}

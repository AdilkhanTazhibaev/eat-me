import ArrowRight from '@/assets/icons/arrow-right.svg?react'
import { Grid, WrapBetween } from '@/components/snippets'
import { useScreenLayout } from '@/shared/hooks/useScreenLayout.tsx'
import { BackTopBar } from '@/shared/topbar/BackTopBar.tsx'
import { raw } from '@theme/tokens.ts'
import NavigationLink from '@ui/NavigationLink'
import Heading from '@ui/typography/Heading.tsx'
import { useNavigate } from 'react-router-dom'

export function MyOrders() {
  const navigate = useNavigate()

  useScreenLayout({
    header: <BackTopBar title={'Мои доставки заказов'} />,
    mainStyle: { background: raw.colors.neutral[0] },
    footerStyle: { background: raw.colors.neutral[0] },
  })
  return (
    <>
      <WrapBetween>
        <Grid $gap={16}>
          <div style={{ maxWidth: 225 }}>
            <Heading level={6}>Выберите заказ, чтобы смотреть детали доставки и питания</Heading>
          </div>
          <NavigationLink
            variant={'card'}
            actionBg={0}
            title={'№121022'}
            action={
              <ArrowRight
                onClick={() => {
                  navigate(i.to as string)
                }}
              />
            }
            caption={'от 1 января, 2026'}
          ></NavigationLink>
          <NavigationLink
            variant={'card'}
            actionBg={0}
            title={'№121022'}
            action={
              <ArrowRight
                onClick={() => {
                  navigate(i.to as string)
                }}
              />
            }
            caption={'от 1 января, 2026'}
          ></NavigationLink>
        </Grid>
      </WrapBetween>
    </>
  )
}

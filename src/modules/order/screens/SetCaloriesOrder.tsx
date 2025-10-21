import { Grid, IconWrap, WrapBetween } from '@/components/snippets'
import { useScreenLayout } from '@/shared/hooks/useScreenLayout.tsx'
import { BackTopBar } from '@/shared/topbar/BackTopBar.tsx'
import { raw } from '@theme/tokens.ts'
import { Button } from '@ui/Button'
import InputSlider from '@ui/InputSlider'
import NavigationLink from '@ui/NavigationLink'
import { useNavigate } from 'react-router-dom'

export function SetCaloriesOrder() {
  const navigate = useNavigate()

  useScreenLayout({
    header: <BackTopBar title={'Изменение калоража'} />,
    footer: (
      <Button
        onClick={() => {
          navigate('/change-calories')
        }}
      >
        Применить
      </Button>
    ),
    footerStyle: {
      background: raw.colors.neutral['0'],
      padding: 16,
    },
    mainStyle: { background: raw.colors.neutral['0'], paddingTop: 0 },
  })
  return (
    <>
      <Grid $gap={16}>
        <WrapBetween>
          <NavigationLink
            icon={<IconWrap $color={50}></IconWrap>}
            title={'Стандарт'}
            caption={'Текущий калораж: 2 300 кКал'}
          />
          <InputSlider
            label={'Калорий'}
            value={1}
            marks={[
              { value: 1, label: '900', align: 'left' },
              { value: 28, label: '2 900', align: 'right' },
            ]}
          />
        </WrapBetween>
      </Grid>
    </>
  )
}

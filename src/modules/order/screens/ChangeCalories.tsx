import { CardWrapper, Grid, WrapBetween } from '@/components/snippets'
import { useScreenLayout } from '@/shared/hooks/useScreenLayout.tsx'
import { BackTopBar } from '@/shared/topbar/BackTopBar.tsx'
import { Button } from '@ui/Button'
import Divider from '@ui/Divider'
import { InfoField } from '@ui/InfoField'
import { RadioGroup } from '@ui/RadioSelect'
import Heading from '@ui/typography/Heading.tsx'
import { useNavigate } from 'react-router-dom'

export function ChangeCalories() {
  const navigate = useNavigate()

  useScreenLayout({
    header: <BackTopBar title={'Изменение калоража'} />,
    footer: (
      <WrapBetween>
        <Button>Подтвердить и продолжить</Button>
      </WrapBetween>
    ),
    footerStyle: { padding: '16px 0' },
  })
  return (
    <>
      <Grid $gap={16}>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <InfoField size={'h5'} label={'Новый калораж'} value={'2 300 кКал'} />
            <Divider />
            <InfoField label={'Разница калоража'} value={'+ 500 кКал'} />
            <InfoField label={'Осталось дней питания'} value={'7 дней'} />
            <InfoField label={'Разница в цене за весь период'} value={'+ 12 000 ₸'} />
          </Grid>
        </CardWrapper>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>Как возместить разницу</Heading>

            <RadioGroup
              gap={0}
              options={[
                {
                  value: '1',
                  caption: 'Cократить количество дней доставки',
                  title: '14 дней на 10 дней',
                },
                {
                  value: '1',
                  caption: 'Доплатить разницу',
                  title: '12 000 ₸',
                },
              ]}
            />
          </Grid>
        </CardWrapper>
      </Grid>
    </>
  )
}

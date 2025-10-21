import Calendar from '@/assets/icons/_calendar.svg?react'
import Pencil from '@/assets/icons/_pencil-01.svg?react'
import { CardWrapper, Grid, WrapBetween } from '@/components/snippets'
import { useScreenLayout } from '@/shared/hooks/useScreenLayout.tsx'
import { BackTopBar } from '@/shared/topbar/BackTopBar.tsx'
import { Button } from '@ui/Button'
import { InfoField } from '@ui/InfoField'
import Heading from '@ui/typography/Heading.tsx'
import { useNavigate } from 'react-router-dom'

export function ManageOrder() {
  const navigate = useNavigate()
  useScreenLayout({
    header: <BackTopBar title={'Управление заказом'} caption={'№121022'} />,
    footerStyle: { paddingTop: 16 },
  })

  return (
    <>
      <Grid $gap={16}>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>Детали заказа</Heading>
            <InfoField label={'Программа'} value={'Standart'} />
            <InfoField label={'Калораж'} value={'2 300 кКал'} />
            <InfoField label={'Время доставки'} value={'07:00 - 10:00'} />
            <InfoField label={'Адрес доставки'} value={'Алматы, ул Куанышбаева, 40г'} />
            <div style={{ marginTop: 6 }}>
              <Button
                style={{ padding: 0 }}
                leading={<Pencil />}
                fullWidth={false}
                variant={'neutral/text'}
                labelSize={14}
                onClick={() => {
                  navigate('/set-calories-order')
                }}
                size={36}
              >
                Изменить калораж
              </Button>
            </div>
          </Grid>
        </CardWrapper>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>Время доставки</Heading>
            <InfoField label={'Ежедневно'} value={'Утром, 07:00 - 10:00'} />
            <div>
              <Button
                leading={<Pencil />}
                style={{ padding: 0 }}
                fullWidth={false}
                variant={'neutral/text'}
                labelSize={14}
                onClick={() => {
                  navigate('/delivery/set-date')
                }}
                size={36}
              >
                Редактировать
              </Button>
            </div>
          </Grid>
        </CardWrapper>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>Адрес доставки</Heading>
            <InfoField label={'Согласно графику'} value={'Алматы, ул Куанышбаева, 40г'} />
            <div>
              <Button
                leading={<Pencil />}
                style={{ padding: 0 }}
                fullWidth={false}
                variant={'neutral/text'}
                labelSize={14}
                onClick={() => {
                  navigate('/address/details')
                }}
                size={36}
              >
                Редактировать
              </Button>
            </div>
          </Grid>
        </CardWrapper>
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>Не привозить в дни недели</Heading>
            <InfoField label={'Еженедельно'} value={'Среда, суббота, воскресенье'} />
            <div>
              <Button
                leading={<Pencil />}
                style={{ padding: 0 }}
                fullWidth={false}
                variant={'neutral/text'}
                labelSize={14}
                onClick={() => {
                  navigate('/delivery/set-skip-days')
                }}
                size={36}
              >
                Редактировать
              </Button>
            </div>
          </Grid>
        </CardWrapper>{' '}
        <CardWrapper $color={0}>
          <Grid $gap={12}>
            <Heading level={6}>График доставки</Heading>
            <InfoField label={'Первый день доставки'} value={'16 декабря'} />
            <InfoField label={'Последний день доставки'} value={'2 января'} />
            <div>
              <Button
                leading={<Calendar />}
                style={{ padding: 0 }}
                fullWidth={false}
                variant={'neutral/text'}
                labelSize={14}
                onClick={() => {
                  navigate('/delivery/set-skip-days')
                }}
                size={36}
              >
                Перенести или заморозить
              </Button>
            </div>
          </Grid>
        </CardWrapper>
        <WrapBetween>
          <Button>Продлить заказ</Button>
        </WrapBetween>
        <WrapBetween>
          <Button variant={'destructive/text'}>Отменить заказ</Button>
        </WrapBetween>
      </Grid>
    </>
  )
}

import Pencil from '@/assets/icons/_pencil-01.svg?react'
import { CardWrapper, WrapBetween } from '@/components/snippets'
import { MealsCard } from '@/modules/programs/components/MealsCard.tsx'
import { useScreenLayout } from '@/shared/hooks/useScreenLayout.tsx'
import { BackTopBar } from '@/shared/topbar/BackTopBar.tsx'
import { raw } from '@theme/tokens.ts'
import { Button } from '@ui/Button'
import Divider from '@ui/Divider'
import { InfoField } from '@ui/InfoField'
import { Notice } from '@ui/Notice'
import Tag from '@ui/Tags'
import TitleSubtitle from '@ui/TitleSubtitle'
import Text from '@ui/typography/Text.tsx'
import { useNavigate } from 'react-router-dom'

export function ActiveOrder() {
  const navigate = useNavigate()

  useScreenLayout({
    header: <BackTopBar title={'Мои доставки заказов'} />,
    mainStyle: { paddingTop: 0 },
    footerStyle: { paddingTop: 16 },
  })
  return (
    <>
      <div style={{ display: 'grid', gap: 16 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 16,
            paddingLeft: 16,
            paddingTop: 16,
          }}
        >
          <Text size={16} color={raw.colors.neutral['900']}>
            Календарь питания
          </Text>
          <Text size={14} weight={'regular'} color={raw.colors.neutral['700']}>
            Выберите день, чтобы посмотреть питание
          </Text>
        </div>
        <div style={{ display: 'flex', gap: 5, paddingRight: 16, paddingLeft: 16 }}>
          <Tag>13 сентября</Tag>
          <Tag>14 сентября</Tag>
          <Tag>15 сентября</Tag>
        </div>
        <CardWrapper $color={0} $padding={16} style={{ display: 'grid', gap: 16 }}>
          <TitleSubtitle caption={'Сегодня'} title={'13 сентября'} />
          <Notice
            description={
              'Это примерное меню. Иногда мы меняем некоторые блюда, чтобы сделать меню еще вкуснее'
            }
          />
          <Text>Блюда в комплекте</Text>
          <Text size={14} weight={'regular'}>
            Всего 5
          </Text>
          <Text size={14} weight={'regular'} color={raw.colors.neutral['700']}>
            Завтрак, 06:00 — 10:00
          </Text>
          <MealsCard
            onClick={() => {
              navigate(`/programs-nutrition/${12}/info/${4}`)
            }}
            title={'Макароны по-флотски'}
            description={
              'Макароны по-флотски, ну очень сытное блюдо, приготовлено с использование макарон'
            }
          />{' '}
          <Text size={14} weight={'regular'} color={raw.colors.neutral['700']}>
            Завтрак, 06:00 — 10:00
          </Text>
          <MealsCard
            title={'Макароны по-флотски'}
            description={
              'Макароны по-флотски, ну очень сытное блюдо, приготовлено с использование макарон'
            }
          />{' '}
          <Text size={14} weight={'regular'} color={raw.colors.neutral['700']}>
            Завтрак, 06:00 — 10:00
          </Text>
          <MealsCard
            title={'Макароны по-флотски'}
            description={
              'Макароны по-флотски, ну очень сытное блюдо, приготовлено с использование макарон'
            }
          />{' '}
          <Text size={14} weight={'regular'} color={raw.colors.neutral['700']}>
            Завтрак, 06:00 — 10:00
          </Text>
          <MealsCard
            title={'Макароны по-флотски'}
            description={
              'Макароны по-флотски, ну очень сытное блюдо, приготовлено с использование макарон'
            }
          />
          <Divider />
          <InfoField label={'Программа'} value={'Standart'} />
          <InfoField label={'Калораж'} value={'2 300 кКал'} />
          <InfoField label={'Время доставки'} value={'07:00 - 10:00'} />
          <InfoField label={'Адрес доставки'} value={'Алматы, ул Куанышбаева, 40г'} />
          <Button
            leading={<Pencil />}
            fullWidth={false}
            variant={'neutral/text'}
            labelSize={14}
            onClick={() => {
              navigate('/manage-order')
            }}
            size={36}
          >
            Редактировать
          </Button>
        </CardWrapper>
        <WrapBetween>
          <Button>Продлить заказ</Button>
        </WrapBetween>
      </div>
    </>
  )
}

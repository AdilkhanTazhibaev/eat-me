import { ActiveOrder } from '@/modules/order/screens/ActiveOrder.tsx'
import { ChangeCalories } from '@/modules/order/screens/ChangeCalories.tsx'
import { ManageOrder } from '@/modules/order/screens/ManageOrder.tsx'
import { MyOrders } from '@/modules/order/screens/MyOrders.tsx'
import { SetCaloriesOrder } from '@/modules/order/screens/SetCaloriesOrder.tsx'
import { type RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/orders',
    element: <MyOrders />,
  },
  {
    path: '/active-order',
    element: <ActiveOrder />,
  },
  {
    path: '/manage-order',
    element: <ManageOrder />,
  },
  {
    path: '/change-calories',
    element: <ChangeCalories />,
  },
  {
    path: '/set-calories-order',
    element: <SetCaloriesOrder />,
  },
]

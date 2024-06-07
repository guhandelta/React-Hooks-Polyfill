import { createFileRoute } from '@tanstack/react-router'
import { CustomMemo } from '../components'

export const Route = createFileRoute('/customMemo')({
    component: () => <CustomMemo />
})

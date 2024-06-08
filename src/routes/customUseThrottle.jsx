import { createFileRoute } from '@tanstack/react-router'
import { UseThrottle } from '../components'

export const Route = createFileRoute('/customUseThrottle')({
    component: () => <UseThrottle />
})
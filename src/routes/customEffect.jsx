import { createFileRoute } from '@tanstack/react-router'
import { CustomEffect } from '../components'

export const Route = createFileRoute('/customEffect')({
    component: () => <div>
        <CustomEffect />
    </div>
})
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
            &nbsp;<Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>&nbsp;|&nbsp;
                <Link to="/customEffect" className="[&.active]:font-bold">
                    Custom useEffect
                </Link>&nbsp;|&nbsp;
                <Link to="/customMemo" className="[&.active]:font-bold">
                    Custom useMemo
                </Link>&nbsp;|&emsp;
                <Link to="/customUseThrottle" className="[&.active]:font-bold">
                    useThrottle
                </Link>&nbsp;|&emsp;
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})

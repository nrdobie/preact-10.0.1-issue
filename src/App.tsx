import { h } from 'preact'
import { Suspense, lazy } from 'preact/compat'

const Home = lazy(() => import('./pages/Home'))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading&hellip;</div>}>
      <Home />
    </Suspense>
  )
}

App.displayName = 'App'

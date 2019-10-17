import 'preact/debug'
import { h, render } from 'preact'

const appRoot = document.getElementById('app-root') as HTMLDivElement

function runRender() {
  const { App } = require('./App')

  render(<App />, appRoot)
}

runRender()

if (module.hot) {
  module.hot.accept(runRender)
}

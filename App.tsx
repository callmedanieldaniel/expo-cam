import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import  Index from './src/index'

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config)

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf { }
}

function App() {
  return <Index />;
}

export default () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <App />
    </TamaguiProvider>
  )
}

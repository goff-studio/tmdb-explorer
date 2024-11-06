import Root from './features/navigation/RootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

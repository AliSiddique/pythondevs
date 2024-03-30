"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

interface Props {
    children: React.ReactNode
    }
function QueryWrapper({ children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
export default QueryWrapper
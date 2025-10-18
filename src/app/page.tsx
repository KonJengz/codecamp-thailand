import { ThemeToggle } from '@/shared/widgets/themeToggle'

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-12 text-foreground">
         <h1 className="text-3xl font-semibol text-primary">Home</h1>
         <ThemeToggle />
      </main>
   )
}

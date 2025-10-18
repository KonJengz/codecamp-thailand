'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'

type ThemeToggleProps = {
   className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
   const { resolvedTheme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   const isDark = resolvedTheme === 'dark'

   return (
      <Button
         type="button"
         variant="outline"
         size="icon"
         className={cn('relative', className)}
         aria-label="Toggle theme"
         onClick={() => setTheme(isDark ? 'light' : 'dark')}
         disabled={!mounted}
      >
         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
         {/* <span className="sr-only">Toggle theme</span> */}
      </Button>
   )
}

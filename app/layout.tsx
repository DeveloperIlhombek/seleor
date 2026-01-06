import { ChildProps } from '@/types'
import './globals.css'

import Navbar from '@/components/shared/navbar'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { FC } from 'react'
import { Toaster } from 'sonner'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Seleor e-commerce',
	description: 'Seleor e-commerce website built with Next.js',
	icons: { icon: '/favicon.png' },
}

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} antialiased`}>
				<Navbar />
				<main className='mx-auto max-w-7xl mt-24'>{children}</main>
				<Toaster />
			</body>
		</html>
	)
}

export default RootLayout

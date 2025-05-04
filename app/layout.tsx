import { Metadata } from "next"
import Navi from "../components/navi"

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "loading"  
  },
  description: 'movie mopvie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navi/>
        {children}
        </body>
    </html>
  )
}

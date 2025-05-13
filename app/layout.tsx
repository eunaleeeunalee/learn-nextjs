import { Metadata } from "next"
import Navi from "../components/navi"
import "../styles/global.css";

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movie"  
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

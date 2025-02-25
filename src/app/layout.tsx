import "../styles/globals.css";
// core styles are required for all packages
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <MantineProvider>
      {children}
    </MantineProvider>
      </body>
    </html>
  );
}

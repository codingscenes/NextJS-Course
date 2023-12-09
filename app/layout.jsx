export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Next App</title>
      </head>
      <body>
        <header>This is my Header</header>
        {children}
        <footer>This is my footer</footer>
      </body>
    </html>
  );
}

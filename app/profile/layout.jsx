export default function ProfileLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ color: 'red', border: '1px solid #ccc' }}> User list </div>
      <div>{children}</div>
    </div>
  );
}

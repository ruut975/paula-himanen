import Introduction from '../containers/Introduction/Introduction'

export default function Home() {
  const short = true;
  
  return (
  <div>
    <Introduction short={short} readMorePath="/paula"/>
  </div>
  );
}

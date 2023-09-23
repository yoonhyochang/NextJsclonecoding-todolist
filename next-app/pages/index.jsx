// '/' 경로를 가지는 페이지
import Link from 'next/link';

const App = () => {
  return (
    <div>
      <h2>Link to "tomato" Page</h2>
      <Link href="/tomato">Move to "/tomato"</Link>
    </div>
  );
};

export default App;

import { useSearchParams } from 'react-router-dom';

function Catalog() {
  const [params] = useSearchParams();

  const isFeatured = params?.get('showFeatured');

  return (
    <div>
      {isFeatured === 'true' ? (
        <p>Hello featured items.</p>
      ) : (
        <p>Hello catalog.</p>
      )}
    </div>
  );
}

export default Catalog;

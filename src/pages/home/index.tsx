import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/providers/mercadoLivreProvider';

const Home: NextPage = () => {
  const [products, setProducts] = useState<any>([]);

  const router = useRouter();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data.results));
  }, []);

  return (
    <div>
      {products?.map((product: any) => (
        <div
          style={{ border: '1px solid red' }}
          onClick={() => router.push(`/home/${product.id}`)}
          key={product.id}
        >
          <h4>{product.title}</h4>
          <p>{product.price}</p>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Home;

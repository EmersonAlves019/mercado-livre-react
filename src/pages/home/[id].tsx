import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getProductInfos } from '../../services/providers/mercadoLivreProvider';

// import { Container } from './styles';

const ProductDetails: React.FC = ({ product }: any) => {
  return (
    product && (
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.thumbnail} alt={product.title} />
      </div>
    )
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  const product = await getProductInfos(id);
  return { props: { product: product.data } };
};

export default ProductDetails;

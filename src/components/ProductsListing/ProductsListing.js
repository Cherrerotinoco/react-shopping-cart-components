import React from "react";

import ItemCard from "../ItemCard";

function ProductsListing({products, handleDownVote, handleUpVote, handleSetFavorite, handleAddToCart, ...props}) {
  return (
    <section className="row">
      {products.map((product) => (
        <ItemCard 
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          downVotes={product.votes.downVotes}
          handleUpVote={handleUpVote}
          handleDownVote={handleDownVote}
          handleAddToCart={handleAddToCart}
          handleSetFavorite={handleSetFavorite}
          isFavorite={product.isFavorite}
        />
      ))}
    </section>
  );
}

export default ProductsListing;

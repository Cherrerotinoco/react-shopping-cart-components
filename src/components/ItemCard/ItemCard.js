import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function ItemCard({
    id, 
    img, 
    title, 
    shortDescription,
    isFavorite,
    upVotes,
    downVotes,
    handleDownVote,
    handleUpVote,
    handleSetFavorite,
    handleAddToCart
  }) {
  function onDownVote() {
    handleDownVote(id);
  }
  function onUpVote() {
    handleUpVote(id);
  }
  function onSetFavorite() {
    handleSetFavorite(id);
  }
  function onAddToCart() {
    handleAddToCart(id);
  }

  return( 
  <>
    <article className="ItemCard col col-12 col-md-6 col-lg-4">
      <div className="card mb-5">
        <FavoriteIconButton handleSetFavorite={onSetFavorite} isFavorite />
        <img className="img-fluid card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{shortDescription}</p>
          
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <IconButton aria-label="Up vote product" handleClick={onUpVote}> 
                <ThumbDown />
                <p>{downVotes.currentValue}</p>
              </IconButton>
              <IconButton aria-label="Down vote product" handleClick={onDownVote}> 
                <ThumbUp />
                <p>{upVotes.currentValue}</p>
              </IconButton>
            </div>
            
            <Button onClick={onAddToCart}> Add to cart </Button>
            </div>
          </div>
        </div>
    </article>
  </>
  );
}

export default ItemCard;

import React from 'react';
import './NftMint.css'
const NftMint = () => {
    return (
      <section className="nft-mint  ">
        <div className="wrapper">
          <div className="nft-mint__block">
            <div className="nft-mint__textBlock">
              <h2 className="main__title">
                NFTs minted on the Velas blockchain
              </h2>
              <p className="main__text">
                Thousands of NFTs have been designed and minted based on Velas.
                Now it’s your turn.
              </p>
            </div>
            <img
              data-src="https://velas.com/assets/img/nft/nft.webp"
              data-rjs={2}
              alt="nft"
              className="nft-mint__img lozad"
              src="https://velas.com/assets/img/nft/nft.webp"
              data-loaded="true"
            />
            <img
              data-src="https://velas.com/assets/img/nft/nft-mobile.webp"
              data-rjs={2}
              alt="nft"
              className="nft-mint__img mobile lozad"
            />
            <div className="nft-mint__stats">
              <p className="nft-mint__stats-number">125,453+</p>
              <p className="nft-mint__stats-text">NFTs minted</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default NftMint;

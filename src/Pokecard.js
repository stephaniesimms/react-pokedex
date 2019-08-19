import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
      <div className="Pokecard">
        <h4 className="Pokecard-name">{name}</h4>
        <img className="Pokecard-img" src={imgUrl} alt={name}></img>
        <p className="Pokecard-type">Type: {type}</p>
        <p className="Pokecard-exp">EXP: {base_experience}</p>
      </div>
    )
  }
}

export default Pokecard;
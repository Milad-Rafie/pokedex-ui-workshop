import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, Table } from 'react-bootstrap';
import './PokemonComponent.css';

type Props = {
  pokemon: Pokemon;
};

export default function PokemonComponent(props: Props) {
  const { pokemon } = props;

  return (
    <Container className="pokemon-container">
      <Row className="justify-content-md-center">
        <Col md="auto"><h1 className="pokemon-name">{pokemon.pokemonName}
        <span className="pokemon-number">#{pokemon.pokemonNumber}</span>
        </h1></Col>
      </Row>
      <Row>
        <Col className="pokemon-image-col">
          <Image src={pokemon.mainImage} thumbnail className="pokemon-image" />
        </Col>
        <Col>
          <h3 className="pokemon-properties-title">Pokémon Properties</h3>
          <Table striped bordered hover className="pokemon-properties-table">
            <tbody>
              
            <tr className="property-row">
                <td>Speed</td>
                <td>{pokemon.speed}</td>
              </tr>

              <tr className="property-row">
                <td>Attack</td>
                <td>{pokemon.attack}</td>
              </tr>

            <tr className="property-row">
                <td>Health Points</td>
                <td>{pokemon.healthPoints}</td>
              </tr>

              <tr className="property-row">
                <td>Defense</td>
                <td>{pokemon.defense}</td>
              </tr>

              <tr className="property-row">
                <td>Type</td>
                <td>{pokemon.pokemonType.join(', ')}</td>
              </tr>

              <tr className="property-row">
                <td>Evolution</td>
                <td>{pokemon.evolution}</td>
              </tr>

              <tr className="property-row">
                <td>Devolution</td>
                <td>{pokemon.devolution || "None"}</td>
              </tr>

              <tr className="property-row">
                <td>Evolution Family</td>
                <td>{pokemon.evolutionFamily.join(', ')}</td>
              </tr>
              
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

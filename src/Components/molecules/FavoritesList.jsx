import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
`;

const AddToFavoritesButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
`;

const ViewFavoritesButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
`;

const FavoritesList = ({ cities, onRemove, onAddToFavorites, onViewFavorites, showFavoritesList }) => {
  return (
    <div>
      <List>
        {cities.map(city => (
          <ListItem key={city}>
            <span>{city}</span>
            <ButtonContainer>
              <AddToFavoritesButton onClick={() => onAddToFavorites(city)}>Agregar a favoritos</AddToFavoritesButton>
              <RemoveButton onClick={() => onRemove(city)}>Eliminar</RemoveButton>
            </ButtonContainer>
          </ListItem>
        ))}
      </List>
      <ButtonContainer>
        <ViewFavoritesButton onClick={onViewFavorites}>
          {showFavoritesList ? 'Ocultar Favoritos' : 'Ver Favoritos'}
        </ViewFavoritesButton>
      </ButtonContainer>
    </div>
  );
};

export default FavoritesList;


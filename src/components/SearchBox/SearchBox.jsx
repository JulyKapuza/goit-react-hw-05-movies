import PropTypes from 'prop-types';
import { useState } from 'react';
import { Wrapper, Input, Button, Form } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input value={movieName} type="text" onChange={handleNameChange} />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

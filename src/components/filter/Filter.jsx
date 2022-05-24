import {Container, Title, FilterContainer, Filters,FilterText, Select, Option } from './styleFilter';

const Filter = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filters>
            <FilterText>Filter Products:</FilterText>
            <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filters>
        <Filters>
            <FilterText>Sort Products:</FilterText>
            <Select>
            <Option disabled selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filters>
      </FilterContainer>
    </Container>
  );
}

export default Filter;

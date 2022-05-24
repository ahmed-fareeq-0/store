// import respnsive 
import { mobile } from "../../Responsive";

// import style
import styled from "styled-components";

// import date
import { categories } from "../../date";

// import components
import CategoriesItem from "./CategoryItem";


// styles
const Container = styled.div`
    display: flex;
    padding:20px;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`



const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategoriesItem item={item} key={item.id} />
        ))}
    </Container>
  );
}

export default Categories;

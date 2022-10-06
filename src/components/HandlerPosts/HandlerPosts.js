import styled from "styled-components";
import {useState} from "react";
import {usePosts} from "../../hooks";
import {Post} from "../Post";


const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
`

const BtnContainerStyled = styled.div`
  display: inline-block;
  align-items: center;

`
const BtnStyled = styled.button`
  gap: 20px;
  margin: 10px;
  border: 2px solid #000;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 400;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    box-shadow: -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  }
`


export const HandlerPosts = () => {
    const [search, setSearch] = useState('')
    const {posts, prevPage, nextPage, counter} = usePosts();

    const handleSearch = ({target}) => setSearch(target.value)

    const handleFilter = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
        || post.body.toLowerCase().includes(search.toLowerCase())
    )

    
    return (
        <ContainerStyled>
            <input value={search} onChange={handleSearch} placeholder='Search'/>

            <BtnContainerStyled>
                <BtnStyled onClick={prevPage}>Back</BtnStyled>
                <span>{counter}</span>
                <BtnStyled onClick={nextPage}>Next</BtnStyled>
            </BtnContainerStyled>

            {handleFilter?.map((post) =>
                <Post key={post.id}
                      post={post}
                />)
            }

            <BtnContainerStyled>
                <BtnStyled onClick={prevPage}>Back</BtnStyled>
                <span>{counter}</span>
                <BtnStyled onClick={nextPage}>Next</BtnStyled>
            </BtnContainerStyled>
        </ContainerStyled>
    )
}
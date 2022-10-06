import styled from "styled-components";
import {Comments} from "../Comments";
import {Users} from "../Users";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 20px;
  align-items: baseline;
  border-bottom: 1px solid #E0E0E0;
  
  max-width: 900px;
  justify-content: space-around;
  align-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
  }
`
const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
const RightStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  max-height: content-box;
  max-width: content-box;
  @media (max-width: 768px) {
    justify-content: left;
    align-items: flex-start;
    max-width: max-content;
    width: 322px;
  }

`
const TitleStyled = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #21243D;
  margin: 3px;
`
const BodyStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background: #142850;
  border-radius: 20px;
  padding: 10px 15px;
`
const SectionStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`

export const Post = (props) => {
    const {post, ...rest} = props;

    return (
        <ContainerStyled {...rest}>

            <LeftStyled>
                <Users userId={post.userId}/>
            </LeftStyled>

            <RightStyled>
                <TitleStyled> {post.title}</TitleStyled>
                <BodyStyled>{post.body}</BodyStyled>
                <SectionStyled>
                    <h3>Comments</h3>
                    <Comments postId={post.id} />
                </SectionStyled>
            </RightStyled>

        </ContainerStyled>
    )
}
import styled from "styled-components";
import {useComments} from '../../hooks'

const ContentStyled = styled.div`
  border: 1px solid #E0E0E0;
  border-radius: 20px;
  background-color: rgba(231, 231, 231, 0.4);
`
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 54px;
  margin: 10px;
  align-items: baseline;
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
  justify-content: left;
  padding: 7px;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
  background-color: #FFFFFF;
`
const RightStyled = styled.div`

  max-height: content-box;
  max-width: content-box;
  width: 300px;
  justify-content: center;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
  background-color: #FFFFFF;
  @media (max-width: 768px) {
    justify-content: left;
    align-items: flex-start;
    max-width: max-content;
    width: 322px;
  }

`

const NameStyled = styled.div`

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #21243D;
`
const CommentsStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
  padding: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
`

export const Comments = (props) => {
    const {postId, ...rest} = props;

    const comments = useComments(postId);

    return (


        <ContentStyled {...rest}>
            {comments?.map((comment) =>
                <ContainerStyled key={comment.id}>

                    <LeftStyled>
                        <NameStyled>{comment.user.username}</NameStyled>
                    </LeftStyled>

                    <RightStyled>
                        <CommentsStyled>{comment.body}</CommentsStyled>
                    </RightStyled>

                </ContainerStyled>)}
        </ContentStyled>
    )
}

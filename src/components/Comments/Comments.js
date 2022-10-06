import styled from "styled-components";
import {useComments} from '../../hooks'

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
        <CommentsStyled {...rest}>
            {comments?.map((comment, index) =>
                <div key={comment.id}>
                    {index}: {comment.body}
                </div>)}
        </CommentsStyled>
    )
}

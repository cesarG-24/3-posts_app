import styled from "styled-components";
import {useUser} from '../../hooks'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  //align-items: baseline;
  align-content: center;
  border-bottom: 1px solid #E0E0E0;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
  }
`
const PreviewStyled = styled.img`
  max-width: 246px;
  width: 100px;
  max-height: 180px;
  height: 100px;
  border-radius: 9999px;
  object-fit: cover;
  object-position: center;
  box-shadow: -2px 1px 10px 1px #edf7fa;

  @media (max-width: 768px) {
    max-width: fit-content;
    max-height: fit-content;
    height: 230px;
    width: 339px;
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

export const User = (props) => {
    const {userId, ...rest} = props;

    const user = useUser(userId);

    return (
        <ContainerStyled key={user.id} {...rest}>
            <PreviewStyled src={user.image} alt="Profile picture"/>
            <NameStyled>{user.firstName} {user.lastName}</NameStyled>
        </ContainerStyled>
    )
}

import styled from '@emotion/styled'
import Title from '../components/title'
import InfoTop from '../components/infoTop'
import ExtraText from '../components/extraInfo'
import Links from '../components/link'
import tempPic from '../pictures/s13.png'


const TempPicture = styled.img`
  height: 20%;
  width: 100%;
`

const LinkDiv = styled.div`
  position: fixed;
  top: 83%;
  right: -39px;
  transform: rotate(-90deg);
`

const Content = styled.div`
  width: 90%;
  padding-top: 25px;
  margin: auto;
`
export default function HomePage() {
    return (
        <Content>
            <InfoTop />
            <Title text='Front-end developer' />
            <TempPicture src={tempPic} />
            <ExtraText text='I am a JavaScript, TypeScript and React Front-end Dev, always open to explore options.' />
            <Title text='Arthur Pluym' />
            <LinkDiv>
              <Links />
            </LinkDiv>
        </Content>
    )
}
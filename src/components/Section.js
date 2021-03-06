import styled from 'styled-components'
import { colors, breakpoints } from '../styles'

const Section = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${props => (props.dark ? colors.darkBlue : colors.white)};

  & > * {
    ${breakpoints.md`
      width: 75%;
      text-align: left;
    `}

    ${breakpoints.md`
      width: 50%;
    `}
  }

  ${props => (props.small ? 'padding: 100px;' : '')};
  ${props => (props.left ? 'justify-content: flex-start;' : '')};
  ${props => (props.right ? 'justify-content: flex-end;' : '')};
  ${props =>
    props.middle
      ? `
          justify-content: center;
          & > * {
            width: auto;
            text-align: center;
          }
        `
      : ''};

  ${breakpoints.md`
    padding: 140px;
  `}
`

export default Section

import PropTypes from "prop-types"
import { Heading } from "ui"

const HeroCtaIntro = ({ children, ...props }) => (
  <Heading variant='intro' {...props}>
    {children}
  </Heading>
)

HeroCtaIntro.propTypes = {
  children: PropTypes.string.isRequired,
}

export default HeroCtaIntro

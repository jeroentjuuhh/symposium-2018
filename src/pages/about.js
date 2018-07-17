import React from 'react'

import Section from 'components/Section'
import Speakers from 'components/Speakers'

const SpeakersPage = () => (
  <div className="SpeakersPage page">
    <Section wrapper>
      <h1>Speakers</h1>
      <p>The speakers will be revealed here as well as on Facebook. Follow our <a target="_blank" href="https://www.facebook.com/events/165194104170772/" rel="noopener noreferrer">Facebook page</a> or check back here to stay up to date.</p>
    </Section>
    <Section wrapper>
      <Speakers />
    </Section>
  </div>
)

export default SpeakersPage
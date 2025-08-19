import H1 from "../components/Heading1"
import Paragraph from "../components/OnEveryPage/Paragragh"
import Section from "../components/OnEveryPage/Section"
import constant from "../data/constant.json"

const about = constant.About

const About = () => {
  return (
    <div>
      <Section style={{backgroundImage: 'url("../assets/imgs/riccardo-oliva-C5DLhUkEWfM-unsplash.jpg")'}}>
        <H1 className="lg:text-9xl">
          {about.Main_heading}
        </H1>
        <Paragraph className="w-5/12">
          {about.sub_text}
        </Paragraph>
      </Section>
    </div>
  )
}

export default About

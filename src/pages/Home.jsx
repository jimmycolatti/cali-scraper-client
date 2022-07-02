import Scraper from "../components/Scraper"

//chakra heading
import { Heading } from "@chakra-ui/react"

const Home = () => {
  return (
    <div>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
        lineHeight={"110%"}
        m={"25px"}
      >
        Cali Scraper App
      </Heading>
      <Scraper />
    </div>
  )
}

export default Home

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react"

const Scraper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center>
      <Button onClick={onOpen}>Scrape</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>California's License Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <p>Number Input: "Start ID"</p>
              <p>Number Input: "Count"</p>
              <p>Button: "Run"</p>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme={"facebook"}
              mr={2}
              onClick={() => console.log("Run scraper")}
            >
              Run
            </Button>
            <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  )
}

export default Scraper

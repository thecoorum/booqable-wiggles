import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Code,
  Text,
  Flex,
  Button,
  useClipboard,
} from "@chakra-ui/react";

import "./styles.css";

const WIGGLES = [
  { value: "arrow-1", label: "Arrow 1" },
  { value: "arrow-2", label: "Arrow 2" },
  { value: "arrow-3", label: "Arrow 3" },
  { value: "arrow-4", label: "Arrow 4" },
  { value: "arrow-5", label: "Arrow 5" },
  { value: "arrow-6", label: "Arrow 6" },
  { value: "arrow-7", label: "Arrow 7" },
  { value: "arrow-8", label: "Arrow 8" },
  { value: "circle-1", label: "Circle 1" },
  { value: "circle-2", label: "Circle 2" },
  { value: "circle-3", label: "Circle 3" },
  { value: "line-1", label: "Line 1" },
  { value: "line-2", label: "Line 2" },
];
const POSITIONS = [
  { value: "center", label: "Center" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
];
const COLORS = [
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "secondary-blue", label: "Secondary Blue" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "pink", label: "Pink" },
];

function App() {
  const [phrase, setPhrase] = useState("");
  const [wiggle, setWiggle] = useState(WIGGLES[0]);
  const [position, setPosition] = useState(POSITIONS[0]);
  const [color, setColor] = useState(COLORS[0]);

  const { hasCopied, onCopy } = useClipboard(`<span class="wiggle wiggle__${
    wiggle.value
  } wiggle--
  ${position.value}">
  ${phrase.length ? phrase : "dolor sit"}
  </span>`);

  const getPreviewPosition = (pos) => {
    switch (pos) {
      case "left":
        return "flex-end";
      case "right":
        return "flex-start";
      default:
        return "center";
    }
  };

  const handleChange = (e, type) => {
    const { value } = e.target;

    switch (type) {
      case "phrase":
        setPhrase(value);
        break;
      case "wiggle":
        setWiggle(WIGGLES.find((el) => el.value === e.target.value));
        break;
      case "position":
        setPosition(POSITIONS.find((el) => el.value === e.target.value));
        break;
      case "color":
        setColor(COLORS.find((el) => el.value === e.target.value));
      default:
        return;
    }
  };

  return (
    <ChakraProvider>
      <Box
        padding={4}
        borderWidth={1}
        borderRadius="lg"
        maxWidth="xl"
        margin="20px auto"
      >
        <FormControl id="phrase" mb={2}>
          <FormLabel>Phrase to wrap</FormLabel>
          <Input
            value={phrase}
            onChange={(e) => handleChange(e, "phrase")}
            placeholder="dolor sit"
          />
        </FormControl>
        <FormControl id="wiggle" mb={2}>
          <FormLabel>Select a wiggle</FormLabel>
          <Select
            value={wiggle.value}
            onChange={(e) => handleChange(e, "wiggle")}
          >
            {WIGGLES.map((wiggle) => (
              <option key={wiggle.value} value={wiggle.value}>
                {wiggle.label}
              </option>
            ))}
          </Select>
          <FormHelperText>
            It's not recommended to use circle wiggles for long phrases
          </FormHelperText>
        </FormControl>
        <FormControl id="position" mb={5}>
          <FormLabel>Select position of a wiggle</FormLabel>
          <Select
            value={position.value}
            onChange={(e) => handleChange(e, "position")}
          >
            {POSITIONS.map((position) => (
              <option key={position.value} value={position.value}>
                {position.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="position" mb={5}>
          <FormLabel>Select color of a wiggle</FormLabel>
          <Select
            value={color.value}
            onChange={(e) => handleChange(e, "color")}
          >
            {COLORS.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box p={4} borderWidth={1} borderRadius="lg" background="gray.100">
          <Text fontWeight="600" mb={2} fontSize="lg">
            Code
          </Text>
          <Box
            p={2}
            mb={5}
            background="white"
            borderWidth={1}
            borderRadius="lg"
          >
            <Flex>
              <Code colorScheme="white">
                &lt;span class="wiggle wiggle__{wiggle.value} wiggle--
                {position.value} wiggle--{color.value}"&gt;
                {phrase.length ? phrase : "dolor sit"}
                &lt;/span&gt;
              </Code>
              <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
            </Flex>
          </Box>
          <Text fontWeight="600" mb={2} fontSize="lg">
            Preview
          </Text>
          <Box
            borderWidth={1}
            borderRadius="lg"
            py={10}
            px={3}
            mb={5}
            background="white"
            overflow="hidden"
            display="flex"
            justifyContent={getPreviewPosition(position.value)}
          >
            <span
              className={`wiggle wiggle__${wiggle.value} wiggle--${position.value} wiggle--${color.value}`}
            >
              {phrase.length ? phrase : "dolor sit"}
            </span>
          </Box>
          <Box
            borderWidth={1}
            borderRadius="lg"
            py={10}
            px={3}
            background="white"
            overflow="hidden"
            display="flex"
            justifyContent={getPreviewPosition(position.value)}
          >
            <span className="preview">
              lorem ipsum{" "}
              <span
                className={`wiggle wiggle__${wiggle.value} wiggle--${position.value} wiggle--${color.value}`}
              >
                {phrase.length ? phrase : "dolor sit"}
              </span>{" "}
              amet
            </span>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

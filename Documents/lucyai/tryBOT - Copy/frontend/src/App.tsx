import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Text,
  useToast,
  Flex,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';

interface Message {
  text: string;
  isBot: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      // Add user message
      const userMessage: Message = { text: input, isBot: false };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');

      // Get bot response
      const response = await axios.post('/api/chat', { message: input });
      const botMessage: Message = { text: response.data.reply, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to get response from the bot',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center" mb={4}>
          Gemini AI Chatbot
        </Heading>
        
        <Box
          bg="gray.50"
          p={4}
          borderRadius="md"
          height="60vh"
          overflowY="auto"
          boxShadow="base"
        >
          {messages.map((message, index) => (
            <Flex
              key={index}
              justify={message.isBot ? 'flex-start' : 'flex-end'}
              mb={4}
            >
              <Box
                bg={message.isBot ? 'blue.100' : 'green.100'}
                p={3}
                borderRadius="lg"
                maxW="70%"
              >
                <Text>{message.text}</Text>
              </Box>
            </Flex>
          ))}
        </Box>

        <Flex gap={2}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button
            colorScheme="blue"
            onClick={handleSend}
            isLoading={isLoading}
            loadingText="Sending..."
          >
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
}

export default App; 
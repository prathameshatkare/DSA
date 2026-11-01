import { SarvamAIClient }from "sarvamai";

const client = new SarvamAIClient({
  apiSubscriptionKey: "",
});

const response = await client.chat.completions({
    model: "sarvam-105b",
    messages: [
        { role: "user", content: "What is the capital of India?" }
    ]
});
console.log(response.choices[0].message.content);
// → "The capital of India is New Delhi."

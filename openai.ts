import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    organization: "org-0rB2iJH6uKPU7kvWnHkCfTJM",
    apiKey: "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"
});

const openai = new OpenAIApi(config);

export default openai;
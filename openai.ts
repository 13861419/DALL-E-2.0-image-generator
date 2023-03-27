import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    organization: "org-0rB2iJH6uKPU7kvWnHkCfTJM",
    apiKey: "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"
});

const openai = new OpenAIApi(config);

export default openai;
const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "给DALL·E写一个随机文本提示来生成图像，这个提示会显示给用户，包括流派和应该是什么类型的绘画等细节，选项可以包括：油画、水彩、照片写实, 4k, abstract, modern, black and white 等。不要用引号引起来",
      max_tokens: 100,
      temperature: 0.8,
    });

    context.log(`Http函数处理的url请求 "${request.url}"`);

    const responseText = response.data.choices[0].text;

    return {
      body: responseText,
    };
  },
});

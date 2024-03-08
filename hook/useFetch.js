import OpenAI from 'openai';
import { useEffect, useState } from 'react';
//useState is asyncronous
//import API key from env
//useEffect are typically used for fetching, which are completed after rendering
const gpt_call = (type) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const openai = new OpenAI({
      apiKey: '//',
      dangerouslyAllowBrowser: true
    });

  const call = async () => {
    setIsLoading(true);
    try {
      const completion = await openai.chat.completions.create({
          messages: [
              {role: "system", content: "You are a helpful assistant"},
              {role: 'user', content: 'Recommend 5 ' + type + ' to me. only give me their names'}   
          ],
          model: "gpt-3.5-turbo"
        });
        setData(completion.choices[0].message.content);
        setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('there is an error, please try again later')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    call();
  }, [])

  const recall = () => {
    setIsLoading(true);
    call();
  }

  return {data, isLoading, error, recall}
}

export default gpt_call
import React, { useEffect } from "react";

function ExampleApi() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    setData;
  }, []);
  return (
    <View>
      <Text>ExampleApi</Text>
    </View>
  );
}

export default ExampleApi;
